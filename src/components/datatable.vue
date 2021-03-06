<template>
    <div class="${wrapperClass}">
            <table :class="tableClass" :class="{'dtr-inline': responsive}" v-el:table>
                <thead>
                    <tr>
                        <template v-for="column in columns">
                            <template v-if="column.visible">
                                <template v-if="isSpecialColumn(column.name)">
                                    <th id="${column.name}" class="${column.titleClass || ''}">
                                        ${column.title || ''}
                                    </th>
                                </template>
                                <template v-else>
                                    <th id="_${column.name}" class="${column.titleClass || ''}">
                                        ${getTitle(column) | capitalize}
                                    </th>
                                </template>
                            </template>
                        </template>
                    </tr>
                </thead>
            </table>
        </div>
</template>
<script>
    import DataTable from 'assets/js/plugins/dataTables/jquery.dataTables.js';
    export default {
        props: {
        wrapperClass: {
            type: String,
            default() {
                return null;
            }
        },

        tableClass: {
            type: String,
            default() {
                return 'table table-bordered table-striped table-hover';
            }
        },

        columns: {
            type: Array
            // required: true
        },

        url: {
            type: String
            // required: true
        },

        actions: {
            type: Array,
            default() {
                return [];
            }
        },

        serverSide: {
            type: Boolean,
            default() {
                return true;
            }
        },

        initOnStart: {
            type: Boolean,
            default() {
                return true;
            }
        },

        language: {
            type: Object,
            default: function () {
                return {
                    search: '_INPUT_',
                    searchPlaceholder: 'Search...',
                    lengthMenu: 'Per page: _MENU_',
                    paginate: {
                        previous: '&laquo;',
                        next: '&raquo;'
                    }
                };
            }
        },

        order: {
            type: Array,
            default() {
                return [];
            }
        },

        responsive: {
            default() {
                return false;
            }
        },

        options: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    data() {
        return {
            table: null,
            eventPrefix: 'vue-datatables:'
        };
    },

    events: {
        'vue-datatables:init': function() {
            this.initDataTable();
        },

        'vue-datatables:refresh': function() {
            this.table.draw();
        }
    },

    ready() {
        this.normalizeColumns();

        if (this.initOnStart) {
            this.initDataTable();
        }
    },

    methods: {
        /**
         * Initialize DataTable.
         */
        initDataTable() {
            const table = $(this.$els.table);

            const options = Object.assign({}, this.options, this.defaults());

            this.enhanceColumns(options.columns);

            this.table = table.DataTable(options);

            this.actionsEvents();

            this.$dispatch(this.eventPrefix + 'ready', table, this.table);
        },

        /**
         * Normalize the columns.
         */
        normalizeColumns() {
            this.columns.map((column) => {
                if (typeof column === 'string') {
                    column = {name: column};
                }

                if (column.title === undefined) {
                    column.title = this.title(column.name);
                }

                if (column.visible === undefined) {
                    column.visible = true;
                }

                return column;
            });
        },

        /**
         * Get default options.
         *
         * @return {Object}
         */
        defaults() {
            return {
                ajax: this.url,
                autoWidth: false,
                order: this.order,
                columns: this.columns,
                language: this.language,
                serverSide: this.serverSide,
                responsive: this.responsive
            };
        },

        /**
         * Add extra properties to the columns.
         *
         * @param {Array} columns
         */
        enhanceColumns(columns) {
            columns.forEach((column, i) => {
                if (column === '__actions') {
                    columns[i] = this.buildActions();
                }

                if (column.callback) {
                    column.render = (...args) => this.callCallback.apply(this, [column].concat(args));
                }
            });
        },

        /**
         * Call column callback method on the parent component.
         *
         * @param {Object} column
         * @param {Array}  ...args
         */
        callCallback(column, ...args) {
            if (typeof this.$parent[column.callback] === 'function') {
                return this.$parent[column.callback].apply(this.$parent, args);
            }
        },

        /**
         * Attach actions events.
         */
        actionsEvents() {
            this.actions.forEach((action) => {
                this.table.on('click', `[data-action="${action.name}"]`, (e) => {
                    e.preventDefault();

                    const index = $(e.currentTarget).data('row');
                    const row = this.table.row(index).data();

                    this.callAction(action.name, row, index);
                });
            });
        },

        /**
         * Build the actions column.
         *
         * @return {Object}
         */
        buildActions() {
            const column = {
                orderable: false,
                searchable: false,
                render: (_, __, ___, meta) => {
                    return [''].concat(this.actions).reduce((html, action) => html + this.buildAction(action, meta.row));
                }
            };

            return column;
        },

        /**
         * Build action.
         *
         * @param  {String} action
         * @param  {Number} row
         * @return {String}
         */
        buildAction(action, row) {
            if (action.callback === 'function') {
                return action.callback(row);
            }

            return `
                <button type="button" class="${action.class || ''}" title="${action.title || ''}" data-action="${action.name}" data-row="${row}">
                    <i class="${action.icon}"></i> ${action.label || ''}
                </button>
            `;
        },

        /**
         * Dispatch an action event.
         *
         * @param {String} action
         * @param {Object} row
         * @param {Number} index
         */
        callAction(action, row, index) {
            this.$dispatch(this.eventPrefix + 'action', action, row, index);
        },

        /**
         * Get column title.
         *
         * @param  {Object} column
         * @return {String}
         */
        getTitle(column) {
            if (typeof column.title === 'undefined') {
                return column.name.replace('.', ' ');
            }

            return column.title;
        },

        title(str) {
            if (this.isSpecialColumn(str)) {
                return '';
            }

            return this.titleCase(str);
        },

        titleCase(str) {
            return str.replace(/\w+/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },

        isSpecialColumn(columnName) {
            return columnName.startsWith('__');
        }
    }
    }
</script>

<style scope>
    @import '../../static/css/plugins/dataTables/dataTables.bootstrap.css';
    @import '../../static/css/plugins/dataTables/dataTables.responsive.css';
    .paginate_button {color:#f40;}
</style>
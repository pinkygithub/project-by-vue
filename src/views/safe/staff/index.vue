<template>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-4 searchform">
            <div class="search-form">
                <form action="index.html" method="get">
                    <div class="input-group">
                        <input type="text" placeholder="服务类型、服务名称" id="staffAccount" name="search" class="form-control input-sm">
                        <div class="input-group-btn">
                            <button class="btn btn-sm btn-primary" type="submit">查找</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="editform">
            <button class="btn btn-sm btn-primary editbtn" type="submit">用户管理&nbsp;<i class="fa fa-plus"></i></button>
        </div>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row ">
            <div class="ibox-content">
                <div class="table-responsive" style="overflow: hidden;">
                    <datatable :headers="headers" :columns="columns" :url="url" :actions="actions"></datatable>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const ROOT = "http://localhost:9090/stprest"; // 服务Root路径
    const listUrl = `${ROOT}/datatable/list?srvType=rmdb&srvName=staffQueryBuilderService`;

    import DataTable from "components/datatable";
    import DataTableMixin from "mixins/datatable";

    export default {
        mixins: [DataTableMixin, DataTableMixin],
        components: {
            datatable: DataTable
        },
        data() {
            return {
                url: listUrl,
                columns: [{
                        name: 'staffId',
                        title: 'ID'
                    }, {
                        name: 'staffName',
                        title: '用户名'
                    }, {
                        name: 'staffAccount',
                        title: '账号'
                    }, {
                        name: 'telphone',
                        title: '移动电话'
                    }, {
                        name: 'availBeginDate',
                        title: '有效开始时间'
                    }, {
                        name: 'availEndDate',
                        title: '有效结束时间'
                    },
                    '__actions'
                ],
                actions: [{
                    name: 'edit',
                    icon: 'glyphicon glyphicon-pencil',
                    class: 'btn btn-primary btn-xs'
                }, {
                    name: 'delete',
                    title: 'Delete',
                    icon: 'glyphicon glyphicon-trash',
                    class: 'btn btn-danger btn-xs'
                }]
            }
        },
        ready: function() {

        },
        methods: {
            editAction(row, index) {
                console.log('edit', row, index);
            },

            deleteAction(row, index) {
                this.refreshDataTable();
                // this.$broadcast('vue-datatable:refresh');
            }
        }
    }

    export function goto() {
        console.log("edit")
    }
</script>
<style scoped>
    .wrapper-content {
        padding: 20px 5px 40px;
    }
    
    .page-heading {
        padding-top: 10px;
    }
    
    .row {
        font-family: "微软雅黑";
    }
    
    .searchform {
        padding-left: 10px;
    }
    .editform{float:right;margin:10px 20px 0px 0px;}
</style>
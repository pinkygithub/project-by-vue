<template>
    <li class="">
        <!--<a v-link="{name:'${name}'}">-->
        <a>
            <i class="${icon}"></i>
            <span class="nav-label">${name}</span>
        </a>
        <menuul v-if="hasChildren" :items="${children}"></menuul>
    </li>
</template>
<script>
    import menuul from './menu_ul.vue';
    export default {
        props: {
            icon: String,
            name: String,
            url: String,
            children: Array
        },
        computed: {
            hasChildren: function() {
                return this.children && this.children.length;
            }
        },
        components: {
            menuul
        }
    }
</script>
<style type="text/css" scoped>

</style>
<template>
    <ul class="nav nav-second-level">
        <li v-for="item in items">
            <!--<a v-link="{name:'item.rightNamex'}">-->
            <a>
                ${item.rightNamex}
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            items: Array,
        }
    }
</script>
<style scoped>

</style>
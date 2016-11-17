<template>
	<nav class="navbar-default navbar-static-side" role="navigation">
		<div class="logo">XXX LOGO</div>
		<div class="sidebar-collapse">
			<menu :menudata="menudata"></menu>
		</div>
	</nav>
</template>

<script>
    import menu from '../../components/menu.vue'
    export default {
        props: ['menudata'],
        components: {
            menu
        },
        created: function() {
        }
    }
</script>

<style scoped>

</style>
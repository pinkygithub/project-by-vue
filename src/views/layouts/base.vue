<template>
	<div id="wrapper">
		<!--侧滑菜单部分-->
		<left :menudata="menudata"></left>
	</div>
	<div id="page-wrapper" class="gray-bg dashbard-1">
		<!--顶部栏部分-->
		<top :username="username"></top>
		<!--主界面部分-->
		<router-view></router-view>
		<!--底部栏部分-->
		<bottom></bottom>
	</div>
</template>
<script>
    //js
    import '../../../static/js/bootstrap.min';
    import '../../../static/js/plugins/metisMenu/jquery.metisMenu.js';
    import '../../../static/js/plugins/slimscroll/jquery.slimscroll.min.js';
    import '../../../static/js/inspinia.js';
    // partial
    import auth from '../../libs/auth';
    import Top from '../partials/top';
    import Left from '../partials/left';
    import Bottom from '../partials/bottom';

    export default {
        data() {
            return {
                username: '',
                menudata: []
                    // menuData: [],
                    // name: 'rightName',
                    // isparent: true
            }
        },
        ready: function() {
            let vm = this;
            let local_user = auth.user != null ? auth.user : JSON.parse(auth.getUser());
            if (local_user) {
                //console.log(JSON.stringify(local_user));
                vm.username = local_user.staffName;
                vm.menudata = local_user.memus
            } else {
                vm.$route.router.go('/login');
            }
        },
        methods: {

        },
        components: {
            left: Left,
            top: Top,
            bottom: Bottom
        }
    }
</script>
<style scoped>
    @import '../../../static/css/bootstrap.min.css';
    @import '../../../static/font-awesome/css/font-awesome.css';
    @import '../../../static/css/animate.css';
    @import '../../../static/css/style.css';
    @import '../../../static/css/stp.css';
</style>
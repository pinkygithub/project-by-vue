<template>
	<div class="row border-bottom">
		<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
			<div class="navbar-header">
				<button type="button" class="navbar-minimalize minimalize-styl-2 btn btn-primary" @click="toggleCanvasMenu">
                    <i class="fa fa-bars"></i>
                </button>
			</div>
			<ul class="nav navbar-top-links navbar-right">
				<li>
					<a class="dropdown-toggle count-info" data-toggle="dropdown" href="javascript:;">
						<i class="fa fa-question-circle"></i><span>帮助</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="fa fa-user"></i><span>${username}</span>
					</a>
				</li>
				<li>
					<a href="javascript:;" @click.prevent="logout">
						<i class="fa fa-sign-out"></i>退出
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
    import LogoutMixin from '../../mixins/logout';

    export default {
        props: ['username'],
        mixins: [LogoutMixin],
        data() {
            return {
                title: '欢迎使用 XXX 平台'
            }
        },
        methods: {
            toggleCanvasMenu: function() {
                window.document.body.classList.toggle('mini-navbar');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
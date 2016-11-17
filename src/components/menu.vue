<template>
	<ul class="nav" >
        <!-- :class="{'active':index==0}"    -->
        <!-- v-bind:class="{ 'active' : isA, 'noneact': !isA}" -->
		<li v-for="(index, item) in menudata" @click="isA=$index" :class="{active:isA==$index}" > 
			<a>
				<i class="${item.icon}"></i>
				<span class="nav-label">${item.rightName}</span>
				<span v-if="item.children.length>0" class="fa arrow"></span>
			</a>
            <!-- :class="{'collapse in':index==0,'collapse':index!=0}"-->
			<ul v-if="item.children.length >0" class="nav nav-second-level collapse">
				<li v-for="child in item.children">                 
					<a @click="goto(child.url)">
                        ${child.rightName}
                    </a>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
    export default {
        data:function(){
            return{
                isA: ''
            };
        },
        props: ['menudata'],
        ready: function() {
            //let $this = $(this.$el);
            //$this.find("li.active").has("ul").children("ul").addClass("collapse in");
            //$this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
        },
        methods: {
            goto:function(url){
                this.$route.router.go({name: url});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav>li>a.v-link-active {
        color: #fff;
    }

    body.mini-navbar .nav-header {
        background: none;
    }
    body.mini-navbar .navbar-default .nav>li>.nav-second-level li a{width:122px;}
    .active ul{display:block;}
</style>
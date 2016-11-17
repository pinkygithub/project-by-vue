<template>
    <div class="graybg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div class="logo">LOGO</div>
            <validator name="validation">
                <form class="m-t" role="form" action="index.html" novalidate>
                    <div class="form-group">
                        <input id="username" type="text" v-model="credentials.j_username" class="form-control" placeholder="邮箱/用户名" initial="off" v-validate:username="{required: { rule: true, message: '用户名不能为空' }}" />
                    </div>
                    <div class="form-group">
                        <input id="password" type="password" class="form-control" placeholder="密码"
                        v-model="credentials.j_password" initial="off"
                        v-validate:password="{
                          required: { rule: true, message: '密码不能为空' }
                        }"/>　
                    </div>
                    <div class="errors" v-if="$validation.touched">
                        <!-- <validator-errors :validation="$validation"></validator-errors> -->
                        <ul>
                          <li v-for="error in $validation.errors">
                            <p>${error.message}</p>
                          </li>
                        </ul>
                    </div>
                    <!--<div class="form-group">
                        <checkbox :checked.sync="checkboxValue.one" value="one">记住密码</checkbox>
                    </div>-->
                    <input type="button" id="login-bar" class="btn btn-primary block full-width m-b" @click="login" value ='登录' :disabled="!$validation.valid">
                    <a class="forgotPsw" v-link="{ name: 'forgotpassword' }">忘记密码?</a>
                    <a class="btn btn-sm btn-white btn-block" v-link="{ name: 'register' }">还没有账号，立即注册?</a>
                </form>
            </validator>
        </div>
    </div>
    </div>
</template>
<script>
    import Auth from '../libs/auth';
    //import {checkbox} from 'vuestrap';
    export default {
        components: {
            //checkbox
        },
        data() {
            return {
                checkboxValue: {
                    one: null
                },
                credentials: {
                    j_username: '',
                    j_password: ''
                }
            }
        },
        validators: {

        },
        ready:function(){
            //记住密码
            //let username = Auth.getUsername();
            //if(username){
             //   j_username = username;
            //}
        },
        methods: {
            login: function() {
                let vm = this;
                Auth.login(vm, vm.credentials).then(function() {
                    vm.$route.router.go('/entrance');
                    vm.$toast['success']('登陆成功');
                }, function(error) {
                    vm.$toast['success'](error.msg);
                });
            }
        }
    }
</script>
<style scoped>
    .graybg {
        width: 100%;
        height: 100%;
        background: #eee;
        padding-top: 100px;
    }

    .loginscreen {
        font-family: "微软雅黑";
        margin: 0px auto 0px;
        padding: 30px 50px;
    }

    .loginscreen.middle-box {
        width: 400px;
    }

    .logo {
        font-size: 30px;
        color: #666;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    .errors{color:#ad0202;}
    label.checkbox{padding-left:0px!important;}
    ul,ul>li,ul>li>p{list-style: none;padding:0px;}
</style>
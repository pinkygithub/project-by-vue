<template>
	<div class="graybg">
		<div class="middle-box text-center loginscreen animated fadeInDown">
			<div>
				<div class="logo">XXX LOGO</div>
				<p>注册一个新账户</p>
				<validator name="validation" :groups="['email', 'password']">
					<form class="m-t" role="form" novalidate>
						<div class="form-group">
							<input type="text" id="email" class="form-control" 
                            placeholder="邮箱" group="email" 
                            v-model="creds.email" detect-change="off" v-validate:username="{required: { rule: true, message: '' },email: { rule: email, message: '请填写正确的邮箱地址！' },exist: { rule: true, initial: 'off' }}">
						</div>
						<div class="form-group">
							<input id="password" type="text" class="form-control" placeholder="密码" initial="off" group="password" v-model="creds.password"
								v-validate:password="{
                          required: { rule: true, message: '' },
                          minlength: { rule: 5, message: '密码长度不能低于5位 !' }
                     }">
						</div>
						<div class="form-group">
							<input id="confirm" type="text" class="form-control" placeholder="确认密码" initial="off" group="password" v-validate:confirm="{
                      required: { rule: true },
                      confirm: { rule: creds.password, message: '两次输入密码不一致 !' }
                    }" />
						</div>
						<div class="errors" v-if="$validation.touched">
							<!-- <validator-errors :validation="$validation"></validator-errors> -->
							<ul>
								<li v-for="error in $validation.errors">
									<p>${error.message}</p>
								</li>
							</ul>
						</div>
						<p id="tips"></p>
						<!--<div class="form-group">
                    <checkbox :checked.sync="checkboxValue.one" value="one">同意以上条例</checkbox>
                </div>-->
						<button type="submit" class="btn btn-primary block full-width m-b regbtn" @click="register" :disabled="!$validation.valid">注册</button>
						<a class="btn btn-sm btn-white btn-block" v-link="{ name: 'login' }">已有账户?登录</a>
						<!--<span v-if="checking">checking ...</span>-->
					</form>
				</validator>
</template>
<script>
    import Auth from '../libs/auth'
    //import Jq from '../../static/js/jquery-1.11.1.min.js'
    import {checkbox} from 'vuestrap';
    function copyOwnFrom(target, source) {
        Object.getOwnPropertyNames(source).forEach(function(propName) {
            Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName))
        })
        return target
    }

    function ValidationError() {
        copyOwnFrom(this, Error.apply(null, arguments))
    }
    ValidationError.prototype = Object.create(Error.prototype)
    ValidationError.prototype.constructor = ValidationError
    export default {
        components: {
            checkbox
        },
        data() {
            return {
                creds: {
                    email: '',
                    password: ''
                }
            }
        },
        validators: {
            confirm: function(val, target) {
                return val === target
            },
            email: function(val /*,rule*/ ) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
            },
            exist: function(val) {
                return Auth.checkUsername(this.vm, val);
            }
        },
        ready: function() {

        },
        methods: {
            register: function() {
                let vm = this;
                console.log(JSON.stringify(vm.creds))
                Auth.register(vm,vm.creds).then(function() {
                    vm.$route.router.go('/entrance');
                    vm.$toast['success']('注册成功');
                }, function(error) {
                    vm.$toast['error'](error.msg);
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
    
    .regbtn {
        background-color: #1ab394;
        border-color: 0 none!important;
    }
    
    .regbtn:hover {
        background-color: #18a689;
    }
    
    .touched-validator {
        background-color: #fff;
    }
    
    .dirty-validator {
        background-color: pink;
    }
    
    #tips,
    .errors {
        color: #ad0202;
    }
    
    ul,
    ul>li,
    ul>li>p {
        list-style: none;
        padding: 0px;
    }
</style>
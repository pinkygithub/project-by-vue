<template>
    <div class="graybg">
    <div class="passwordBox animated fadeInDown">
        <div class="row">
            <div class="col-md-12">
                <div class="ibox-content">
                    <h2>重置密码</h2>
                    <div class="row">
                        <div class="col-lg-12">
                            <validator name="validation">
                                <form class="m-t" role="form" action="index.html">
                                    <div class="form-group">
                                        <input id="password" type="text" class="form-control" placeholder="密码" initial="off" group="password" v-model="password"
                                            v-validate:password="{
                                                required: { rule: true, message: '' },
                                                minlength: { rule: 5, message: '密码长度不能低于5位 !' }
                                            }">
                                    </div>
                                    <div class="form-group">
                                        <input id="confirm" type="text" class="form-control" placeholder="确认密码" initial="off" group="password" 
                                            v-validate:confirm="{
                                                required: { rule: true },
                                                confirm: { rule:password, message: '两次输入密码不一致 !' }
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
                                    <button type="submit" class="btn btn-primary block full-width m-b">提交</button>
                                </form>
                            </validator>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    </div>
</template>
<script>
    import Auth from '../libs/auth';
    export default {
        data() {
            return {
                password: ''
            }
        },
        validators: {
            confirm: function(val, target) {
                return val === target
            }
        },        
    }
</script>
<style scoped>
    .graybg {
        width: 100%;
        height: 100%;
        background: #eee;
        padding-top: 100px;
    }
    .ibox-content{font-family:"微软雅黑";}
    .errors{color:#ad0202;}
    label.checkbox{padding-left:0px!important;}
    ul,ul>li,ul>li>p{list-style: none;padding:0px;text-align:center;}
</style>
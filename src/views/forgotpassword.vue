<template>
    <div class="graybg">
    <div class="passwordBox animated fadeInDown">
        <div class="row">
            <div class="col-md-12">
                <div class="ibox-content">
                    <h2>忘记密码</h2>
                    <div class="row">
                        <div class="col-lg-12">
                            <form class="m-t" role="form" action="index.html">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="请输入邮箱地址" required="">
                                </div>
                                <button type="submit" class="btn btn-primary block full-width m-b"  v-link="{ name: 'resetpassword' }">立即验证</button>
                            </form>
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
</style>
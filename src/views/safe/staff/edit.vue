<template>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>编辑用户</h5>
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                                <div class="form-group"><label class="col-sm-2 control-label">*用户账号</label>
                                    <div class="col-sm-10"><input type="text" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">*用户昵称</label>
                                    <div class="col-sm-10"><input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">*邮箱</label>
                                    <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">生日</label>
                                    <div class="col-sm-10"><input type="text" placeholder="" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">固定电话</label>
                                    <div class="col-sm-10"><input type="text" placeholder="" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">移动电话</label>
                                    <div class="col-sm-10"><input type="text" placeholder="" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">传真</label>
                                    <div class="col-sm-10"><input type="text" placeholder="" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="form-group"><label class="col-sm-2 control-label">有效期</label>
                                    <div class="col-sm-10"><input type="text" placeholder="" class="form-control"></div>
                                </div>
                                <div class="hr-line-dashed"></div>
                                <div class="btngroup">
                                  <button class="btn btn-sm btn-primary editbtn" type="submit" v-link="{ name: 'safe' }">取消</button>
                                  <button class="btn btn-sm btn-primary editbtn" type="submit">提交</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>


</template>
<script>
    export default {

    }
</script>
<style scoped>
.wrapper-content{padding:20px 5px 40px;}
.page-heading{padding-top:10px;}
.row{font-family: "微软雅黑";}
.searchform{padding-left:10px;}
.editform{float: right;overflow:hidden;}
.editform>.editway{float: left;margin-top:16px;}
.editform>.editway i{margin:0 3px;cursor:pointer;font-size:18px;}
.editform>.editbtn{float: left;margin:10px 24px 0px 20px;}
.peruser{padding:10px 0px;}
.peruser a>.col-sm-4{margin-top:8px;}
.peruser a>.col-sm-8{padding-left:0px;}
.peruser a>.col-sm-8>p{color:#888;}
.peruser a>.col-sm-8>p>i{font-style:normal;color:#333;}
.btngroup{margin-left:180px;}
.btngroup button{margin-right:40px;padding:5px 14px;}
</style>


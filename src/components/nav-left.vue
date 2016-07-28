<template>
    <div class="hw_sidebar pull-left">
        <div id="firstpane" class="menu_list">
            <h3 class="menu_head current"><span class="job_tit"></span>职位管理</h3>
            <div style="display:block" class="menu_body">
                <a href="javascript:;" @click="fn(1)">所有职位</a>
                <a href="javascript:;" class="current_a" @click="fn(2)">发布新职位</a>
            </div>
            <h3 class="menu_head"><span class="company_tit"></span>企业宣传</h3>
            <div style="display:none" class="menu_body">
                <a href="#">宣传模板</a>
                <a href="#">参加活动</a>
            </div>
            <h3 class="menu_head"><span class="account_tit"></span>账户管理</h3>
            <div style="display:none" class="menu_body">
                <a href="#">企业信息管理</a>
                <a href="#">修改密码</a>
            </div>
        </div>
    </div>
</template>
<style>
    /*企业端通用侧边栏*/
    .hw_sidebar{
        background: #f3f3f3;
        min-height: 500px;;
    }
    .menu_list{
        width:200px;
        margin:0 auto;
    }
    .menu_head{
        height: 64px;
        line-height: 64px;
        padding-left: 22px;
        font-size: 16px;
        color: #666;
        cursor: pointer;
        border-bottom: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;
        position: relative;
        margin: 0px;
        font-weight: normal;
        /*background: #f3f3f3 url("../../image/common/pro_left.png") no-repeat center center;*/
        background: #f3f3f3 url("../../image/common/pro_down.png") no-repeat 164px center;
    }
    .menu_list .current{
        background:#fff url("../../image/common/pro_down.png") no-repeat 164px center;
        border:none;
    }
    .menu_head span{
        display: inline-block;
        margin-right:15px;
        padding-top: 10px;
        vertical-align: middle;
        background:url("../../image/common/icons.png")  no-repeat;
    }
    .job_tit{
        height:17px;
        width:19px;
        background-position:0 0 !important;
    }
    .company_tit{
        height:19px;
        width:19px;
        background-position:0 -17px !important;
    }
    .account_tit{
        height:19px;
        width:21px;
        background-position:0 -36px !important;
    }
    .menu_body{
        line-height: 38px;
        backguound: #fff;
    }
    .menu_body a{
        display:block;
        padding-left:55px;
        height: 14px;
        line-height: 14px;
        padding-bottom: 34px;
        color:#666;
        background:#fff;
        text-decoration:none;
        font-size: 14px;
    }
    .menu_body .current_a{
        color: #f39800;
    }
    .menu_body a:last-child{
        border-bottom: 1px solid #e1e1e1;
    }
    .menu_body a:hover{
        text-decoration:none;
    }
</style>
<script>
    export default{
        methods:{
            fn:function(num){
               if(num == 1){
                   this.$root.currentView = "all-jobs";
               }else if(num == 2){
                   this.$root.currentView = "new-jobs";
               }
            }
        }
    }
    $(document).ready(function(){
        $("#firstpane .menu_body:eq(0)").show();
        $("#firstpane h3.menu_head").click(function(){
            $(this).addClass("current").next("div.menu_body").slideToggle().siblings("div.menu_body").slideUp();
            $(this).siblings().removeClass("current");
        });
        $("#secondpane .menu_body:eq(0)").show();
        $("#secondpane h3.menu_head").mouseover(function(){
            $(this).addClass("current").next("div.menu_body").slideDown().siblings("div.menu_body").slideUp();
            $(this).siblings().removeClass("current");
        });
        $("#firstpane .menu_body a").click(function(){
            $("#firstpane .menu_body a").removeClass("current_a");
            $(this).addClass("current_a");
        });
    });
</script>
<template>
    <div class="hw_header">
        <div class="hw_top clearfix">
            <div class="login_msg pull-left">
                <!--<div class="not_login"><a href="javascript:;">登录</a><span class="line">|</span><a href="javascript:;">注册</a></div>-->
                 <div class="logged"><span class="login_name">李向前</span>，欢迎您！</div>
            </div>
            <div class="hw_link pull-right">
                <a href="javascript:;">海威时代首页</a><span class="line">|</span>
                <a href="javascript:;">意见反馈</a><span class="line">|</span>
                <a href="javascript:;">帮助</a><span class="line">|</span>
                <a href="javascript:;">消息</a><span class="line">|</span>
                <a href="javascript:;">退出</a>
            </div>
        </div>
        <div class="hw_nav_warp clearfix">
            <div class="hw_logo pull-left">
                <!--<a href="javascript:;"><img :src="imgSrc" alt="海威时代logo"></a>-->
                <a href="javascript:;"><img src="../../image/common/hw_logo.png" alt="海威时代logo"></a>
            </div>
            <div class="hw_nav pull-right">
                <a href="javascript:;">首页</a>
                <a href="javascript:;" class="active">职位管理</a>
                <a href="javascript:;">企业宣传</a>
                <a href="javascript:;">账户管理</a>
            </div>
        </div>
    </div>
</template>
<style>
    /*企业端通用头部*/
    .hw_header{
        min-width: 1024px;
    }
    .hw_header a{
        text-decoration: none;}
    .hw_top, .hw_nav_warp{
        padding: 0 22px; }
    .hw_header .hw_top {
        height: 40px;
        line-height: 40px;
        background: #2a2f36;
        color: #b0b0b0; }
    .hw_header .hw_top a {
        color: #b0b0b0; }
    .hw_header .hw_top .line {
        padding: 0 10px; }
    .hw_header .hw_nav_warp {
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #e6e6e6;
        box-shadow: 0px 2px 5px rgba(162, 158, 159, 0.15); }
    .hw_header .hw_nav_warp a {
        display: block; }
    .hw_header .hw_nav_warp .hw_nav {
        margin-right: 28px; }
    .hw_header .hw_nav_warp .hw_nav a {
        padding-left: 28px;
        float: left;
        color: #5e5e5e; }
    .hw_header .hw_nav_warp .hw_nav .active {
        color: #f39800; }
</style>
<script>
    export default{
        data(){
            return{
//                imgSrc:"../../image/common/hw_logo.png"
            }
        }
    }

</script>

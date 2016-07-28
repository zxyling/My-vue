<template>
    <div class="allJob">所有职位</div>
</template>
<style>
    .allJob{
        width: 100%;
        height: 200px;
        background: url("../../image/common/001.png");
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        activate(done){
            //用于动态切换组件时候进行数据渲染
            done();
        }
    }
</script>
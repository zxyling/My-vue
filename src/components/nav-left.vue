<template>
   <div class="nav-left" :click="fn">
       {{msg}}
   </div>
</template>
<style>
    .nav-left{
        width: 100px;
        float:left;
        background: blue;
        height: 500px;
    }
</style>
<script>
    export default{
        props:{
            msg:String
        },
        methods:{
            fn:function(){
                alert(1);
            }
        }
    }
</script>
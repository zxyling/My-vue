<template>
    <div class="box">
        {{message}}
    </div>
</template>
<style>
    .box{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        props:{
            message:String
        }
    }
</script>

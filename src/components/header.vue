<template>
    <div class="header">
        <img  :src="msg" alt="">
    </div>
</template>
<style>
    .header{
        height: 30px;
        background: url("../../image/common/001.png");
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'../../image/common/001.png'
            }
        }
    }

</script>

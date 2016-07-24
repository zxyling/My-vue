<template>
    <div class="header">
        {{msg}}
    </div>
</template>
<style>
    .header{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

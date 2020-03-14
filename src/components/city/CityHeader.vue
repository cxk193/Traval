<template>
    <div class="city-header">
        <div class="back">
            <router-link to="/home">
                <span class="iconfont">&#xe606;</span>
            </router-link>
        </div>
        <div class="center">
            城市
        </div>
    </div>
</template>
<script>
    export default {
        name:'City',
        props:{
            hotCity:Object
        }
    }
</script>
<style lang="less" scoped>
    .city-header{
        position: relative;
        overflow: hidden;
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        background-color: #1FD5C8;
        color: #fff;
        font-size: .32rem;
        .back{
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            height: .86rem;
            color: #fff;
        }
    }
</style>
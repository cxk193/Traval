<template>
    <div class="city-search">
       <input type="text" class="search-input" placeholder="输入其他城市拼音"/>
    </div>
</template>
<script>
    export default {
        name:'citySearch'
    }
</script>
<style lang="less" scoped>
    .city-search{
        height: .72rem;
        padding: 0 .1rem;
        text-align: center;
        background-color: #1FD5C8;
        .search-input{
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
        }
    }
</style>
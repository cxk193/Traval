<template>
    <div class="flooter">
        <p>从客户端过渡到移动端需要刷新一下</p>
        <p>不然轮播图会出现拖动不了</p>
    </div>
</template>
<script>
    export default {
        name:'Flooter'
    }
</script>
<style lang="less" scoped>
    .flooter{
        width: 100%;
        margin-bottom: .98rem;
        p{
            text-align: center;
            font-size: .24rem;
        }
    }
</style>
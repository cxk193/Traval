<template>
    <div class="detial-content">
        <div v-for="(item,index) of list" :key="index">
            <div class="item" >
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-second">
                <DetialContent :list="item.children"></DetialContent>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'DetialContent',
        props:{
            list:Array
        }
    }
</script>
<style lang="less" scoped>
    .detial-content{
        width: 100%;
        .item{
            line-height: .8rem;
            font-size: .32rem;
            margin-left: .2rem;
        }
        .item-second{
            margin-left: .4rem;
            font-size: .32rem;
        }
    }

</style>
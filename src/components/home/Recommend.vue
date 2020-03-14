<template>
    <div class="conter-list">

        <h1 class="recommend-tit">
            热销推荐
        </h1>

        <div class="item" v-for="(item,index) in list">
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-info">
                <p class="item-tit text-ellipsis">{{item.tit}}</p>
                <p class="item-desc text-ellipsis">{{item.content}}</p>
                <button class="btn">{{item.money}}</button>
            </div>
        </div>

    </div>

</template>
<script>
    export default {
        name:'Recommend',
        data() {
            return {
                list:[
                    {
                        imgUrl:require('assets/images/list/1.jpg'),
                        tit:'曲靖-三亚',
                        content:'含往返飞机票(含税)+3晚住宿',
                        money:'￥ 3150'
                    },
                    {
                        imgUrl:require('assets/images/list/2.jpg'),
                        tit:'曲靖-成都',
                        content:'含往返飞机票+4晚住宿',
                        money:'￥ 2070'
                    },
                    {
                        imgUrl:require('assets/images/list/3.jpg'),
                        tit:'曲靖-张家界',
                        content:'含往返飞机票(含税)+3晚住宿',
                        money:'￥ 2110'
                    },
                    {
                        imgUrl:require('assets/images/list/4.jpg'),
                        tit:'曲靖-西双版纳',
                        content:'含往返飞机票(含税)+3晚住宿',
                        money:'￥ 660'
                    },
                    {
                        imgUrl:require('assets/images/list/5.jpg'),
                        tit:'曲靖-西安',
                        content:'含往返飞机票(含税)+3晚住宿',
                        money:'￥ 2418'
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .recommend-tit{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        background-color: #ccc;
        color: #333;
        margin-top: .1rem;
        text-indent: .2rem;
    }
    .item{
        display: flex;
        height: 1.9rem;
        margin-top: .1rem;
        .item-img{
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .item-info{
            flex: 1;
            padding: .1rem;
            //解决超出文字小点显示的bug
            min-width: 0;
            .item-tit{
                line-height: .54rem;
                font-size: .32rem;
            }
            .item-desc{
                line-height: .4rem;
                color: #ccc;
                margin-bottom: .1rem;
            }
            .btn{
                background-color: #ff930047;
                padding: .1rem;
                border-radius: .06rem;
                color: #FF7418;
            }
        }
    }
</style>
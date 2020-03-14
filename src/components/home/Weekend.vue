<template>
    <div class="weekend">
        <h1 class="title">
            <span class="tit-left">
                <img src="~assets/images/icon/book.png" alt="">
                旅游攻略
            </span>
            <span class="tit-right iconfont">更多精彩攻略&#xe6aa;</span>
        </h1>
        <h1 class="btn-title">
            <button class="btn-left">趣味亲子游</button>
            <button class="btn-right">旅游也要拍出大片</button>
        </h1>
        <div class="item clearfix">
            <div class="pic" v-for="(item,index) in list" :key="index">
                <img :src="item.imgUrl" />
                <p>{{item.tit}}</p>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name:'Weekend',
        data() {
            return {
                list:[
                    {
                        imgUrl:require('assets/images/travel/travel1.jpg'),
                        tit:'驾一叶扁舟，寻瓯江往事'
                    },
                    {
                        imgUrl:require('assets/images/travel/travel2.jpg'),
                        tit:'不负嵊夏好时光，泗乎太安逸'
                    },
                    {
                        imgUrl:require('assets/images/travel/travel3.jpg'),
                        tit:'探访日本，一部家庭旅行画册'
                    },
                    {
                        imgUrl:require('assets/images/travel/travel4.jpg'),
                        tit:'厦门，带娃出行幸福与你同行'
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .weekend{
        overflow: hidden;
        margin-top: .2rem;
        margin-bottom: 1rem;
       .title{
           height: .6rem;
           line-height: .6rem;
           .tit-left{
               float: left;
               font-size: .36rem;
               font-weight: bold;
               padding-left: .2rem;
           }
           .tit-right{
               float: right;
               font-size: .24rem;
               color: #757575;
               padding-right: .3rem;
           }
       }
        .btn-title{
            overflow: hidden;
            margin-top: .2rem;
            margin-bottom: .3rem;

            .btn-left,.btn-right{
                margin-left: .2rem;
                height: .7rem;
                line-height: .7rem;
            }
            .btn-left{
                width: 1.8rem;
                font-size: .3rem;
                background-color: #17c0c8;
                color: #fff;
            }
            .btn-right{
                width: 2.4rem;
                color: #666;
                border: .01rem solid #d7d7d7;
                background-color: #fff;
            }
        }
        .item{
            box-sizing: border-box;
            width: 100%;
            height: auto;
            margin: 0 .1rem;
            .pic{
                float: left;
                width: 45%;
                margin: .2rem 0 0 .2rem;
                img{
                    width: 100%;
                    height: auto;
                    border-radius: .1rem;
                }
            }
        }
    }

</style>
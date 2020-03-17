<template>
    <div class="icon">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide
                class="swiper-siled"
                v-for="(page,index) of pages" :key="index"
                :options    ="swiperOption"
            >
            <div class="icons" v-for="(item,index) in page" :key="index">
                <div class="icon-img">
                    <img :src="item.ur" alt="">
                </div>
                <span class="icon-cont text-ellipsis">{{item.tit}}</span>
            </div>
            </swiper-slide>
        </swiper>


    </div>
</template>

<script>
    export default {
        name:'Icon',
        data(){
            return {
                list:[
                    {tit:'酒店12874894539045890',ur:require('assets/images/icon/hotel.png')},
                    {tit:'机票',ur:require('assets/images/icon/flight.png')},
                    {tit:'度假',ur:require('assets/images/icon/package.png')},
                    {tit:'火车票',ur:require('assets/images/icon/train.png')},
                    {tit:'酒店',ur:require('assets/images/icon/hotel.png')},
                    {tit:'机票',ur:require('assets/images/icon/flight.png')},
                    {tit:'度假',ur:require('assets/images/icon/package.png')},
                    {tit:'火车票',ur:require('assets/images/icon/train.png')},
                    {tit:'火车票',ur:require('assets/images/icon/train.png')}
                ],
                swiperOption:{
                    observer:true,
                    observeParents:true,
                    autoplay:false,
                    loop:false
                }
            }
        },
        computed: {
            pages() {
                const pages = []
                this.list.forEach((item,index) =>{
                    //满8进1
                    const page = Math.floor(index/8)
                    //page等于1时push一个空数组
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="less" scoped>
    .icon{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        margin-top: .1rem;
        .icons{
            position: relative;
            width: 25%;
            padding-bottom: 25%;
            float:left;
            .icon-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                border-bottom: .44rem;
                box-sizing: border-box;
                margin: 0 auto;
                img{
                    display: block;
                    width: 1.2rem;
                    height: 1.2rem;
                    margin: 0 auto;
                }
            }
            .icon-cont{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                height: .44rem;
                line-height: .44rem;
            }
        }
    }
</style>
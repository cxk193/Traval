<template>
    <div class="container" @click="">

        <div class="wrapper">
            <swiper :options="swiperOption" ref="mySwiper" >

                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img :src="item" />
                </swiper-slide>

            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'CommonGallay',
        data(){
            return {
                swiperOption:{
                    autoplay:false,
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    observeParents:true,
                    observer:true
                }
            }
        },
        props:{
            imgs:{
                type:Array,
                default(){
                    return [
                        require('assets/images/swiper/1.jpg')
                    ]
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:100;
        background-color: #000;
        .wrapper{
            width: 100vw;
            img{
                width: 100%;
            }
            .swiper-pagination{
                bottom: 2rem;
                color: #fff;
            }
        }
    }
</style>
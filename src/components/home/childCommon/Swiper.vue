
<template>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide
                v-for="(item,index) in slide"
                :key="index"
            >
                <img :src="item.ur" />
            </swiper-slide>
        </swiper>

</template>

<script>
    export default {
        name: 'carrousel',
        data() {
            return {
                slide:[
                    {ur:require('assets/images/swiper/1.jpg')},
                    {ur:require('assets/images/swiper/2.jpg')},
                    {ur:require('assets/images/swiper/3.jpg')},
                    {ur:require('assets/images/swiper/4.jpg')}
                ],
                swiperOption: {
                    autoplay: 3000,
                    autoplayDisableOnInteraction : false,
                    loop:true,
                    //监听到父元素宽度发生改变时自动刷新一次
                    observeParents:true,
                    observer:true
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style lang="less" scoped>
        .swiper-container {
            width: 100%;
            margin-top: .86rem;
            height: 3rem;

            img{
                width: 100%;
                height: 100%;
            }
        }
</style>
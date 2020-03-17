<template>
    <div class="banner" @click="showGallay">
        <img src="~assets/images/swiper/1.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">
                大连圣亚海洋世界
            </div>
            <div class="banner-number">
                <span class="iconfont">&#xe606;</span>
                123
            </div>
        </div>
        <FadeAnimation>
            <common-gallay :imgs="imgs" v-if="showimgs"></common-gallay>

        </FadeAnimation>
    </div>
</template>
<script>
    import CommonGallay from '../../../common/gallay/Gallay'
    import FadeAnimation from "../../../common/fade/FadeAnimation";
    export default {
        name:'DetialBanner',
        data(){
          return {
              showimgs:false,
              imgs:[
                  require('assets/images/swiper/1.jpg'),
                  require('assets/images/swiper/2.jpg')
              ]
          }
        },
        components:{
            CommonGallay,
            FadeAnimation
        },
        methods:{
            showGallay(){
                this.showimgs = !this.showimgs
            }
        }
    }
</script>
<style lang="less" scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        .banner-img{
            width: 100%;
        }
        .banner-info{
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
            .banner-title{
                flex: 1;
                color: #fff;
            }
            .banner-number{
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 0 .4rem;
                height: .32rem;
                line-height: .32rem;
                border-radius: .2rem;
                background-color: rgba(0,0,0,.8);
                font-size: .24rem;
            }
        }
    }
</style>
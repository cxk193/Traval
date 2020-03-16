<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
        <home-flooter></home-flooter>
    </div>
</template>
<script>
    import HomeHeader from "./childCommon/Header"
    import HomeSwiper from "./childCommon/Swiper"
    import HomeIcon from "./childCommon/Icon"
    import HomeRecommend from "./childCommon/Recommend"
    import HomeWeekend from './childCommon/Weekend'
    import HomeFlooter from './childCommon/Flooter'

    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeRecommend,
            HomeWeekend,
            HomeFlooter
        }
    }
</script>
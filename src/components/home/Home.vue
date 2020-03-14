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
    import HomeHeader from "./Header"
    import HomeSwiper from "./Swiper"
    import HomeIcon from "./Icon"
    import HomeRecommend from "./Recommend"
    import HomeWeekend from './Weekend'
    import HomeFlooter from './Flooter'

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
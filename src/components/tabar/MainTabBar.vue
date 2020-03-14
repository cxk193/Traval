<template>
    <div class="main-tab-bat">
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="icon" src="~assets/images/icon/hotel.png" alt="">
                <img slot="icon-c" src="~assets/images/icon/package.png" alt="">
                <div slot="text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/gotop" @click="backTop">
                <img slot="icon" src="~assets/images/icon/hotel.png" alt="">
                <img slot="icon-c" src="~assets/images/icon/package.png" alt="">
                <div slot="text">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/piao">
                <img slot="icon" src="~assets/images/icon/hotel.png" alt="">
                <img slot="icon-c" src="~assets/images/icon/package.png" alt="">
                <div slot="text">购票</div>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <img slot="icon" src="~assets/images/icon/hotel.png" alt="">
                <img slot="icon-c" src="~assets/images/icon/package.png" alt="">
                <div slot="text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
    import TabBar from "./TabBar";
    import TabBarItem from './TabBarItem'
    export default {
        name:'MainTabBar',
        data(){
            return {
                scrollTop:'',
                goTop:false
            }
        },
        components:{
            TabBar,
            TabBarItem
        },
        directives:{
            'scroll'(el,binding){
                let fn = binding.value
                fn(el)
            }
        },
        methods:{
            backTop(){
                let speed = 10
                let timer = setInterval(()=>{
                    this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    if(this.scrollTop > 0){
                        this.scrollTop = (this.scrollTop - speed>0)?(this.scrollTop-speed):0
                        speed += 20
                        window.scrollTo(0,this.scrollTop)
                    }else{
                        clearTimeout(timer)
                    }
                },16)
            }
        }
    }
</script>.
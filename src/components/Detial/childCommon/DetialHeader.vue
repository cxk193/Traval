<template>
    <div>
        <router-link to="/home">
            <div class="header-abs-back">
                <span class="iconfont">&#xe606;</span>
            </div>
        </router-link>

        <div class="header-fixed"
             :style="opacityStyle"
            v-show="isActive"
        >
            <router-link to="/home">
                <div class="header-back">
                    <span class="iconfont">&#xe606;</span>
                </div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
    export default {
        name:'DetialHeader',
        data(){
            return {
                isActive:false,
                opacityStyle:{
                    opacity:0
                }
            }
        },
        methods:{
            handleScroll(){
                const top = document.documentElement.scrollTop
                if(top > 60 && top < 140){
                    const opacity = window.parseFloat(top/140).toFixed(1)
                    this.opacityStyle={
                        opacity
                    }
                    this.isActive = true
                }else{
                    this.isActive = false
                }
            }
        },
        mounted() {
            window.addEventListener('scroll',this.handleScroll)
        },
        deactivated() {
            window.removeEventListener(this.handleScroll)
        }
    }
</script>
<style lang="less" scoped>
        .header-abs-back{
            position: absolute;
            top: .2rem;
            left: .2rem;
            width: .8rem;
            height: .8rem;
            line-height: .8rem;
            background-color: rgba(0,0,0,.5);
            text-align: center;
            color: #fff;
            border-radius: 50%;
        }
        .header-fixed{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: .86rem;
            line-height: .86rem;
            background-color: #00bcd4;
            text-align: center;
            font-size: .32rem;
            color: #fff;
            transition: .3s;
            .header-back{
                margin-left: .2rem;
                float: left;
            }
        }
</style>
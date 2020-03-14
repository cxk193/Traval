<template>
        <div class="back-top" v-if="showTop">
            <span class="iconfont" @click="gotop" >&#xe606;</span>
        </div>
</template>
<script>
    export default {
        name: 'BackTop',
        data() {
            return {
                scrollTop: 0,
            }
        },
        computed: {
            showTop: function () {
                //判断滚轮位置是否大于1000px，如果大于就tren，否则false
                let value = this.scrollTop > 100 ? true : false;
                //返回值
                return value;
            }
        },
        mounted() {
            //addEventListener() 方法来添加监听事件
            window.addEventListener("scroll", this.getScrollTop)
        },
        //组件销毁时取消对scroll的监听
        destroyed(){
            window.removeEventListener('scroll',this.getScrollTop)
        },
        methods: {
            gotop() {
                let back = setInterval(()=>{
                    if(document.documentElement.scrollTop || document.body.scrollTop){
                        document.documentElement.scrollTop -=50;document.body.scrollTop -=50;
                    }else{
                        clearInterval(back) //scrollTop到0时就移除定时器
                    }
                },16)
            },
            getScrollTop() {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            }
        }
    }
</script>
<style lang="less" scoped>
    .back-top{
        position: fixed;
        bottom: 2rem;
        right: .1rem;
        width: .6rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: 50%;
        z-index: 10;
        background-color: #ccc;
        transform: rotateZ(90deg);
        span{
            padding-left: .1rem;
        }
    }
</style>
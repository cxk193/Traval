<template>
    <ul class="list" >
        <li v-for="(item,index) of letter"
            :key="index"
            :ref="item"
            @click="handleLetterCkick($event)"
            @touchstart="handelTouchStart"
            @touchend="handelTouchEnd"
            @touchmove="handelTouchMove"
        >
            {{item}}
        </li>
    </ul>
</template>
<script>
    export default {
        name:'CityAphabet',
        data(){
            return {
                list:[1,2,3,4,5],
                timer:null,
            }
        },
        props:{
          cities:Object
        },
        computed:{
            letter(){
                const letterList = []
                for(let i in this.cities){
                    letterList.push(i)
                }
                return letterList
            }
        },
        methods:{
            handleLetterCkick(e){
                let letter = e.target.innerText
                this.$emit('change',letter)
            },
            handelTouchStart(e){
                //手指按下激活touchStar事件
                this.touchSatus = true
            },
            handelTouchMove(e){
                //绑定一个ref属性，取到第一个为A的dom元素距离顶部的距离
                if(this.touchSatus){
                    if(this.timer){
                        clearTimeout(this.timer)
                    }else {
                        const startY = this.$refs['A'][0].offsetTop
                        const touchY = e.touches[0].clientY - startY
                        const index = Math.floor( (touchY - startY) / 20 )
                        if(index >= 0 && index <= 20){
                            this.$emit('change',this.letter[index])
                        }
                    }
                }
            },
            handelTouchEnd(e){
                //关闭 touchStart
                this.touchSatus = false
            }
        },

    }
</script>
<style lang="less" scoped>
    .list{
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: .4rem;
        .item{
            height: .4rem;
            line-height: .4rem;
            text-align: center;
        }
    }
</style>
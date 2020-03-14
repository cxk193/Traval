<template>
    <div class="list" ref="scroll">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="bottom-list">

                    <div class="bottom-wrapper">
                        <div class="bottom">北京</div>
                    </div>

                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="bottom-list">

                    <div class="bottom-wrapper" v-for="item of hotCity" :key="item.id">
                        <div class="bottom">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                        v-for="innerItem of item"
                         :key="item.id"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    //引入better-scroll
    import Bscroll from 'better-scroll'
    export default {
        name:'CityList',
        props:{
            letter:String,
            hotCity:Array,
            cities:Object
        },
        mounted() {
            //将需要滚动区域的dom元素传入到实例对象当中
            this.scroll = new Bscroll(this.$refs.scroll)
        },
        watch:{
            letter(letter){
                if(letter){
                    let element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }

    }
</script>
<style lang="less" scoped>
        .list{
            overflow: hidden;
            position: absolute;
            top: 1.58rem;
            left: 0;
            right: 0;
            bottom: 0;

            .border-topbottom{
                &::before{
                    border-color: #ccc;
                }
                &::after{
                    border-color: #ccc;
                }
            }
            .border-bottom{
                &::before{
                    border-color: #ccc;
                }
            }

            .title{
                line-height: .44rem;
                background-color: #eee;
                padding-left: .2rem;
                color: #666;
            }
            .bottom-list{
                padding: .1rem;
                overflow: hidden;
                padding: .1rem .6rem .1rem .1rem;
                .bottom-wrapper{
                    float: left;
                    width: 33.33%;
                    .bottom{
                        margin: .1rem;
                        text-align: center;
                        border: .02rem solid #ccc;
                        border-radius: .06rem;
                    }
                }
            }
            .item-list{
                .item{
                    line-height: .76rem;
                    padding-left: .2rem;
                }
            }
        }

</style>
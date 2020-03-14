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

                    <div class="bottom-wrapper">
                        <div class="bottom">北京</div>
                    </div>
                    <div class="bottom-wrapper">
                        <div class="bottom">北京</div>
                    </div>
                    <div class="bottom-wrapper">
                        <div class="bottom">北京</div>
                    </div>
                    <div class="bottom-wrapper">
                        <div class="bottom">北京</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,index) in list" :key="item.id" :ref="item.id">
                <div class="title border-topbottom">{{item.id}}</div>
                <div class="item-list">
                    <div class="item border-bottom">{{item.address}}</div>
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
        data(){
            return {
                list:[
                    {id:'A',address:'阿拉尔'},
                    {id:'B',address:'阿拉尔'},
                    {id:'C',address:'阿拉尔'},
                    {id:'D',address:'阿拉尔'},
                    {id:'E',address:'阿拉尔'},
                    {id:'F',address:'阿拉尔'},
                    {id:'G',address:'阿拉尔'},
                    {id:'H',address:'阿拉尔'},
                    {id:'I',address:'阿拉尔'},
                    {id:'J',address:'阿拉尔'},
                    {id:'K',address:'阿拉尔'},
                    {id:'L',address:'阿拉尔'},
                    {id:'M',address:'阿拉尔'},
                    {id:'N',address:'阿拉尔'},
                    {id:'O',address:'阿拉尔'},
                    {id:'P',address:'阿拉尔'},
                    {id:'Q',address:'阿拉尔'},
                    {id:'R',address:'阿拉尔'},
                    {id:'S',address:'阿拉尔'},
                    {id:'T',address:'阿拉尔'},
                    {id:'U',address:'阿拉尔'},
                    {id:'V',address:'阿拉尔'},
                    {id:'W',address:'阿拉尔'},
                    {id:'X',address:'阿拉尔'},
                    {id:'Y',address:'阿拉尔'},
                    {id:'Z',address:'阿拉尔'}
                ]
            }
        },
        props:{
          letter:String
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
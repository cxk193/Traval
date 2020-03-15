<template>
    <div class="city-search">
       <input type="text" v-model="keywords" class="search-input" placeholder="输入其他城市拼音" />
        <div class="serch-content"
             ref="search"
             v-show="keywords"
        >
            <ul  >
                <li class="search-item" v-for="item of list">
                    {{item.name}}
                </li>
                <li v-show="hasData">没有找到匹配数据</li>
            </ul>
        </div>

    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        name:'citySearch',
        data(){
            return {
                keywords:'',
                list:[],
                timer:null
            }
        },
        props:{
            cities:Object
        },
        computed:{
            hasData(){
                return !this.list.length
            }
        },
        watch:{
            //搜索功能
            keywords(){
                if(this.timer){
                    clearTimeout(this.timer)
                }else{
                //搜索项没有的时候直接返回一个空数组
                if(!this.keywords){
                     this.list = []
                     return
                }
                this.timer = setTimeout(()=> {
                        const result = []
                        for(let i in this.cities){
                            this.cities[i].forEach(value=>{
                                if(value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1){
                                    result.push(value)
                                }
                            })
                        }
                        this.list = result

                    },100)

                }
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>
<style lang="less" scoped>
    .city-search{
        height: .72rem;
        padding: 0 .1rem;
        text-align: center;
        background-color: #1FD5C8;
        .search-input{
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
        }
        .serch-content{
            position: absolute;
            top: 1.59rem;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
            overflow: hidden;
            .search-item{
                line-height: .48rem;
            }
        }
    }
</style>
<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="isActive" name="icon"></slot>
        <slot v-else name="icon-c"></slot>
        <div class="doc" :class="{activeClass:isActive}">
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Tab',
        props:{
            path:String
        },
        computed:{
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            }
        },
        methods:{
            itemClick(){
                if(this.$router.history.current.path !== this.path){
                    this.$router.replace(this.path)
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: .98rem;

        img{
            width: .6rem;
            height: .6rem;
        }
    }
    .activeClass{
        color: red;
    }
</style>

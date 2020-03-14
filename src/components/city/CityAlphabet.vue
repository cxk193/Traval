<template>
    <ul class="list" >
        <li v-for="(item,index) in arr"
            :key="index"
            @click="handleLetterCkick($event)"
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
                arr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            }
        },
        methods:{
            handleLetterCkick(e){
                let letter = e.target.innerText
                this.$emit('change',letter)
            }
        }
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
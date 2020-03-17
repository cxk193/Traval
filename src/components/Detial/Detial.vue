<template>
    <div class="detial">
        <detial-banner></detial-banner>
        <detial-header></detial-header>
        <detial-content :list="list"></detial-content>
    </div>
</template>
<script>
    import DetialBanner from './childCommon/Banner'
    import DetialHeader from './childCommon/DetialHeader'
    import DetialContent from "./childCommon/DetialContent";
    export default {
        name:'Detial',
        data(){
            return {
                list:[
                    {
                        title:'成人票',
                        children:[
                            {
                                title:'成人五馆联票'
                            },
                            {
                                title:'成人三馆联票'
                            }
                        ]
                    },
                    {title:'儿童票'},
                    {title:'学生票'},
                    {title:'特价票'}
                ]
            }
        },
        components:{
            DetialBanner,
            DetialHeader,
            DetialContent
        }
    }
</script>
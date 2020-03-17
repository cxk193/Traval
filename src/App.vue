<template>
  <div id="app" exculd>
      <router-view></router-view>
    <MainTabBar v-if="flag"></MainTabBar>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import Home from 'components/home/Home'
  import MainTabBar from 'components/tabar/MainTabBar'
  import BackTop from 'components/backTop/BackTop'

  export default {
    name:'app',
    data(){
      return {
        flag:true
      }
    },
    components:{
      Home,
      MainTabBar,
      BackTop
    },
    watch:{
      '$route'(newVal,oldval){
          if(newVal.path === '/city'){
            this.flag = false
          }else {
            this.flag = true
          }
      }
    }
  }
</script>

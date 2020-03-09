<template>
  <div id="app">
    <router-link to="/home">home</router-link>

    <router-link to="/list">list</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:'app',
    components:{

    },
    data(){
      return {
        cont:'app组件',
        num:0
      }
    }
  }
</script>
<style lang="less">

</style>

<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list
            :letter="letter"
        ></city-list>
        <city-aphabet
            @change="handeLetter"
        ></city-aphabet>
    </div>
</template>
<script>
    import CityHeader from "./CityHeader";
    import CitySearch from "./CitySearch";
    import CityList from "./List";
    import CityAphabet from './CityAlphabet'

    export default {
        name:'City',
        data(){
          return {
              letter:''
          }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAphabet
        },
        methods:{
            handeLetter(letter){
                this.letter = letter
            }
        }
    }
</script>
<template>
    <div class="city">

        <city-header></city-header>

        <city-search
            :cities="cities"
        ></city-search>

        <city-list
            :letter="letter"
            :cities="cities"
            :hotCity="hotCities"
        ></city-list>

        <city-aphabet
            :cities="cities"
            @change="handeLetter"
        ></city-aphabet>
    </div>
</template>
<script>
    import CityHeader from "./childCommon/CityHeader";
    import CitySearch from "./childCommon/CitySearch";
    import CityList from "./childCommon/CityList";
    import CityAphabet from './childCommon/CityAlphabet';
    const Data = require('../../moke/cities')

    export default {
        name:'City',
        data(){
          return {
              letter:'',
              cities:{},
              hotCities: [],
              lettersList:[],
              arr:[]
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
            },
            getMessage(){
                this.cities = Data.data.cities
                this.hotCities = Data.data.hotCities
            }
        },
        mounted() {
            this.getMessage()
        }


    }
</script>
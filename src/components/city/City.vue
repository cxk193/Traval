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
    import CityHeader from "./CityHeader";
    import CitySearch from "./CitySearch";
    import CityList from "./List";
    import CityAphabet from './CityAlphabet';
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

                console.log()
            }
        },
        mounted() {
            this.getMessage()
        }


    }
</script>
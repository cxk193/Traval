<template>
    <div class="city">
        <!-- 头部      -->
        <city-header></city-header>
        <!-- 搜索       -->
        <city-search
            :cities="cities"
        ></city-search>
        <!-- 城市字母列表       -->
        <city-list
            :letter="letter"
            :cities="cities"
            :hotCity="hotCities"
        ></city-list>
        <!-- 侧边的字母       -->
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
    import DataList from '../../moke/city'

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
                this.cities = DataList.data.cities
                this.hotCities = DataList.data.hotCities

            }
        },
        mounted() {
            this.getMessage()
        }


    }
</script>
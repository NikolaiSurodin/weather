<template>
  <div class="weather-widget">
    <div class="city-card">
      <city-card :city="getInfoAboutCity"
                 :parameter="getParameters"/>
    </div>

    <div class="right-menu">
      <div class="time-input">
        <h2>{{ date }}</h2>
        <input class="input" placeholder="City..">
      </div>

      <div class="parameter-card">
        <parameter-card v-for="(parameter, key) in getParameters" :key="key"
                        :parameter="key"
                        :value="parameter"
        >
          <template v-slot:img>
            <img class="img" v-if="key === 'temperature'" src="../assets/temperature.svg">
            <img class="img" v-if="key === 'humidity'" src="../assets/humidity.svg">
            <img class="img" v-if="key === 'visibility'" src="../assets/visibility.svg">
            <img class="img" v-if="key === 'speed'" src="../assets/wind.svg">
            <img class="img" v-if="key === 'sunset'" src="../assets/sunset.svg">
            <img class="img" v-if="key === 'sunrise'" src="../assets/sunrise.svg">
          </template>

          <template v-slot:parameter>{{ key }}</template>

          <template v-slot:value>{{ parameter }}</template>

          <template v-slot:sign>
            <p v-if="key === 'temperature'">°C</p>
            <p v-if="key === 'humidity'">%</p>
            <p v-if="key === 'visibility'">m</p>
            <p v-if="key === 'speed'">m/s</p>
          </template>

        </parameter-card>
      </div>
    </div>
    <img class="reload-icon" src="../assets/reload.svg" alt="reload" @click="fetchWeatherInfo">
  </div>
</template>

<script>
import CityCard from "@/components/CityCard";
import ParameterCard from "@/components/ParameterCard";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "WeatherWidget",
  components: { CityCard, ParameterCard },
  data() {
    return {
      date: ''
    }
  },
  methods: {
    ...mapActions( [ 'fetchWeatherInfo' ] )
  },
  computed: {
    ...mapGetters( [
      'getInfoAboutCity',
      'getParameters',
      'getSignList'
    ] )
  },
  beforeMount() {
    this.fetchWeatherInfo()
        .then( () => {
        } )
        .catch( err => console.log( err ) )
  },
  mounted() {
    let date = new Date().getDay()
    let options = { weekday: 'long' }
    setInterval( () => {
      this.date = new Intl.DateTimeFormat( 'en-US', options ).format( date ) + ',  ' + new Date().toLocaleTimeString( 'ru-RU' )
    } )
  }


}
</script>

<style scoped>
.weather-widget {
  display: flex;
  width: 820px;
}

.city-card {
  padding: 0 30px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 5px 4px;
}

.parameter-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.time-input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input {
  height: 20px;
  position: relative;
  bottom: -21px;
  border: none;
  text-align: right;
}

.input:focus {
  outline: none;
}

.reload-icon {
  height: 20px;
}

.reload-icon:hover {
  cursor: pointer;
}

.img {
  height: 77px;
  width: 74px;
}

.icon-picture {
  height: 50px;
}
</style>
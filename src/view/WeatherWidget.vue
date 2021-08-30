<template>
  <div class="wrapper-widget">

    <div v-if="error">
      <error-page :error="error"
                  @close="close"
                  @restart="update"
      />
    </div>
    <div class="weather-widget">
      <div class="city-card">
        <city-card :city="getInfoAboutCity"
                   :parameter="getParameters"/>
      </div>

      <div class="right-menu">
        <div class="header">
          <p>{{ date }}</p>
          <input class="input">
        </div>

        <div class="parameter-card">
          <parameter-card v-for="(parameter, key) in getParameters" :key="key"
                          :parameter="key"
                          :value="parameter"
          >
            <template v-slot:img>
              <img class="img" v-if="key === 'temperature'" src="../images/temperature.svg" alt="logo">
              <img class="img" v-if="key === 'Humidity'" src="../images/humidity-icon.png" alt="logo">
              <img class="img" v-if="key === 'Visibility'" src="../images/visibility.svg" alt="logo">
              <img class="img" v-if="key === 'Speed'" src="../images/wind.svg" alt="logo">
              <img class="img" v-if="key === 'Sunset'" src="../images/sunset.svg" alt="logo">
              <img class="img" v-if="key === 'Sunrise'" src="../images/sunrise.svg" alt="logo">
              <img class="img" v-if="key === 'Direction'" src="../images/compass.svg" alt="logo">
            </template>

            <template v-slot:parameter>{{ key }}</template>

            <template v-slot:value>{{ parameter }}</template>

            <template v-slot:sign>
              <p v-if="key === 'temperature'">°C</p>
              <p v-if="key === 'Humidity'">%</p>
              <p v-if="key === 'Visibility'">km</p>
              <p v-if="key === 'Speed'">m/s</p>
            </template>

          </parameter-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from "moment";
import {mapActions, mapGetters} from "vuex";
import CityCard from "@/components/CityCard";
import ParameterCard from "@/components/ParameterCard";
import ErrorPage from "@/components/ErrorPage";

export default {
  name: "WeatherWidget",
  components: { CityCard, ParameterCard, ErrorPage },
  data() {
    return {
      date: '',
      error: false
    }
  },
  methods: {
    ...mapActions( [ 'fetchWeatherInfo' ] ),
    update() {
      this.fetchWeatherInfo()
          .catch( err => {
            this.error = err
          } )
    },
    close() {
      this.error = !this.error
    }
  },
  computed: {
    ...mapGetters( [
      'getInfoAboutCity',
      'getParameters'
    ] )
  },
  beforeMount() {
    this.fetchWeatherInfo()
        .then( () => {
        } )
        .catch( err => {
          this.error = err
        } )
  },
  mounted() {
    let date = new Date().getDay()
    let time = moment().format( "HH:mm" )
    let options = { weekday: 'long' }
    this.date = new Intl.DateTimeFormat( 'en-US', options ).format( date ) + ',' + time
  }


}
</script>

<style scoped>
.weather-widget {
  display: flex;
  width: 820px;

}

.city-card {
  background-color: #fff;
  border: 1px solid transparent;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 0 15px;

}

.parameter-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header p {
  margin-left: 6px;
}

.input {
  height: 27px;
  width: 178px;
  position: relative;
  bottom: -35px;
  border: none;
  text-align: right;
  margin: 0 8px;
}

.img {
  height: 80px;
  width: 83px;
  margin: 22px 0px;
}

.wrapper-widget {
  background-color: #f7f7f7;;
  border-radius: 10px;
  position: relative;
  width: 840px;
  box-shadow: -3px 10px 25px #8483f344;
}

.right-menu {
  margin: 0 4px;
}

.header p {
  font-size: 19px;
  font-weight: bold;
}

</style>
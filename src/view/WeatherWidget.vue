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
          <input class="input" placeholder="City..">
        </div>

        <div class="parameter-card">
          <parameter-card v-for="(parameter, key) in getParameters" :key="key"
                          :parameter="key"
                          :value="parameter"
          >
            <template v-slot:img>
              <img class="img" v-if="key === 'temperature'" src="../images/temperature.svg">
              <img class="img" v-if="key === 'humidity'" src="../images/humidity-icon.png">
              <img class="img" v-if="key === 'visibility'" src="../images/visibility.svg">
              <img class="img" v-if="key === 'speed'" src="../images/wind.svg">
              <img class="img" v-if="key === 'sunset'" src="../images/sunset.svg">
              <img class="img" v-if="key === 'sunrise'" src="../images/sunrise.svg">
              <img class="img" v-if="key === 'direction'" src="../images/compass.svg">
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
        <div class="footer">
          <a target="_blank"
             href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
             class="link">Metric system</a>
          <a target="_blank"
             href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
             class="link right-link">Imperial system</a>
        </div>
      </div>
      <img class="reload-icon" src="../images/reload.svg" alt="reload" @click="update">
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
    this.date = new Intl.DateTimeFormat( 'en-US', options ).format( date ) + ',  ' + time
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
  height: 20px;
  position: relative;
  bottom: -35px;
  border: none;
  text-align: right;
  padding: 2px 0;
  margin: 0 10px;
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
  margin: 34px 0;
}

.wrapper-widget {
  background-color: #f7f7f7;;
  border-radius: 10px;
  position: relative;
  width: 840px;
  box-shadow:  -3px 10px 25px #8483f344;
}

.right-menu {
  margin: 0 4px;
}

.header p {
  font-size: 19px;
  font-weight: bold;
}

.link {
  text-decoration: none;
  font-size: 12px;
  color: green;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin: 0 18px;
}

.right-link {
  margin-left: 15px;
  color: black;
  font-weight: bold;
}
</style>
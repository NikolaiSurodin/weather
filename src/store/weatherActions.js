import axios from "axios"

export default {
    fetchWeatherInfo({ commit }) {
        return new Promise( (resolve, reject) => {
            const API_KEY = '723b3e3358d19819b3d437f9717ddfe9'
            let city = 1496747
            axios.get( `https://api.openweathermap.org/data/2.5/weather?id=${ city }&units=metric&appid=${ API_KEY }` )
                .then( response => {
                    let data = response.data
                    commit( 'SET_PARAMETERS_WEATHER', data )
                    commit( 'SET_CITY_INFO', data )
                    resolve()
                } )
                .catch(err => reject(err))

        } )
    }
}
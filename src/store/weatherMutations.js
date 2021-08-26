import moment from "moment";

export default {
    SET_CITY_INFO(state, data) {
        state.city.name = data.name
        state.city.country = data.sys.country
        state.city.felt = data.main.feels_like
        state.city.temperature = data.main.temp
        state.city.description = data.weather[0].description
    },
    SET_PARAMETERS_WEATHER(state, data) {
        let sunset = new Date( moment.unix( data.sys.sunset ).utc()._d ).toLocaleTimeString( 'ru-RU' ).slice( 0, 5 )
        let sunrise = new Date( moment.unix( data.sys.sunrise ).utc()._d ).toLocaleTimeString( 'ru-RU' ).slice( 0, 5 )
        state.parameters.sunrise = sunrise
        state.parameters.sunset = sunset
        state.parameters.speed = data.wind.speed
        state.parameters.humidity = data.main.humidity
        state.parameters.visibility = data.visibility / 1000
    }
}
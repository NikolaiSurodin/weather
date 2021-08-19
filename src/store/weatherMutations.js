export default {
    SET_CITY_INFO(state, data) {
        state.city.name = data.name
        state.city.country = data.sys.country
        state.city.felt = data.main.feels_like
    },
    SET_PARAMETERS_WEATHER(state, data) {
        state.parameters.sunrise = new Date( data.sys.sunrise ).toLocaleTimeString( 'ru-RU' ).slice( 0, -3 )
        state.parameters.sunset = new Date( data.sys.sunset ).toLocaleTimeString( 'ru-RU' ).slice( 0, -3 )
        state.parameters.speed = data.wind.speed
        state.parameters.temperature = data.main.temp
        state.parameters.humidity = data.main.humidity
        state.parameters.visibility = data.visibility
    }
}
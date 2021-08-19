export default {
    SET_CITY_INFO(state, data) {
        state.city.name = data.name
        state.city.country = data.sys.country
    },
    SET_PARAMETERS_WEATHER(state, data) {

        state.parameters.sunrise = data.sys.sunrise
        state.parameters.sunset = data.sys.sunset
        state.parameters.speed = data.wind.speed
        state.parameters.temperature = data.main.temp
        state.parameters.humidity = data.main.humidity
        state.parameters.feels_like = data.main.feels_like

    }
}
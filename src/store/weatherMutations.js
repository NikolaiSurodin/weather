import moment from "moment";

export default {
    SET_CITY_INFO(state, data) {
        state.city.name = data.name
        state.city.country = data.sys.country
        state.city.felt = data.main.feels_like
        state.city.temperature = data.main.temp
        state.city.Description = data.weather[0].description
        state.city.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    },
    SET_PARAMETERS_WEATHER(state, data) {
        state.parameters.Sunrise = new Date( moment.unix( data.sys.sunrise ).utc()._d ).toLocaleTimeString( 'ru-RU' ).slice( 0, 5 )
        state.parameters.Sunset = new Date( moment.unix( data.sys.sunset ).utc()._d ).toLocaleTimeString( 'ru-RU' ).slice( 0, 5 )
        state.parameters.Speed = data.wind.speed
        state.parameters.Humidity = data.main.humidity
        state.parameters.Visibility = data.visibility / 1000

        let degrees = data.wind.deg
        let directions = [ 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW' ];
        degrees = degrees * 8 / 360;
        degrees = Math.round( degrees, 0 );
        degrees = (degrees + 8) % 8
        state.parameters.Direction =  directions[degrees]
    }
}
export default {
    city: {
        name: '',
        country: ''
    },
    parameters: {
        temperature: null,
        humidity: null, // влажность
        feels_like: null, // ощущение
        speed: null,
        sunrise: null,
        sunset: null
    },
    parametersWeather: [
        {
            name: 'temperature',
            value: 30,
            img: 'cloud.png'
        },
        {
            name: 'humidity',
            value: 14,
            img: 'humidity.png'
        },
        {
            name:'feels_like',
            value: 45,
            img: ''
        },
        {
            name:'speed',
            value: 2,
            img: 'wind.png'
        },
        {
            name:'sunrise',
            value: 123125,
            img: 'sunrise.png'
        },
        {
            name:'sunset',
            value: 123521,
            img: 'sunset.png'
        }

    ]
}

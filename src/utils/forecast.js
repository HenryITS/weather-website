const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3babc4f97c574a8015820c29ff7dc964/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees Celsius. The high for today is ' + body.daily.data[0].temperatureHigh + ' degrees, with a low of ' + body.daily.data[0].temperatureLow + ' degrees. ' + 'There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast

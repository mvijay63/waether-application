const request = require("request")
const forecast = ({lan , lat} = {} , callback) => {

    const url = "http://api.weatherstack.com/current?access_key=776fe963eef59e66c72cfdf95bde4eb5&query="+lat+","+lan
    request({url:url} , (error , response) => {
        const data = JSON.parse(response.body)
        callback(data)
    })
}

module.exports = forecast
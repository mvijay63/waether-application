const request = require("request")
const location = (loc , callback) => {
    const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+loc+".json?access_token=pk.eyJ1IjoibXAxMDUiLCJhIjoiY2tjdGMyNnlmMGN0YjJybnRoeXcxcHo5OSJ9.jaQHtx5GES-brex0jMEaQw" ;
    request({url:url2} , (error , response) => {
        const data = JSON.parse(response.body);
        let co = {}
        if(data.features.length > 0 ){
            co = {
                lan : data.features[0].center[0] , 
                lat : data.features[0].center[1]
            }
        }
        callback(co)
    })
}

module.exports = location 

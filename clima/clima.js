const axios = require('axios');

const getClima = async (lat, lng ) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d3456ee6d9932ce34aa0daf58a1c42b8`;
    let resp = await axios.get(url);
    if( resp.data.cod != 200 ){
        throw new Error('No se encontraron datos de clima');
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima,
}
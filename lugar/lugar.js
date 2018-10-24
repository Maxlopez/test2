const axios = require('axios');

const getLugar = async (direccion) => {
    let encodedUrl = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`;
    let resp = await axios.get(url);
    if( resp.data.results.length === 0 ){
        throw new Error(`No hay resultados para la ciudad con dirección ${direccion}`);
    }
    let location = resp.data.results[0];
    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng,
    }
}

module.exports = {
    getLugar,
}

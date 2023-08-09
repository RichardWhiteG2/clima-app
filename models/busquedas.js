const axios = require('axios');


class Busquedas {
    historial = ['Tegucipal','Madrid', 'San José'];

    constructor (){
        // TODO; leer DB si existe
    }
    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit':5,
            'language': 'es',
        }
    }

    async ciudad ( lugar= ''){
        try {
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });
            
            const resp = await intance.get();
            // const resp = await axios.get('')
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }))
            
        } catch (error) {
            return [];
        }
        // Peticion http
    }


}

module.exports = Busquedas;
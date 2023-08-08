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
        // Peticion http
        const intance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.paramsMapbox
        });
        
        const resp = await intance.get();
        // const resp = await axios.get('')
        console.log(resp.data);

        return [];  //Retornar los lugares que coincidan. 
    }


}

module.exports = Busquedas;
require('dotenv').config()
const { inquirerMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer.js');
const Busquedas = require('./models/busquedas.js');

const main = async()=>{
    const busquedas = new Busquedas();
    let opt='';

    do {
        //Imprimir menu
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares( lugares );
                const lugarSel = lugares.find(l => l.id === id);

                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad', lugarSel.nombre.green );
                console.log('Lat', lugarSel.lat );
                console.log('Lng', lugarSel.lng );
                console.log('Temperatura',clima.temp);
                console.log('Mínima',clima.min);
                console.log('Máxima', clima.max);
                console.log('Como esta el clima: ',clima.desc.green );
                break;
            case 2:
                    console.log('Presionaste 2 \n')
                break;
        }
        if ( opt !==0) await pausa();
    } while (opt !==0);
}

main();





# Clima APP

This is an app made with Node.js that consumes the MAPBOX and OPENWATHER API
A search is carried out in the MAPBOX api and it only shows 5 places that match the search parameter, later it shows data from that city, consulting the OPENWATHER API, it shows data such as
City, latitude, longitude, temperature, minimum/maximum temperature and a description of the weather.
The history only stores the last 6 queries and saves them in a json file.

## Installation

1. Clone this repository:: `git clone https://github.com/RichardWhiteG2/clima-app`
2. Enter the project directory: `cd clima-app`
3. Install the dependencies: `npm install`
4. Create an .env file
5. Add the apikey to `MAPBOX_KEY y OPENWATHER_KEY`

## Use

Execute the node index.js command, in option 1 you can search for the city and in option 2 you can consult the history.

## Preview
![Menu](/assets/MenuInicial.png)
![Menu](/assets/Busqueda.png)
![Menu](/assets/ResponseBusqueda.png)
![Menu](/assets/Historial.png)
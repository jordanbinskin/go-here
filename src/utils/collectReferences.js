require('dotenv').config();
const { MAPS_KEY } = process.env;
const { get } = require('axios');
const { writeFile, readFileSync } = require('fs');
const destinations = JSON.parse(readFileSync(`${process.cwd()}/base-destinations.json`));

async function makeRequest(config) {
    const { place } = config;

    const response = await get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=photos&key=${MAPS_KEY}`);

    let reference = response.data.candidates[0].photos[0].photo_reference;

    return {
        place,
        reference,
        local: `./assets/images/${place}.png`,
        url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${MAPS_KEY}`
    }
}

const getPlaces = async (placeList) => {
    let places = Object.entries(placeList);

    let result = await places.map(async ([index, place]) => {
        return await makeRequest(place)
    })

    Promise.all(result)
        .then(completed => {
            writeFile(`${process.cwd()}/src/references.json`, JSON.stringify(completed), (err) => {
                if (err) throw err;
                console.log('file saved');
            })
            
        })
    
}

getPlaces(destinations);




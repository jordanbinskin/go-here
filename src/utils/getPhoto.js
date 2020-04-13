require('dotenv').config();
const { MAPS_KEY } = process.env;
const axios = require('axios');
const { createWriteStream, readFileSync } = require('fs');
const references = JSON.parse(readFileSync(`${process.cwd()}/src/references.json`));



async function getPhoto({place, reference}) {
    let url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${MAPS_KEY}`;

    let result = await axios({
        type: 'get',
        url,
        responseType: 'stream'
    });

    result.data.pipe(createWriteStream(`${process.cwd()}/public/assets/images/${place}.png`));
}

references.forEach(reference => 
    getPhoto(reference)
)
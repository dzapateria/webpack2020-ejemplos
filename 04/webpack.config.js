const path = require('path');
module.exports = {
    entry: {
        'main': ['./src/js/codigo.js'], // suma se concatenara, index.ts concatenara todos sus imports
        'servicios': './src/js/servicios.js' // este no se concatenará salvo que tenga imports desde main, debera ser añadido con script src=dist/servicios.js
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};
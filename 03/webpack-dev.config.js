const path = require('path');
module.exports = {
    entry: './src/js/codigo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch: true,
    mode: 'development',
    devtool: 'source-map'
};
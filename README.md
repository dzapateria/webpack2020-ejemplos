
# WEBPACK 2020 (v 4.43)

## Uso de las configuraciones:
1. Copia un archivo package.json
2. Ejecuta `npm install` para instalar las depedencias.
3. Crea o copia archivos index.html, src/codigo.js.
4. Ejecuta webpack ya sea por `CLI` o por comandos npm run del package.json.


Creación de un archivo package.json

``` 
npm init -y
```

## DETALLE DE LOS EJEMPLOS.

Requisitos:

``` 
cd 01
npm i -D webpack webpack-cli
```

### 01. Webpack desde CLI.

La manera mas simple de ejecutar webpack es dandole el origen, el resolvera las dependencias y dara una salida en archivo único en dist/main.js
``` 
npx webpack src/codigo.js
```
Si lo que queremos es que compile ante cambios el archivo añadimos la bandera -w
``` 
npx webpack src/codigo.js -w
```
Por defecto se ejecuta para producción no creará sourcemaps y minifica el codigo, para ejecutar modo desarrollo añade la bandera --mode
```` 
npx webpack src/codigo.js -w --mode development
````

## 02. Con npm run (package.json)
Edite su archivo package.json y añada los comandos anteriores de la siguiente forma.
``` 
 "scripts": {
    "wp": "webpack src/codigo.js --mode production",
    "wd": "webpack src/codigo.js -w --mode development"
  }
```
Asi podrás ejecutar los comandos más cortos, para producción:
``` 
npm run wp
```
Y para desarrollo:
``` 
npm run wd
```
## 03. Con archivo de configuración.
Ejemplo simple de archivo webpack-dev.config.js version desarrollo con watch y source-maps.

``` 
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
```
Ejemplo de archivo webpack-prod.config.js version producción:
``` 
const path = require('path');
module.exports = {
    entry: './src/js/codigo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production'
};
```
Modificación del archivo `package.json` para usar estos archivos de configuración:
``` 
 "scripts": {
    "wd": "npx webpack --config webpack-dev.config.js",
    "wp": "npx webpack --config webpack-prod.config.js" 
  }
```
Para ejecutar webpack en desarrollo escribimos

``` 
npm run wd
```
Para compilar para producción:
``` 
npm run wp
```

## 04. Multiples entradas y salidas.
Puede que queramos tener scripts para funcionalidades que estan en una pagina y en otra no por ejemplo.
Podemos agrupar diferentes entradas y salidas.
Para ello debemos modificar los archivos de configuracion de webpack, creando un objeto `entry` y la salida debera tener un nombre dinámico.
Resulta muy interesante para poder tener un código modular y que además pueda estar funcionando en determinadas páginas.
``` 
 entry: {
        'main': ['./src/ts/suma.ts', './src/ts/index.ts' ], // suma se concatenara, index.ts concatenara todos sus imports
        'libre': './src/ts/libre.ts' // este no se concatenará salvo que tenga imports, se creara su propio libre.js y debera ser añadido con script src=
    },
 output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
```

## Otras funcionalidades de webpack que no utilizo.
 
### Compilar SASS
Para la compilación de CSS me parece más rápido prepros y facil de configurar, además de que no se actualiza rompiendo tus configuraciones, ya esta por salir webpack 5.

### Live reload y server.
El live Reload browsrsync que incorpora prepros me parece más rápido y mejor.
### Plugin html
El plugin de html me parece innecesario y complejo más si vamos a trabajar con php y multiples archivos, el uso en evitar el cache creando nombres dinámicos es facil de producir con php simplmente añadiendo la funcion time() como versionado del archivo tal que así.
``` 
<!-- Head estilos de prepros -->
<link rel="stylesheet" href="/dist/estilos.css?v=<?=time()?>">
<!-- Webpack build -->
<script src="/dist/main.js?v=<?= time() ?>"> </script>
```

### Dependencias npm con import * from 'jquery'.
* Carga de dependencias externas de node_modules con import {$} from 'jquery', veo las siguientes desventajas.
1. Aumenta el peso de nuestro archivo js mezclando dependencias con código.
2. Resulta más lento de realizar la compilación al tener que resolver y unir dependencias con codigo.
3. Resulta más lento la carga de la página en producción al carecer de un CDN en multiples puntos del mundo y aumenta también nuestro consumo de hosting personal.
4. Dificulta el control de dependencias por página, es decir tal vez una página no queremos jquery y otra si, pero si tenemos un paquete de todo unido pues complicado...


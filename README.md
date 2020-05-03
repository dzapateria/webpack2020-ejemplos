
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

## Como se crearon las plantillas esde cero.

Instalar Webpack en tu proyecto

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
Edite su archivo package.json y añada los comandos anteriores de la siguiente forma



# My-App

Este proyecto esta trabajado con angular actual pero pensado en angular 4[Angular CLI](https://github.com/angular/angular-cli)

## Duplicar proyecto

Una vez descargado el proyecto iniciar el comando `npm install` para descargar los elementosusados.

 instalar  @angular/fire  `npm i @angular/fire --save`
 
 instalar Angular Google Maps (AGM)  `npm install -g @angular/cli --save`
 
 instalar linkifyjs `npm i linkifyjs`

## Conectarse a firebase.
Creamos un proyecto en firebase y copiamos los datos de Añade Firebase a tu aplicación web en el archivo `\src\app\app.module.ts` y remplazamos los valores que estan dentro del `modulo export const environment`

## Conectarse a AGM.

seguimos las instrucciones existente en [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) y pegamos la key generada en la linea 65 apiKey en el archivo `\src\app\app.module.ts

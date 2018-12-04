import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {trigger, state, style, transition,animate} from "@angular/animations";

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0.2,
                backgroundColor: 'green',
                transform: 'rotate3d(0,0,0,0deg)'
            })),
            state('final', style({
                opacity: 1,
                backgroundColor: 'yellow',
                transform: 'rotate3d(5,10,20,30deg)'
            })),
            transition('inicial=>final',animate(1000)),
            transition('final=>inicial',animate(600))
        ])
    ]
})
export class LugaresComponent {
    title = 'Mis Llamados';
    state = 'inicial';
    miPosicion:boolean = false;
    lat:number = -33.4275355;
    lng:number = -70.6699802;
    latitude:number = 0;
    longitude: number = 0;
    lugares = null;
    constructor(private lugaresService: LugaresService){
        lugaresService.getLugares()
            .subscribe(lugares =>{
                this.lugares = lugares;
                var me = this;
                me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
            }, error => {
                console.log(error);
                alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText);
            });
             setTimeout(this.getPosition(), 1000);
    }


    getPosition(): any{
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude; /*Guardamos nuestra latitud*/
            this.longitude = position.coords.longitude; /*Guardamos nuestra longitud*/
            this.lat = this.latitude;
            this.lng = this.longitude;
            this.miPosicion=true;
          });
         
    }


    animar(){
        if(this.state=="inicial"){
        this.state = 'final';
        }else{
            this.state = 'inicial';
        }
    }


    animationInicial(e){
        console.log("start: "+e)
    } 
    animationFin(e){
        console.log("done: "+e)
    }
   
}

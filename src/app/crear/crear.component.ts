import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {ActivatedRoute} from "@angular/router";
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};
    id:any = null;
    results$ : Observable<any>;
    private buscar: FormControl ;
    constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: Http){
        this.id = this.route.snapshot.params['id'];
        if(this.id != 'new'){
            this.lugaresService.getLugar(this.id)
                .subscribe((lugar)=>{
                    this.lugar = lugar;
                });
        }
        const URL = "";

        this.buscar = new FormControl();
        this.results$ = this.buscar.valueChanges
      //  .switchMap(query =>this.http.get(`${URL}?address=${query}`))
        //.map(response=> response.json())
        //.map(response=> response.results);

    }
    guardarLugar(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+',chile';
        this.lugaresService.obtenerGeoData(direccion)
            .subscribe((result) => {
                this.lugar.lat = result.json().results[0].geometry.location.lat;
                this.lugar.lng = result.json().results[0].geometry.location.lng;

                if(this.id != 'new'){
                    this.lugaresService.editarLugar(this.lugar);
                    alert('Negocio editado con éxito!');
                }else{
                    this.lugar.id = Date.now();
                    this.lugaresService.guardarLugar(this.lugar);
                    alert('Negocio guardado con éxito!');
                }
                this.lugar = {};
            });
    }
}
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()
export class LugaresService{
   

    constructor(private afDB: AngularFireDatabase, private http: Http){}
    public getLugares(){
        return this.afDB.list('lugares/').valueChanges();
        /*return this.http.get(this.API_ENDPOINT+'/.json')
            .map((resultado)=>{
                const data = resultado.json().lugares;
                return data;
            })*/
    }
    
    public guardarLugar(lugar){
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        //const headers = new Headers({"Content-Type":"application/json"});
        //return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers});
    }
    public editarLugar(lugar){
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    }
    public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        

        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0');
        
    }
    public getLugar(id){
        return this.afDB.object('lugares/'+id).valueChanges();
    }
}
import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Mis Llamados";

  loggin:boolean = false;
  mailUser: string = "";
  idUser: string = "";
  
  constructor(private autorizacionService: AutorizacionService){
      this.autorizacionService.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggin = true;
          this.mailUser = this.autorizacionService.infoUsuario().currentUser.displayName;
          this.idUser = this.autorizacionService.infoUsuario().currentUser.uid;
        }else{
          this.loggin = false;
        }
      },(error)=>{
        this.loggin = false;
      });
  }


  logout(){
    this.autorizacionService.logOut();
  }
}

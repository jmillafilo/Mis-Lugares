import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

   registro:any={};

    constructor(private autorizacionService: AutorizacionService,private router: Router){
        
    }

    login(){
        this.autorizacionService.login(this.registro.email, this.registro.password);

    } 
     facebookLogin(){
        this.autorizacionService.publicFacebookLogin();

    }
} 
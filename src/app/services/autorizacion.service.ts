import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'

@Injectable()
export class AutorizacionService{
    
    constructor(private angularFireAuth: AngularFireAuth,private router: Router){
        this.isLogged();
    }

    publicFacebookLogin(){
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
        .then((result)=>{
            this.router.navigate(['lugares']);
        }).catch((error)=>{
            console.log(error);
         }) ;
    }

    public infoUsuario(){
        return this.angularFireAuth.auth;
    }


    public login = (email, password)=>{

     this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
     .then((response)=>{
        this.router.navigate(['lugares']);
     })
     .catch((error)=>{
         alert("ha ocurrido un problema intente mas tarde");
     });
        
    }

    public isLogged(){
        return this.angularFireAuth.authState
    }


    public logOut(){
            this.angularFireAuth.auth.signOut();
            
        this.router.navigate(['']);
    }
}
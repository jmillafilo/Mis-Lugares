import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AutorizacionService } from './autorizacion.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class MyGuard implements CanActivate{
    path;
    route;

    loggin:boolean = false;

    constructor(private autorizacionService: AutorizacionService,private router: Router){
        this.autorizacionService.isLogged()
        .subscribe((result)=>{
          if(result && result.uid){
            this.loggin = true;
          }else{
            this.loggin = false;
          }
        },(error)=>{
          this.loggin = false;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(!this.loggin){
          this.router.navigate(['/']);
        }
        return this.loggin;
    }
  }
  
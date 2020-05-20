
  import { Injectable } from '@angular/core';
  import { CanActivate, Router } from '@angular/router';

  @Injectable({
    providedIn : 'root'
  })

  export class AppLlamadaGuards implements CanActivate {

    constructor(public router : Router){
    }

    getToken(): Boolean{
      return !!localStorage.getItem('user');
    }

    canActivate(){
      if( this.getToken() ){
          return true;
      } else {
          this.router.navigateByUrl('/');
          return false;
      }
    }

  }

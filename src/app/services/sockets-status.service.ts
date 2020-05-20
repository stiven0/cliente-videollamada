
  import { Injectable } from '@angular/core';
  import { Socket } from 'ngx-socket-io';
  import { Router } from '@angular/router';

  @Injectable({
    providedIn : 'root'
  })

  export class SocketsStatusService {

    public socketStatus = false;

    constructor(public socket : Socket, private router : Router){
      this.detectStatusSockets();
    }

    detectStatusSockets(){
      this.socket.on('connect', () => {
        this.socketStatus = true;
      });

      this.socket.on('disconnect', () => {
        if(localStorage.getItem('user')){
            this.emitMessage('salir-videollamada', localStorage.getItem('user'));
            localStorage.removeItem('user');
        }
        this.router.navigateByUrl('/');

        this.socketStatus = false;
      });
    };

    emitMessage(evento : string, payload? : any, callback? : Function ){
        this.socket.emit(evento, payload, callback);
    };

    listenServidorIngresUsuario(){
     return this.socket.fromEvent('permitir-ingreso');
    };

    listenServidorObtenerUsuarios(){
     return this.socket.fromEvent('obtener-usuarios');
    };

    listenStreamUsuario(){
      return this.socket.fromEvent('stream-usuario');
    }


  }

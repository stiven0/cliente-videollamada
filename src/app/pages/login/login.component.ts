import { Component, OnInit } from '@angular/core';
import { SocketsStatusService } from '@services/sockets-status.service';
import { uuid } from 'uuidv4';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sockets : SocketsStatusService, public router : Router) {
  }

  ngOnInit(): void {
    if( localStorage.getItem('user') ) {
      this.sockets.emitMessage('salir-videollamada', localStorage.getItem('user'));
      localStorage.removeItem('user');
    }


  }

  loginUser(nameUsuario : string){

    if(this.sockets.socketStatus && nameUsuario.length > 0){

      // crear el objecto con datos del usuario
      const user = { name : nameUsuario, _id : uuid() };

      // guardar info en servidor de usuario
      this.sockets.emitMessage('usuario-conectado', user);

      // redirecionar a la vista de llamada
      this.sockets.listenServidorIngresUsuario().subscribe((ingreso:{ingreso:boolean}) => {
        localStorage.setItem('user', nameUsuario);
        if( ingreso ) this.router.navigateByUrl('/app');
        else return;
      });

    } else { return };

  };


}

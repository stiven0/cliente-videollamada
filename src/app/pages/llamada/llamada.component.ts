import { Component, OnInit } from '@angular/core';
import { SocketsStatusService } from '@services/sockets-status.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styleUrls: ['./llamada.component.css']
})
export class LlamadaComponent implements OnInit {
  public usuariosConectadosVideollamada : [{name : string, _id : string}];
  public camaraAbierta : boolean = false;
  public streamVivo : any;
  public interval : any;
  public spinner : boolean = false;

  constructor(public socketsService : SocketsStatusService, public router : Router) { }

  ngOnInit(): void {
    this.obtenerUsuariosVideollamada();
    this.getUsuariosConnect();
    this.obtenerStreamUsuario();
  }

  obtenerUsuariosVideollamada(){
    this.socketsService.emitMessage('obtener-usuarios');
  };

   abrirCamara(){

    if( navigator.mediaDevices ){
          this.camaraAbierta = true;

          this.spinner = true;
          navigator.mediaDevices.getUserMedia({ audio : true, video : { width : 200, height : 200 } })
                   .then(async(stream) => {
                     let videoObject : any = document.getElementsByTagName('video');
                     videoObject[0].srcObject = stream;
                     this.streamVivo = stream;

                     this.spinner = false;
                     this.interval = setInterval(async () => {
                        try {
                          const image = await this.capturarFotoUser(videoObject[0]);

                          // emitir stream de datos
                          this.socketsService.emitMessage('stream-data', {imagen : image});

                        } catch(err) {
                            clearInterval(this.interval);
                            this.spinner = false;
                            console.log('Error en stream de usuario', err);
                        }

                      }, 70);

                   })
                   .catch((err:Error) => {
                     console.log(err);
                     this.spinner = false;
                     this.camaraAbierta = false;
                     if( err.message == 'Permission denied' ){
                        Swal.fire({
                           icon : 'info',
                           title : 'Para acceder a la videollamada debes permitir la utilizacion de la camara y audio'
                        })
                     };

                     if(err.message == 'Could not start video source'){
                         Swal.fire({
                            icon : 'info',
                            title : 'Existe un problema con tu camara'
                         })
                     }
                   });

    } else {
        console.log('No soportado');
    }
  };

  pararCamara(){
    if(this.streamVivo){
      this.streamVivo.getTracks()[0].stop();
      this.streamVivo.getTracks()[1].stop();
      clearInterval(this.interval);

      this.socketsService.emitMessage('salir-videollamada', localStorage.getItem('user'));
      localStorage.removeItem('user');
      this.router.navigateByUrl('/');
    }
  };

  getUsuariosConnect(){
    this.socketsService.listenServidorObtenerUsuarios().subscribe((
      data : {users:[{name : string, _id : string}], userExit : string}) => {

      if(data.users) this.usuariosConectadosVideollamada = data.users;
      else (this.usuariosConectadosVideollamada as any) = data;

      let imageUserHTML : any = document.getElementById('stream-user');
      if( imageUserHTML && imageUserHTML.src ){
            imageUserHTML.src = '';
      }

      if( data.userExit && localStorage.getItem('user') ){
        Swal.fire({
          title: `${ data.userExit } ha salido de la sesion`,
          icon : 'info'
        });
      }


    })

  };

  obtenerStreamUsuario(){
    let imageUserHTML : any = document.getElementById('stream-user');

    this.socketsService.listenStreamUsuario().subscribe(imagen => {
      imageUserHTML.src = imagen;
    });
  };


  capturarFotoUser(htmlTag): Promise<string>{
    let canvas = document.createElement('canvas');

    canvas.setAttribute('width', '280');
    canvas.setAttribute('height', '280');

    let context = canvas.getContext('2d');

    context.drawImage(htmlTag, 0, 0, canvas.width, canvas.height);

    let foto = context.canvas.toDataURL();
    canvas = null;
    context = null;

    return Promise.resolve(foto);
  };

}

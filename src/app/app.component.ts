import { Component } from '@angular/core';
import { SocketsStatusService } from '@services/sockets-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videollamada-app';

  constructor(public sockets : SocketsStatusService){
  }

}

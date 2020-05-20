import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// environments
import { environment } from '@environments/environment';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// sockets
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
const config : SocketIoConfig = { url : environment.url, options : {} };

// pipes
import { ModifyNamePipe } from './pipes/modify-name.pipe';

// rutas
import { ModuleRoutes } from './app-routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LlamadaComponent } from './pages/llamada/llamada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LlamadaComponent,
    ModifyNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SocketIoModule.forRoot(config),
    ModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


  import { RouterModule, Routes } from '@angular/router';
  import { NgModule } from '@angular/core';

  // pages
  import { LoginComponent } from './pages/login/login.component';
  import { LlamadaComponent } from './pages/llamada/llamada.component';

  // guards
  import { AppLlamadaGuards } from '@services/app-llamada.guard.service';


  const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'app', component: LlamadaComponent,  canActivate : [ AppLlamadaGuards ] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ];

  @NgModule({
    imports : [ RouterModule.forRoot(APP_ROUTES) ],
    exports : [ RouterModule ]
  })

  export class ModuleRoutes {}

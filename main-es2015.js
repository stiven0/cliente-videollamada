(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: ModuleRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleRoutes", function() { return ModuleRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_llamada_llamada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/llamada/llamada.component */ "./src/app/pages/llamada/llamada.component.ts");
/* harmony import */ var _services_app_llamada_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/app-llamada.guard.service */ "./src/app/services/app-llamada.guard.service.ts");


// pages


// guards



const APP_ROUTES = [
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'app', component: _pages_llamada_llamada_component__WEBPACK_IMPORTED_MODULE_3__["LlamadaComponent"], canActivate: [_services_app_llamada_guard_service__WEBPACK_IMPORTED_MODULE_4__["AppLlamadaGuards"]] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class ModuleRoutes {
}
ModuleRoutes.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModuleRoutes });
ModuleRoutes.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ModuleRoutes_Factory(t) { return new (t || ModuleRoutes)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModuleRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModuleRoutes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/sockets-status.service */ "./src/app/services/sockets-status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(sockets) {
        this.sockets = sockets;
        this.title = 'videollamada-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sockets_status_service__WEBPACK_IMPORTED_MODULE_1__["SocketsStatusService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_1__["SocketsStatusService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _pipes_modify_name_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/modify-name.pipe */ "./src/app/pipes/modify-name.pipe.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_llamada_llamada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/llamada/llamada.component */ "./src/app/pages/llamada/llamada.component.ts");



// environments

// angular material






// sockets

// pipes

// rutas






const config = { url: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config),
            _app_routing__WEBPACK_IMPORTED_MODULE_12__["ModuleRoutes"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _pages_llamada_llamada_component__WEBPACK_IMPORTED_MODULE_15__["LlamadaComponent"],
        _pipes_modify_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ModifyNamePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["ModuleRoutes"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _pages_llamada_llamada_component__WEBPACK_IMPORTED_MODULE_15__["LlamadaComponent"],
                    _pipes_modify_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ModifyNamePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config),
                    _app_routing__WEBPACK_IMPORTED_MODULE_12__["ModuleRoutes"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/llamada/llamada.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/llamada/llamada.component.ts ***!
  \****************************************************/
/*! exports provided: LlamadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LlamadaComponent", function() { return LlamadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sockets-status.service */ "./src/app/services/sockets-status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _pipes_modify_name_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/modify-name.pipe */ "./src/app/pipes/modify-name.pipe.ts");












function LlamadaComponent_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "modifyName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, usuario_r9.name), " ");
} }
function LlamadaComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LlamadaComponent_ul_4_li_1_Template, 4, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.usuariosConectadosVideollamada);
} }
function LlamadaComponent_video_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 12);
} }
function LlamadaComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} }
function LlamadaComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LlamadaComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LlamadaComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.abrirCamara(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Abrir camara ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LlamadaComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LlamadaComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.pararCamara(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Parar camara y salir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LlamadaComponent {
    constructor(socketsService, router) {
        this.socketsService = socketsService;
        this.router = router;
        this.camaraAbierta = false;
        this.spinner = false;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.obtenerUsuariosVideollamada();
        this.getUsuariosConnect();
        this.obtenerStreamUsuario();
    }
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
    obtenerUsuariosVideollamada() {
        this.socketsService.emitMessage('obtener-usuarios');
    }
    ;
    abrirCamara() {
        if (navigator.mediaDevices) {
            this.camaraAbierta = true;
            this.spinner = true;
            navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 200, height: 200 } })
                .then((stream) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let videoObject = document.getElementsByTagName('video');
                videoObject[0].srcObject = stream;
                this.streamVivo = stream;
                this.spinner = false;
                // creamos el canvas
                let canvas = document.createElement('canvas');
                canvas.setAttribute('width', '280');
                canvas.setAttribute('height', '280');
                let context = canvas.getContext('2d');
                this.interval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    try {
                        const image = yield this.capturarFotoUser(videoObject[0], canvas, context);
                        // emitir stream de datos
                        this.socketsService.emitMessage('stream-data', { imagen: image });
                    }
                    catch (err) {
                        clearInterval(this.interval);
                        if (this.streamVivo) {
                            this.streamVivo.getTracks()[0].stop();
                            this.streamVivo.getTracks()[1].stop();
                        }
                        this.spinner = false;
                        console.log('Error en stream de usuario', err);
                        console.log(err.message);
                        if (err == 'TypeError') {
                            console.log('Yes');
                        }
                        if (err.TypeError) {
                            console.log('Yes 2');
                        }
                    }
                }), 100);
            }))
                .catch((err) => {
                console.log(err);
                this.spinner = false;
                this.camaraAbierta = false;
                if (err.message == 'Permission denied') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'info',
                        title: 'Para acceder a la videollamada debes permitir la utilizacion de la camara y audio'
                    });
                }
                ;
                if (err.message == 'Could not start video source') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'info',
                        title: 'Existe un problema con tu camara'
                    });
                }
            });
        }
        else {
            console.log('No soportado');
        }
    }
    ;
    pararCamara() {
        if (this.streamVivo) {
            this.streamVivo.getTracks()[0].stop();
            this.streamVivo.getTracks()[1].stop();
            clearInterval(this.interval);
            this.socketsService.emitMessage('salir-videollamada', localStorage.getItem('user'));
            localStorage.removeItem('user');
            this.router.navigateByUrl('/');
        }
    }
    ;
    getUsuariosConnect() {
        this.socketsService.listenServidorObtenerUsuarios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed$)).subscribe((data) => {
            if (data.users)
                this.usuariosConectadosVideollamada = data.users;
            else
                this.usuariosConectadosVideollamada = data;
            if (this.streamVivo) {
                this.streamVivo.getTracks()[0].stop();
                this.streamVivo.getTracks()[1].stop();
            }
            let imageUserHTML = document.getElementById('stream-user');
            if (imageUserHTML && imageUserHTML.src) {
                console.log(imageUserHTML);
                imageUserHTML.src = 'assets/noimage.png';
            }
            if (data.userExit && localStorage.getItem('user')) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: `${data.userExit} ha salido de la sesion`,
                    icon: 'info'
                });
            }
        });
    }
    ;
    obtenerStreamUsuario() {
        let imageUserHTML = document.getElementById('stream-user');
        this.socketsService.listenStreamUsuario().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed$)).subscribe(imagen => {
            imageUserHTML.src = imagen;
        });
    }
    ;
    capturarFotoUser(htmlTag, canvas, context) {
        if (htmlTag) {
            context.drawImage(htmlTag, 0, 0, canvas.width, canvas.height);
            let foto = context.canvas.toDataURL();
            return Promise.resolve(foto);
        }
    }
    ;
}
LlamadaComponent.ɵfac = function LlamadaComponent_Factory(t) { return new (t || LlamadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sockets_status_service__WEBPACK_IMPORTED_MODULE_5__["SocketsStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
LlamadaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LlamadaComponent, selectors: [["app-llamada"]], decls: 13, vars: 6, consts: [[1, "container_principal", "animated", "fadeIn", "fast"], [1, "sidebar"], [4, "ngIf"], [1, "videollamada_section"], ["id", "player", "controls", "", "autoplay", "", 4, "ngIf"], ["src", "assets/noimage.png", "alt", "noimage", "height", "200", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["id", "stream-user"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-circle", "icon_connect"], ["id", "player", "controls", "", "autoplay", ""], ["src", "assets/noimage.png", "alt", "noimage", "height", "200"], [1, "spinner"], ["color", "accent"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "fa", "fa-camera"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "fas", "fa-stop-circle"]], template: function LlamadaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Usuarios conectados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LlamadaComponent_ul_4_Template, 2, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LlamadaComponent_video_7_Template, 1, 0, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LlamadaComponent_img_8_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LlamadaComponent_section_9_Template, 2, 0, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LlamadaComponent_button_10_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LlamadaComponent_button_11_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuariosConectadosVideollamada);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.camaraAbierta);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.camaraAbierta);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.camaraAbierta);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.camaraAbierta);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_pipes_modify_name_pipe__WEBPACK_IMPORTED_MODULE_10__["ModifyNamePipe"]], styles: [".container_principal[_ngcontent-%COMP%] {\r\n  height: 656px;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 20px 0px;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #3F51B5;\r\n  box-shadow: 0 1px 6px 0 #555;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n  color: rgb(254, 254, 254);\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.icon_connect[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  margin-right: 6px;\r\n  color: rgb(93, 200, 55);\r\n}\r\n\r\n.videollamada_section[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n\r\n.videollamada_section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  box-shadow: 0 1px 6px 0 #555;\r\n  width: 50%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.videollamada_section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.videollamada_section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n\r\n#stream-user[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.container_principal[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 20% 80%;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 760px) {\r\n  .container_principal[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    grid-template-rows: 20% 80%;\r\n  }\r\n\r\n  .videollamada_section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGxhbWFkYS9sbGFtYWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0EsYUFBYTs7QUFDYjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0Esc0JBQXNCOztBQUN0QjtFQUNFO0lBQ0UscUNBQXFDO0lBQ3JDLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7Ozs7QUFLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xsYW1hZGEvbGxhbWFkYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyX3ByaW5jaXBhbCB7XHJcbiAgaGVpZ2h0OiA2NTZweDtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVyIC5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgIzU1NTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uX2Nvbm5lY3Qge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBjb2xvcjogcmdiKDkzLCAyMDAsIDU1KTtcclxufVxyXG5cclxuLnZpZGVvbGxhbWFkYV9zZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnZpZGVvbGxhbWFkYV9zZWN0aW9uIGRpdiB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgIzU1NTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52aWRlb2xsYW1hZGFfc2VjdGlvbiBkaXYgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi52aWRlb2xsYW1hZGFfc2VjdGlvbiBkaXYgdmlkZW8ge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNzdHJlYW0tdXNlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qIGNzcyBncmlkICovXHJcbi5jb250YWluZXJfcHJpbmNpcGFsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxufVxyXG5cclxuXHJcbi8qIGRpc2XDsW8gcmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gIC5jb250YWluZXJfcHJpbmNpcGFsIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA4MCU7XHJcbiAgfVxyXG5cclxuICAudmlkZW9sbGFtYWRhX3NlY3Rpb24gZGl2IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LlamadaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-llamada',
                templateUrl: './llamada.component.html',
                styleUrls: ['./llamada.component.css']
            }]
    }], function () { return [{ type: _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_5__["SocketsStatusService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuidv4 */ "./node_modules/uuidv4/build/lib/uuidv4.js");
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sockets-status.service */ "./src/app/services/sockets-status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function (a0, a1) { return { "bloqueado": a0, "habilitado": a1 }; };
class LoginComponent {
    constructor(sockets, router) {
        this.sockets = sockets;
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('user')) {
            this.sockets.emitMessage('salir-videollamada', localStorage.getItem('user'));
            localStorage.removeItem('user');
        }
    }
    loginUser(nameUsuario) {
        if (this.sockets.socketStatus && nameUsuario.length > 0) {
            // crear el objecto con datos del usuario
            const user = { name: nameUsuario, _id: Object(uuidv4__WEBPACK_IMPORTED_MODULE_1__["uuid"])() };
            // guardar info en servidor de usuario
            this.sockets.emitMessage('usuario-conectado', user);
            // redirecionar a la vista de llamada
            this.sockets.listenServidorIngresUsuario().subscribe((ingreso) => {
                localStorage.setItem('user', nameUsuario);
                if (ingreso)
                    this.router.navigateByUrl('/app');
                else
                    return;
            });
        }
        else {
            return;
        }
        ;
    }
    ;
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sockets_status_service__WEBPACK_IMPORTED_MODULE_2__["SocketsStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 4, consts: [["color", "primary", 1, "animated", "fadeIn", "fast"], [1, "fas", "fa-video"], [1, "div_name", "animated", "fadeIn", "fast"], ["matInput", "", "placeholder", "Ingresa tu nombre....", "autocomplete", "off"], ["nameInput", ""], ["mat-raised-button", "", "color", "primary", 3, "ngClass", "click"], [1, "fas", "fa-sign-in-alt"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " VideoChat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.loginUser(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, !ctx.sockets.socketStatus, ctx.sockets.socketStatus));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".div_name[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);\r\n    margin: 50px auto;\r\n    padding: 50px 0px;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 50%;\r\n    margin: 20px auto;\r\n    line-height: 38px;\r\n  }\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 10px auto;\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .bloqueado[_ngcontent-%COMP%] {\r\n    cursor: no-drop;\r\n    background-color: rgba(116, 133, 222, 0.4);\r\n  }\r\n\r\n  .habilitado[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 760px){\r\n    .div_name[_ngcontent-%COMP%] {\r\n      width: 80%;\r\n      border-radius: 10px;\r\n    }\r\n\r\n    .mat-form-field[_ngcontent-%COMP%] {\r\n      width: 65%;\r\n    }\r\n\r\n    button[_ngcontent-%COMP%] {\r\n      width: 65%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRTtNQUNFLFVBQVU7TUFDVixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmRpdl9uYW1lIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDMyLDMzLDM2LC4yOCk7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5ibG9xdWVhZG8ge1xyXG4gICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTYsIDEzMywgMjIyLCAwLjQpO1xyXG4gIH1cclxuXHJcbiAgLmhhYmlsaXRhZG8ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLyogZGlzZcOxbyByZXNwb25zaXZlICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xyXG4gICAgLmRpdl9uYW1lIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_sockets_status_service__WEBPACK_IMPORTED_MODULE_2__["SocketsStatusService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/modify-name.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/modify-name.pipe.ts ***!
  \*******************************************/
/*! exports provided: ModifyNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyNamePipe", function() { return ModifyNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModifyNamePipe {
    constructor() {
    }
    transform(name) {
        let nameModify = name.split(' ')[0][0].toUpperCase() + name.split(' ')[0].substr(1);
        return nameModify;
    }
}
ModifyNamePipe.ɵfac = function ModifyNamePipe_Factory(t) { return new (t || ModifyNamePipe)(); };
ModifyNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "modifyName", type: ModifyNamePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifyNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'modifyName'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/app-llamada.guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/app-llamada.guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AppLlamadaGuards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLlamadaGuards", function() { return AppLlamadaGuards; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppLlamadaGuards {
    constructor(router) {
        this.router = router;
    }
    getToken() {
        return !!localStorage.getItem('user');
    }
    canActivate() {
        if (this.getToken()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
AppLlamadaGuards.ɵfac = function AppLlamadaGuards_Factory(t) { return new (t || AppLlamadaGuards)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppLlamadaGuards.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppLlamadaGuards, factory: AppLlamadaGuards.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLlamadaGuards, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sockets-status.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/sockets-status.service.ts ***!
  \****************************************************/
/*! exports provided: SocketsStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsStatusService", function() { return SocketsStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SocketsStatusService {
    constructor(socket, router) {
        this.socket = socket;
        this.router = router;
        this.socketStatus = false;
        this.detectStatusSockets();
    }
    detectStatusSockets() {
        this.socket.on('connect', () => {
            console.log('conectado');
            this.socketStatus = true;
        });
        this.socket.on('disconnect', () => {
            console.log('desconectado');
            if (localStorage.getItem('user')) {
                this.emitMessage('salir-videollamada', localStorage.getItem('user'));
                localStorage.removeItem('user');
            }
            this.router.navigateByUrl('/');
            this.socketStatus = false;
        });
    }
    ;
    emitMessage(evento, payload, callback) {
        this.socket.emit(evento, payload, callback);
    }
    ;
    listenServidorIngresUsuario() {
        return this.socket.fromEvent('permitir-ingreso');
    }
    ;
    listenServidorObtenerUsuarios() {
        return this.socket.fromEvent('obtener-usuarios');
    }
    ;
    listenStreamUsuario() {
        return this.socket.fromEvent('stream-usuario');
    }
}
SocketsStatusService.ɵfac = function SocketsStatusService_Factory(t) { return new (t || SocketsStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SocketsStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketsStatusService, factory: SocketsStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketsStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO 1\Desktop\app-videollamadas\videollamada-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
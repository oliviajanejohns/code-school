(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to home page
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor, JwtInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorProvider", function() { return JwtInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());

var JwtInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: JwtInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _coding_coding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coding/coding.component */ "./src/app/coding/coding.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'coding', component: _coding_coding_component__WEBPACK_IMPORTED_MODULE_4__["CodingComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'dashboard/settings', component: _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"router.url === '/'\" class=\"navbar navbar-expand-lg fixed-top\" [ngClass] = \"(scrolled ? 'bg-white' : 'navbar-transparent')\" >\n  <div class=\"container underline\"> \n  <a class=\"navbar-brand col-9\" [ngClass] = \"(scrolled ? 'title' : 'title-transparent')\" href=\"/\">Code Space</a>\n  <button class=\"navbar-toggler\" [ngClass]=\"(scrolled ? 'navbar-light' : 'navbar-dark')\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse col-3\" id=\"navbarToggle\">\n    <nav aria-label=\"links\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"nav-item navbar-right\">\n              <a *ngIf=\"router.url === '/'\"  class=\"nav-link\" [ngClass] = \"(scrolled ? 'logIn' : 'logIn-transparent')\" (click)=\"openLoginModal()\">Log In </a>\n          </li>\n          <li class=\"nav-item navbar-right\">\n            <a *ngIf=\"router.url === '/'\" class=\"nav-link\" [ngClass] = \"(scrolled ? 'signUp' : 'signUp-transparent')\" (click)=\"openSignupModal()\">Sign Up</a>\n          </li>\n        </ul>\n    </nav>\n  </div>\n  </div>\n</nav> \n\n<nav *ngIf=\"router.url != '/'\" class=\"navbar navbar-expand-lg fixed-top bg-white\">\n    <div class=\"container underline\"> \n    <a class=\"navbar-brand col-9 title\" href=\"/dashboard\">Code Space</a>\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse col-3\" id=\"navbarToggle\">\n      <nav aria-label=\"links\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"nav-item navbar-right\">\n              <a class=\"nav-link logIn\" (click)=\"logout()\">Log Out </a>\n            </li>\n          </ul>\n      </nav>\n    </div>\n    </div>\n  </nav>\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer class = \"bg-dark\"  *ngIf=\"router.url !== '/coding'\">\n  <div class=\"container space-2 footer navbar-fixed-bottom\">\n      <div class=\"text-center footer\">All rights reserved. © Code Space </div>\n  </div>\n</footer>\n\n<!-- Footer -->\n<footer class = \"bg-dark code\"  *ngIf=\"router.url === '/coding'\">\n  <div class=\"container space-2 footer navbar-fixed-bottom\">\n      <div class=\"text-center footer\">All rights reserved. © Code Space </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-2 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.footer {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 10px; }\n\n.links {\n  float: right; }\n\n.code {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  z-index: 1000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWlCO0VBQ2pCLHFCQUFvQixFQUNwQjs7QUFFRDtFQUNDLGdDQUErQjtFQUMvQixnQkFBZSxFQUVmOztBQU1EO0VBQ0MsYUFBWSxFQUNaOztBQUlEO0VBQ0MsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsWUFBVztFQUNYLHlCQUF3QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZS0ye1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXIge1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuXHRmb250LXNpemU6IDEwcHg7XG5cdC8vIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLy8gLm91dGVye1xuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB9XG5cbi5saW5rc3tcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuLy8gLmJnLWRhcmt7XG4vLyB9XG5cbi5jb2Rle1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuXHR6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, authService, router, doc) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.doc = doc;
        this.title = 'code-space';
        this.scrolled = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AppComponent.prototype.onWindowScroll = function () {
        var number = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;
        if (number > 50) {
            this.scrolled = true;
        }
        else {
            this.scrolled = false;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    AppComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        this.authService.logout();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.openSignupModal = function () {
        this.modalRef = this.modalService.show(_home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]);
    };
    AppComponent.prototype.openLoginModal = function () {
        this.modalRef = this.modalService.show(_home_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
    };
    AppComponent.prototype.close = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            Document])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    apiUrl: 'http://localhost:3000'
};


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/carousel/carousel.component */ "./src/app/home/carousel/carousel.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _coding_coding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coding/coding.component */ "./src/app/coding/coding.component.ts");
/* harmony import */ var _dashboard_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/recommendation/recommendation.component */ "./src/app/dashboard/recommendation/recommendation.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _coding_content_intro_intro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./coding/content/intro/intro.component */ "./src/app/coding/content/intro/intro.component.ts");
/* harmony import */ var _dashboard_friends_friends_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/friends/friends.component */ "./src/app/dashboard/friends/friends.component.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _coding_content_lessons_chapter1_exercise1_exercise1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/exercise1/exercise1.component */ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.ts");
/* harmony import */ var _coding_content_lessons_chapter1_lesson1_lesson1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/lesson1/lesson1.component */ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.ts");
/* harmony import */ var _coding_content_lessons_chapter1_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/lesson2/lesson2.component */ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.ts");
/* harmony import */ var _coding_content_lessons_chapter1_lesson3_lesson3_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/lesson3/lesson3.component */ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.ts");
/* harmony import */ var _coding_content_lessons_chapter1_lesson4_lesson4_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/lesson4/lesson4.component */ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.ts");
/* harmony import */ var _coding_content_lessons_chapter1_lesson5_lesson5_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./coding/content/lessons/chapter1/lesson5/lesson5.component */ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_lesson6_lesson6_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/lesson6/lesson6.component */ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_lesson7_lesson7_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/lesson7/lesson7.component */ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_lesson8_lesson8_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/lesson8/lesson8.component */ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_lesson9_lesson9_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/lesson9/lesson9.component */ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_lesson10_lesson10_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/lesson10/lesson10.component */ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.ts");
/* harmony import */ var _coding_content_lessons_chapter3_lesson11_lesson11_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./coding/content/lessons/chapter3/lesson11/lesson11.component */ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.ts");
/* harmony import */ var _coding_content_lessons_chapter3_lesson12_lesson12_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./coding/content/lessons/chapter3/lesson12/lesson12.component */ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.ts");
/* harmony import */ var _coding_content_lessons_chapter3_lesson13_lesson13_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./coding/content/lessons/chapter3/lesson13/lesson13.component */ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.ts");
/* harmony import */ var _coding_content_lessons_chapter3_lesson14_lesson14_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./coding/content/lessons/chapter3/lesson14/lesson14.component */ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.ts");
/* harmony import */ var _coding_content_lessons_chapter4_lesson15_lesson15_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./coding/content/lessons/chapter4/lesson15/lesson15.component */ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.ts");
/* harmony import */ var _coding_content_lessons_chapter4_lesson16_lesson16_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./coding/content/lessons/chapter4/lesson16/lesson16.component */ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.ts");
/* harmony import */ var _coding_content_lessons_chapter4_lesson17_lesson17_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./coding/content/lessons/chapter4/lesson17/lesson17.component */ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.ts");
/* harmony import */ var _coding_content_lessons_chapter4_lesson18_lesson18_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./coding/content/lessons/chapter4/lesson18/lesson18.component */ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_lesson19_lesson19_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/lesson19/lesson19.component */ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_lesson20_lesson20_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/lesson20/lesson20.component */ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_lesson21_lesson21_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/lesson21/lesson21.component */ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_lesson22_lesson22_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/lesson22/lesson22.component */ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_lesson23_lesson23_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/lesson23/lesson23.component */ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.ts");
/* harmony import */ var _coding_content_lessons_chapter2_exercise2_exercise2_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./coding/content/lessons/chapter2/exercise2/exercise2.component */ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.ts");
/* harmony import */ var _coding_content_lessons_chapter3_exercise3_exercise3_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./coding/content/lessons/chapter3/exercise3/exercise3.component */ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.ts");
/* harmony import */ var _coding_content_lessons_chapter4_exercise4_exercise4_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./coding/content/lessons/chapter4/exercise4/exercise4.component */ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.ts");
/* harmony import */ var _dashboard_settings_delete_delete_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./dashboard/settings/delete/delete.component */ "./src/app/dashboard/settings/delete/delete.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _coding_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./coding/sidebar/sidebar.component */ "./src/app/coding/sidebar/sidebar.component.ts");
/* harmony import */ var _coding_content_completed_completed_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./coding/content/completed/completed.component */ "./src/app/coding/content/completed/completed.component.ts");
/* harmony import */ var _coding_content_lessons_chapter5_exercise5_exercise5_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./coding/content/lessons/chapter5/exercise5/exercise5.component */ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.ts");
/* harmony import */ var _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./dashboard/reset/reset.component */ "./src/app/dashboard/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _coding_coding_component__WEBPACK_IMPORTED_MODULE_9__["CodingComponent"],
                _dashboard_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_10__["RecommendationComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_14__["ChatComponent"],
                _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
                _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _dashboard_friends_friends_component__WEBPACK_IMPORTED_MODULE_25__["FriendsComponent"],
                _home_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _coding_content_intro_intro_component__WEBPACK_IMPORTED_MODULE_24__["IntroComponent"],
                _coding_content_lessons_chapter1_exercise1_exercise1_component__WEBPACK_IMPORTED_MODULE_27__["Exercise1Component"],
                _coding_content_lessons_chapter1_lesson1_lesson1_component__WEBPACK_IMPORTED_MODULE_28__["Lesson1Component"],
                _coding_content_lessons_chapter1_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_29__["Lesson2Component"],
                _coding_content_lessons_chapter1_lesson3_lesson3_component__WEBPACK_IMPORTED_MODULE_30__["Lesson3Component"],
                _coding_content_lessons_chapter1_lesson4_lesson4_component__WEBPACK_IMPORTED_MODULE_31__["Lesson4Component"],
                _coding_content_lessons_chapter1_lesson5_lesson5_component__WEBPACK_IMPORTED_MODULE_32__["Lesson5Component"],
                _coding_content_lessons_chapter2_lesson6_lesson6_component__WEBPACK_IMPORTED_MODULE_33__["Lesson6Component"],
                _coding_content_lessons_chapter2_lesson7_lesson7_component__WEBPACK_IMPORTED_MODULE_34__["Lesson7Component"],
                _coding_content_lessons_chapter2_lesson8_lesson8_component__WEBPACK_IMPORTED_MODULE_35__["Lesson8Component"],
                _coding_content_lessons_chapter2_lesson9_lesson9_component__WEBPACK_IMPORTED_MODULE_36__["Lesson9Component"],
                _coding_content_lessons_chapter2_lesson10_lesson10_component__WEBPACK_IMPORTED_MODULE_37__["Lesson10Component"],
                _coding_content_lessons_chapter3_lesson11_lesson11_component__WEBPACK_IMPORTED_MODULE_38__["Lesson11Component"],
                _coding_content_lessons_chapter3_lesson12_lesson12_component__WEBPACK_IMPORTED_MODULE_39__["Lesson12Component"],
                _coding_content_lessons_chapter3_lesson13_lesson13_component__WEBPACK_IMPORTED_MODULE_40__["Lesson13Component"],
                _coding_content_lessons_chapter3_lesson14_lesson14_component__WEBPACK_IMPORTED_MODULE_41__["Lesson14Component"],
                _coding_content_lessons_chapter4_lesson15_lesson15_component__WEBPACK_IMPORTED_MODULE_42__["Lesson15Component"],
                _coding_content_lessons_chapter4_lesson16_lesson16_component__WEBPACK_IMPORTED_MODULE_43__["Lesson16Component"],
                _coding_content_lessons_chapter4_lesson17_lesson17_component__WEBPACK_IMPORTED_MODULE_44__["Lesson17Component"],
                _coding_content_lessons_chapter4_lesson18_lesson18_component__WEBPACK_IMPORTED_MODULE_45__["Lesson18Component"],
                _coding_content_lessons_chapter5_lesson19_lesson19_component__WEBPACK_IMPORTED_MODULE_46__["Lesson19Component"],
                _coding_content_lessons_chapter5_lesson20_lesson20_component__WEBPACK_IMPORTED_MODULE_47__["Lesson20Component"],
                _coding_content_lessons_chapter5_lesson21_lesson21_component__WEBPACK_IMPORTED_MODULE_48__["Lesson21Component"],
                _coding_content_lessons_chapter5_lesson22_lesson22_component__WEBPACK_IMPORTED_MODULE_49__["Lesson22Component"],
                _coding_content_lessons_chapter5_lesson23_lesson23_component__WEBPACK_IMPORTED_MODULE_50__["Lesson23Component"],
                _coding_content_lessons_chapter2_exercise2_exercise2_component__WEBPACK_IMPORTED_MODULE_51__["Exercise2Component"],
                _coding_content_lessons_chapter3_exercise3_exercise3_component__WEBPACK_IMPORTED_MODULE_52__["Exercise3Component"],
                _coding_content_lessons_chapter4_exercise4_exercise4_component__WEBPACK_IMPORTED_MODULE_53__["Exercise4Component"],
                _dashboard_settings_delete_delete_component__WEBPACK_IMPORTED_MODULE_54__["DeleteComponent"],
                _coding_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_56__["SidebarComponent"],
                _coding_content_completed_completed_component__WEBPACK_IMPORTED_MODULE_57__["CompletedComponent"],
                _coding_content_lessons_chapter5_exercise5_exercise5_component__WEBPACK_IMPORTED_MODULE_58__["Exercise5Component"],
                _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_59__["ResetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_11__["CodemirrorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_26__["TypeaheadModule"].forRoot(),
                ngx_avatar__WEBPACK_IMPORTED_MODULE_55__["AvatarModule"]
            ],
            providers: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"],
                _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_22__["JwtInterceptorProvider"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticationService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _home_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
                _dashboard_friends_friends_component__WEBPACK_IMPORTED_MODULE_25__["FriendsComponent"],
                _dashboard_settings_delete_delete_component__WEBPACK_IMPORTED_MODULE_54__["DeleteComponent"],
                _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_59__["ResetComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <!-- Sidebar -->\n<ul class=\"sidebar navbar-nav\">\n  <li class=\"nav-item divider\">\n      Menu\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/dashboard/\">\n      <span data-feather=\"home\"></span>\n      Dashboard <span class=\"sr-only\">(current)</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/coding/\">\n      <span data-feather=\"\"></span>\n      Code\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" href=\"/chat/\">\n      <span data-feather=\"\"></span>\n      Chat\n    </a>\n  </li>\n  <li class=\"nav-item divider\">\n      More\n  </li>\n  <li class=\"nav-item\">\n      <a class=\"nav-link help\" (click)=\"openModal()\">\n        <span data-feather=\"\"></span>\n        Help\n      </a>\n  </li>\n  <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/dashboard/settings/\">\n        <span data-feather=\"\"></span>\n        Settings\n      </a>\n  </li>\n</ul>\n\n  <!-- Main Content -->\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"/chat/\">Chat</a>\n          </li>\n        </ol>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left; }\n\n.about {\n  padding-left: 50px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px; }\n\n.text {\n  color: black;\n  font-weight: 350; }\n\n.chat {\n  padding-top: 20px; }\n\n.help {\n  color: #21c87a !important; }\n\n.italic {\n  font-style: italic; }\n\n.label {\n  font-size: 14px;\n  font-weight: 300; }\n\n.confirm {\n  font-weight: 300;\n  font-size: 15px; }\n\n.container-fluid {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 2.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUdEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0Usb0JBQW1CLEVBQ3BCLEVBQUE7O0FBR0g7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsc0NBQXFDO0VBQ3JDLDhDQUE0QyxFQUU3Qzs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHNDQUFxQztFQUNyQyxVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCLEVBRXhCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLE9BQU0sRUFDUDtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBQ0Q7SUFDRSw4QkFBNkI7SUFDN0IsbUNBQWtDO0lBQ2xDLDJCQUEwQjtJQUMxQixzQ0FBcUM7SUFDckMsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QscUJBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLFVBQVM7RUFDVCwyQkFBMEI7RUFDMUIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6Qiw0QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUdELHFCQUFxQjs7QUFDckI7RUFDQSxXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2Q7O0FBR0Q7RUFDQSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2Q7O0FBRUQ7RUFDQSxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVyxFQUNWOztBQUVEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0Esb0VBQW1FO0VBQ25FLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUNBLEVBQUM7O0FBR0Q7RUFDQSxhQUFZO0VBQ1osaUJBQWdCLEVBQ2Y7O0FBRUQ7RUFDQSxrQkFBaUIsRUFDaEI7O0FBRUQ7RUFDQSwwQkFBeUIsRUFDeEI7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxnQkFBZTtFQUNmLGlCQUFnQixFQUNmOztBQUVEO0VBQ0EsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2Q7O0FBRUQ7RUFDQSxxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLHVCQUFzQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1NnB4O1xufVxuXG4jd3JhcHBlciAjY29udGVudC13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbmJvZHkuZml4ZWQtbmF2ICNjb250ZW50LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuXG5ib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuXG5ib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkuZml4ZWQtbmF2ICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XG4gIH1cbiAgYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gIH1cbn1cblxuLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICB0b3A6IDAuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLW5hdiAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHggLSAzNXB4KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gIC8vIHBhZGRpbmc6IDYwcHggMCAwO1xufVxuXG4uc2lkZWJhciAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZWZ0OiBjYWxjKDEyMHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICBib3R0b206IDA7XG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhciAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci50b2dnbGVkIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgICAvLyBwYWRkaW5nOiA2MHB4IDAgMDtcbiAgfVxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgd2lkdGg6IDIyNXB4O1xuICB9XG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiBjYWxjKDEyMHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc2lkZWJhci5maXhlZC10b3Age1xuICB0b3A6IDU2cHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZGl2aWRlcntcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6ICM3YjdiN2I7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IC44NDYycmVtO1xufVxuXG4uYWN0aXZle1xuICBjb2xvcjogIzU2NDhmZiAhaW1wb3J0YW50OyBcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudHtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmt7XG4gIGNvbG9yOiAjMjFjODdhO1xufVxuXG5cbi8qKiAgd2VsY29tZSBjYXJkICoqL1xuLmRlc2NyaXB0aW9ue1xucGFkZGluZzogMDtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmctbGVmdDogMjBweDtcbmZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcntcbmNvbG9yOiB3aGl0ZTtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5mb250LXNpemU6IDMwcHg7XG59XG5cblxuLm1lc3NhZ2V7XG5jb2xvcjogd2hpdGU7XG5mb250LXdlaWdodDogMTUwO1xuZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXZhdGFye1xuYm9yZGVyLXJhZGl1czogNXJlbTtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xud2lkdGg6IDVyZW07XG5oZWlnaHQ6IDVyZW07XG5mbG9hdDogbGVmdDtcbn1cblxuLmFib3V0e1xucGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uZ3JhZGllbnR7XG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTY0OGZmIDAlLCAjMjFjODdhIDEwMCUpO1xuYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuYmFja2dyb3VuZC1wb3NpdGlvbi15OiBpbml0aWFsO1xuYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG5iYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG5iYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xucG9zaXRpb246IHJlbGF0aXZlO1xuaGVpZ2h0OiAxMi41cmVtO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmRpc3BsYXk6IGZsZXg7XG5ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xubWFyZ2luLWJvdHRvbTogNDBweFxufVxuXG5cbi50ZXh0e1xuY29sb3I6IGJsYWNrO1xuZm9udC13ZWlnaHQ6IDM1MDtcbn1cblxuLmNoYXR7XG5wYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhlbHB7XG5jb2xvcjogIzIxYzg3YSAhaW1wb3J0YW50O1xufVxuXG4uaXRhbGlje1xuZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGFiZWx7XG5mb250LXNpemU6IDE0cHg7XG5mb250LXdlaWdodDogMzAwO1xufVxuXG4uY29uZmlybXtcbmZvbnQtd2VpZ2h0OiAzMDA7XG5mb250LXNpemU6IDE1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG5wYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbnBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbnBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/coding/coding.component.html":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"code\">\n    <div class=\"split-view\">\n        <!-- LESSON -->\n        <button type=\"button\" class=\"btn btn-lg btn-secondary show\" (click)=\"toggle()\"><i class=\"fa fa-arrow-circle-o-right rotate\" aria-hidden=\"true\"></i>\n        </button>\n\n        <div class=\"col-5 noPad\">\n            <app-sidebar *ngIf=\"show\"></app-sidebar>\n            <div class=\"gradient\">\n                <ol _ngcontent-c1=\"\" class=\"breadcrumb\"><li _ngcontent-c1=\"\" class=\"breadcrumb-item lessonTitle\">Introducing Python</li></ol>            \n                <app-intro class=\"\" *ngIf=\"count==0\"></app-intro>\n                <!-- CHAPTER 1 -->\n                <app-lesson1 *ngIf=\"count==1\"></app-lesson1>\n                <app-lesson2 *ngIf=\"count==2\"></app-lesson2>\n                <app-lesson3 *ngIf=\"count==3\"></app-lesson3>\n                <app-lesson4 *ngIf=\"count==4\"></app-lesson4>\n                <app-lesson5 *ngIf=\"count==5\"></app-lesson5>\n                <app-exercise1 *ngIf=\"count==6\"></app-exercise1>\n                \n                <!-- CHAPTER 2 -->\n                <app-lesson6 *ngIf=\"count==7\"></app-lesson6>\n                <app-lesson7 *ngIf=\"count==8\"></app-lesson7>\n                <app-lesson8 *ngIf=\"count==9\"></app-lesson8>\n                <app-lesson9 *ngIf=\"count==10\"></app-lesson9>\n                <app-lesson10 *ngIf=\"count==11\"></app-lesson10>\n                <app-exercise2 *ngIf=\"count==12\"></app-exercise2>\n\n                <!-- CHAPTER 3 -->\n                <app-lesson11 *ngIf=\"count==13\"></app-lesson11>\n                <app-lesson12 *ngIf=\"count==14\"></app-lesson12>\n                <app-lesson13 *ngIf=\"count==15\"></app-lesson13>\n                <app-lesson14 *ngIf=\"count==16\"></app-lesson14>\n                <app-exercise3 *ngIf=\"count==17\"></app-exercise3>\n\n                <!-- CHAPTER 4 -->\n                <app-lesson15 *ngIf=\"count==18\"></app-lesson15>\n                <app-lesson16 *ngIf=\"count==19\"></app-lesson16>\n                <app-lesson17 *ngIf=\"count==20\"></app-lesson17>\n                <app-lesson18 *ngIf=\"count==21\"></app-lesson18>\n                <app-exercise4 *ngIf=\"count==22\"></app-exercise4>\n\n                <!-- CHAPTER 5 -->\n                <app-lesson19 *ngIf=\"count==23\"></app-lesson19>\n                <app-lesson20 *ngIf=\"count==24\"></app-lesson20>\n                <app-lesson21 *ngIf=\"count==25\"></app-lesson21>\n                <app-lesson22 *ngIf=\"count==26\"></app-lesson22>\n                <app-lesson23 *ngIf=\"count==27\"></app-lesson23>\n                <app-exercise5 *ngIf=\"count==28\"></app-exercise5>\n                <app-completed *ngIf=\"count==29\"></app-completed>\n\n            </div>\n            <div class=\"container\">\n                <div *ngIf=\"count==5 || count ==11 || count == 16 || count == 21\"  class=\"alert alert-info\">\n                    <strong>Please note!</strong> You will not be able to view this content after proceeding to the exercise. Are you sure you'd like to continue?\n                </div>   \n                <div *ngIf=\"(count==6 && this.correct == true) || (count ==12 && this.correct == true) || (count == 17 && this.correct == true) || (count == 22 && this.correct == true) || (count == 28 && this.correct == true)\"  class=\"alert alert-success\">\n                        <strong>Congratulations!</strong> You can now move onto the next level! Or take a break and come back later. Simply click 'next', to store your progress\n                </div>   \n                \n                \n            </div>\n            <div class=\"footer-code col-12\">\n                <div class=\"container space-2\">\n                    <hr>\n                    <button type=\"button\" class=\"btn btn-lg btn-primary back\" (click)=\"back()\"><span>Back</span></button>\n                    <button type=\"button\" class=\"btn btn-lg btn-primary next\" (click)=\"next()\"><span>Next</span></button>\n                </div>                  \n            </div>\n        </div>\n        <div class=\"col-7 column2\">\n            <div class=\"col-12 editor\">\n\n<!-- Practise -->\n<textarea *ngIf=\"count==0 || count==1 || count==2 || count==3 || count==4 || count==5\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n\n<!-- Exercise 1 -->\n<textarea id=\"textbox\" *ngIf=\"count==6\" name=\"textbox\"  class=\"textbox\" rows=\"4\" cols=\"50\">\n# A. donuts\n# Given an int count of a number of donuts, return a string\n# of the form 'Number of donuts: <count>', where <count> is the number\n# passed in. However, if the count is 10 or more, then use the word 'many'\n# instead of the actual count.\n# So donuts(5) returns 'Number of donuts: 5'\n# and donuts(23) returns 'Number of donuts: many'\ndef donuts(count):\n    # +++your code here+++\n    return\n\n\n# B. both_ends\n# Given a string s, return a string made of the first 2\n# and the last 2 chars of the original string,\n# so 'spring' yields 'spng'. However, if the string length\n# is less than 2, return instead the empty string.\ndef both_ends(s):\n    # +++your code here+++\n    return\n\n\n# C. fix_start\n# Given a string s, return a string\n# where all occurences of its first char have\n# been changed to '*', except do not change\n# the first char itself.\n# e.g. 'babble' yields 'ba**le'\n# Assume that the string is length 1 or more.\n# Hint: s.replace(stra, strb) returns a version of string s\n# where all instances of stra have been replaced by strb.\ndef fix_start(s):\n    # +++your code here+++\n      return\n    \n    \n# D. MixUp\n# Given strings a and b, return a single string with a and b separated\n# by a space '<a> <b>', except swap the first 2 chars of each string.\n# e.g.\n#   'mix', pod' -> 'pox mid'\n#   'dog', 'dinner' -> 'dig donner'\n# Assume a and b are length 2 or more.\ndef mix_up(a, b):\n    # +++your code here+++\n    return\n\n\n# Provided simple test() function used in main() to print\n# what each function returns vs. what it's supposed to return.\ndef test(got, expected):\n    if got == expected:\n        prefix = ' OK '\n    else:\n        prefix = '  Try Again '\n    print '%s got: %s expected: %s' % (prefix, repr(got), repr(expected))\n\n\n# Provided main() calls the above functions with interesting inputs,\n# using test() to check if each result is correct or not.\ndef main():\n    print 'donuts'\n    # Each line calls donuts, compares its result to the expected for that call.\n    test(donuts(4), 'Number of donuts: 4')\n    test(donuts(9), 'Number of donuts: 9')\n    test(donuts(10), 'Number of donuts: many')\n    test(donuts(99), 'Number of donuts: many')\n\n    print\n    print 'both_ends'\n    test(both_ends('spring'), 'spng')\n    test(both_ends('Hello'), 'Helo')\n    test(both_ends('a'), '')\n    test(both_ends('xyz'), 'xyyz')\n\n    \n    print\n    print 'fix_start'\n    test(fix_start('babble'), 'ba**le')\n    test(fix_start('aardvark'), 'a*rdv*rk')\n    test(fix_start('google'), 'goo*le')\n    test(fix_start('donut'), 'donut')\n\n    print\n    print 'mix_up'\n    test(mix_up('mix', 'pod'), 'pox mid')\n    test(mix_up('dog', 'dinner'), 'dig donner')\n    test(mix_up('gnash', 'sport'), 'spash gnort')\n    test(mix_up('pezzy', 'firm'), 'fizzy perm')\n\n\n# Standard boilerplate to call the main() function.\nif __name__ == '__main__':\n    main()\n</textarea>\n\n<!-- Practise -->\n<textarea *ngIf=\"count==7 || count==8 || count==9 || count==10 || count==11\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n    \n<!-- Exercise 2 -->\n<textarea *ngIf=\"count==12\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# A. match_ends\n# Given a list of strings, return the count of the number of\n# strings where the string length is 2 or more and the first\n# and last chars of the string are the same.\n# Note: python does not have a ++ operator, but += works.\ndef match_ends(words):\n    # +++your code here+++\n    return\n\n# B. Given a list of numbers, return a list where\n# all adjacent == elements have been reduced to a single element,\n# so [1, 2, 2, 3] returns [1, 2, 3]. You may create a new list or\n# modify the passed in list.\ndef remove_adjacent(nums):\n    # +++your code here+++\n    return\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n\n\n\n\n\n\n\n\n\n\n\n# Simple provided test() function used in main() to print\n# what each function returns vs. what it's supposed to return.\ndef test(got, expected):\n    if got == expected:\n        prefix = ' OK '\n    else:\n        prefix = '  Try Again '\n    print '%s got: %s expected: %s' % (prefix, repr(got), repr(expected))\n\n\n# Calls the above functions with interesting inputs.\ndef main():\n    print 'match_ends'\n    test(match_ends(['aba', 'xyz', 'aa', 'x', 'bbb']), 3)\n    test(match_ends(['', 'x', 'xy', 'xyx', 'xx']), 2)\n    test(match_ends(['aaa', 'be', 'abc', 'hello']), 1)\n    print\n    print 'remove_adjacent'\n    test(remove_adjacent([1, 2, 2, 3]), [1, 2, 3])\n    test(remove_adjacent([2, 2, 3, 3, 3]), [2, 3])\n    test(remove_adjacent([]), [])\n\nif __name__ == '__main__':\n    main()\n</textarea>\n\n<!-- Practise -->\n<textarea *ngIf=\"count==13 || count==14 || count==15 || count==16\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n\n<!-- Exercise 3 -->\n<textarea *ngIf=\"count==17\" id=\"textbox\"  class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# A. front_x\n# Given a list of strings, return a list with the strings\n# in sorted order, except group all the strings that begin with 'x' first.\n# e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields\n# ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']\n# Hint: this can be done by making 2 lists and sorting each of them\n# before combining them.\ndef front_x(words):\n    # +++your code here+++\n    return\n\n\n# B. sort_last\n# Given a list of non-empty tuples, return a list sorted in increasing\n# order by the last element in each tuple.\n# e.g. [(1, 7), (1, 3), (3, 4, 5), (2, 2)] yields\n# [(2, 2), (1, 3), (3, 4, 5), (1, 7)]\n# Hint: use a custom key= function to extract the last element form each tuple.\ndef sort_last(tuples):\n    # +++your code here+++\n    return\n\n\n# C. Given two lists sorted in increasing order, create and return a merged\n# list of all the elements in sorted order. You may modify the passed in lists.\n# Ideally, the solution should work in \"linear\" time, making a single\n# pass of both lists.\ndef linear_merge(list1, list2):\n    # +++your code here+++\n    return\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    \n# Simple provided test() function used in main() to print\n# what each function returns vs. what it's supposed to return.\ndef test(got, expected):\n    if got == expected:\n        prefix = ' OK '\n    else:\n        prefix = '  X '\n    print '%s got: %s expected: %s' % (prefix, repr(got), repr(expected))\n\n\n# Calls the above functions with interesting inputs.\ndef main():\n    print 'front_x'\n    test(front_x(['bbb', 'ccc', 'axx', 'xzz', 'xaa']),\n        ['xaa', 'xzz', 'axx', 'bbb', 'ccc'])\n    test(front_x(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']),\n        ['xaa', 'xcc', 'aaa', 'bbb', 'ccc'])\n    test(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']),\n        ['xanadu', 'xyz', 'aardvark', 'apple', 'mix'])\n\n    print\n    print 'sort_last'\n    test(sort_last([(1, 3), (3, 2), (2, 1)]),\n        [(2, 1), (3, 2), (1, 3)])\n    test(sort_last([(2, 3), (1, 2), (3, 1)]),\n        [(3, 1), (1, 2), (2, 3)])\n    test(sort_last([(1, 7), (1, 3), (3, 4, 5), (2, 2)]),\n        [(2, 2), (1, 3), (3, 4, 5), (1, 7)])\n    \n    print\n    print 'linear_merge'\n    test(linear_merge(['aa', 'xx', 'zz'], ['bb', 'cc']),\n        ['aa', 'bb', 'cc', 'xx', 'zz'])\n    test(linear_merge(['aa', 'xx'], ['bb', 'cc', 'zz']),\n        ['aa', 'bb', 'cc', 'xx', 'zz'])\n    test(linear_merge(['aa', 'aa'], ['aa', 'bb', 'bb']),\n        ['aa', 'aa', 'aa', 'bb', 'bb'])\n    \n    print\n\nif __name__ == '__main__':\n    main()\n</textarea>\n\n<!-- Practise -->\n<textarea *ngIf=\"count==18 || count==19 || count==20 || count==21\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n\n<!-- Exercise 4 -->\n<textarea *ngIf=\"count==22\" id=\"textbox\"  class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Write a Python program to find the number of divisors of a given integer is even or odd.\n# return x \ndef divisor(n):\n    return\n\n# Write a Python program to add two positive integers without using the '+' operator.\n# Note: Use bitwise operations to add two numbers\n# return a\ndef add_without_plus_operator(a, b):\n    return\n\n\n\n\n\n\n\n\n\n\n    \n\n\n\n\n\n\n\n\n    \n\n\n\n\n\n\n\n\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n#Simple provided test() function used in main() to print\n# what each function returns vs. what it's supposed to return.\ndef test(got, expected):\n  if got == expected:\n    prefix = ' OK '\n  else:\n    prefix = '  Try Again '\n  print '%s got: %s expected: %s' % (prefix, repr(got), repr(expected))\n\n\n# Calls the above functions with interesting inputs.\ndef main():\n  test(divisor(15),(4))\n  test(divisor(12),(6))\n  test(divisor(9),(3))\n  test(divisor(6),(4))\n  test(divisor(3),(2))\n\n  print\n  test(add_without_plus_operator(2, 10),(12))\n  test(add_without_plus_operator(-20, 10),(4294967286))\n  test(add_without_plus_operator(-10, -20),(8589934562L))\n\n\n\nif __name__ == '__main__':\n  main()\n</textarea>\n\n<!-- Practise -->\n<textarea *ngIf=\"count==23 || count==24 || count==25 || count==26 || count ==27\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n\n<!-- Exercise 5 -->\n<textarea *ngIf=\"count==28\" id=\"textbox\"  class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\nimport re\n\n# Write a Python program to find sequences of one upper case letter followed by lower case letters, \n# Return \"Found a match!\" if a match is found, and return 'Not matched', if not\ndef upperCase_LowerCase(text):\n    return\n                \n\n# Write a Python program that matches a string that has an a followed by zero or more b's.\n# Return \"Found a match!\" if a match is found, and return 'Not matched', if not\ndef text_match(text):\n    return\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n# Calls the above functions with interesting inputs.\ndef main():\n\tif (upperCase_LowerCase(\"aab_cbbbc\") == \"Found a match!\"):\n\t\tprint'OK: Found a match for aab_cbbbc'\n\telse: \n\t\tprint 'Try Again'\n\n\tprint\n\tif (text_match(\"ac\") == \"Found a match!\"):\n\t\tprint 'OK: Found a match for ac'\n\telse:\n\t\tprint 'Try Again'\n\nif __name__ == '__main__':\n  main()\n\n        \n</textarea>\n\n<!-- Practise -->\n<textarea *ngIf=\"count==29\" id=\"textbox\" class=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n</textarea>\n        \n\n            </div> \n            <div class = \"selectors\">\n                <div class=\"footer-code pad\">\n                    <button type=\"button\" class=\"btn btn-lg btn-primary run\" onclick=\"runit()\"><span>Run</span></button>\n                    <button type=\"button\" class=\"btn btn-lg btn-secondary reset\" (click)=\"checkCode()\"><span>Check</span></button>\n                    <button type=\"button\" class=\"btn btn-lg btn-light reset\" (click)=\"reset()\"><span>Reset</span></button>\n                </div> \n            </div>\n            <hr class=\"divider\">\n\n            <!-- TERMINAL -->\n            <div class=\"terminal\">\n                <div class=\"col-12\">\n                    <pre id=\"output\" class=\"main\"></pre> \n                </div>\n             </div>\n        </div>\n    </div> \n</div>"

/***/ }),

/***/ "./src/app/coding/coding.component.scss":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code {\n  height: calc(100vh - 35px - 58px);\n  margin-top: 58px;\n  min-width: 768px; }\n\n.split-view {\n  display: flex;\n  flex: 1;\n  height: 100%; }\n\n/*** Lesson ***/\n\n.gradient {\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  margin: 10px !important;\n  padding: 0px !important; }\n\n.alert-info {\n  background-color: #FFFD82;\n  font-weight: 300;\n  border-color: #FFFD82;\n  font-size: 13px;\n  color: black !important;\n  bottom: 60px;\n  position: absolute;\n  margin-right: 10px; }\n\n.textbox {\n  z-index: -1;\n  color: transparent; }\n\n.lesson {\n  padding: 15px;\n  color: white; }\n\n.lessonTitle {\n  font-weight: 350;\n  font-size: 18px;\n  color: #21c87a; }\n\n.next {\n  font-size: 12px;\n  bottom: 0;\n  float: right; }\n\n.back {\n  font-size: 12px;\n  bottom: 0;\n  float: left; }\n\n.text {\n  font-weight: 150; }\n\n.noPad {\n  padding: 0 !important; }\n\n/*** COLUMN 2 ***/\n\n.navbar {\n  width: 100%;\n  height: 10px; }\n\n.column2 {\n  height: 100%;\n  padding-left: 0px;\n  padding-right: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n/*** Code Editor ***/\n\n.editor {\n  font-size: 17px;\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 65% !important;\n  position: relative;\n  margin-left: 0;\n  margin-right: 0; }\n\n.run {\n  font-size: 12px;\n  z-index: 100;\n  float: right; }\n\n.reset {\n  font-size: 12px;\n  z-index: 100;\n  float: right;\n  margin-right: 10px; }\n\n.divider {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-top: 2px solid rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1000; }\n\n/*** OUTPUT ***/\n\n.terminal {\n  color: white;\n  background-color: #131414 !important;\n  padding: 15px;\n  height: calc(35% - 1rem - 2px) !important;\n  border-radius: 0.3rem;\n  font-size: 14px;\n  z-index: 90;\n  position: relative; }\n\n#output {\n  color: white;\n  overflow: auto !important;\n  max-height: 25vh !important; }\n\n/*** Code Footer ***/\n\n.footer-code {\n  position: absolute;\n  bottom: 10px;\n  padding: 0 !important;\n  width: 100%;\n  z-index: 500 !important; }\n\n.pad {\n  padding-right: 10px !important; }\n\n.separatorPad {\n  margin-left: 15px !important;\n  margin-right: 15px !important; }\n\n.show {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  left: 0;\n  position: fixed;\n  z-index: 1000 !important;\n  text-align: center;\n  top: 50vh;\n  margin-left: -32px;\n  padding: 0px !important;\n  width: 5rem; }\n\n.rotate {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.alert-success {\n  font-weight: 300;\n  font-size: 13px;\n  bottom: 60px;\n  position: absolute;\n  margin-right: 10px;\n  color: #d0b794 !important;\n  background-color: #f8efe4 !important;\n  border-color: #f8efe4 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFpQztFQUNqQyxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksY0FBYTtFQUNiLFFBQU87RUFDUCxhQUFZLEVBQ2Y7O0FBRUQsZ0JBQWdCOztBQUNoQjtFQUVJLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBRXJCOztBQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGNBQVk7RUFDWixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFVO0VBQ1YsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFVO0VBQ1YsWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksc0JBQXFCLEVBQ3hCOztBQUdELGtCQUFrQjs7QUFDbEI7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsa0JBQWdCO0VBQ2hCLHFCQUFtQixFQUV0Qjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0ksZ0JBQWU7RUFDZixrQkFBZ0I7RUFDaEIsbUJBQWlCO0VBQ2pCLHVCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixhQUFZO0VBQ1osYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixhQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIseUNBQXdDO0VBQ3hDLG1CQUFrQjtFQUNsQixjQUFhLEVBQ2hCOztBQUVELGdCQUFnQjs7QUFDaEI7RUFDSSxhQUFZO0VBQ1oscUNBQW9DO0VBQ3BDLGNBQVk7RUFDWiwwQ0FBeUM7RUFDekMsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsNEJBQTJCLEVBQzlCOztBQUVELHFCQUFxQjs7QUFDckI7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsd0JBQXVCLEVBRTFCOztBQUVEO0VBQ0ksK0JBQThCLEVBRWpDOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QixFQUVoQzs7QUFFRDtFQUNJLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsUUFBTztFQUNQLGdCQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxrQ0FBeUI7VUFBekIsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLHFDQUFvQztFQUNwQyxpQ0FBOEIsRUFFakMiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGV7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzVweCAtIDU4cHgpO1xuICAgIG1hcmdpbi10b3A6IDU4cHg7XG4gICAgbWluLXdpZHRoOiA3NjhweDtcbn1cblxuLnNwbGl0LXZpZXd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyoqKiBMZXNzb24gKioqL1xuLmdyYWRpZW50e1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1NjQ4ZmYgMCUsICMyMWM4N2EgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY2xpcDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0LWluZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkQ4MjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkQ4MjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbn1cblxuLnRleHRib3h7XG4gICAgei1pbmRleDogLTE7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubGVzc29ue1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sZXNzb25UaXRsZXtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzIxYzg3YTtcbn1cblxuLm5leHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvdHRvbSA6IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYmFja3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm90dG9tIDogMDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnRleHR7XG4gICAgZm9udC13ZWlnaHQ6IDE1MDtcbn1cbi5ub1BhZHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuLyoqKiBDT0xVTU4gMiAqKiovXG4ubmF2YmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuLmNvbHVtbjJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuXG59XG5cbi8qKiogQ29kZSBFZGl0b3IgKioqL1xuLmVkaXRvcntcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjBweDtcbiAgICBoZWlnaHQ6NjUlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnJ1biB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZXNldHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgei1pbmRleDoxMDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmRpdmlkZXJ7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4vKioqIE9VVFBVVCAqKiovXG4udGVybWluYWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE0MTQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOjE1cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDM1JSAtIDFyZW0gLSAycHgpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB6LWluZGV4OiA5MDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNvdXRwdXR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjV2aCAhaW1wb3J0YW50OyAgICAgICBcbn1cblxuLyoqKiBDb2RlIEZvb3RlciAqKiovXG4uZm9vdGVyLWNvZGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogNTAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnBhZHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gei1pbmRleDogMTAwO1xufVxuXG4uc2VwYXJhdG9yUGFke1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLnNob3d7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA1MHZoO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNXJlbTtcbn1cbi5yb3RhdGV7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3N7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNkMGI3OTQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlZmU0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiNmOGVmZTQhaW1wb3J0YW50O1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/coding/coding.component.ts":
/*!********************************************!*\
  !*** ./src/app/coding/coding.component.ts ***!
  \********************************************/
/*! exports provided: CodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodingComponent", function() { return CodingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CodingComponent = /** @class */ (function () {
    function CodingComponent(userService, router, modalService) {
        this.userService = userService;
        this.router = router;
        this.modalService = modalService;
        this.show = false;
        this.correct = false;
        this.mainContent = '';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CodingComponent.prototype.ngOnInit = function () {
        this.count = this.currentUser.page;
        this.level = this.currentUser.level;
        this.points = this.currentUser.points;
    };
    CodingComponent.prototype.checkCode = function () {
        if (this.currentUser.page == 6) {
            this.check();
        }
        else if (this.currentUser.page == 12) {
            this.check();
        }
        else if (this.currentUser.page == 17) {
            this.check();
        }
        else if (this.currentUser.page == 22) {
            this.check();
        }
        else if (this.currentUser.page == 28) {
            this.check();
        }
    };
    CodingComponent.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, check1().then(function () {
                            if (!result) {
                                _this.correct = true;
                                console.log(_this.correct);
                            }
                            else {
                                _this.correct = false;
                                console.log(_this.correct);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CodingComponent.prototype.reset = function () {
        if (this.count == 6) {
            window.location.reload();
        }
        else if (this.count == 12) {
            window.location.reload();
        }
        else if (this.count == 17) {
            window.location.reload();
        }
        else if (this.count == 22) {
            window.location.reload();
        }
        else if (this.count == 26) {
            window.location.reload();
        }
        else {
            resetDefault();
        }
    };
    CodingComponent.prototype.next = function () {
        switch (this.level) {
            case 1: {
                if (this.count >= 0 && this.count <= 4) {
                    this.count++;
                }
                else if (this.count == 5) {
                    this.count++;
                    this.edit(this.currentUser, this.count);
                }
                else if (this.count == 6 && this.correct == true) {
                    this.points = this.points + 500;
                    this.level++;
                    this.count++;
                    this.currentUser.points = this.points;
                    this.currentUser.level = this.level;
                    this.currentUser.page = this.count;
                    this.update();
                }
                else {
                    this.count == 6;
                }
            }
            case 2: {
                if (this.count >= 7 && this.count <= 10) {
                    this.correct = false;
                    this.count++;
                }
                else if (this.count == 11) {
                    this.count++;
                    this.edit(this.currentUser, this.count);
                }
                else if (this.count == 12 && this.correct == true) {
                    this.points = this.points + 500;
                    this.level++;
                    this.count++;
                    this.currentUser.points = this.points;
                    this.currentUser.level = this.level;
                    this.currentUser.page = this.count;
                    this.update();
                }
                else {
                    this.count == 12;
                }
            }
            case 3: {
                if (this.count >= 13 && this.count <= 15) {
                    this.correct = false;
                    this.count++;
                }
                else if (this.count == 16) {
                    this.count++;
                    this.edit(this.currentUser, this.count);
                }
                else if (this.count == 17 && this.correct == true) {
                    this.points = this.points + 500;
                    this.level++;
                    this.count++;
                    this.currentUser.points = this.points;
                    this.currentUser.level = this.level;
                    this.currentUser.page = this.count;
                    this.update();
                }
                else {
                    this.count == 17;
                }
            }
            case 4: {
                if (this.count >= 18 && this.count <= 20) {
                    this.correct = false;
                    this.count++;
                }
                else if (this.count == 21) {
                    this.count++;
                    this.edit(this.currentUser, this.count);
                }
                else if (this.count == 22 && this.correct == true) {
                    this.points = this.points + 500;
                    this.level++;
                    this.count++;
                    this.currentUser.points = this.points;
                    this.currentUser.level = this.level;
                    this.currentUser.page = this.count;
                    this.update();
                }
                else {
                    this.count == 22;
                }
            }
            case 5: {
                if (this.count >= 23 && this.count <= 26) {
                    this.correct = false;
                    this.count++;
                }
                else if (this.count == 27) {
                    this.count++;
                    this.edit(this.currentUser, this.count);
                }
                else if (this.count == 28 && this.correct == true) {
                    this.points = this.points + 500;
                    this.level++;
                    this.count++;
                    this.currentUser.points = this.points;
                    this.currentUser.level = this.level;
                    this.currentUser.page = this.count;
                    this.update();
                }
                else {
                    this.count == 28;
                }
            }
        }
    };
    CodingComponent.prototype.back = function () {
        switch (this.level) {
            case 1: {
                if (this.count >= 0 && this.count <= 5) {
                    this.count--;
                }
                else {
                    this.count == 6;
                }
            }
            case 2: {
                if (this.count >= 7 && this.count <= 11) {
                    this.count--;
                }
                else {
                    this.count == 12;
                }
            }
            case 3: {
                if (this.count >= 13 && this.count <= 16) {
                    this.count--;
                }
                else {
                    this.count == 17;
                }
            }
            case 4: {
                if (this.count >= 18 && this.count <= 21) {
                    this.count--;
                }
                else {
                    this.count == 22;
                }
            }
            case 5: {
                if (this.count >= 23 && this.count <= 27) {
                    this.count--;
                }
                else {
                    this.count == 28;
                }
            }
        }
    };
    CodingComponent.prototype.setContent = function (value) {
        this.mainContent = value;
    };
    CodingComponent.prototype.edit = function (currentUser, count) {
        console.log('edit');
        this.currentUser.page = this.count;
        this.userService.addPage(currentUser, count).subscribe(function (data) {
            window.location.reload();
        });
    };
    CodingComponent.prototype.update = function () {
        this.userService.update(this.currentUser).subscribe(function (data) {
            window.location.reload();
        });
    };
    CodingComponent.prototype.toggle = function () {
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    };
    CodingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coding-component',
            template: __webpack_require__(/*! ./coding.component.html */ "./src/app/coding/coding.component.html"),
            styles: [__webpack_require__(/*! ./coding.component.scss */ "./src/app/coding/coding.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "./src/app/coding/content/completed/completed.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/coding/content/completed/completed.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Congratulations\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n          Congratulations for finishing the tutorial, please refer back to https://developers.google.com/edu/python/ if you wish to continue your studies!\n        </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/completed/completed.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/coding/content/completed/completed.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 30vh !important;\n  height: 30vh !important; }\n\n.content {\n  overflow: auto !important;\n  max-height: 30vh !important;\n  height: 30vh !important; }\n\n.subheadingContent {\n  overflow: auto !important;\n  max-height: 24vh !important;\n  height: 24vh; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 33vh !important;\n    height: 33vh !important; }\n  .subheadingContent {\n    overflow: auto !important;\n    max-height: 25vh !important;\n    height: 25vh; }\n  .content {\n    height: 40vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvY29tcGxldGVkL2NvbXBsZXRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0IsYUFBWSxFQUNmOztBQUdEO0VBQ0k7SUFDSSwwQkFBeUI7SUFDekIsNEJBQTJCO0lBQzNCLHdCQUF1QixFQUMxQjtFQUNEO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQixhQUFZLEVBRWY7RUFDRDtJQUNJLGFBQVksRUFDZixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvY29tcGxldGVkL2NvbXBsZXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDMwdmggIWltcG9ydGFudDsgICBcbiAgICBoZWlnaHQ6IDMwdmggIWltcG9ydGFudDsgXG59XG5cbi5jb250ZW50e1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzB2aCAhaW1wb3J0YW50OyAgIFxuICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50OyBcbn1cblxuLnN1YmhlYWRpbmdDb250ZW50e1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMjR2aCAhaW1wb3J0YW50OyAgIFxuICAgIGhlaWdodDogMjR2aDsgXG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmxlYXJue1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzM3ZoICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiAzM3ZoICFpbXBvcnRhbnQ7ICBcbiAgICB9XG4gICAgLnN1YmhlYWRpbmdDb250ZW50e1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNXZoICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiAyNXZoOyAgXG4gIFxuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgIH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/completed/completed.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/coding/content/completed/completed.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompletedComponent = /** @class */ (function () {
    function CompletedComponent() {
    }
    CompletedComponent.prototype.ngOnInit = function () {
    };
    CompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed',
            template: __webpack_require__(/*! ./completed.component.html */ "./src/app/coding/content/completed/completed.component.html"),
            styles: [__webpack_require__(/*! ./completed.component.scss */ "./src/app/coding/content/completed/completed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "./src/app/coding/content/intro/intro.component.html":
/*!***********************************************************!*\
  !*** ./src/app/coding/content/intro/intro.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Introduction\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        Python is a dynamic, interpreted (bytecode-compiled) language. There are no type declarations of variables, parameters, functions, or methods in source code. This makes the code short and flexible, and you lose the compile-time type checking of the source code. Python tracks the types of all values at runtime and flags code that does not make sense as it runs.        <br>\n      </p>\n    </div>\n  </div>\n  <hr class=\"divider\">\n  <div class=\"subheading\">\n      <p class =\"text lesson-title\">\n          Begining the Tutorial\n      </p>\n      <div class=\"text subheadingContent\">\n        <p class=\"lessonContent\">\n          To start, press the 'Next' button below. Working your way through the lesson plans, trying out exercises using the 'Run' button. When you are ready to submit your answer, click 'Check' button on the right. \n        </p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/intro/intro.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/coding/content/intro/intro.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 30vh !important;\n  height: 30vh !important; }\n\n.content {\n  overflow: auto !important;\n  max-height: 30vh !important;\n  height: 30vh !important; }\n\n.subheadingContent {\n  overflow: auto !important;\n  max-height: 24vh !important;\n  height: 24vh; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 33vh !important;\n    height: 33vh !important; }\n  .subheadingContent {\n    overflow: auto !important;\n    max-height: 25vh !important;\n    height: 25vh; }\n  .content {\n    height: 40vh; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLGFBQVksRUFDZjs7QUFHRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUI7RUFDRDtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0IsYUFBWSxFQUVmO0VBQ0Q7SUFDSSxhQUFZLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9jb250ZW50L2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVzc29uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNTY0OGZmO1xufVxuXG4ubGVzc29uQ29udGVudHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZXhhbXBsZUNvZGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmxlYXJue1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMzB2aCAhaW1wb3J0YW50OyAgIFxuICAgIGhlaWdodDogMzB2aCAhaW1wb3J0YW50OyBcbn1cblxuLmNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7ICAgXG4gICAgaGVpZ2h0OiAzMHZoICFpbXBvcnRhbnQ7IFxufVxuXG4uc3ViaGVhZGluZ0NvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAyNHZoICFpbXBvcnRhbnQ7ICAgXG4gICAgaGVpZ2h0OiAyNHZoOyBcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubGVhcm57XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMzdmggIWltcG9ydGFudDsgIFxuICAgICAgICBoZWlnaHQ6IDMzdmggIWltcG9ydGFudDsgIFxuICAgIH1cbiAgICAuc3ViaGVhZGluZ0NvbnRlbnR7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dmggIWltcG9ydGFudDsgIFxuICAgICAgICBoZWlnaHQ6IDI1dmg7ICBcbiAgXG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/intro/intro.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/coding/content/intro/intro.component.ts ***!
  \*********************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/coding/content/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/coding/content/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Exercise 1: Basic string exercises\n      </p>\n      <div class=\"learn\">\n        <p class=\"text lessonContent\">\n          Fill in the code for the 4 functions:\n        </p>\n\n          <ol class=\"lessonContent\" type=\"A\">\n              <li>donuts</li>\n              <li>both_ends  </li>\n              <li>fix_start  </li>\n              <li>mix_up  </li>\n          </ol> \n        <p class=\"text lessonContent\">\n          <span class=\"italic\">main()</span> is already set up to call the functions with a few different inputs, printing 'OK' when each function is correct.\n        </p>       \n\n        <p class=\"text lessonContent\">\n            The starter code for each function includes a 'return' which is just a placeholder for your code.\n        </p>       \n        <!-- <button type=\"button\" class=\"btn btn-lg btn-primary begin\" (click)=\"begin()\"><span>Begin</span></button> -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.italic {\n  color: #5648ff;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9leGVyY2lzZTEvZXhlcmNpc2UxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLCtDQUE4QztFQUM5QywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUIsRUFBQTs7QUFHTDtFQUNJLGVBQWM7RUFDZCxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29udGVudC9sZXNzb25zL2NoYXB0ZXIxL2V4ZXJjaXNlMS9leGVyY2lzZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4ubGVhcm57XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbiAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubGVhcm57XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgICAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIH1cbn1cblxuLml0YWxpY3tcbiAgICBjb2xvcjogIzU2NDhmZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Exercise1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise1Component", function() { return Exercise1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exercise1Component = /** @class */ (function () {
    // currentUser: User;
    // count: number;
    function Exercise1Component(
    // public userService: UserService,
    // private router: Router
    ) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    Exercise1Component.prototype.ngOnInit = function () {
        // this.edit(this.currentUser, this.count);
    };
    Exercise1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise1',
            template: __webpack_require__(/*! ./exercise1.component.html */ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.html"),
            styles: [__webpack_require__(/*! ./exercise1.component.scss */ "./src/app/coding/content/lessons/chapter1/exercise1/exercise1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Exercise1Component);
    return Exercise1Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 1: Strings Basics\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        Python has a built-in string class named \"str\" with many handy features (there is an older module named \"string\" which you should not use). String literals can be enclosed by either double or single quotes, although single quotes are more commonly used. Backslash escapes work the usual way within both single and double quoted literals -- e.g. \\n \\' \\\". A double quoted string literal can contain single quotes without any fuss (e.g. \"I didn't do it\") and likewise single quoted string can contain double quotes. A string literal can span multiple lines, but there must be a backslash \\ at the end of each line to escape the newline. String literals inside triple quotes, \"\"\" or ''', can span multiple lines of text.\n      </p>\n      <p class=\"lessonContent\">\n        Python strings are \"immutable\" which means they cannot be changed after they are created (Java strings also use this immutable style). Since strings can't be changed, we construct *new* strings as we go to represent computed values. So for example the expression ('hello' + 'there') takes in the 2 strings 'hello' and 'there' and builds a new string 'hellothere'.\n      </p>\n      <p class=\"lessonContent\">\n        Characters in a string can be accessed using the standard [ ] syntax, and like Java and C++, Python uses zero-based indexing, so if s is 'hello' s[1] is 'e'. If the index is out of bounds for the string, Python raises an error. The Python style (unlike Perl) is to halt if it can't tell what to do, rather than just make up a default value. The handy \"slice\" syntax (below) also works to extract any substring from a string. The len(string) function returns the length of a string. The [ ] syntax and the len() function actually work on any sequence type -- strings, lists, etc.. Python tries to make its operations work consistently across different types. Python newbie gotcha: don't use \"len\" as a variable name to avoid blocking out the len() function. The '+' operator can concatenate two strings. Notice in the code below that variables are not pre-declared -- just assign to them and go.  \n        <br>\n        Example: \n      </p>\n        <p class=\"exampleCode\">\n          s = <span class=\"str\">'hi'</span><br>\n          <span class=\"kwd\">print</span> s[<span class=\"lit\">1</span>]          <span class=\"comment\">## i</span>  <br>\n          <span class=\"kwd\">print</span> len(s)         <span class=\"comment\">## 2</span>  <br>\n          <span class=\"kwd\">print</span> s + <span class=\"str\">' there'</span>  <span class=\"comment\">## hi there</span> <br>\n        </p>\n    </div>\n  </div>\n  <!-- <hr class=\"featurette-divider\">\n  <div class=\"subheading\">\n      <p class =\"text lesson-title\">\n          Exercise 1 - Basic String Exercises\n      </p>\n      <div class=\"text subheadingContent\">\n          <p class=\"lessonContent\">\n              # Basic string exercises\n              # Fill in the code for the functions below. main() is already set up\n              # to call the functions with a few different inputs,\n              # printing 'OK' when each function is correct.\n              # The starter code for each function includes a 'return'\n              # which is just a placeholder for your code.\n              # It's ok if you do not complete all the functions, and there\n              # are some additional functions to try in string2.py.\n          </p>\n        </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.str {\n  color: #0d904f; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24xL2xlc3NvbjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNBLGVBQWMsRUFDYjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24xL2xlc3NvbjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cblxuLnN0cntcbiAgICBjb2xvcjojMGQ5MDRmO1xufVxuXG4ua3dke1xuY29sb3I6ICMzYjc4ZTc7XG59XG5cbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson1Component", function() { return Lesson1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson1Component = /** @class */ (function () {
    function Lesson1Component() {
    }
    Lesson1Component.prototype.ngOnInit = function () {
    };
    Lesson1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson1',
            template: __webpack_require__(/*! ./lesson1.component.html */ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.html"),
            styles: [__webpack_require__(/*! ./lesson1.component.scss */ "./src/app/coding/content/lessons/chapter1/lesson1/lesson1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson1Component);
    return Lesson1Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"lesson-title\">\n        Chapter 1: String Methods\n      </p>\n      <div class=\"text learn\">\n          <p class=\"lessonContent\">\n            Here are some of the most common string methods. A method is like a function, but it runs \"on\" an object. If the variable s is a string, then the code s.lower() runs the lower() method on that string object and returns the result (this idea of a method running on an object is one of the basic ideas that make up Object Oriented Programming, OOP). Here are some of the most common string methods:\n          </p>\n          <ul class=\"lessonContent\">\n            <li>s.lower(), s.upper() -- returns the lowercase or uppercase version of the string</li>\n            <li>s.strip() -- returns a string with whitespace removed from the start and end</li>\n            <li>s.isalpha()/s.isdigit()/s.isspace()... -- tests if all the string chars are in the various character classes</li>\n            <li>s.startswith('other'), s.endswith('other') -- tests if the string starts or ends with the given other string</li>\n            <li>s.find('other') -- searches for the given other string (not a regular expression) within s, and returns the first index where it begins or -1 if not found</li>\n            <li>s.replace('old', 'new') -- returns a string where all occurrences of 'old' have been replaced by 'new'</li>\n            <li>s.split('delim') -- returns a list of substrings separated by the given delimiter. The delimiter is not a regular expression, it's just text. 'aaa,bbb,ccc'.split(',') -> ['aaa', 'bbb', 'ccc']. As a convenient special case s.split() (with no arguments) splits on all whitespace chars.</li>\n            <li>s.join(list) -- opposite of split(), joins the elements in the given list together using the string as the delimiter. e.g. '---'.join(['aaa', 'bbb', 'ccc']) -> aaa---bbb---ccc</li>\n          </ul>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24yL2xlc3NvbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24yL2xlc3NvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson2Component", function() { return Lesson2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson2Component = /** @class */ (function () {
    function Lesson2Component() {
    }
    Lesson2Component.prototype.ngOnInit = function () {
    };
    Lesson2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson2',
            template: __webpack_require__(/*! ./lesson2.component.html */ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.html"),
            styles: [__webpack_require__(/*! ./lesson2.component.scss */ "./src/app/coding/content/lessons/chapter1/lesson2/lesson2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson2Component);
    return Lesson2Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 1: String Slices\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            The \"slice\" syntax is a handy way to refer to sub-parts of sequences -- typically strings and lists. The slice s[start:end] is the elements beginning at start and extending up to but not including end. Suppose we have s = \"Hello\"\n            the string 'hello' with letter indexes 0 1 2 3 4\n        </p>\n        <ul class=\"lessonContent\">\n          <li>s[1:4] is 'ell' -- chars starting at index 1 and extending up to but not including index 4 </li>\n          <li>s[1:] is 'ello' -- omitting either index defaults to the start or end of the string</li>\n          <li>s[:] is 'Hello' -- omitting both always gives us a copy of the whole thing (this is the pythonic way to copy a sequence like a string or list)</li>\n          <li>s[1:100] is 'ello' -- an index that is too big is truncated down to the string length.</li>\n        </ul>        \n        <p class=\"lessonContent\">\n          The standard zero-based index numbers give easy access to chars near the start of the string. As an alternative, Python uses negative numbers to give easy access to the chars at the end of the string: s[-1] is the last char 'o', s[-2] is 'l' the next-to-last char, and so on. Negative index numbers count back from the end of the string:\n        </p>\n        <ul class=\"lessonContent\">\n          <li>s[-1] is 'o' -- last char (1st from the end)\n          <li>s[-4] is 'e' -- 4th from the end </li>\n          <li>s[:-3] is 'He' -- going up to but not including the last 3 chars. </li>\n          <li>s[-3:] is 'llo' -- starting with the 3rd char from the end and extending to the end of the string.</li>\n        </ul> \n        <p class=\"lessonContent\">\n          It is a neat truism of slices that for any index n, s[:n] + s[n:] == s. This works even for n negative or out of bounds. Or put another way s[:n] and s[n:] always partition the string into two string parts, conserving all the characters. As we'll see in the list section later, slices work with lists too.\n        </p>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24zL2xlc3NvbjMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb24zL2xlc3NvbjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson3Component", function() { return Lesson3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson3Component = /** @class */ (function () {
    function Lesson3Component() {
    }
    Lesson3Component.prototype.ngOnInit = function () {
    };
    Lesson3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson3',
            template: __webpack_require__(/*! ./lesson3.component.html */ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.html"),
            styles: [__webpack_require__(/*! ./lesson3.component.scss */ "./src/app/coding/content/lessons/chapter1/lesson3/lesson3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson3Component);
    return Lesson3Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 1: String % \n\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            Python has a printf()-like facility to put together a string. The % operator takes a printf-type format string on the left (%d int, %s string, %f/%g floating point), and the matching values in a tuple on the right (a tuple is made of values separated by commas, typically grouped inside parentheses):\n        </p>\n        <p class=\"exampleCode\">\n            <span class=\"comment\"># % operator</span><br>\n            text = <span class=\"str\">\"%d little pigs come out, or I'll %s, and I'll %s, and I'll blow your %s down.\" </span>% (<span class=\"lit\">3</span>, <span class=\"str\">'huff'</span>, <span class=\"str\">'puff'</span>, <span class=\"str\">'house'</span>)\n        </p>\n        <p class=\"lessonContent\">\n          The above line is kind of long -- suppose you want to break it into separate lines. You cannot just split the line after the '%' as you might in other languages, since by default Python treats each line as a separate statement (on the plus side, this is why we don't need to type semi-colons on each line). To fix this, enclose the whole expression in an outer set of parenthesis -- then the expression is allowed to span multiple lines. This code-across-lines technique works with the various grouping constructs detailed below: &#40; &#41;, &#91; &#93;, &#123; &#125;\n        </p>\n        <p class=\"exampleCode\">\n          <span class=\"comment\"># Add parentheses to make the long line work:</span><br>\n          text = &#40;<br>\n          <span class=\"str\">\"%d little pigs come out, or I'll %s, and I'll %s, and I'll blow your %s down.\"</span>\n          % &#40;<span class=\"lit\">3</span>, <span class=\"str\">'huff'</span>, <span class=\"str\">'puff'</span>, <span class=\"str\">'house'</span>&#41;&#41;\n          </p>\n          <p class=\"lessonContent\">\n            That's better, but the line is still a little long. Python lets you cut a line up into chunks, which it will then automatically concatenate. So, to make this line even shorter, we can do this:\n          </p>\n          <p class=\"exampleCode\">\n              <span class=\"comment\">  # Split the line into chunks, which are concatenated automatically by Python</span><br>\n              text = &#40;<br>\n              <span class=\"str\">\"%d little pigs come out, \"</span><br>\n              <span class=\"str\">\"or I'll %s, and I'll %s, \"</span><br>\n              <span class=\"str\">\"and I'll blow your %s down.\"</span><br>\n              % &#40; <span class=\"lit\">3</span>, <span class=\"str\">'huff'</span>, <span class=\"str\">'puff'</span>, <span class=\"str\">'house'</span >&#41;&#41;\t\n          </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.str {\n  color: #0d904f; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb240L2xlc3NvbjQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNBLGVBQWMsRUFDYjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb240L2xlc3NvbjQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cblxuLnN0cntcbiAgICBjb2xvcjojMGQ5MDRmO1xufVxuXG4ua3dke1xuY29sb3I6ICMzYjc4ZTc7XG59XG5cbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson4Component", function() { return Lesson4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson4Component = /** @class */ (function () {
    function Lesson4Component() {
    }
    Lesson4Component.prototype.ngOnInit = function () {
    };
    Lesson4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson4',
            template: __webpack_require__(/*! ./lesson4.component.html */ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.html"),
            styles: [__webpack_require__(/*! ./lesson4.component.scss */ "./src/app/coding/content/lessons/chapter1/lesson4/lesson4.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson4Component);
    return Lesson4Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 1: If Statement\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            Python does not use '\t&#123; \t&#125;' to enclose blocks of code for if/loops/function etc.. Instead, Python uses the colon (:) and indentation/whitespace to group statements. The boolean test for an if does not need to be in parenthesis (big difference from C++/Java), and it can have *elif* and *else* clauses (mnemonic: the word \"elif\" is the same length as the word \"else\").\n            Any value can be used as an if-test. The \"zero\" values all count as false: None, 0, empty string, empty list, empty dictionary. There is also a Boolean type with two values: True and False (converted to an int, these are 1 and 0). Python has the usual comparison operations: ==, !=, &#60;, &#60;=, &#62;, &#62;=. Unlike Java and C, == is overloaded to work correctly with strings. The boolean operators are the spelled out words *and*, *or*, *not* (Python does not use the C-style && || !). Here's what the code might look like for a policeman pulling over a speeder -- notice how each block of then/else statements starts with a : and the statements are grouped by their indentation:\n        </p>\n        <p class=\"exampleCode\">\n            <span class = \"kwd\">if</span> speed &#62;= <span class=\"lit\">80</span>:<br>\n            &nbsp;&nbsp;<span class = \"kwd\">print</span> <span class=\"str\">'License and registration please'</span><br>\n            <span class = \"kwd\">if</span> mood == <span class=\"str\">'terrible'</span> or speed >= <span class=\"lit\">100</span>:<br>\n            &nbsp;&nbsp;<span class = \"kwd\">print</span> <span class=\"str\">'You have the right to remain silent.'</span><br>\n            <span class = \"kwd\">elif</span> mood == <span class=\"str\">'bad'</span> or speed >= 90:<br>\n            &nbsp;&nbsp;<span class = \"kwd\">print</span><span class=\"str\">\"I'm going to have to write you a ticket.\"</span><br>\n            &nbsp;&nbsp;write_ticket()<br>\n            <span class = \"kwd\">else:</span><br>\n            &nbsp;&nbsp;<span class = \"kwd\">print</span><span class=\"str\">\"Let's try to keep it under 80 ok?\"</span>\n        </p>\n        <p class=\"lessonContent\">\n          I find that omitting the \":\" is my most common syntax mistake when typing in the above sort of code, probably since that's an additional thing to type vs. my C++/Java habits. Also, don't put the boolean test in parens -- that's a C/Java habit. If the code is short, you can put the code on the same line after \":\", like this (this applies to functions, loops, etc. also), although some people feel it's more readable to space things out on separate lines.\n        </p>\n        <p class=\"exampleCode\">\n            <span class = \"kwd\">if</span> speed &#62;= <span class=\"lit\">80</span>: <br>\n            &nbsp;&nbsp;<span class=\"kwd\">print</span> <span class=\"str\">'You are so busted'</span><br>\n            <span class=\"kwd\">else:</span><br>\n            &nbsp;&nbsp;<span class=\"kwd\">print</span> <span class=\"str\">'Have a nice day' </span>    \n        </p>   \n      </div>\n    </div>\n  </div>\n "

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  min-height: calc(60vh - 105px) !important;\n  height: calc(60vh - 105px) !important; }\n\n.str {\n  color: #0d904f; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb241L2xlc3NvbjUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRztFQUNJLDBCQUF5QjtFQUN6QiwwQ0FBeUM7RUFDekMsc0NBQXFDLEVBQ3hDOztBQUlMO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNBLGVBQWMsRUFDYjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMS9sZXNzb241L2xlc3NvbjUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtaW4taGVpZ2h0OiBjYWxjKDQ4dmggLSAxMDJweCkgIWltcG9ydGFudDsgIFxuLy8gICAgIGhlaWdodDogY2FsYyg0OHZoIC0gMTAycHgpICFpbXBvcnRhbnQ7ICBcbi8vIH1cblxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmxlYXJue1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDYwdmggLSAxMDVweCkgIWltcG9ydGFudDsgIFxuICAgICAgICBoZWlnaHQ6IGNhbGMoNjB2aCAtIDEwNXB4KSAhaW1wb3J0YW50OyAgXG4gICAgfVxuLy8gfVxuXG5cbi5zdHJ7XG4gICAgY29sb3I6IzBkOTA0Zjtcbn1cblxuLmt3ZHtcbmNvbG9yOiAjM2I3OGU3O1xufVxuXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson5Component", function() { return Lesson5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson5Component = /** @class */ (function () {
    function Lesson5Component() {
    }
    Lesson5Component.prototype.ngOnInit = function () {
    };
    Lesson5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson5',
            template: __webpack_require__(/*! ./lesson5.component.html */ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.html"),
            styles: [__webpack_require__(/*! ./lesson5.component.scss */ "./src/app/coding/content/lessons/chapter1/lesson5/lesson5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson5Component);
    return Lesson5Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Exercise 2: Basic list exercises\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        Fill in the code for the functions below. main() is already set up to call the functions with a few different inputs, printing 'OK' when each function is correct. The starter code for each function includes a 'return' which is just a placeholder for your code.\n        <br>\n      </p>       \n      <!-- <button type=\"button\" class=\"btn btn-lg btn-primary begin\" (click)=\"begin()\"><span>Begin</span></button> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9leGVyY2lzZTIvZXhlcmNpc2UyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLCtDQUE4QztFQUM5QywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9jb250ZW50L2xlc3NvbnMvY2hhcHRlcjIvZXhlcmNpc2UyL2V4ZXJjaXNlMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Exercise2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise2Component", function() { return Exercise2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exercise2Component = /** @class */ (function () {
    function Exercise2Component() {
    }
    Exercise2Component.prototype.ngOnInit = function () {
    };
    Exercise2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise2',
            template: __webpack_require__(/*! ./exercise2.component.html */ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.html"),
            styles: [__webpack_require__(/*! ./exercise2.component.scss */ "./src/app/coding/content/lessons/chapter2/exercise2/exercise2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Exercise2Component);
    return Exercise2Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 2: Python Lists - Methods\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        List Methods\n        Here are some other common list methods:\n      </p>\n        <ul class=\"lessonContent\">\n          <li>list.append(elem) -- adds a single element to the end of the list. Common error: does not return the new list, just modifies the original.</li>\n          <li>list.insert(index, elem) -- inserts the element at the given index, shifting elements to the right.</li>\n          <li>list.extend(list2) adds the elements in list2 to the end of the list. Using + or += on a list is similar to using extend().</li>\n          <li>  list.index(elem) -- searches for the given element from the start of the list and returns its index. Throws a ValueError if the element does not appear (use \"in\" to check without a ValueError).</li>\n          <li> list.remove(elem) -- searches for the first instance of the given element and removes it (throws ValueError if not present)</li>\n          <li> list.sort() -- sorts the list in place (does not return it). (The sorted() function shown later is preferred.)</li>\n          <li>list.reverse() -- reverses the list in place (does not return it)</li>\n          <li>list.pop(index) -- removes and returns the element at the given index. Returns the rightmost element if index is omitted (roughly the opposite of append()).</li>\n        </ul>\n        <p class=\"lessonContent\">\n          Notice that these are *methods* on a list object, while len() is a function that takes the list (or string or whatever) as an argument.\n        </p>\n        <p class=\"exampleCode\">\n          list = [<span class=\"str\">'larry'</span>, <span class=\"str\">'curly'</span>, <span class=\"str\">'moe'</span>]<br>\n          list.append(<span class=\"str\">'shemp'</span>)         ## append elem at end <br>\n          list.insert(0, <span class=\"str\">'xxx'</span>)        ## insert elem at index 0<br>\n          list.extend([<span class=\"str\">'yyy'</span>, <span class=\"str\">'zzz'</span>])  <span class=\"comment\">## add list of elems at end</span><br>\n          <span class=\"kwd\">print</span> list  <span class=\"comment\">## ['xxx', 'larry', 'curly', 'moe', 'shemp', 'yyy', 'zzz']</span><br>\n          <span class=\"kwd\">print</span> list.index(<span class=\"str\">'curly'</span>)    ## 2<br>\n          <br>\n          list.remove(<span class=\"str\">'curly'</span>)        <span class=\"comment\"> ## search and remove that element</span><br>\n          list.pop(1)                  ## removes and returns 'larry'<br>\n          print list  <span class=\"comment\">## ['xxx', 'larry', 'curly', 'moe', 'shemp', 'yyy', 'zzz']</span>\n        </p>   \n        <p class=\"lessonContent\">\n          Common error: note that the above methods do not *return* the modified list, they just modify the original list.\n        </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  min-height: calc(60vh - 105px) !important;\n  height: calc(60vh - 105px) !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb24xMC9sZXNzb24xMC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQVNHO0VBQ0ksMEJBQXlCO0VBQ3pCLDBDQUF5QztFQUN6QyxzQ0FBcUMsRUFDeEM7O0FBR0w7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29udGVudC9sZXNzb25zL2NoYXB0ZXIyL2xlc3NvbjEwL2xlc3NvbjEwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVzc29uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNTY0OGZmO1xufVxuXG4ubGVzc29uQ29udGVudHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZXhhbXBsZUNvZGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLy8gLmxlYXJue1xuLy8gICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4vLyAgICAgbWluLWhlaWdodDogY2FsYyg0OHZoIC0gMTAycHgpICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IGNhbGMoNDh2aCAtIDEwMnB4KSAhaW1wb3J0YW50OyAgXG4vLyB9XG5cbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYyg2MHZoIC0gMTA1cHgpICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDYwdmggLSAxMDVweCkgIWltcG9ydGFudDsgIFxuICAgIH1cbi8vIH1cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson10Component", function() { return Lesson10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson10Component = /** @class */ (function () {
    function Lesson10Component() {
    }
    Lesson10Component.prototype.ngOnInit = function () {
    };
    Lesson10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson10',
            template: __webpack_require__(/*! ./lesson10.component.html */ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.html"),
            styles: [__webpack_require__(/*! ./lesson10.component.scss */ "./src/app/coding/content/lessons/chapter2/lesson10/lesson10.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson10Component);
    return Lesson10Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 2: Python Lists\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        Python has a great built-in list type named \"list\". List literals are written within square brackets [ ]. Lists work similarly to strings -- use the len() function and square brackets [ ] to access data, with the first element at index 0. \n      </p>    \n      <p class=\"exampleCode\">\n        colors = [<span class=\"str\">'red'</span>, <span class=\"str\">'blue'</span>,  <span class=\"str\">'green'</span>] <br>\n        <span class=\"kwd\">print</span> colors[<span class=\"lit\">0</span>]    <span class=\"comment\">## red</span><br>\n        <span class=\"kwd\">print</span> colors[<span class=\"lit\">2</span>]    <span class=\"comment\">## green</span><br>\n        <span class=\"kwd\">print</span> len(colors)   <span class=\"comment\">## 3</span><br>\n      </p>   \n      <p class=\"text lessonContent\">\n        Assignment with an = on lists does not make a copy. Instead, assignment makes the two variables point to the one list in memory.\n      </p>   \n      <p class=\"exampleCode\">\n        b = colors  <span class=\"comment\"> ## Does not copy the list </span>\n      </p>\n      <p class=\"text lessonContent\">\n        The \"empty list\" is just an empty pair of brackets [ ]. The '+' works to append two lists, so [1, 2] + [3, 4] yields [1, 2, 3, 4] (this is just like + with strings).\n      </p>  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.str {\n  color: #0d904f; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb242L2xlc3NvbjYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksZUFBYSxFQUNoQjs7QUFFRDtFQUNBLGVBQWMsRUFDYjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb242L2xlc3NvbjYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cblxuLnN0cntcbiAgICBjb2xvcjojMGQ5MDRmO1xufVxuXG4ua3dke1xuY29sb3I6ICMzYjc4ZTc7XG59XG5cbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson6Component", function() { return Lesson6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson6Component = /** @class */ (function () {
    function Lesson6Component() {
    }
    Lesson6Component.prototype.ngOnInit = function () {
    };
    Lesson6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson6',
            template: __webpack_require__(/*! ./lesson6.component.html */ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.html"),
            styles: [__webpack_require__(/*! ./lesson6.component.scss */ "./src/app/coding/content/lessons/chapter2/lesson6/lesson6.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson6Component);
    return Lesson6Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 2: Python Lists - FOR and IN\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        Python's *for* and *in* constructs are extremely useful, and the first use of them we'll see is with lists. The *for* construct -- for var in list -- is an easy way to look at each element in a list (or other collection). Do not add or remove from the list during iteration.      </p>    \n      <p class=\"exampleCode\">\n        squares = [<span class=\"lit\">1</span>, <span class=\"lit\">4</span>, <span class=\"lit\">9</span>, <span class=\"lit\">16</span>]<br>\n        sum = <span class=\"lit\">0</span><br>\n        <span class=\"kwd\">for</span> num <span class=\"kwd\">in</span> squares:<br>\n          sum += num <br>\n        <span class=\"kwd\">print</span> sum  <span class=\"comment\">## 30 </span><br>\n      </p>   \n      <p class=\"text lessonContent\">\n        If you know what sort of thing is in the list, use a variable name in the loop that captures that information such as \"num\", or \"name\", or \"url\". Since python code does not have other syntax to remind you of types, your variable names are a key way for you to keep straight what is going on.\n        The *in* construct on its own is an easy way to test if an element appears in a list (or other collection) -- value in collection -- tests if the value is in the collection, returning True/False.      </p>   \n      <p class=\"exampleCode\">\n        list = [<span class=\"str\">'larry'</span>, <span class=\"str\">'curly'</span>, <span class=\"str\">'moe'</span>] <br>\n        <span class=\"kwd\">if</span> 'curly' <span class=\"kwd\">in</span> list:<br>\n        <span class=\"kwd\">print</span> <span class=\"str\">'yay'</span><br>\n      </p>\n      <p class=\"text lessonContent\">\n        The for/in constructs are very commonly used in Python code and work on data types other than list, so you should just memorize their syntax. You may have habits from other languages where you start manually iterating over a collection, where in Python you should just use for/in.\n\n        You can also use for/in to work on a string. The string acts like a list of its chars, so for ch in s: print ch prints all the chars in a string.      </p>  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb243L2xlc3NvbjcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksZUFBYyxFQUNiOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29udGVudC9sZXNzb25zL2NoYXB0ZXIyL2xlc3NvbjcvbGVzc29uNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi8vIC5sZWFybntcbi8vICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuLy8gICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG4vLyB9XG5cbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuLmxlYXJue1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7ICBcbn1cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbiAgICB9XG4gICAgXG4gICAgLmNvbW1lbnR7XG4gICAgICAgIGNvbG9yOiAjZDgxYjYwO1xuICAgIH1cbiAgICBcbiAgICAubGl0e1xuICAgICAgICBjb2xvcjogI2M1MzkyOTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson7Component", function() { return Lesson7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson7Component = /** @class */ (function () {
    function Lesson7Component() {
    }
    Lesson7Component.prototype.ngOnInit = function () {
    };
    Lesson7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson7',
            template: __webpack_require__(/*! ./lesson7.component.html */ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.html"),
            styles: [__webpack_require__(/*! ./lesson7.component.scss */ "./src/app/coding/content/lessons/chapter2/lesson7/lesson7.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson7Component);
    return Lesson7Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 2: Python Lists - Range\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        The range(n) function yields the numbers 0, 1, ... n-1, and range(a, b) returns a, a+1, ... b-1 -- up to but not including the last number. The combination of the for-loop and the range() function allow you to build a traditional numeric for loop\n        <p class=\"exampleCode\">\n          <span class=\"comment\">## print the numbers from 0 through 99 </span><br>\n          <span class=\"kwd\">for</span> i <span class=\"kwd\">in</span> range(<span class=\"lit\">100</span>): <br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> i\n        </p>   \n      <p class=\"text lessonContent\">\n        There is a variant xrange() which avoids the cost of building the whole list for performance sensitive cases (in Python 3000, range() will have the good performance behavior and you can forget about xrange()).\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb244L2xlc3NvbjguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb244L2xlc3NvbjguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson8Component", function() { return Lesson8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson8Component = /** @class */ (function () {
    function Lesson8Component() {
    }
    Lesson8Component.prototype.ngOnInit = function () {
    };
    Lesson8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson8',
            template: __webpack_require__(/*! ./lesson8.component.html */ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.html"),
            styles: [__webpack_require__(/*! ./lesson8.component.scss */ "./src/app/coding/content/lessons/chapter2/lesson8/lesson8.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson8Component);
    return Lesson8Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 2: Python Lists - While Loop\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        Python also has the standard while-loop, and the *break* and *continue* statements work as in C++ and Java, altering the course of the innermost loop. The above for/in loops solves the common case of iterating over every element in a list, but the while loop gives you total control over the index numbers. Here's a while loop which accesses every 3rd element in a list:\n        <p class=\"exampleCode\">\n          <span class=\"comment\">## Access every 3rd element in a list</span><br>\n          i = <span class=\"lit\">0</span><br>\n          <span class=\"kwd\">while</span> i &#60; len(a):<br>\n          &nbsp; &nbsp;<span class=\"kwd\">print</span> a[i]<br>\n          &nbsp;&nbsp; i = i + <span class=\"lit\">3</span>\n        </p>   \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 60vh !important;\n  height: 60vh !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb245L2xlc3NvbjkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsK0JBQThCO0VBQzlCLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsK0NBQThDO0VBQzlDLDBCQUF5QixFQUM1Qjs7QUFTRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUlEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMi9sZXNzb245L2xlc3NvbjkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZXNzb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5sZXNzb25Db250ZW50e1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5leGFtcGxlQ29kZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4vLyAubGVhcm57XG4vLyAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbi8vICAgICBoZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDYwdmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG59XG5cblxuXG4ua3dke1xuICAgIGNvbG9yOiAjM2I3OGU3O1xufVxuICAgIFxuLmNvbW1lbnR7XG4gICAgY29sb3I6ICNkODFiNjA7XG59XG5cbi5saXR7XG4gICAgY29sb3I6ICNjNTM5Mjk7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.ts ***!
  \******************************************************************************/
/*! exports provided: Lesson9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson9Component", function() { return Lesson9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson9Component = /** @class */ (function () {
    function Lesson9Component() {
    }
    Lesson9Component.prototype.ngOnInit = function () {
    };
    Lesson9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson9',
            template: __webpack_require__(/*! ./lesson9.component.html */ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.html"),
            styles: [__webpack_require__(/*! ./lesson9.component.scss */ "./src/app/coding/content/lessons/chapter2/lesson9/lesson9.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson9Component);
    return Lesson9Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Exercise 3: Basic sorting exercises\n    </p>\n    <div class=\"learn\">\n      <p class=\"text lessonContent\">\n        Fill in the code for the functions below. main() is already set up to call the functions with a few different inputs, printing 'OK' when each function is correct. The starter code for each function includes a 'return' which is just a placeholder for your code.\n        <br>\n      </p>       \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9leGVyY2lzZTMvZXhlcmNpc2UzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLCtDQUE4QztFQUM5QywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9jb250ZW50L2xlc3NvbnMvY2hhcHRlcjMvZXhlcmNpc2UzL2V4ZXJjaXNlMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Exercise3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise3Component", function() { return Exercise3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exercise3Component = /** @class */ (function () {
    function Exercise3Component() {
    }
    Exercise3Component.prototype.ngOnInit = function () {
    };
    Exercise3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise3',
            template: __webpack_require__(/*! ./exercise3.component.html */ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.html"),
            styles: [__webpack_require__(/*! ./exercise3.component.scss */ "./src/app/coding/content/lessons/chapter3/exercise3/exercise3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Exercise3Component);
    return Exercise3Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 3: Python Sorting\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed.\n      </p>\n      <p class=\"exampleCode\">\n        a = [<span class=\"lit\">5</span>, <span class=\"lit\">1</span>, <span class=\"lit\">4</span>, <span class=\"lit\">3</span>] <br>\n        <span class=\"kwd\">print</span> sorted(a) <span class=\"comment\">## [1, 3, 4, 5]</span> <br>\n        <span class=\"kwd\">print</span> a  <span class=\"comment\">## [5, 1, 4, 3]</span>\n      </p>\n      <p class=\"lessonContent\">\n        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection. The older list.sort() method is an alternative detailed below. The sorted() function seems easier to use compared to sort(), so I recommend using sorted().\n        The sorted() function can be customized through optional arguments. The sorted() optional argument reverse=True, e.g. sorted(list, reverse=True), makes it sort backwards.      \n      </p>\n      <p class=\"exampleCode\">\n        strs = [<span class=\"str\">'aa'</span>, <span class=\"str\">'BB'</span>, <span class=\"str\">'zz'</span>, <span class=\"str\">'CC'</span>]<br>\n        <span class=\"kwd\">print</span> sorted(strs)  <span class=\"comment\">## ['BB', 'CC', 'aa', 'zz'] (case sensitive)</span><br>\n        <span class=\"kwd\">print</span> sorted(strs, reverse=<span class=\"kwd\">True</span>)    <span class=\"comment\">## ['zz', 'aa', 'CC', 'BB']</span><br>\n      </p>       \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xMS9sZXNzb24xMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29udGVudC9sZXNzb25zL2NoYXB0ZXIzL2xlc3NvbjExL2xlc3NvbjExLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVzc29uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNTY0OGZmO1xufVxuXG4ubGVzc29uQ29udGVudHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZXhhbXBsZUNvZGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmxlYXJue1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmxlYXJue1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7ICBcbiAgICB9XG59XG5cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson11Component", function() { return Lesson11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson11Component = /** @class */ (function () {
    function Lesson11Component() {
    }
    Lesson11Component.prototype.ngOnInit = function () {
    };
    Lesson11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson11',
            template: __webpack_require__(/*! ./lesson11.component.html */ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.html"),
            styles: [__webpack_require__(/*! ./lesson11.component.scss */ "./src/app/coding/content/lessons/chapter3/lesson11/lesson11.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson11Component);
    return Lesson11Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 3: Python Sorting - Custom Sorting With key\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        For more complex custom sorting, sorted() takes an optional \"key=\" specifying a \"key\" function that transforms each element before comparison. The key function takes in 1 value and returns 1 value, and the returned \"proxy\" value is used for the comparisons within the sort.\n        For example with a list of strings, specifying key=len (the built in len() function) sorts the strings by length, from shortest to longest. The sort calls len() for each string to get the list of proxy length values, and then sorts with those proxy values.\n      </p>\n      <p class=\"exampleCode\">\n        strs = [<span class=\"str\">'ccc'</span>, <span class=\"str\">'aaaa'</span>, <span class=\"str\">'d'</span>, <span class=\"str\">'bb'</span>] <br>\n        <span class=\"kwd\">print</span> sorted(strs, key=len)  <span class=\"comment\">## ['d', 'bb', 'ccc', 'aaaa']</span>\n      </p>\n      <p class=\"lessonContent\">\n        As another example, specifying \"str.lower\" as the key function is a way to force the sorting to treat uppercase and lowercase the same:     \n      </p>\n      <p class=\"exampleCode\">\n        <span class=\"comment\">## \"key\" argument specifying str.lower function to use for sorting</span><br>\n        <span class=\"kwd\">print</span> sorted(strs, key=str.lower)  ## ['aa', 'BB', 'CC', 'zz']\n      </p>   \n      <p class=\"lessonContent\">\n      You can also pass in your own MyFn as the key function, like this:\n      </p>\n      <p class=\"exampleCode\">\n        <span class=\"comment\">## Say we have a list of strings we want to sort by the last letter of the string.</span><br>\n        strs = ['xc', 'zb', 'yd' ,'wa']<br>\n        <br>\n        <span class=\"comment\">## Write a little function that takes a string, and returns its last letter.</span><br>\n        <span class=\"comment\">## This will be the key function (takes in 1 value, returns 1 value).</span><br>\n        <span class=\"kwd\">def</span> <span class=\"typ\">MyFn</span>(s):<br>\n        &nbsp;&nbsp; <span class=\"kwd\">return</span> s[<span class=\"lit\">-1</span>]<br>\n          <br>\n        <span class=\"comment\">## Now pass key=MyFn to sorted() to sort by the last letter:</span><br>\n        <span class=\"kwd\">print</span> sorted(strs, key=<span class=\"typ\">MyFn</span>)  <span class=\"comment\">## ['wa', 'zb', 'xc', 'yd']</span>\n      </p>   \n      <p class=\"lessonContent\">\n        To use key= custom sorting, remember that you provide a function that takes one value and returns the proxy value to guide the sorting. There is also an optional argument \"cmp=cmpFn\" to sorted() that specifies a traditional two-argument comparison function that takes two values from the list and returns negative/0/positive to indicate their ordering. The built in comparison function for strings, ints, ... is cmp(a, b), so often you want to call cmp() in your custom comparator. The newer one argument key= sorting is generally preferable.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xMi9sZXNzb24xMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xMi9sZXNzb24xMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson12Component", function() { return Lesson12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson12Component = /** @class */ (function () {
    function Lesson12Component() {
    }
    Lesson12Component.prototype.ngOnInit = function () {
    };
    Lesson12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson12',
            template: __webpack_require__(/*! ./lesson12.component.html */ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.html"),
            styles: [__webpack_require__(/*! ./lesson12.component.scss */ "./src/app/coding/content/lessons/chapter3/lesson12/lesson12.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson12Component);
    return Lesson12Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 3: Python Sorting - sort() method\n\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        As an alternative to sorted(), the sort() method on a list sorts that list into ascending order, e.g. list.sort(). The sort() method changes the underlying list and returns None, so use it like this:      \n      </p>\n      <p class=\"exampleCode\">\n        alist.sort()            <span class=\"comment\">## correct </span><br>\n        alist = blist.sort()     <span class=\"comment\">## NO incorrect, sort() returns None</span><br>\n        \n      </p>\n      <p class=\"lessonContent\">\n        The above is a very common misunderstanding with sort() -- it *does not return* the sorted list. \n      </p>\n        <ul class=\"lessonContent\">\n          <li>The sort() method must be called on a list; it does not work on any enumerable collection (but the sorted() function mentioned before works on anything). </li>\n          <li>The sort() method predates the sorted() function, so you will likely see it in older code. </li>\n          <li>The sort() method does not need to create a new list, so it can be a little faster in the case that the elements to sort are already in a list.</li>\n        </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 55vh !important;\n  height: 55vh !important; }\n\n@media (min-width: 854px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xMy9sZXNzb24xMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBS0w7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xMy9sZXNzb24xMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDU1dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNTV2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4NTRweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufVxuXG4udHlwe1xuICAgIGNvbG9yOiAjOWMyN2IwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson13Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson13Component", function() { return Lesson13Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson13Component = /** @class */ (function () {
    function Lesson13Component() {
    }
    Lesson13Component.prototype.ngOnInit = function () {
    };
    Lesson13Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson13',
            template: __webpack_require__(/*! ./lesson13.component.html */ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.html"),
            styles: [__webpack_require__(/*! ./lesson13.component.scss */ "./src/app/coding/content/lessons/chapter3/lesson13/lesson13.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson13Component);
    return Lesson13Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 3: Python Sorting - Tuples\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        A tuple is a fixed size grouping of elements, such as an (x, y) co-ordinate. Tuples are like lists, except they are immutable and do not change size (tuples are not strictly immutable since one of the contained elements could be mutable). Tuples play a sort of \"struct\" role in Python -- a convenient way to pass around a little logical, fixed size bundle of values. A function that needs to return multiple values can just return a tuple of the values. For example, if I wanted to have a list of 3-d coordinates, the natural python representation would be a list of tuples, where each tuple is size 3 holding one (x, y, z) group.\n\n        To create a tuple, just list the values within parenthesis separated by commas. The \"empty\" tuple is just an empty pair of parenthesis. Accessing the elements in a tuple is just like a list -- len(), [ ], for, in, etc. all work the same.      </p>\n      <p class=\"exampleCode\">\n        tuple = (<span class=\"lit\">1</span>, <span class=\"lit\">2</span>, <span class=\"str\">'hi'</span>)<br>\n        <span class=\"kwd\">print</span> len(tuple)   <span class=\"comment\">## 3</span><br>\n        <span class=\"kwd\">print</span> tuple[<span class=\"lit\">2</span>]     <span class=\"comment\">## hi</span><br>\n        tuple[<span class=\"lit\">2</span>] = 'bye'   <span class=\"comment\">## NO, tuples cannot be changed</span><br>\n        tuple = (<span class=\"lit\">1</span>, <span class=\"lit\">2</span>, <span class=\"str\">'bye'</span>)  <span class=\"comment\">## this works</span>\n      </p>\n      <p class=\"lessonContent\">\n        To create a size-1 tuple, the lone element must be followed by a comma.\n      </p>\n      <p class=\"exampleCode\">\n        tuple = (<span class=\"str\">'hi'</span>,)   <span class=\"comment\">## size-1 tuple</span>\n      </p>     \n      <p class=\"lessonContent\">\n        It's a funny case in the syntax, but the comma is necessary to distinguish the tuple from the ordinary case of putting an expression in parentheses. In some cases you can omit the parenthesis and Python will see from the commas that you intend a tuple.\n        Assigning a tuple to an identically sized tuple of variable names assigns all the corresponding values. If the tuples are not the same size, it throws an error. This feature works for lists too.      \n      </p>  \n      <p class=\"exampleCode\">\n        (x, y, z) = (<span class=\"lit\">42</span>, <span class=\"lit\">13</span>, <span class=\"str\">\"hike\"</span>)<br>\n        <span class=\"kwd\">print</span> z  <span class=\"comment\">## hike</span><br>\n        (err_string, err_code) = <span class=\"typ\">Foo</span>()  <span class=\"comment\">## Foo() returns a length-2 tuple </span>\n      </p> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  min-height: calc(60vh - 105px) !important;\n  height: calc(60vh - 105px) !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xNC9sZXNzb24xNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQVNHO0VBQ0ksMEJBQXlCO0VBQ3pCLDBDQUF5QztFQUN6QyxzQ0FBcUMsRUFDeEM7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyMy9sZXNzb24xNC9sZXNzb24xNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi8vIC5sZWFybntcbi8vICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuLy8gICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDh2aCAtIDEwMnB4KSAhaW1wb3J0YW50OyAgXG4vLyAgICAgaGVpZ2h0OiBjYWxjKDQ4dmggLSAxMDJweCkgIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubGVhcm57XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoNjB2aCAtIDEwNXB4KSAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogY2FsYyg2MHZoIC0gMTA1cHgpICFpbXBvcnRhbnQ7ICBcbiAgICB9XG4vLyB9XG5cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufVxuXG4udHlwe1xuICAgIGNvbG9yOiAjOWMyN2IwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson14Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson14Component", function() { return Lesson14Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson14Component = /** @class */ (function () {
    function Lesson14Component() {
    }
    Lesson14Component.prototype.ngOnInit = function () {
    };
    Lesson14Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson14',
            template: __webpack_require__(/*! ./lesson14.component.html */ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.html"),
            styles: [__webpack_require__(/*! ./lesson14.component.scss */ "./src/app/coding/content/lessons/chapter3/lesson14/lesson14.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson14Component);
    return Lesson14Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Exercise 4: Overview of Chapters 1 - 4 \n      </p>\n      <div class=\"learn\">\n        <p class=\"text lessonContent\">\n          Fill in the code for the functions below.\n          <br>\n        </p>       \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9leGVyY2lzZTQvZXhlcmNpc2U0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLCtDQUE4QztFQUM5QywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9jb250ZW50L2xlc3NvbnMvY2hhcHRlcjQvZXhlcmNpc2U0L2V4ZXJjaXNlNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Exercise4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise4Component", function() { return Exercise4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exercise4Component = /** @class */ (function () {
    function Exercise4Component() {
    }
    Exercise4Component.prototype.ngOnInit = function () {
    };
    Exercise4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise4',
            template: __webpack_require__(/*! ./exercise4.component.html */ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.html"),
            styles: [__webpack_require__(/*! ./exercise4.component.scss */ "./src/app/coding/content/lessons/chapter4/exercise4/exercise4.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Exercise4Component);
    return Exercise4Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 4: Python Python Dict and File - Dict Hash Table\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            Python's efficient key/value hash table structure is called a \"dict\". The contents of a dict can be written as a series of key:value pairs within braces &#123;&#125; , e.g. dict = &#123;key1:value1, key2:value2, ...&#125;. The \"empty dict\" is just an empty pair of curly braces &#123; &#125;.\n            Looking up or setting a value in a dict uses square brackets, e.g. dict &#91;'foo'&#93; looks up the value under the key 'foo'. Strings, numbers, and tuples work as keys, and any type can be a value. Other types may or may not work correctly as keys (strings and tuples work cleanly since they are immutable). Looking up a value which is not in the dict throws a KeyError -- use \"in\" to check if the key is in the dict, or use dict.get(key) which returns the value or None if the key is not present (or get(key, not-found) allows you to specify what value to return in the not-found case).\n        </p>\n        <p class=\"exampleCode\">\n            <span class=\"comment\">## Can build up a dict by starting with the the empty dict &#123;&#125;</span><br>\n            <span class=\"comment\">## and storing key/value pairs into the dict like this:</span><br>\n            <span class=\"comment\">## dict[key] = value-for-that-key</span><br> \n            dict = &#123;&#125;<br>\n            dict &#91;<span class =\"str\">'a'</span>&#93; =  <span class =\"str\">'alpha'</span><br>\n            dict &#91;<span class =\"str\">'g'</span>&#93; = <span class =\"str\">'gamma'</span><br>\n            dict &#91;<span class =\"str\">'o'</span>&#93; = <span class =\"str\">'omega'</span><br>\n            <br>\n            <span class=\"kwd\">print</span> dict  <span class=\"comment\">## &#123; 'a': 'alpha', 'o': 'omega', 'g': 'gamma' &#125;</span><br>\n            <br>\n            <span class=\"kwd\">print</span> dict &#91; 'a'&#93;    <span class=\"comment\">## Simple lookup, returns 'alpha'</span><br>\n            dict &#91;'a'&#93;  = 6      <span class=\"comment\">## Put new key/value into dict</span><br>\n            'a' in dict         <span class=\"comment\">## True</span><br>\n            <span class=\"comment\">## print dict &#91;'z'&#93;                  ## Throws KeyError</span><br>\n            <span class=\"kwd\">if</span> 'z' <span class=\"kwd\">in</span> dict: <span class=\"kwd\">print</span> dict &#91;<span class=\"str\">'z'</span>&#93;    <span class=\"comment\">## Avoid KeyError</span><br>\n            <span class=\"kwd\">print</span> dict.get(<span class=\"str\">'z'</span>)  <span class=\"comment\">## None (instead of KeyError)</span>\n        </p>\n        <p class=\"lessonContent\">\n            A for loop on a dictionary iterates over its keys by default. The keys will appear in an arbitrary order. The methods dict.keys() and dict.values() return lists of the keys or values explicitly. There's also an items() which returns a list of (key, value) tuples, which is the most efficient way to examine all the key value data in the dictionary. All of these lists can be passed to the sorted() function.\n        </p>\n        <p class=\"exampleCode\">\n            <span class=\"comment\">## By default, iterating over a dict iterates over its keys.</span><br>\n            <span class=\"comment\">## Note that the keys are in a random order.</span><br>\n            <span class=\"kwd\">for</span> key <span class=\"kwd\">in</span> dict: <span class=\"kwd\">print</span> key<br>\n            <span class=\"comment\">## prints a g o</span><br>\n            <br>\n            <span class=\"comment\">## Exactly the same as above</span><br>\n            <span class=\"kwd\">for</span> key <span class=\"kwd\">in</span> dict.keys(): <span class=\"kwd\">print</span> key<br>\n            <br>\n            <span class=\"comment\">## Get the .keys() list:</span><br>\n            <span class=\"kwd\">print</span> dict.keys()  <span class=\"comment\">## &#91; 'a', 'o', 'g' &#93;</span><br>\n            <br>\n            <span class=\"comment\">## Likewise, there's a .values() list of values</span><br>\n            <span class=\"kwd\">print</span> dict.values()  <span class=\"comment\">## &#91; 'alpha', 'omega', 'gamma' &#93;</span><br>\n            <br>\n            <span class=\"comment\">## Common case -- loop over the keys in sorted order,</span><br>\n            <span class=\"comment\">## accessing each key/value</span><br>\n            <span class=\"kwd\">for</span> key <span class=\"kwd\">in</span> sorted(dict.keys()):<br>\n            &nbsp;&nbsp; <span class=\"kwd\">print</span> key, dict&#91;key&#93;<br>\n            <br>\n            <span class=\"comment\">## .items() is the dict expressed as (key, value) tuples</span><br>\n            <span class=\"kwd\">print</span> dict.items()  <span class=\"comment\">##  &#91;('a', 'alpha'), ('o', 'omega'), ('g', 'gamma')&#93;</span><br>\n            <br>\n            <span class=\"comment\">## This loop syntax accesses the whole dict by looping</span><br>\n            <span class=\"comment\">## over the .items() tuple list, accessing one (key, value)</span><br>\n            <span class=\"comment\">## pair on each iteration.</span><br>\n            <span class=\"kwd\">for</span> k, v in dict.items(): <span class=\"kwd\">print</span> k, <span class=\"str\">'&gt;'</span>, v<br>\n            <span class=\"comment\">## a &gt; alpha    o &gt; omega     g &gt; gamma</span><br>\n        </p>   \n        <p class=\"lessonContent\">\n            There are \"iter\" variants of these methods called iterkeys(), itervalues() and iteritems() which avoid the cost of constructing the whole list -- a performance win if the data is huge. However, I generally prefer the plain keys() and values() methods with their sensible names. In Python 3000 revision, the need for the iterkeys() variants is going away.\n            Strategy note: from a performance point of view, the dictionary is one of your greatest tools, and you should use it where you can as an easy way to organize data. For example, you might read a log file where each line begins with an IP address, and store the data into a dict using the IP address as the key, and the list of lines where it appears as the value. Once you've read in the whole file, you can look up any IP address and instantly see its list of lines. The dictionary takes in scattered data and makes it into something coherent.        \n        </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNS9sZXNzb24xNS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNS9sZXNzb24xNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson15Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson15Component", function() { return Lesson15Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson15Component = /** @class */ (function () {
    function Lesson15Component() {
    }
    Lesson15Component.prototype.ngOnInit = function () {
    };
    Lesson15Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson15',
            template: __webpack_require__(/*! ./lesson15.component.html */ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.html"),
            styles: [__webpack_require__(/*! ./lesson15.component.scss */ "./src/app/coding/content/lessons/chapter4/lesson15/lesson15.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson15Component);
    return Lesson15Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 4: Python Python Dict and File - Dict Formatting\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        The % operator works conveniently to substitute values from a dict into a string by name:\n      </p>\n      <p class=\"exampleCode\">\n        hash = &#123;&#125;<br>\n        hash&#91;<span class=\"str\">'word'</span>&#93; = <span class=\"str\">'garfield'</span><br>\n        hash&#91;<span class=\"str\">'count'</span>&#93; = 42<br>\n        s = <span class=\"str\">'I want %(count)d copies of %(word)s'</span> % hash  <span class=\"comment\"># %d for int, %s for string</span><br>\n        <span class=\"comment\"># 'I want 42 copies of garfield'</span><br>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNi9sZXNzb24xNi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNi9sZXNzb24xNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson16Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson16Component", function() { return Lesson16Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson16Component = /** @class */ (function () {
    function Lesson16Component() {
    }
    Lesson16Component.prototype.ngOnInit = function () {
    };
    Lesson16Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson16',
            template: __webpack_require__(/*! ./lesson16.component.html */ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.html"),
            styles: [__webpack_require__(/*! ./lesson16.component.scss */ "./src/app/coding/content/lessons/chapter4/lesson16/lesson16.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson16Component);
    return Lesson16Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 4: Python Python Dict and File - Del\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        The \"del\" operator does deletions. In the simplest case, it can remove the definition of a variable, as if that variable had not been defined. Del can also be used on list elements or slices to delete that part of the list and to delete entries from a dictionary.      </p>\n      <p class=\"exampleCode\">\n        <span class=\"kwd\">var</span> = 6<br>\n        <span class=\"kwd\">del var</span>  <span class=\"comment\"># var no more!</span><br>\n        <br>\n        list = &#91;<span class=\"str\">'a'</span>, <span class=\"str\">'b'</span>, <span class=\"str\">'c'</span>, <span class=\"str\">'d'</span>&#93;<br>\n        <span class=\"kwd\">del</span> list&#91;0&#93;    <span class=\"comment\">## Delete first element</span><br>\n        <span class=\"kwd\">del</span> list&#91;-2:&#93;   <span class=\"comment\">## Delete last two elements</span><br>\n        <span class=\"kwd\">print</span> list      <span class=\"comment\">## &#91;'b'&#93;</span><br>\n        <br>\n        dict = &#123;<span class=\"str\">'a'</span>:<span class=\"lit\">1</span>, <span class=\"str\">'b'</span>:<span class=\"lit\">2</span>, <span class=\"str\">'c'</span>:<span class=\"lit\">3</span>&#125;<br>\n        <span class=\"kwd\">del</span> dict&#91;<span class=\"str\">'b'</span>&#93;   ## Delete 'b' entry<br>\n        <span class=\"kwd\">print</span> dict      <span class=\"comment\">## &#123;'a':1, 'c':3&#125;</span><br>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNy9sZXNzb24xNy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xNy9sZXNzb24xNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson17Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson17Component", function() { return Lesson17Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson17Component = /** @class */ (function () {
    function Lesson17Component() {
    }
    Lesson17Component.prototype.ngOnInit = function () {
    };
    Lesson17Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson17',
            template: __webpack_require__(/*! ./lesson17.component.html */ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.html"),
            styles: [__webpack_require__(/*! ./lesson17.component.scss */ "./src/app/coding/content/lessons/chapter4/lesson17/lesson17.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson17Component);
    return Lesson17Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 4: Python Python Dict and File - Files\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n        The open() function opens and returns a file handle that can be used to read or write a file in the usual way. The code f = open('name', 'r') opens the file into the variable f, ready for reading operations, and use f.close() when finished. Instead of 'r', use 'w' for writing, and 'a' for append. The special mode 'rU' is the \"Universal\" option for text files where it's smart about converting different line-endings so they always come through as a simple '\\n'. The standard for-loop works for text files, iterating through the lines of the file (this works only for text files, not binary files). The for-loop technique is a simple and efficient way to look at all the lines in a text file:      \n      </p>\n      <p class=\"exampleCode\">\n        <span class=\"comment\"># Echo the contents of a file</span><br>\n        f = open(<span class=\"str\">'foo.txt'</span>, <span class=\"str\">'rU'</span>)<br>\n        <span class=\"kwd\">for</span> line <span class=\"kwd\">in</span> f:   <span class=\"comment\">## iterates over the lines of the file</span><br>\n        &nbsp;&nbsp;<span class=\"kwd\">print</span> line,     <span class=\"comment\">## trailing , so print does not add an end-of-line char</span><br>\n              <span class=\"comment\">## since 'line' already includes the end-of line.</span><br>\n        f.close()\n      </p>\n      <p class=\"exampleCode\">\n        Reading one line at a time has the nice quality that not all the file needs to fit in memory at one time -- handy if you want to look at every line in a 10 gigabyte file without using 10 gigabytes of memory. The f.readlines() method reads the whole file into memory and returns its contents as a list of its lines. The f.read() method reads the whole file into a single string, which can be a handy way to deal with the text all at once, such as with regular expressions we'll see later.\n        For writing, f.write(string) method is the easiest way to write data to an open output file. Or you can use \"print\" with an open file, but the syntax is nasty: \"print >> f, string\". In python 3000, the print syntax will be fixed to be a regular function call with a file= optional argument: \"print(string, file=f)\".\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  min-height: calc(60vh - 105px) !important;\n  height: calc(60vh - 105px) !important; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xOC9sZXNzb24xOC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQVNHO0VBQ0ksMEJBQXlCO0VBQ3pCLDBDQUF5QztFQUN6QyxzQ0FBcUMsRUFDeEM7O0FBS0w7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNC9sZXNzb24xOC9sZXNzb24xOC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi8vIC5sZWFybntcbi8vICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuLy8gICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDh2aCAtIDEwMnB4KSAhaW1wb3J0YW50OyAgXG4vLyAgICAgaGVpZ2h0OiBjYWxjKDQ4dmggLSAxMDJweCkgIWltcG9ydGFudDsgIFxuLy8gfVxuXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubGVhcm57XG4gICAgICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoNjB2aCAtIDEwNXB4KSAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogY2FsYyg2MHZoIC0gMTA1cHgpICFpbXBvcnRhbnQ7ICBcbiAgICB9XG4vLyB9XG5cblxuXG4ua3dke1xuICAgIGNvbG9yOiAjM2I3OGU3O1xufVxuICAgIFxuLmNvbW1lbnR7XG4gICAgY29sb3I6ICNkODFiNjA7XG59XG5cbi5saXR7XG4gICAgY29sb3I6ICNjNTM5Mjk7XG59XG5cbi50eXB7XG4gICAgY29sb3I6ICM5YzI3YjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson18Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson18Component", function() { return Lesson18Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson18Component = /** @class */ (function () {
    function Lesson18Component() {
    }
    Lesson18Component.prototype.ngOnInit = function () {
    };
    Lesson18Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson18',
            template: __webpack_require__(/*! ./lesson18.component.html */ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.html"),
            styles: [__webpack_require__(/*! ./lesson18.component.scss */ "./src/app/coding/content/lessons/chapter4/lesson18/lesson18.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson18Component);
    return Lesson18Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Exercise 5: Regular Expressions\n      </p>\n      <div class=\"learn\">\n        <p class=\"text lessonContent\">\n          Fill in the code for the 2 functions. \n          <br>\n          main() is already set up to call the functions with a few different inputs, printing 'OK' when each function is correct.\n          The starter code for each function includes a 'return' which is just a placeholder for your code.\n        </p>       \n        <!-- <button type=\"button\" class=\"btn btn-lg btn-primary begin\" (click)=\"begin()\"><span>Begin</span></button> -->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9leGVyY2lzZTUvZXhlcmNpc2U1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLCtDQUE4QztFQUM5QywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJO0lBQ0ksMEJBQXlCO0lBQ3pCLDRCQUEyQjtJQUMzQix3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9jb250ZW50L2xlc3NvbnMvY2hhcHRlcjUvZXhlcmNpc2U1L2V4ZXJjaXNlNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.ts ***!
  \**********************************************************************************/
/*! exports provided: Exercise5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise5Component", function() { return Exercise5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exercise5Component = /** @class */ (function () {
    function Exercise5Component() {
    }
    Exercise5Component.prototype.ngOnInit = function () {
    };
    Exercise5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exercise5',
            template: __webpack_require__(/*! ./exercise5.component.html */ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.html"),
            styles: [__webpack_require__(/*! ./exercise5.component.scss */ "./src/app/coding/content/lessons/chapter5/exercise5/exercise5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Exercise5Component);
    return Exercise5Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"content\">\n    <p class =\"text lesson-title\">\n      Chapter 5: Regular Expressions\n    </p>\n    <div class=\"text learn\">\n      <p class=\"lessonContent\">\n          Regular expressions are a powerful language for matching text patterns. This page gives a basic introduction to regular expressions themselves sufficient for our Python exercises and shows how regular expressions work in Python. The Python \"re\" module provides regular expression support.\n          In Python a regular expression search is typically written as:\n      </p>\n      <p class=\"exampleCode\">\n          match = re.search(pat, str)\n      </p>\n      <p class=\"lessonContent\">\n          The re.search() method takes a regular expression pattern and a string and searches for that pattern within the string. If the search is successful, search() returns a match object or None otherwise. Therefore, the search is usually immediately followed by an if-statement to test if the search succeeded, as shown in the following example which searches for the pattern 'word:' followed by a 3 letter word (details below):\n      </p>\n      <p class=\"exampleCode\">\n          str = <span class=\"str\">'an example word:cat!!'</span><br>\n          match = re.search(r<span class=\"str\">'word:\\w\\w\\w'</span>, str)<br>\n          <span class=\"comment\"># If-statement after search() tests if it succeeded</span><br>\n          <span class=\"kwd\">if</span> match:<br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> <span class=\"str\">'found'</span>, match.<span class=\"kwd\">group()</span> <span class=\"comment\">## 'found word:cat'</span><br>\n          <span class=\"kwd\">else:</span><br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> <span class=\"str\">'did not find'</span><br>\n      </p>\n      <p class=\"lessonContent\">\n        The code match = re.search(pat, str) stores the search result in a variable named \"match\". Then the if-statement tests the match -- if true the search succeeded and match.group() is the matching text (e.g. 'word:cat'). Otherwise if the match is false (None to be more specific), then the search did not succeed, and there is no matching text.\n        The 'r' at the start of the pattern string designates a python \"raw\" string which passes through backslashes without change which is very handy for regular expressions (Java needs this feature badly!). I recommend that you always write pattern strings with the 'r' just as a habit.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24xOS9sZXNzb24xOS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBR0w7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24xOS9sZXNzb24xOS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG4ua3dke1xuICAgIGNvbG9yOiAjM2I3OGU3O1xufVxuICAgIFxuLmNvbW1lbnR7XG4gICAgY29sb3I6ICNkODFiNjA7XG59XG5cbi5saXR7XG4gICAgY29sb3I6ICNjNTM5Mjk7XG59XG5cbi50eXB7XG4gICAgY29sb3I6ICM5YzI3YjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson19Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson19Component", function() { return Lesson19Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson19Component = /** @class */ (function () {
    function Lesson19Component() {
    }
    Lesson19Component.prototype.ngOnInit = function () {
    };
    Lesson19Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson19',
            template: __webpack_require__(/*! ./lesson19.component.html */ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.html"),
            styles: [__webpack_require__(/*! ./lesson19.component.scss */ "./src/app/coding/content/lessons/chapter5/lesson19/lesson19.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson19Component);
    return Lesson19Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 5: Regular Expressions - Basic Patterns\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            The power of regular expressions is that they can specify patterns, not just fixed characters. Here are the most basic patterns which match single chars:\n      </p>     \n      <ul class=\"lessonContent\">\n        <li>a, X, 9, < -- ordinary characters just match themselves exactly. The meta-characters which do not match themselves because they have special meanings are: . ^ &#36; * + ? &#123; [ ] \\ | \t&#40; &#41; (details below)</li>\n        <li>. (a period) -- matches any single character except newline '\\n'</li>\n        <li>\\w -- (lowercase w) matches a \"word\" character: a letter or digit or underbar [a-zA-Z0-9_]. Note that although \"word\" is the mnemonic for this, it only matches a single word char, not a whole word. \\W (upper case W) matches any non-word character.</li>\n        <li>\\b -- boundary between word and non-word</li>\n        <li>\\s -- (lowercase s) matches a single whitespace character -- space, newline, return, tab, form [ \\n\\r\\t\\f]. \\S (upper case S) matches any non-whitespace character.</li>\n        <li>\\t, \\n, \\r -- tab, newline, return</li>\n        <li>\\d -- decimal digit [0-9] (some older regex utilities do not support but \\d, but they all support \\w and \\s)\n        <li>^ = start, $ = end -- match the start or end of the string</li>\n        <li>\\ -- inhibit the \"specialness\" of a character. So, for example, use \\. to match a period or \\\\ to match a slash. If you are unsure if a character has special meaning, such as '@', you can put a slash in front of it, \\@, to make sure it is treated just as a character.</li>\n      </ul>  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMC9sZXNzb24yMC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMC9sZXNzb24yMC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson20Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson20Component", function() { return Lesson20Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson20Component = /** @class */ (function () {
    function Lesson20Component() {
    }
    Lesson20Component.prototype.ngOnInit = function () {
    };
    Lesson20Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson20',
            template: __webpack_require__(/*! ./lesson20.component.html */ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.html"),
            styles: [__webpack_require__(/*! ./lesson20.component.scss */ "./src/app/coding/content/lessons/chapter5/lesson20/lesson20.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson20Component);
    return Lesson20Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 5: Regular Expressions - Repetition\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            Things get more interesting when you use + and * to specify repetition in the pattern\n        </p>     \n        <ul class=\"lessonContent\">\n          <li>+ -- 1 or more occurrences of the pattern to its left, e.g. 'i+' = one or more i's</li>\n          <li>* -- 0 or more occurrences of the pattern to its left</li>\n          <li>? -- match 0 or 1 occurrences of the pattern to its left</li>                  \n        </ul>  \n        <p class =\"text lesson-smallTitle\">\n          Leftmost & Largest\n        </p>\n        <p class=\"lessonContent\">\n          First the search finds the leftmost match for the pattern, and second it tries to use up as much of the string as possible -- i.e. + and * go as far as possible (the + and * are said to be \"greedy\").\n        </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.lesson-smallTitle {\n  font-size: 12px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMS9sZXNzb24yMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBR0w7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29udGVudC9sZXNzb25zL2NoYXB0ZXI1L2xlc3NvbjIxL2xlc3NvbjIxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVzc29uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjNTY0OGZmO1xufVxuXG4ubGVzc29uQ29udGVudHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZXhhbXBsZUNvZGV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuLmxlYXJue1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0OiA0OHZoICFpbXBvcnRhbnQ7ICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmxlYXJue1xuICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7ICBcbiAgICAgICAgaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7ICBcbiAgICB9XG59XG5cbi5sZXNzb24tc21hbGxUaXRsZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmt3ZHtcbiAgICBjb2xvcjogIzNiNzhlNztcbn1cbiAgICBcbi5jb21tZW50e1xuICAgIGNvbG9yOiAjZDgxYjYwO1xufVxuXG4ubGl0e1xuICAgIGNvbG9yOiAjYzUzOTI5O1xufVxuXG4udHlwe1xuICAgIGNvbG9yOiAjOWMyN2IwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson21Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson21Component", function() { return Lesson21Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson21Component = /** @class */ (function () {
    function Lesson21Component() {
    }
    Lesson21Component.prototype.ngOnInit = function () {
    };
    Lesson21Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson21',
            template: __webpack_require__(/*! ./lesson21.component.html */ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.html"),
            styles: [__webpack_require__(/*! ./lesson21.component.scss */ "./src/app/coding/content/lessons/chapter5/lesson21/lesson21.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson21Component);
    return Lesson21Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 5: Regular Expressions - Group Extraction\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            The \"group\" feature of a regular expression allows you to pick out parts of the matching text. Suppose for the emails problem that we want to extract the username and host separately. To do this, add parenthesis ( ) around the username and host in the pattern, like this: r'([\\w.-]+)@([\\w.-]+)'. In this case, the parenthesis do not change what the pattern will match, instead they establish logical \"groups\" inside of the match text. On a successful search, match.group(1) is the match text corresponding to the 1st left parenthesis, and match.group(2) is the text corresponding to the 2nd left parenthesis. The plain match.group() is still the whole match text as usual.           \n        </p>\n        <p class=\"exampleCode\">\n          str = <span class=\"str\">'purple alice-b@google.com monkey dishwasher'</span><br>\n          match = re.search(r<span class=\"str\">'([\\w.-]+)@([\\w.-]+)'</span>, str)<br>\n          <span class=\"kwd\">if</span> match:<br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> match.group()   <span class=\"comment\">## 'alice-b@google.com' (the whole match)</span><br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> match.group(1)  <span class=\"comment\">## 'alice-b' (the username, group 1)</span><br>\n          &nbsp;&nbsp; <span class=\"kwd\">print</span> match.group(2)  <span class=\"comment\">## 'google.com' (the host, group 2)</span>\n        </p>\n        <p class=\"lessonContent\">\n            A common workflow with regular expressions is that you write a pattern for the thing you are looking for, adding parenthesis groups to extract the parts you want.\n       </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMi9sZXNzb24yMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBR0w7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMi9sZXNzb24yMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG4ua3dke1xuICAgIGNvbG9yOiAjM2I3OGU3O1xufVxuICAgIFxuLmNvbW1lbnR7XG4gICAgY29sb3I6ICNkODFiNjA7XG59XG5cbi5saXR7XG4gICAgY29sb3I6ICNjNTM5Mjk7XG59XG5cbi50eXB7XG4gICAgY29sb3I6ICM5YzI3YjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson22Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson22Component", function() { return Lesson22Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson22Component = /** @class */ (function () {
    function Lesson22Component() {
    }
    Lesson22Component.prototype.ngOnInit = function () {
    };
    Lesson22Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson22',
            template: __webpack_require__(/*! ./lesson22.component.html */ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.html"),
            styles: [__webpack_require__(/*! ./lesson22.component.scss */ "./src/app/coding/content/lessons/chapter5/lesson22/lesson22.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson22Component);
    return Lesson22Component;
}());



/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"content\">\n      <p class =\"text lesson-title\">\n        Chapter 5: Regular Expressions - Find All\n      </p>\n      <div class=\"text learn\">\n        <p class=\"lessonContent\">\n            findall() is probably the single most powerful function in the re module. Above we used re.search() to find the first match for a pattern. findall() finds *all* the matches and returns them as a list of strings, with each string representing one match.\n        </p>\n        <p class=\"exampleCode\">\n            <span class=\"comment\">## Suppose we have a text with many email addresses</span><br>\n            str = <span class=\"str\">'purple alice@google.com, blah monkey bob@abc.com blah dishwasher'</span><br>\n            <br>\n            <span class=\"comment\">## Here re.findall() returns a list of all the found email strings</span><br>\n            emails = re.findall(r<span class=\"str\">'[\\w\\.-]+@[\\w\\.-]+'</span>, str) <span class=\"comment\">## ['alice@google.com', 'bob@abc.com']</span><br>\n            <span class=\"kwd\">for</span> email <span class=\"kwd\">in</span> emails:<br>\n            &nbsp;&nbsp; <span class=\"comment\"># do something with each found email string</span><br>\n            &nbsp;&nbsp; <span class=\"kwd\">print</span> email\n        </p>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black; }\n\n.main {\n  padding-left: 15px;\n  justify-content: space-between;\n  padding-right: 15px;\n  height: 100%; }\n\n.lesson-title {\n  font-size: 16px;\n  font-weight: 350;\n  line-height: 2rem;\n  color: #5648ff; }\n\n.lessonContent {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 1.6; }\n\n.exampleCode {\n  font-size: 13px;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: #f7f7f7; }\n\n.learn {\n  overflow: auto !important;\n  max-height: 48vh !important;\n  height: 48vh !important; }\n\n@media (min-width: 768px) {\n  .learn {\n    overflow: auto !important;\n    max-height: 60vh !important;\n    height: 60vh !important; } }\n\n.kwd {\n  color: #3b78e7; }\n\n.comment {\n  color: #d81b60; }\n\n.lit {\n  color: #c53929; }\n\n.typ {\n  color: #9c27b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMy9sZXNzb24yMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQiwrQkFBOEI7RUFDOUIsb0JBQW1CO0VBQ25CLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksZ0JBQWU7RUFDZiwrQ0FBOEM7RUFDOUMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSTtJQUNJLDBCQUF5QjtJQUN6Qiw0QkFBMkI7SUFDM0Isd0JBQXVCLEVBQzFCLEVBQUE7O0FBSUw7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2NvbnRlbnQvbGVzc29ucy9jaGFwdGVyNS9sZXNzb24yMy9sZXNzb24yMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxlc3Nvbi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmxlc3NvbkNvbnRlbnR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmV4YW1wbGVDb2Rle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG59XG5cbi5sZWFybntcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDQ4dmggIWltcG9ydGFudDsgIFxuICAgIGhlaWdodDogNDh2aCAhaW1wb3J0YW50OyAgXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5sZWFybntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50OyAgXG4gICAgfVxufVxuXG5cbi5rd2R7XG4gICAgY29sb3I6ICMzYjc4ZTc7XG59XG4gICAgXG4uY29tbWVudHtcbiAgICBjb2xvcjogI2Q4MWI2MDtcbn1cblxuLmxpdHtcbiAgICBjb2xvcjogI2M1MzkyOTtcbn1cblxuLnR5cHtcbiAgICBjb2xvcjogIzljMjdiMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.ts ***!
  \********************************************************************************/
/*! exports provided: Lesson23Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson23Component", function() { return Lesson23Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Lesson23Component = /** @class */ (function () {
    function Lesson23Component() {
    }
    Lesson23Component.prototype.ngOnInit = function () {
    };
    Lesson23Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson23',
            template: __webpack_require__(/*! ./lesson23.component.html */ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.html"),
            styles: [__webpack_require__(/*! ./lesson23.component.scss */ "./src/app/coding/content/lessons/chapter5/lesson23/lesson23.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson23Component);
    return Lesson23Component;
}());



/***/ }),

/***/ "./src/app/coding/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Sidebar -->\n    <ul class=\"sidebar navbar-nav overlay\">\n      <button type=\"button\" class=\"btn btn-lg btn-secondary show overlay\" (click)=\"close()\"><i class=\"fa fa-arrow-circle-o-left rotate\" aria-hidden=\"true\"></i></button>\n      <li class=\"nav-item divider\">\n          Menu\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard\">\n          <i class=\"fa fa-tachometer userInfo color\" aria-hidden=\"true\"></i>\n          Dashboard <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"/coding\">\n          <i class=\"fa fa-laptop userInfo colorActive\" aria-hidden=\"true\"></i>\n          Code\n        </a>\n      </li>\n      <li class=\"nav-item divider\">\n          More\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link help\" (click)=\"openModal()\">\n            <i class=\"fa fa-question-circle userInfo color\" aria-hidden=\"true\"></i>\n            Help\n          </a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/dashboard/settings\">\n            <i class=\"fa fa-cog userInfo color\" aria-hidden=\"true\"></i>\n            Settings\n          </a>\n      </li>\n    </ul>"

/***/ }),

/***/ "./src/app/coding/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  z-index: 1000 !important;\n  margin-top: -3px; }\n\n.show {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  width: 5rem;\n  position: fixed;\n  left: 65px;\n  top: 50vh;\n  padding: 0px; }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.overlay {\n  position: fixed;\n  overflow-x: hidden;\n  transition: 0.8s; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important;\n    z-index: 1000 !important;\n    margin-top: -3px; }\n  .show {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    position: fixed;\n    left: 170px;\n    top: 50vh;\n    padding: 0px;\n    width: 5rem; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left;\n  padding: 0px !important; }\n\n.about {\n  padding-left: 50px; }\n\n.colorActive {\n  color: #5648ff; }\n\n.color {\n  color: #21c87a; }\n\n.space {\n  padding-right: 5px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15); }\n\n.text {\n  color: black;\n  font-weight: 350; }\n\n.chat {\n  padding-top: 20px; }\n\n.help {\n  color: #21c87a !important;\n  cursor: pointer; }\n\n.italic {\n  font-style: italic; }\n\n.label {\n  font-size: 14px;\n  font-weight: 300; }\n\n.buttonSide {\n  float: left;\n  padding-right: 1.5rem;\n  padding-top: 0.5rem; }\n\n.section {\n  margin-bottom: 2.5rem;\n  float: left; }\n\n.confirm {\n  font-weight: 300;\n  font-size: 16px;\n  color: white; }\n\n.noFriends {\n  margin-bottom: 1rem; }\n\n.secondaryButton {\n  position: absolute;\n  right: 1.5rem;\n  bottom: 1rem;\n  align-items: center; }\n\n.reset {\n  font-weight: 300;\n  font-size: 13px;\n  display: flex;\n  cursor: pointer;\n  color: #5648ff !important; }\n\n.resetIcon {\n  padding-top: 3px; }\n\n.container-fluid {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 2.5rem; }\n\n@media (max-width: 768px) {\n  .userInfo {\n    display: none; } }\n\n@media (max-width: 576px) {\n  .mobile {\n    display: none; } }\n\n.small {\n  text-decoration: none !important; }\n\n.rotate {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvY29kaW5nL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFHSDtFQUNJLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0U7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG9CQUFtQixFQUNwQixFQUFBOztBQUlIO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFO0lBQ0UsWUFBVyxFQUNaLEVBQUE7O0FBR0g7RUFDRSx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLHNDQUFxQztFQUNyQyw4Q0FBNEM7RUFFNUMseUJBQXdCO0VBQ3hCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsWUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLFVBQVM7RUFDVCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSw4QkFBNkI7RUFDN0IsbUNBQWtDO0VBQ2xDLDJCQUEwQjtFQUMxQixzQ0FBcUM7RUFDckMsVUFBUyxFQUNWOztBQUVEO0VBQ0UsVUFBUztFQUNULHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFSDtFQUVFLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFHQztFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRTtJQUNFLHdCQUF1QjtJQUN2Qix5QkFBd0I7SUFDeEIsaUJBQWdCLEVBQ2pCO0VBRUQ7SUFDRSxpQ0FBd0I7WUFBeEIseUJBQXdCO0lBQ3hCLGdCQUFlO0lBQ2YsWUFBVztJQUNYLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVyxFQUVaO0VBRUQ7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLE9BQU0sRUFDUDtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBQ0Q7SUFDRSw4QkFBNkI7SUFDN0IsbUNBQWtDO0lBQ2xDLDJCQUEwQjtJQUMxQixzQ0FBcUM7SUFDckMsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QscUJBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLFVBQVM7RUFDVCwyQkFBMEI7RUFDMUIsaUJBQWdCLEVBQ2pCOztBQUVIO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBR0QscUJBQXFCOztBQUNyQjtFQUNFLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBR0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxvRUFBbUU7RUFDbkUsK0JBQThCO0VBQzlCLCtCQUE4QjtFQUM5Qix5QkFBd0I7RUFDeEIsK0JBQThCO0VBQzlCLDJCQUEwQjtFQUMxQix5QkFBd0I7RUFDeEIsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLDRDQUF3QyxFQUN6Qzs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGFBQVksRUFDYjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsYUFBWTtFQUNaLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWE7RUFDYixnQkFBZTtFQUNmLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsdUJBQXNCLEVBQ3ZCOztBQUdEO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBR0g7RUFDRSxpQ0FBZ0MsRUFFakM7O0FBRUQ7RUFDRSxrQ0FBeUI7VUFBekIsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgfVxuICBcbiAgI3dyYXBwZXIgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIFxuICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gIH1cbiAgXG4gIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuXG5ib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XG4gICAgfVxuICAgIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgfVxuICB9XG4gIFxuXG4gIC5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgdG9wOiAwLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCAtIDM1cHgpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIC8vIHBhZGRpbmc6IDYwcHggMCAwO1xuICAgIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICB9XG5cbiAgLnNob3d7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA2NXB4O1xuICAgIHRvcDogNTB2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUuZHJvcHVwIHtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbi5vdmVybGF5IHtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC44cztcbn1cblxuXG4gIC5zaWRlYmFyLnRvZ2dsZWQge1xuICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgd2lkdGg6IDIyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIH1cbiAgICBcbiAgICAuc2hvd3tcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGxlZnQ6IDE3MHB4O1xuICAgICAgdG9wOiA1MHZoO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAtNXB4O1xuICAgIH1cblxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyLmZpeGVkLXRvcCB7XG4gICAgdG9wOiA1NnB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuLmRpdmlkZXJ7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM3YjdiN2I7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogLjg0NjJyZW07XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM1NjQ4ZmYgIWltcG9ydGFudDsgXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3tcbiAgICBjb2xvcjogIzIxYzg3YTtcbn1cblxuXG4vKiogIHdlbGNvbWUgY2FyZCAqKi9cbi5kZXNjcmlwdGlvbntcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcntcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuLm1lc3NhZ2V7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDE1MDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXZhdGFye1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWJvdXR7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmNvbG9yQWN0aXZle1xuICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmNvbG9ye1xuICBjb2xvcjogIzIxYzg3YTtcbn1cblxuLnNwYWNle1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2NDhmZiAwJSwgIzIxYzg3YSAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTIuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG59XG5cbi50ZXh0e1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG5cbi5jaGF0e1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhlbHB7XG4gIGNvbG9yOiAjMjFjODdhICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0YWxpY3tcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ1dHRvblNpZGV7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG5cbi5zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29uZmlybXtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub0ZyaWVuZHN7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uc2Vjb25kYXJ5QnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxLjVyZW07XG4gIGJvdHRvbTogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc2V0e1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1NjQ4ZmYgIWltcG9ydGFudDtcbn1cbi5yZXNldEljb257XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC51c2VySW5mbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc21hbGx7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OztcbiAgLy8gY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5yb3RhdGV7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _coding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coding.component */ "./src/app/coding/coding.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, CodingComponent) {
        this.modalService = modalService;
        this.CodingComponent = CodingComponent;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(src_app_dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"]);
    };
    SidebarComponent.prototype.close = function () {
        this.CodingComponent.show = false;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/coding/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/coding/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _coding_component__WEBPACK_IMPORTED_MODULE_3__["CodingComponent"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item divider\">\n        Menu\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"/dashboard\">\n        <i class=\"fa fa-tachometer userInfo colorActive\" aria-hidden=\"true\"></i>\n        Dashboard <span class=\"sr-only\">(current)</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/coding\">\n        <i class=\"fa fa-laptop userInfo color\" aria-hidden=\"true\"></i>\n        Code\n      </a>\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/chat\">\n        <span data-feather=\"\"></span>\n        Chat\n      </a>\n    </li> -->\n    <li class=\"nav-item divider\">\n        More\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link help\" (click)=\"openModal()\">\n          <i class=\"fa fa-question-circle userInfo color\" aria-hidden=\"true\"></i>\n          Help\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/dashboard/settings\">\n          <i class=\"fa fa-cog userInfo color\" aria-hidden=\"true\"></i>\n          Settings\n        </a>\n    </li>\n  </ul>\n    <!-- Main Content -->\n    <div id=\"content-wrapper\">\n      <div class=\"container-fluid\">\n        <!-- Breadcrumbs-->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n              <a href=\"/dashboard\">Dashboard</a>\n            </li>\n          </ol>\n\n        <!-- Welcome message -->\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"gradient\"> \n              <div class=\"about col-8 mobileVersion\">\n                <div class=\"col-4 avatar userInfo\"> \n                    <ngx-avatar gravatarId=\"{{currentUser.email}}\" src=\"assets/img/avatar.png\" size=\"80\"></ngx-avatar>\n                    <div class=\"link text-center\">\n                      <h6><a href=\"https://en.gravatar.com/email\" class=\"small\">Change</a></h6>\n                    </div>\n                  </div>\n                <div class=\"col-8 description\">\n                  <div class=\"message\">\n                    welcome back!\n                  </div>\n                  <div class=\"user\">\n                    {{ currentUser.username }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-4 description\">\n                <div class=\"user userInfo\">\n                  Level: {{currentUser.level}}\n                </div>\n                <div class=\"message userInfo\">\n                  Points: {{currentUser.points}}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Get Started -->\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h4 class=\"text\">\n              Start Learning Now\n            </h4>\n          </div>\n        </div>\n        <div class=\"card col-12\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text\">Python 2</h5>\n            <div class=\"buttonSide\">\n                <a class=\"btn btn-lg btn-primary confirm\" href=\"/coding\">                \n                  <i class=\"fa fa-play space\" aria-hidden=\"true\"></i>\n                  <span>Begin - {{percent}}%</span>\n                </a>\n            </div>\n            <div class=\"section\">\n              <p class=\"card-text label\">Python is one the three most popular interpreted languages. Taught in numerous schools globally</p>\n              <p class=\"card-text label italic\">Content Covered: Introduction to Python, Strings, Lists, Sorting, Dicts and Files, Regular Expressions </p>\n              <div class=\"progress\">\n                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" [style.width]=\"percent + '%'\" aria-valuemax=\"100\">{{percent}}%</div>\n              </div>\n            </div>\n            <div class=\"secondaryButton\">\n              <a class=\"btn btn-lg btn-light reset\" (click)=\"reset()\">\n                  <i class=\"fa fa-repeat colorActive space resetIcon\" aria-hidden=\"true\"></i>\n                <span>Reset</span>\n              </a>\n            </div>\n          </div>\n        </div>\n         <!-- Friends -->\n        <div class=\"row chat\">\n          <div class=\"col-12\">\n            <h4 class=\"text\">\n              Your Friends\n            </h4>\n          </div>\n        </div>\n        <div class=\"card col-12\">\n          <div class=\"card-body\">\n            <p class=\"card-text label\"> You can become friends with other members by adding each other below or inviting new friends to join Code Space.</p>\n            <div class =\"table\" *ngIf=\"users.length > 0\">\n              <table class=\"table table-striped mobile\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col text\">Position</th>\n                      <th scope=\"col text\">Username</th>\n                      <th scope=\"col text\">Points</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr class=\"label\" *ngFor=\"let user of users let count = index\" scope=\"row\">\n                      <td>{{ count + 1}}</td>\n                      <td>{{user.username}}</td>\n                      <td>{{user.points}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class =\"noFriends\" *ngIf=\"users.length == 0\">\n                <p class=\"card-text label italic\"> Your friends list seems to be empty, please click the button below to add a user</p>\n              </div>\n              <button type=\"button\" class=\"btn btn-lg btn-primary confirm\" (click)=\"openFriendsModal()\">\n                <i class=\"fa fa-users space\" aria-hidden=\"true\"></i>\n                <span>Add Friends</span></button>\n          </div>\n        </div> \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left;\n  padding: 0px !important; }\n\n.about {\n  padding-left: 50px; }\n\n.colorActive {\n  color: #5648ff; }\n\n.color {\n  color: #21c87a; }\n\n.space {\n  padding-right: 5px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15); }\n\n.text {\n  color: black;\n  font-weight: 350; }\n\n.chat {\n  padding-top: 20px; }\n\n.help {\n  color: #21c87a !important;\n  cursor: pointer; }\n\n.italic {\n  font-style: italic; }\n\n.label {\n  font-size: 14px;\n  font-weight: 300; }\n\n.buttonSide {\n  float: left;\n  padding-right: 1.5rem;\n  padding-top: 0.5rem; }\n\n.section {\n  margin-bottom: 2.5rem;\n  float: left; }\n\n.confirm {\n  font-weight: 300;\n  font-size: 16px;\n  color: white; }\n\n.progress-bar {\n  background-color: #5648ff !important; }\n\n.noFriends {\n  margin-bottom: 1rem; }\n\n.secondaryButton {\n  position: absolute;\n  right: 1.5rem;\n  bottom: 1rem;\n  align-items: center; }\n\n.reset {\n  font-weight: 300;\n  font-size: 13px;\n  display: flex;\n  cursor: pointer;\n  color: #5648ff !important; }\n\n.resetIcon {\n  padding-top: 3px; }\n\n.container-fluid {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 2.5rem; }\n\n@media (max-width: 768px) {\n  .userInfo {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .mobileVersion {\n    padding-left: 0px !important; } }\n\n@media (max-width: 576px) {\n  .mobile {\n    display: none; } }\n\n.small {\n  text-decoration: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQWE7RUFDYixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFHSDtFQUNJLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0U7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG9CQUFtQixFQUNwQixFQUFBOztBQUlIO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFO0lBQ0UsWUFBVyxFQUNaLEVBQUE7O0FBR0g7RUFDRSx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLHNDQUFxQztFQUNyQyw4Q0FBNEMsRUFFN0M7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSw4QkFBNkI7RUFDN0IsbUNBQWtDO0VBQ2xDLDJCQUEwQjtFQUMxQixzQ0FBcUM7RUFDckMsVUFBUyxFQUNWOztBQUVEO0VBQ0UsVUFBUztFQUNULHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRTtJQUNFLHdCQUF1QixFQUV4QjtFQUNEO0lBQ0UsZUFBYztJQUNkLFlBQVc7SUFDWCxpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLGFBQVksRUFDYjtFQUNEO0lBQ0UsZ0JBQWU7SUFDZixnQkFBZSxFQUNoQjtFQUNEO0lBQ0UsNEJBQTJCO0lBQzNCLGVBQWM7SUFDZCxPQUFNLEVBQ1A7RUFDRDtJQUNFLGVBQWMsRUFDZjtFQUNEO0lBQ0Usa0JBQWlCO0lBQ2pCLHdCQUF1QixFQUN4QjtFQUNEO0lBQ0Usb0JBQW1CLEVBQ3BCO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsc0JBQXFCO0lBQ3JCLGFBQVksRUFDYjtFQUNEO0lBQ0UsbUJBQWtCO0lBQ2xCLGVBQWMsRUFDZjtFQUNEO0lBQ0UsOEJBQTZCO0lBQzdCLG1DQUFrQztJQUNsQywyQkFBMEI7SUFDMUIsc0NBQXFDO0lBQ3JDLFVBQVMsRUFDVjtFQUNEO0lBQ0UsVUFBUztJQUNULHFCQUFvQixFQUNyQjtFQUNEO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBR0g7RUFDRSxVQUFTO0VBQ1QsMkJBQTBCO0VBQzFCLGlCQUFnQixFQUNqQjs7QUFFSDtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUdELHFCQUFxQjs7QUFDckI7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUdEO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXO0VBQ1gsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usb0VBQW1FO0VBQ25FLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQiw0Q0FBd0MsRUFDekM7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVk7RUFDWixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsZ0JBQWU7RUFDZiwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLHVCQUFzQixFQUN2Qjs7QUFHRDtFQUNFO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBSUg7RUFDRTtJQUNFLDZCQUE0QixFQUM3QixFQUFBOztBQUlIO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFLSDtFQUNFLGlDQUFnQyxFQUVqQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN3cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gIH1cbiAgXG4gICN3cmFwcGVyICNjb250ZW50LXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICBcbiAgYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICB9XG4gIFxuICBib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cblxuYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xuICAgIH1cbiAgICBib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgIH1cbiAgfVxuICBcblxuICAubmF2YmFyLW5hdiAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgIHRvcDogMC4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHggLSAzNXB4KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAvLyBwYWRkaW5nOiA2MHB4IDAgMDtcbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogY2FsYygxMjBweCArIDAuNXJlbSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuc2lkZWJhci50b2dnbGVkIHtcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIHdpZHRoOiAyMjVweCAhaW1wb3J0YW50O1xuICAgICAgLy8gcGFkZGluZzogNjBweCAwIDA7XG4gICAgfVxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyLmZpeGVkLXRvcCB7XG4gICAgdG9wOiA1NnB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuLmRpdmlkZXJ7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM3YjdiN2I7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogLjg0NjJyZW07XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM1NjQ4ZmYgIWltcG9ydGFudDsgXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3tcbiAgICBjb2xvcjogIzIxYzg3YTtcbn1cblxuXG4vKiogIHdlbGNvbWUgY2FyZCAqKi9cbi5kZXNjcmlwdGlvbntcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlcntcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuLm1lc3NhZ2V7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDE1MDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXZhdGFye1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWJvdXR7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmNvbG9yQWN0aXZle1xuICBjb2xvcjogIzU2NDhmZjtcbn1cblxuLmNvbG9ye1xuICBjb2xvcjogIzIxYzg3YTtcbn1cblxuLnNwYWNle1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2NDhmZiAwJSwgIzIxYzg3YSAxMDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTIuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG59XG5cbi50ZXh0e1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG5cbi5jaGF0e1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhlbHB7XG4gIGNvbG9yOiAjMjFjODdhICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLml0YWxpY3tcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGFiZWx7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ1dHRvblNpZGV7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG5cbi5zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29uZmlybXtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9ncmVzcy1iYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjQ4ZmYgIWltcG9ydGFudDtcbn1cblxuLm5vRnJpZW5kc3tcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5zZWNvbmRhcnlCdXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVzZXR7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzU2NDhmZiAhaW1wb3J0YW50O1xufVxuLnJlc2V0SWNvbntcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXJJbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2JpbGVWZXJzaW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi5zbWFsbHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7O1xuICAvLyBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/dashboard/friends/friends.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/dashboard/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(modalService, userService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.users = [];
        this.sortedArray = [];
        this.mobile = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loadFriends(this.currentUser);
        this.sortArray();
        this.count = 0;
        this.level = 1;
        this.points = 0;
        if (this.currentUser.level == 1) {
            this.percent = 0;
        }
        else if (this.currentUser.level == 2) {
            this.percent = 20;
        }
        else if (this.currentUser.level == 3) {
            this.percent = 40;
        }
        else if (this.currentUser.level == 4) {
            this.percent = 60;
        }
        else if (this.currentUser.level == 5) {
            this.percent = 80;
        }
        else if (this.currentUser.level == 6) {
            this.percent = 100;
        }
    };
    DashboardComponent.prototype.loadFriends = function (user) {
        var _this = this;
        this.userService.getFriends(user).subscribe(function (users) { _this.users = users.sort(function (user1, user2) { return 0 - (user1.points > user2.points ? 1 : -1); }); });
        // this.users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1));
        // values.sort((a,b) => 0 - (a > b ? 1 : -1));
        // this.users.sort(function(user1, user2){
        //   return user2.points - user1.points;
        // }); 
        // this.users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1));
    };
    DashboardComponent.prototype.sortArray = function () {
        this.users.sort(function (user1, user2) { return 0 - (user1.points > user2.points ? 1 : -1); });
        this.sortedArray = this.users.slice();
    };
    DashboardComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"]);
    };
    DashboardComponent.prototype.coding = function () {
        this.router.navigate(['/coding']);
    };
    DashboardComponent.prototype.openFriendsModal = function () {
        this.modalRef = this.modalService.show(_friends_friends_component__WEBPACK_IMPORTED_MODULE_4__["FriendsComponent"]);
    };
    DashboardComponent.prototype.reset = function () {
        //   this.currentUser.page = this.count;
        //   this.currentUser.points = this.points;
        //   this.currentUser.level = this.level;
        //   this.userService.update(this.currentUser).subscribe(
        //     data => {
        //     });
        //     window.location.reload();
        // }
        this.modalRef = this.modalService.show(_reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/friends/friends.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/friends/friends.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#addfriend-modal\" id=\"addfriend-modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Add Friends</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body text-center\">\n        Please enter an email address below to add a user as a friend\n        <div class = \"col-12 search\">  \n          <!-- Search form -->\n            <input [(ngModel)]=\"asyncSelected\"\n              [typeaheadAsync]=\"true\"\n              [typeahead]=\"dataSource\"\n              (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n              [typeaheadOptionsLimit]=\"7\"\n              typeaheadOptionField=\"user.email\"\n              placeholder=\"Enter a user's email here below...\"\n              class=\"form-control col-12\">\n             \n            </div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/dashboard/friends/friends.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/friends/friends.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n.search {\n  width: 100% !important;\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakM7RUFDRSxtQkFBa0IsRUFDbkI7QUFFRCxnQkFBZ0I7QUFDaEI7RUFDQSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHFCQUFvQixFQUNuQjtBQUVELGdCQUFnQjtBQUNoQjtFQUEwQixVQUFVLEVBQUc7QUFDdkM7RUFBMEIsV0FBVSxFQUFHO0FBRXZDLGtCQUFrQjtBQUNsQjtFQUFxQixtQkFBbUIsRUFBSTtBQUU1QztFQUNFLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnBhZGRpbmc6IDEwcHg7XG5wb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDBweDt9XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQgIHsgcGFkZGluZy1sZWZ0OiAgMzBweDsgfVxuXG4uc2VhcmNoe1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/friends/friends.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/friends/friends.component.ts ***!
  \********************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(modalRef, router, userService) {
        var _this = this;
        this.modalRef = modalRef;
        this.router = router;
        this.userService = userService;
        // modalRef: BsModalRef;
        this.users = [];
        this.dataSource = rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (token) { return _this.getUsersAsObservable(token); }));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    FriendsComponent.prototype.getUsersAsObservable = function (token) {
        var query = new RegExp(token, 'i');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.users.filter(function (user) {
            return query.test(user.email);
        }));
    };
    FriendsComponent.prototype.typeaheadOnSelect = function (e) {
        var _this = this;
        this.userService.addFriend(this.currentUser, e.value).subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
            _this.close();
            window.location.reload();
        });
        ;
    };
    FriendsComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getNonFriends(this.currentUser).subscribe(function (users) { _this.users = users; });
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/dashboard/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.scss */ "./src/app/dashboard/friends/friends.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/help/help.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title popupTitle\">Help</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p class=\"helpBody text-justify\">\n        To start using Code Space, simply click <span class=\"intense\">'Code'</span> in the side panel or select the <span class=\"intense\">'Begin'</span> button. \n      </p>\n      <p class=\"helpBody text-justify\">\n        Click through the tutorial answering the exercises at the end of each. If you wish to restart the tutorial at any point, simply click the <span class=\"intense\">'Reset'</span> button on the dashboard.\n      </p>\n      <p class=\"helpBody text-justify\">\n        Add friends to Code Space by simply entering their email address, once added you can compete and compare your score to theirs in the table below\n      </p>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/help/help.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n.popupTitle {\n  font-weight: 400; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n.helpBody {\n  font-weight: 300; }\n.intense {\n  font-weight: 350;\n  color: #5648ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakM7RUFDSSxtQkFBa0IsRUFDckI7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVELGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IscUJBQW9CLEVBQ3JCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQTBCLFVBQVUsRUFBRztBQUN2QztFQUEwQixXQUFVLEVBQUc7QUFFdkMsa0JBQWtCO0FBQ2xCO0VBQXFCLG1CQUFtQixFQUFJO0FBRTVDO0VBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZUFDRixFQUFDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cbi5wb3B1cFRpdGxle1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vKiBzdHlsZSBpY29uICovXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIGFsaWduIGljb24gKi9cbi5sZWZ0LWFkZG9uIC5nbHlwaGljb24gIHsgbGVmdDogIDBweDt9XG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7IHJpZ2h0OiAwcHg7fVxuXG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0ICB7IHBhZGRpbmctbGVmdDogIDMwcHg7IH1cblxuLmhlbHBCb2R5e1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW50ZW5zZXtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbiAgY29sb3I6ICM1NjQ4ZmZcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/help/help.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/help/help.component.ts ***!
  \**************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = /** @class */ (function () {
    // modalRef: BsModalRef;
    function HelpComponent(modalRef) {
        this.modalRef = modalRef;
    }
    HelpComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/dashboard/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/dashboard/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/recommendation/recommendation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/recommendation/recommendation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"typewriter css-typing\" *ngIf=\"leave\" [@slideOut] > \n    <p>\n        {{typewriter_line1}}\n    </p>\n    <p>\n        {{typewriter_line2}}\n    </p>\n    <p>\n        {{typewriter_line3}}\n    </p>\n</div>\n<div class=\"questions\" *ngIf=\"enter\" [@slideIn]>\n    <h2 class=\"header\">Alright, do you have any previous coding experience?</h2>\n  <form>\n    <p>\n      <label class=\"options\">\n          <input type=\"checkbox\" value=\"new\" name=\"new\"> I'm new to coding\n      </label>\n    </p>\n    <p>\n      <label class=\"options\">\n          <input type=\"checkbox\" value=\"intermediate\" name=\"intermediate\">\n          I have done a bit of coding \n      </label>\n    </p>\n    <p>\n      <label class=\"options\">\n          <input type=\"checkbox\" value=\"advanced\" name=\"advanced\">\n          I am comfortable in one coding language already\n      </label>\n    </p>\n      <button type=\"submit\" class=\"btn btn-success\">GO!</button>\n  </form>\n  </div>\n\n "

/***/ }),

/***/ "./src/app/dashboard/recommendation/recommendation.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/recommendation/recommendation.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".typewriter {\n  color: white;\n  font-weight: 200;\n  line-height: 1.2;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  padding-top: 50px; }\n\n.css-typing p {\n  border-right: .15em solid white;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.css-typing p:nth-child(1) {\n  width: 12em;\n  -webkit-animation: type 2s steps(40, end);\n  animation: type 2s steps(40, end);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.css-typing p:nth-child(2) {\n  width: 10em;\n  opacity: 0;\n  -webkit-animation: type2 2s steps(40, end);\n  animation: type2 2s steps(40, end);\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.css-typing p:nth-child(3) {\n  width: 17.5em;\n  opacity: 0;\n  -webkit-animation: type3 5s steps(40, end), blink 0.5s step-end infinite alternate;\n  animation: type3 2s steps(40, end), blink 0.5s step-end infinite alternate;\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n@keyframes type {\n  0% {\n    width: 0; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    border: none; } }\n\n@-webkit-keyframes type {\n  0% {\n    width: 0; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    border: none; } }\n\n@keyframes type2 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    opacity: 1;\n    border: none; } }\n\n@-webkit-keyframes type2 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    opacity: 1;\n    border: none; } }\n\n@keyframes type3 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes type3 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  50% {\n    border-color: transparent; } }\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: tranparent; } }\n\n.header {\n  color: white;\n  font-weight: 200;\n  line-height: 1;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  padding-top: 50px;\n  padding-bottom: 25px; }\n\n.options {\n  color: white;\n  font-weight: 200;\n  line-height: 1;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZ0NBQStCO0VBQy9CLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsMENBQXlDO0VBQ3pDLGtDQUFpQztFQUNqQyxzQ0FBcUM7RUFDckMsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0UsWUFBVztFQUNYLFdBQVU7RUFDViwyQ0FBMEM7RUFDMUMsbUNBQWtDO0VBQ2xDLDRCQUEyQjtFQUMzQixvQkFBbUI7RUFDbkIsc0NBQXFDO0VBQ3JDLDhCQUE2QixFQUM5Qjs7QUFFRDtFQUNFLGNBQWE7RUFDYixXQUFVO0VBQ1YsbUZBQWlGO0VBQ2pGLDJFQUF5RTtFQUN6RSw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBQ25CLHNDQUFxQztFQUNyQyw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRTtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsZ0NBQStCLEVBQUE7RUFFakM7SUFDRSxhQUFZLEVBQUEsRUFBQTs7QUFJaEI7RUFDRTtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsZ0NBQStCLEVBQUE7RUFFakM7SUFDRSxhQUFZLEVBQUEsRUFBQTs7QUFJaEI7RUFDRTtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxnQ0FBK0IsRUFBQTtFQUVqQztJQUNFLFdBQVU7SUFDVixhQUFZLEVBQUEsRUFBQTs7QUFJaEI7RUFDRTtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxnQ0FBK0IsRUFBQTtFQUVqQztJQUNFLFdBQVU7SUFDVixhQUFZLEVBQUEsRUFBQTs7QUFJaEI7RUFDRTtJQUNFLFNBQVEsRUFBQTtFQUVWO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLFdBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0U7SUFDRSwwQkFBeUIsRUFBQSxFQUFBOztBQUc3QjtFQUNFO0lBQ0UseUJBQXdCLEVBQUEsRUFBQTs7QUFLOUI7RUFDSSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIscUJBQW9CLEVBRXZCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWUsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZXdyaXRlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmNzcy10eXBpbmcgcCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmNzcy10eXBpbmcgcDpudGgtY2hpbGQoMSkge1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlIDJzIHN0ZXBzKDQwLCBlbmQpO1xuICAgIGFuaW1hdGlvbjogdHlwZSAycyBzdGVwcyg0MCwgZW5kKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG4gIFxuICAuY3NzLXR5cGluZyBwOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDEwZW07XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZTIgMnMgc3RlcHMoNDAsIGVuZCk7XG4gICAgYW5pbWF0aW9uOiB0eXBlMiAycyBzdGVwcyg0MCwgZW5kKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG4gIFxuICAuY3NzLXR5cGluZyBwOm50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDE3LjVlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlMyA1cyBzdGVwcyg0MCwgZW5kKSwgYmxpbmsgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb246IHR5cGUzIDJzIHN0ZXBzKDQwLCBlbmQpLCBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgdHlwZSB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIGJvcmRlci1yaWdodDogLjE1ZW0gc29saWQgd2hpdGU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGUge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICA5OS45JSB7XG4gICAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgdHlwZTIge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICAxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OS45JSB7XG4gICAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZTIge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICAxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OS45JSB7XG4gICAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHR5cGUzIHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG4gICAgMSUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGUzIHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG4gICAgMSUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBibGluayB7XG4gICAgNTAlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG4gICAgNTAlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnBhcmVudDtcbiAgICB9XG4gIH1cblxuXG4uaGVhZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxufVxuXG4ub3B0aW9uc3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/recommendation/recommendation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/recommendation/recommendation.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendationComponent = /** @class */ (function () {
    function RecommendationComponent() {
        this.enter = false;
        this.leave = true;
        this.typewriter_line1 = "Hello welcome to Code Space!";
        this.typewriter_line2 = "Wondering where to start?";
        this.typewriter_line3 = "Tell us more about yourself and we can begin:";
    }
    RecommendationComponent.prototype.ngOnInit = function () {
        this.setTimer();
    };
    RecommendationComponent.prototype.setTimer = function () {
        var _this = this;
        setTimeout(function () { _this.leave = false; }, 8500);
        this.delayedTimer();
    };
    RecommendationComponent.prototype.delayedTimer = function () {
        var _this = this;
        setTimeout(function () { _this.enter = true; }, 9200);
    };
    RecommendationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'recommendation-component',
            template: __webpack_require__(/*! ./recommendation.component.html */ "./src/app/dashboard/recommendation/recommendation.component.html"),
            styles: [__webpack_require__(/*! ./recommendation.component.scss */ "./src/app/dashboard/recommendation/recommendation.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(50%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RecommendationComponent);
    return RecommendationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title popupTitle\">Are you sure?</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <p class=\"areYouSure\">\n          If you reset your progress, you will have to begin the tutorial again\n        </p>\n        <p class=\"areYouSure italic\">\n          Are you sure you want to reset your progress?\n        </p>\n      </div>\n    <div class=\"modal-footer\">\n      <div class=\"leftButtons\">\n          <button class=\"btn btn-secondary confirm\" (click)=\"reset()\">\n              <i class=\"fa fa-repeat space\" aria-hidden=\"true\"></i>\n              Reset\n          </button>\n        </div>\n        <div class=\"rightButtons\">\n\n          <button class=\"btn btn-light confirm\" (click)=\"close()\">\n              <i class=\"fa fa-clock-o color space\" aria-hidden=\"true\"></i>\n              Not now\n          </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm {\n  font-weight: 300;\n  font-size: 13px; }\n\n.italic {\n  font-style: italic;\n  padding-bottom: 5px; }\n\n.space {\n  padding-right: 5px; }\n\n.areYouSure {\n  font-weight: 300;\n  font-size: 13.5px; }\n\n.popupTitle {\n  font-weight: 400; }\n\n.leftButtons {\n  left: 0;\n  position: absolute;\n  padding-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUdIO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFHRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLG1CQUNKLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmVzZXQvcmVzZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb25maXJte1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIFxuXG4uaXRhbGlje1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5cbi5zcGFjZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4gIFxuLmFyZVlvdVN1cmV7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEzLjVweDtcbn1cblxuLnBvcHVwVGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxlZnRCdXR0b25ze1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTZweFxufVxuLy8gLnJpZ2h0QnV0dG9uc3tcbi8vICAgICByaWdodDogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.ts ***!
  \****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(modalRef, userService, router) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.count = 0;
        this.level = 1;
        this.points = 0;
    };
    ResetComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    ResetComponent.prototype.reset = function () {
        this.currentUser.page = this.count;
        this.currentUser.points = this.points;
        this.currentUser.level = this.level;
        this.userService.update(this.currentUser).subscribe(function (data) {
        });
        window.location.reload();
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/dashboard/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/dashboard/reset/reset.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings/delete/delete.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/settings/delete/delete.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title popupTitle\">Are you sure?</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <p class=\"areYouSure\">\n            If you delete your account, we will permanently lose your progress and you will have to start again if you sign up with the same email account in future.\n          </p>\n          <p class=\"areYouSure italic\">\n            Are you sure you want to delete your account?\n          </p>\n        </div>\n      <div class=\"modal-footer\">\n        <div class=\"leftButtons\">\n            <button class=\"btn btn-secondary confirm\" (click)=\"deleteUser(currentUser._id)\">\n                <i class=\"fa fa-trash-o space\" aria-hidden=\"true\"></i>\n                Delete\n            </button>\n          </div>\n          <div class=\"rightButtons\">\n\n            <button class=\"btn btn-light confirm\" (click)=\"close()\">\n                <i class=\"fa fa-clock-o color space\" aria-hidden=\"true\"></i>\n                Maybe Later\n            </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/dashboard/settings/delete/delete.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/settings/delete/delete.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm {\n  font-weight: 300;\n  font-size: 13px; }\n\n.italic {\n  font-style: italic;\n  padding-bottom: 5px; }\n\n.space {\n  padding-right: 5px; }\n\n.areYouSure {\n  font-weight: 300;\n  font-size: 13.5px; }\n\n.popupTitle {\n  font-weight: 400; }\n\n.leftButtons {\n  left: 0;\n  position: absolute;\n  padding-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBR0g7RUFDSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3RCOztBQUdEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsbUJBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29uZmlybXtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBcblxuLml0YWxpY3tcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuXG4uc3BhY2V7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuICBcbi5hcmVZb3VTdXJle1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxMy41cHg7XG59XG5cbi5wb3B1cFRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sZWZ0QnV0dG9uc3tcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHhcbn1cbi8vIC5yaWdodEJ1dHRvbnN7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/settings/delete/delete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/settings/delete/delete.component.ts ***!
  \***************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(modalRef, userService, router) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DeleteComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    DeleteComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function (data) {
            _this.router.navigate(['/']);
        });
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/dashboard/settings/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/dashboard/settings/delete/delete.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item divider\">\n        Menu\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/dashboard/\">\n        <i class=\"fa fa-tachometer userInfo color\" aria-hidden=\"true\"></i>\n        Dashboard\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/coding/\">\n        <i class=\"fa fa-laptop userInfo color\" aria-hidden=\"true\"></i>\n        Code\n      </a>\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/chat/\">\n        <span data-feather=\"\"></span>\n        Chat\n      </a>\n    </li> -->\n    <li class=\"nav-item divider\">\n        More\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link help\" (click)=\"openModal()\">\n          <i class=\"fa fa-question-circle userInfo color\" aria-hidden=\"true\"></i>\n          Help\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"/dashboard/settings\">\n          <i class=\"fa fa-cog userInfo colorActive\" aria-hidden=\"true\"></i>\n          Settings\n        </a>\n    </li>\n  </ul>\n  \n    <!-- Main Content -->\n    <div id=\"content-wrapper\">\n      <div class=\"container-fluid\">\n  \n        <!-- Breadcrumbs-->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n              <a href=\"/dashboard/settings\">Settings\n              </a>\n            </li>\n          </ol>\n  \n          <div class=\"card update\">\n            <div class=\"details\">\n              <form #signUpForm=\"ngForm\">\n                  <p class=\"main\"> Account Information </p>\n                  <div class=\"form-group labels\">\n                      <label for=\"name\">Name</label>\n                      <input type=\"text\" [(ngModel)]=\"currentUser.name\" class=\"form-control labels\" id=\"name\" name=\"name\" #name=\"ngModel\" placeholder=\"{{currentUser.name}}\"> \n                  </div>\n                  <div class=\"form-group labels\">\n                      <label for=\"email\">* Email (required)</label>\n                      <input type=\"text\" [(ngModel)]=\"currentUser.email\" class=\"form-control labels\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"{{currentUser.email}}\" required> \n                      <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger text-center\">\n                        <div [hidden]=\"!email.errors.required\">\n                          Email is required\n                        </div>\n                      </div>\n                    </div>\n                  <div class=\"form-group labels\">\n                      <label for=\"username\">* Username (required)</label>\n                          <input type=\"text\" class=\"form-control labels\" [(ngModel)]=\"currentUser.username\" id=\"username\" name=\"username\" #username=\"ngModel\" placeholder=\"{{currentUser.username}}\" required>\n                        <div *ngIf=\"username.errors && (username.dirty || username.touched)\" class=\"alert alert-danger text-center\">\n                          <div [hidden]=\"!username.errors.required\">\n                            Username is required\n                          </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group labels\">\n                        <label for=\"level\"> Development Experience </label>\n                        <div class=\"row options\">\n                          <div class=\"radio levelOptions\">\n                            <label><input type=\"radio\" [(ngModel)]=\"currentUser.level\" id=\"level\" name=\"level\" value=\"beginner\">Learning to Program</label>\n                          </div>\n                          <div class=\"radio levelOptions\">\n                            <label><input type=\"radio\" [(ngModel)]=\"currentUser.level\" id=\"level\" name=\"level\" value=\"intermediate\">Intermediate Programmer</label>\n                          </div>\n                          <div class=\"radio levelOptions\">\n                            <label><input type=\"radio\" [(ngModel)]=\"currentUser.level\" id=\"level\" name=\"level\" value=\"advanced\">Advanced Programmer</label>\n                          </div>\n                        </div>\n                    </div> -->\n                    <!-- <h6 class=\"main\"> Update Password</h6>\n                    <div class=\"form-group labels\">\n                        <div class=\"row\">\n                          <div class=\"col-6\">\n                            <label for=\"password\"> New Password </label>\n                            <input type=\"passwords\" class=\"form-control labels\" [(ngModel)]=\"currentUser.password\" id=\"password\" name=\"password\" #password=\"ngModel\" required>\n                          </div>\n                          <div class=\"col-6\">\n                            <label for=\"password\"> Confirm New Password </label>\n                            <input type=\"passwords\" class=\"form-control labels\" id=\"password\" name=\"password\" required>\n                          </div>\n                        </div>\n                        <label for=\"password\"> Current Password </label>\n                        <input type=\"passwords\" class=\"form-control labels\" id=\"password\" name=\"password\" #password=\"ngModel\" required>\n                    </div> -->\n                  <div class=\"buttons\">\n                    <button class=\"btn btn-primary pad confirm\" (click)=\"editUser()\">\n                        <i class=\"fa fa-pencil space\" aria-hidden=\"true\"></i>\n                      Update Account\n                    </button>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card deleteCard\">\n                <div class=\"details\">\n                  <form #signUpForm=\"ngForm\">\n                      <h6 class=\"main\"> Delete Account</h6>\n                      <div class=\"delete labels\">\n                        If you wish you can delete your account by simply clicking the button below. After deleting your account you are free to sign up again using the same email address.\n                      </div>\n                      <div class=\"buttons\">\n                          <button class=\"btn btn-secondary confirm\" (click)=\"openDeleteModal()\">\n                              <i class=\"fa fa-trash-o space\" aria-hidden=\"true\"></i>\n                            Delete Account\n                          </button>\n                      </div>\n                  </form>\n                </div>\n            </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 2.5rem; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left; }\n\n.about {\n  padding-left: 50px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px; }\n\n.text {\n  color: black;\n  font-weight: 250; }\n\n.chat {\n  padding-top: 20px; }\n\n.help {\n  color: #21c87a !important;\n  cursor: pointer; }\n\n.pad {\n  margin-left: 15px; }\n\n.buttons {\n  position: relative;\n  float: right; }\n\n.details {\n  margin: 20px; }\n\n.space {\n  padding-right: 5px; }\n\n.update {\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);\n  border-left: 4px solid #5648ff !important; }\n\n.levelOptions {\n  float: right;\n  padding-right: 20px; }\n\n.options {\n  margin-left: 0px; }\n\n.deleteCard {\n  margin-top: 30px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);\n  border-left: 4px solid #5648ff !important; }\n\n.main {\n  color: #5648ff;\n  font-weight: 350; }\n\n.labels {\n  font-weight: 300;\n  font-size: 13.5px; }\n\n.delete {\n  font-style: italic;\n  padding-bottom: 5px; }\n\n.confirm {\n  font-weight: 300;\n  font-size: 13px; }\n\n@media (max-width: 768px) {\n  .userInfo {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUdIO0VBQ0ksZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0Usb0JBQW1CLEVBQ3BCLEVBQUE7O0FBR0g7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsc0NBQXFDO0VBQ3JDLDhDQUE0QyxFQUU3Qzs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHNDQUFxQztFQUNyQyxVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCLEVBRXhCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLE9BQU0sRUFDUDtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBQ0Q7SUFDRSw4QkFBNkI7SUFDN0IsbUNBQWtDO0lBQ2xDLDJCQUEwQjtJQUMxQixzQ0FBcUM7SUFDckMsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QscUJBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLFVBQVM7RUFDVCwyQkFBMEI7RUFDMUIsaUJBQWdCLEVBQ2pCOztBQUVIO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBR0QscUJBQXFCOztBQUNyQjtFQUNFLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBR0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG9FQUFtRTtFQUNuRSwrQkFBOEI7RUFDOUIsK0JBQThCO0VBQzlCLHlCQUF3QjtFQUN4QiwrQkFBOEI7RUFDOUIsMkJBQTBCO0VBQzFCLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFDRixFQUFDOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSw0Q0FBd0M7RUFDeEMsMENBQXlDLEVBQzFDOztBQUVEO0VBQ0UsYUFBWTtFQUNaLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUVoQiw0Q0FBd0M7RUFDeEMsMENBQXlDLEVBQzFDOztBQUVEO0VBQ0UsZUFBYztFQUNkLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgfVxuICBcbiAgI3dyYXBwZXIgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIFxuICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gIH1cbiAgXG4gIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuXG5ib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBib2R5LmZpeGVkLW5hdiAjY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XG4gICAgfVxuICAgIGJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgfVxuICB9XG4gIFxuICAubmF2YmFyLW5hdiAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgIHRvcDogMC4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHggLSAzNXB4KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICAvLyBwYWRkaW5nOiA2MHB4IDAgMDtcbiAgfVxuXG4gIC5zaWRlYmFyIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogY2FsYygxMjBweCArIDAuNXJlbSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuc2lkZWJhci50b2dnbGVkIHtcbiAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5zaWRlYmFyIHtcbiAgICAgIHdpZHRoOiAyMjVweCAhaW1wb3J0YW50O1xuICAgICAgLy8gcGFkZGluZzogNjBweCAwIDA7XG4gICAgfVxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgd2lkdGg6IDIyNXB4O1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51LmRyb3B1cCB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyLmZpeGVkLXRvcCB7XG4gICAgdG9wOiA1NnB4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuLmRpdmlkZXJ7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM3YjdiN2I7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogLjg0NjJyZW07XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM1NjQ4ZmYgIWltcG9ydGFudDsgXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6ICMyMWM4N2E7XG59XG5cblxuLyoqICB3ZWxjb21lIGNhcmQgKiovXG4uZGVzY3JpcHRpb257XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVzZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi5tZXNzYWdle1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAxNTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmF2YXRhcntcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYWJvdXR7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTY0OGZmIDAlLCAjMjFjODdhIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweFxufVxuXG4udGV4dHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogMjUwO1xufVxuXG4uY2hhdHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5oZWxwe1xuICBjb2xvcjogIzIxYzg3YSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWR7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYnV0dG9uc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7IFxufVxuXG4uZGV0YWlsc3tcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uc3BhY2V7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnVwZGF0ZXtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNTY0OGZmICFpbXBvcnRhbnQ7XG59XG5cbi5sZXZlbE9wdGlvbnN7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm9wdGlvbnN7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5kZWxldGVDYXJke1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1NjQ4ZmYgIWltcG9ydGFudDtcbn1cblxuLm1haW57XG4gIGNvbG9yOiAjNTY0OGZmO1xuICBmb250LXdlaWdodDogMzUwO1xufVxuXG4ubGFiZWxze1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEzLjVweDtcbn1cblxuLmRlbGV0ZXtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY29uZmlybXtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXJJbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/dashboard/settings/delete/delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(modalService, userService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SettingsComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"]);
    };
    SettingsComponent.prototype.openDeleteModal = function () {
        this.modalRef = this.modalService.show(_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"]);
    };
    SettingsComponent.prototype.editUser = function () {
        var _this = this;
        this.userService.update(this.currentUser).subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/home/carousel/carousel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n        <div class=\"carousel-caption text-left\">\n            <h1>Python Made Simple</h1>\n            <p>Click below to learn one of the most used coding language</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n      <img class=\"center-fit\" src=\"./assets/img/labWork2.jpeg\">\n    </div>\n    <div class=\"carousel-item\">\n        <div class=\"carousel-caption text-right\">\n            <h1>Python Made Simple</h1>\n            <p>Click below to learn one of the most used coding language</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n        <img class=\"center-fit\" src=\"./assets/img/labWork.jpeg\">\n      </div>\n    <div class=\"carousel-item\">\n        <div class=\"carousel-caption text-right\">\n            <h1>Python Made Simple</h1>\n            <p>Click below to learn one of the most used coding language</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n      <img class=\"center-fit\" src=\"./assets/img/labWork3.jpeg\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>     \n\n"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-fit {\n  max-width: 100%;\n  max-height: 100vh;\n  margin: auto;\n  display: block; }\n\n/* Carousel base class */\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 40rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: inline-block;\n  /* change the default display type to inline-block */\n  overflow: hidden;\n  /* hide the overflow */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixlQUFjLEVBQ2pCOztBQUVELHlCQUF5Qjs7QUFDekI7RUFDSSxvQkFBbUIsRUFFcEI7O0FBQ0Qsa0VBQWtFOztBQUNsRTtFQUNFLGFBQVksRUFDYjs7QUFFRCwyREFBMkQ7O0FBQzNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsZ0JBQWU7RUFDZixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsc0JBQXFCO0VBQUUscURBQXFEO0VBQzVFLGlCQUFnQjtFQUFPLHVCQUF1QixFQUMvQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWZpdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2Fyb3VzZWwgYmFzZSBjbGFzcyAqL1xuLmNhcm91c2VsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIFxuICB9XG4gIC8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgYm90dG9tOiAzcmVtO1xuICB9XG4gIFxuICAvKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiA0MHJlbTtcbiAgfVxuICAuY2Fyb3VzZWwtaXRlbSA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IHR5cGUgdG8gaW5saW5lLWJsb2NrICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAvKiBoaWRlIHRoZSBvdmVyZmxvdyAqL1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/home/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(modalService) {
        this.modalService = modalService;
    }
    CarouselComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]);
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/home/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/home/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CAROUSEL -->\n<app-carousel></app-carousel>\n<!-- ABOUT -->\n<div class=\"container main\">\n    <hr> \n    <p class=\"text-center text-header\"> Introducing <span class=\"purple\"> Code Space </span> </p>\n    <div class=\"row\"> \n        <div class=\"col-sm-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Practise Smarter</h5>\n                    <p class=\"card-text\"> Allows you to practise exercises within the application itself without any installations </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Compete with Peers</h5>\n                    <p class=\"card-text\">Code Space allows learners the ability to add friends and compete on the site</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Code Wherever, Whenever</h5>\n                    <p class=\"card-text\">Don't have access to a computer? No problem, you simply need a mobile device or a tablet for the site</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr class=\"featurette-divider\">\n</div> \n\n<!-- FEATURETTES -->\n<section class = \"features\">\n    <div class = \"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-6 col-lg-5 offset-lg-1 order-md-2\">\n                <div class=\"img-effect img-effect-solid mb-5 mb-md-0\">\n                    <img class=\"img-fluid\" src=\"/assets/img/cs_60.jpeg\">\n                </div>\n            </div>\n        <div class=\"col-md-6 col-lg-4 offset-lg-1 order-md-1\">\n                <h2 class=\"featurette-heading\">Learning to Code has never been so simple</h2>\n                <div class = \"text-left feature-text\">\n                    Code Space's online tutorials easily allow students of any ability to learn python. Get started coding today! \n                </div>\n                <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Sign Up</span></button>\n            </div>\n        </div>\n        <hr class=\"featurette-divider\">\n\n    </div>\n</section>\n<!-- /REVIEW -->\n<section class = \"gradient text-white space-lg\">\n    <div class = \"container review\">\n        <div class=\"row justify-content-center\">\n                <div class=\"col-md- media\">\n                    <img class=\"avatar\" src=\"/assets/img/cs_15.jpeg\">\n                </div>\n                <div class=\"col-md-8 media-text\">\n                    <h2 class=\"review-heading\">“Coding is such a vital skill today and Code Space is a great way to start learning”</h2>\n                    <span> Emma, Warwick University</span>\n                </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-fit {\n  max-width: 100%;\n  max-height: 100vh;\n  margin: auto;\n  display: block; }\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 40rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: inline-block;\n  /* change the default display type to inline-block */\n  overflow: hidden;\n  /* hide the overflow */ }\n\n.main {\n  margin-top: 7.0625rem;\n  margin-bottom: 3.0625rem; }\n\n.text-header {\n  font-size: 30px;\n  padding-bottom: 2.0625rem;\n  padding-top: 3.0625rem; }\n\n.purple {\n  color: #5648ff; }\n\n/* Marketing\n------------------------- */\n\n.marketing {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.text {\n  font-size: 20px; }\n\n.about {\n  margin-top: 9.0625rem;\n  margin-bottom: 9.0625rem; }\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n\n.featurette-heading {\n  font-weight: 500;\n  font-family: Objective,sans-serif;\n  line-height: 1.35;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  margin-bottom: 1.5rem !important; }\n\n.features {\n  margin-top: 7.0625rem;\n  margin-bottom: 7.0625rem; }\n\n.feature-text {\n  font-size: 17px;\n  font-weight: 400;\n  padding-bottom: 20px;\n  font-family: Objective,sans-serif;\n  color: #828a91 !important;\n  line-height: 1.75; }\n\n.img-effect-solid:before {\n  position: absolute;\n  top: 35%;\n  right: 0;\n  bottom: 10%;\n  left: 0;\n  content: \"\";\n  background-color: #5648ff; }\n\n.img-effect, .img-effect > img {\n  position: relative; }\n\n.img-effect > img {\n  box-shadow: 0 25px 100px -5px rgba(0, 0, 0, 0.15);\n  z-index: 1; }\n\n.img-effect-solid {\n  padding-left: 20%;\n  padding-right: 10%; }\n\n.img-effect {\n  position: relative; }\n\n/* Review\n------------------------- */\n\n.review {\n  color: white; }\n\n/* Thin out the marketing headings */\n\n.review-heading {\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: -.05rem;\n  padding-bottom: 15px;\n  font-family: Objective,sans-serif; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  padding: 4.5rem 0;\n  position: relative; }\n\n.media {\n  margin-right: 1.5rem;\n  padding: 0; }\n\n.avatar {\n  width: 7.5rem;\n  height: 7.5rem;\n  border-radius: 50%; }\n\n.media-body {\n  float: right; }\n\n.size {\n  max-width: 65%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGVBQWMsRUFDakI7O0FBRUQ7RUFDQSxvQkFBbUIsRUFFbEI7O0FBQ0Qsa0VBQWtFOztBQUNsRTtFQUNBLGFBQVksRUFDWDs7QUFFRCwyREFBMkQ7O0FBQzNEO0VBQ0EsY0FBYSxFQUNaOztBQUNEO0VBQ0EsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsZ0JBQWU7RUFDZixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLHFCQUFpQjtLQUFqQixrQkFBaUI7RUFDakIsc0JBQXFCO0VBQUUscURBQXFEO0VBQzVFLGlCQUFnQjtFQUFPLHVCQUF1QixFQUM3Qzs7QUFHRDtFQUNJLHNCQUFxQjtFQUNyQix5QkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLDBCQUEwQjtFQUMxQix1QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUNEOzRCQUM0Qjs7QUFDNUI7RUFDSSxzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIseUJBQXdCLEVBQzNCOztBQUdEOzRCQUM0Qjs7QUFDNUI7RUFDSSxlQUFjO0VBQUUsdUNBQXVDLEVBQ3hEOztBQUVILHFDQUFxQzs7QUFDckM7RUFDSSxpQkFBZ0I7RUFDaEIsa0NBQWlDO0VBQ2pDLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixpQ0FBK0IsRUFDbEM7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIscUJBQW9CO0VBQ3BCLGtDQUFpQztFQUNqQywwQkFBd0I7RUFDeEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixTQUFRO0VBQ1IsWUFBVztFQUNYLFFBQU87RUFDUCxZQUFXO0VBQ1gsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0RBQTRDO0VBQzVDLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBR0Q7NEJBQzRCOztBQUM1QjtFQUNJLGFBQVksRUFDZjs7QUFFRCxxQ0FBcUM7O0FBQ3JDO0VBQ0ksaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCx3QkFBdUI7RUFDdkIscUJBQW9CO0VBQ3BCLGtDQUFpQyxFQUVwQzs7QUFDRDtFQUNJLG9FQUFtRTtFQUNuRSwrQkFBOEI7RUFDOUIsK0JBQThCO0VBQzlCLHlCQUF3QjtFQUN4QiwrQkFBOEI7RUFDOUIsMkJBQTBCO0VBQzFCLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUVyQjs7QUFFRDtFQUNJLHFCQUFvQjtFQUNwQixXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxjQUFZO0VBQ1osZUFBYztFQUNkLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWZpdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcm91c2VsIHtcbm1hcmdpbi1ib3R0b206IDRyZW07XG5cbn1cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuYm90dG9tOiAzcmVtO1xufVxuXG4vKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuLmNhcm91c2VsLWl0ZW0ge1xuaGVpZ2h0OiA0MHJlbTtcbn1cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogMDtcbmxlZnQ6IDA7XG5taW4td2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xub2JqZWN0LWZpdDogY292ZXI7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IHR5cGUgdG8gaW5saW5lLWJsb2NrICovXG5vdmVyZmxvdzogaGlkZGVuOyAgICAgIC8qIGhpZGUgdGhlIG92ZXJmbG93ICovXG59XG4gICAgICBcblxuLm1haW57IFxuICAgIG1hcmdpbi10b3A6IDcuMDYyNXJlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMy4wNjI1cmVtOyBcbn1cblxuLnRleHQtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogIDIuMDYyNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogIDMuMDYyNXJlbTtcbn1cblxuLnB1cnBsZXtcbiAgICBjb2xvcjogIzU2NDhmZjtcbn1cbi8qIE1hcmtldGluZ1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLm1hcmtldGluZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hYm91dHtcbiAgICBtYXJnaW4tdG9wOiA5LjA2MjVyZW07IFxuICAgIG1hcmdpbi1ib3R0b206IDkuMDYyNXJlbTsgXG59XG5cblxuLyogRmVhdHVyZXR0ZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mZWF0dXJldHRlLWRpdmlkZXIge1xuICAgIG1hcmdpbjogNXJlbSAwOyAvKiBTcGFjZSBvdXQgdGhlIEJvb3RzdHJhcCA8aHI+IG1vcmUgKi9cbiAgfVxuICBcbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1mYW1pbHk6IE9iamVjdGl2ZSxzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0haW1wb3J0YW50O1xufVxuXG4uZmVhdHVyZXN7XG4gICAgbWFyZ2luLXRvcDogNy4wNjI1cmVtOyBcbiAgICBtYXJnaW4tYm90dG9tOiA3LjA2MjVyZW07IFxufVxuXG4uZmVhdHVyZS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBPYmplY3RpdmUsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzgyOGE5MSFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzU7XG59XG5cbi5pbWctZWZmZWN0LXNvbGlkOmJlZm9yZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgbGVmdDogMDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjQ4ZmY7XG59XG5cbi5pbWctZWZmZWN0LCAuaW1nLWVmZmVjdD5pbWd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nLWVmZmVjdD5pbWd7XG4gICAgYm94LXNoYWRvdzowIDI1cHggMTAwcHggLTVweCByZ2JhKDAsMCwwLC4xNSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmltZy1lZmZlY3Qtc29saWR7XG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xufVxuXG4uaW1nLWVmZmVjdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyogUmV2aWV3XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ucmV2aWV3IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5yZXZpZXctaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LWZhbWlseTogT2JqZWN0aXZlLHNhbnMtc2VyaWY7XG5cbn1cbi5ncmFkaWVudHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTY0OGZmIDAlLCAjMjFjODdhIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiA0LjVyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cbiAgXG4ubWVkaWF7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmF2YXRhcntcbiAgICB3aWR0aDo3LjVyZW07XG4gICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubWVkaWEtYm9keXtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zaXple1xuICAgIG1heC13aWR0aDogNjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
    };
    HomeComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#login-modal\" id=\"login-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title popupTitle\">Welcome back</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n            <div class=\"input-group\">\n                <div class=\"input-group-addon\">\n                  <!-- <i class=\"fa fa-user\" aria-hidden=\"true\"></i> -->\n                </div>\n                <input name=\"username\" type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control text-center\" id=\"inputUsername\" placeholder=\"Username\" required>\n            </div>     \n        </div>\n        <div class=\"form-group\">\n          <input name=\"password\" type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control text-center\" id=\"inputPassword\" placeholder=\"Password\" required>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" id=\"close\" (click)=\"modalRef.hide()\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" id=\"signUp\" (click)=\"validateLogin()\">Log In</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n.popupTitle {\n  font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakM7RUFDSSxtQkFBa0IsRUFDckI7QUFFRCxnQkFBZ0I7QUFDaEI7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHFCQUFvQixFQUNyQjtBQUVELGdCQUFnQjtBQUNoQjtFQUEwQixVQUFVLEVBQUc7QUFDdkM7RUFBMEIsV0FBVSxFQUFHO0FBRXZDLGtCQUFrQjtBQUNsQjtFQUFxQixtQkFBbUIsRUFBSTtBQUU1QztFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmcgKi9cbi5pbm5lci1hZGRvbiB7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDBweDt9XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQgIHsgcGFkZGluZy1sZWZ0OiAgMzBweDsgfVxuXG4ucG9wdXBUaXRsZXtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, modalRef, authService, alertService) {
        this.router = router;
        this.modalRef = modalRef;
        this.authService = authService;
        this.alertService = alertService;
        this.model = {};
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
    };
    LoginComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    LoginComponent.prototype.validateLogin = function () {
        var _this = this;
        if (this.user.username && this.user.password) {
            this.authService.login(this.user.username, this.user.password)
                .subscribe(function (data) {
                _this.router.navigate(['/dashboard']);
                _this.close();
            }, function (error) {
                _this.alertService.error(error);
            });
        }
        else {
            alert('Username and Password are required');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-modal',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/home/login/login.component.scss")],
            providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title popupTitle\">Create your Code Space Account</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <!-- <h6 class=\"modal-text\">Sign up and start learning today </h6> -->\n        <form #signUpForm=\"ngForm\">\n            <div class=\"form-group\">\n                <label class=\"form-label\" for=\"email\">Email Address</label>\n                <input type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control text-center\" id=\"email\" name=\"email\" #email=\"ngModel\" required>\n                <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger text-center\">\n                  <div [hidden]=\"!email.errors.required\">\n                    Email is required\n                  </div>\n                </div>\n              </div>\n            <div class=\"form-group\">\n                <label class=\"form-label\" for=\"username\">Username</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control text-center\" [(ngModel)]=\"user.username\" id=\"username\" name=\"username\" #username=\"ngModel\" required>\n                  </div> \n                  <div *ngIf=\"username.errors && (username.dirty || username.touched)\" class=\"alert alert-danger text-center\">\n                    <div [hidden]=\"!username.errors.required\">\n                      Username is required\n                    </div>\n                  </div>\n              </div>\n            <!-- <div class=\"col-12\"> -->\n              <div class=\"form-group\">\n                <label class=\"form-label\" for=\"password\">Password</label>\n                <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control text-center\" id=\"password\" name=\"password\" #password=\"ngModel\" required minlength=\"6\">\n                <!-- <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n                  Password is required\n                </div>    -->\n                <div *ngIf=\"password.errors && (password.dirty || password.touched)\" class=\"alert alert-danger text-center\">\n                  <div [hidden]=\"!password.errors.required\">\n                    Password is required\n                  </div>\n                  <div [hidden]=\"!password.errors.minlength\">\n                    Password must be at least 6 characters long.\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\"> -->\n                <!-- <label class=\"form-label\" for=\"passwordConfirm\">Confirm Password</label> -->\n                  <!-- <input type=\"password\" class=\"form-control text-center\" id=\"passwordConfirm\" name=\"passwordConfirm\" required minlength=\"6\"> -->\n                  <!-- <div *ngIf=\"passwordConfirm.errors && (passwordConfirm.dirty || passwordConfirm.touched)\" class=\"alert alert-danger text-center\"> -->\n                    <!-- <div [hidden]=\"!passwordConfirm.errors.required\">\n                      Password is required\n                    </div>\n                    <div [hidden]=\"!passwordConfirm.errors.minlength\">\n                      Password must be at least 6 characters long.\n                    </div> -->\n                  <!-- </div> -->\n              <!-- </div> -->\n            <!-- </div> -->\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"close\" (click)=\"close()\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\" id=\"signUp\" (click)=\"signUp()\">Sign Up</button>\n            </div>\n          </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n.popupTitle {\n  font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvY2xpZW50L3NyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNJLG1CQUFrQixFQUNyQjtBQUVELGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IscUJBQW9CLEVBQ3JCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQTBCLFVBQVUsRUFBRztBQUN2QztFQUEwQixXQUFVLEVBQUc7QUFFdkMsa0JBQWtCO0FBQ2xCO0VBQXFCLG1CQUFtQixFQUFJO0FBRTVDO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW5hYmxlIGFic29sdXRlIHBvc2l0aW9uaW5nICovXG4uaW5uZXItYWRkb24geyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxufVxuXG4vKiBzdHlsZSBpY29uICovXG4uaW5uZXItYWRkb24gLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIGFsaWduIGljb24gKi9cbi5sZWZ0LWFkZG9uIC5nbHlwaGljb24gIHsgbGVmdDogIDBweDt9XG4ucmlnaHQtYWRkb24gLmdseXBoaWNvbiB7IHJpZ2h0OiAwcHg7fVxuXG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0ICB7IHBhZGRpbmctbGVmdDogIDMwcHg7IH1cblxuLnBvcHVwVGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router, modalRef, alertService, authService) {
        this.userService = userService;
        this.router = router;
        this.modalRef = modalRef;
        this.alertService = alertService;
        this.authService = authService;
        this.model = {};
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SignupComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.user.email && this.user.username && this.user.password) {
            this.user.level = 1;
            this.user.points = 0;
            this.user.page = 0;
            this.user.friends = [];
            this.userService.create(this.user)
                .subscribe(function (data) {
                _this.login(_this.user.username, _this.user.password);
            }, function (error) {
                _this.alertService.error(error);
            });
        }
        else {
            alert('Username and Password are required');
        }
    };
    SignupComponent.prototype.login = function (username, password) {
        var _this = this;
        this.authService.login(username, password)
            .subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
            _this.close();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-modal',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/home/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + '/users/authenticate', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/register', user);
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/' + _id);
    };
    UserService.prototype.update = function (user) {
        console.log('update');
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.put(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/' + user._id, user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/' + _id);
    };
    UserService.prototype.getFriends = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/' + user._id);
    };
    UserService.prototype.getAll = function () {
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users');
    };
    UserService.prototype.addFriend = function (user, email) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.put(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/friends/', { _id: user._id, friends: email });
    };
    UserService.prototype.addPage = function (user, count) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.put(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/addPage', { _id: user._id, page: count });
    };
    UserService.prototype.getNonFriends = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_2__["appConfig"].apiUrl + '/users/search/' + user._id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_5__);




// Import your required language in main.ts or at the root of your application
// see https://codemirror.net/mode/index.html


if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oliviajohnson/Documents/university/third_year/repos/code-school/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dashboard/:id', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'coding/:id', component: _coding_coding_component__WEBPACK_IMPORTED_MODULE_4__["CodingComponent"] },
    { path: 'chat/:id', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"] },
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

module.exports = "<!-- This component displays the app header and footer -->\n<nav class=\"navbar navbar-expand-lg fixed-top\" [ngClass] = \"(scrolled ? 'bg-white' : 'navbar-transparent')\" >\n  <div class=\"container underline\"> \n  <a class=\"navbar-brand\" [ngClass] = \"(scrolled ? 'title' : 'title-transparent')\" href=\"/\">Code Space</a>\n  <button class=\"navbar-toggler\" [ngClass]=\"(scrolled ? 'navbar-light' : 'navbar-dark')\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggle\" aria-controls=\"navbarToggle\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarToggle\">\n    <nav aria-label=\"links\">\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"nav-item navbar-right\">\n              <a class=\"nav-link\" [ngClass] = \"(scrolled ? 'logIn' : 'logIn-transparent')\" (click)=\"openLoginModal()\">Log In </a>\n          </li>\n          <li class=\"nav-item navbar-right\">\n            <a class=\"nav-link\" [ngClass] = \"(scrolled ? 'signUp' : 'signUp-transparent')\" (click)=\"openSignupModal()\">Sign Up</a>\n          </li>\n        </ul>\n    </nav>\n  </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer class = \"bg-dark\">\n  <div class=\"container space-2\">\n      <div class=\"text-center footer\">All rights reserved. © Code Space </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-2 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.footer {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3BCOztBQUVEO0VBQ0MsZ0NBQStCO0VBQy9CLGdCQUFlLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2UtMntcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZm9vdGVyIHtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcblx0Zm9udC1zaXplOiAxMHB4O1xufVxuIl19 */"

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
    function AppComponent(modalService, doc) {
        this.modalService = modalService;
        this.doc = doc;
        this.title = 'code-space';
        this.scrolled = true;
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
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            Document])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _coding_lesson1_lesson1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coding/lesson1/lesson1.component */ "./src/app/coding/lesson1/lesson1.component.ts");
/* harmony import */ var _coding_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coding/lesson2/lesson2.component */ "./src/app/coding/lesson2/lesson2.component.ts");
/* harmony import */ var _coding_lesson3_lesson3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coding/lesson3/lesson3.component */ "./src/app/coding/lesson3/lesson3.component.ts");
/* harmony import */ var _coding_lesson4_lesson4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./coding/lesson4/lesson4.component */ "./src/app/coding/lesson4/lesson4.component.ts");
/* harmony import */ var _coding_lesson5_lesson5_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./coding/lesson5/lesson5.component */ "./src/app/coding/lesson5/lesson5.component.ts");
/* harmony import */ var _coding_lesson6_lesson6_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./coding/lesson6/lesson6.component */ "./src/app/coding/lesson6/lesson6.component.ts");
/* harmony import */ var _coding_lesson7_lesson7_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./coding/lesson7/lesson7.component */ "./src/app/coding/lesson7/lesson7.component.ts");
/* harmony import */ var _coding_lesson8_lesson8_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./coding/lesson8/lesson8.component */ "./src/app/coding/lesson8/lesson8.component.ts");
/* harmony import */ var _coding_lesson9_lesson9_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./coding/lesson9/lesson9.component */ "./src/app/coding/lesson9/lesson9.component.ts");
/* harmony import */ var _coding_lesson10_lesson10_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./coding/lesson10/lesson10.component */ "./src/app/coding/lesson10/lesson10.component.ts");
/* harmony import */ var _home_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/login/login.component */ "./src/app/home/login/login.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _coding_lesson1_lesson1_component__WEBPACK_IMPORTED_MODULE_12__["Lesson1Component"],
                _coding_lesson2_lesson2_component__WEBPACK_IMPORTED_MODULE_13__["Lesson2Component"],
                _coding_lesson3_lesson3_component__WEBPACK_IMPORTED_MODULE_14__["Lesson3Component"],
                _coding_lesson4_lesson4_component__WEBPACK_IMPORTED_MODULE_15__["Lesson4Component"],
                _coding_lesson5_lesson5_component__WEBPACK_IMPORTED_MODULE_16__["Lesson5Component"],
                _coding_lesson6_lesson6_component__WEBPACK_IMPORTED_MODULE_17__["Lesson6Component"],
                _coding_lesson7_lesson7_component__WEBPACK_IMPORTED_MODULE_18__["Lesson7Component"],
                _coding_lesson8_lesson8_component__WEBPACK_IMPORTED_MODULE_19__["Lesson8Component"],
                _coding_lesson9_lesson9_component__WEBPACK_IMPORTED_MODULE_20__["Lesson9Component"],
                _coding_lesson10_lesson10_component__WEBPACK_IMPORTED_MODULE_21__["Lesson10Component"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_24__["ChatComponent"],
                _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_26__["HelpComponent"],
                _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
                _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
                _home_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_11__["CodemirrorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
            ],
            providers: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
                _home_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
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

module.exports = "<div id=\"wrapper\">\n  <!-- Sidebar -->\n<ul class=\"sidebar navbar-nav\">\n  <li class=\"nav-item divider\">\n      Menu\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/dashboard/:id\">\n      <span data-feather=\"home\"></span>\n      Dashboard <span class=\"sr-only\">(current)</span>\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/coding/:id\">\n      <span data-feather=\"file\"></span>\n      Learn\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" href=\"/chat/:id\">\n      <span data-feather=\"shopping-cart\"></span>\n      Chat\n    </a>\n  </li>\n  <li class=\"nav-item divider\">\n      More\n  </li>\n  <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">\n        <span data-feather=\"shopping-cart\"></span>\n        Help\n      </a>\n    </li>\n  <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">\n        <span data-feather=\"shopping-cart\"></span>\n        Settings\n      </a>\n  </li>\n</ul>\n\n  <!-- Main Content -->\n  <div id=\"content-wrapper\">\n    <div class=\"container-fluid\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"/chat/:id\">Chat</a>\n          </li>\n        </ol>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left; }\n\n.about {\n  padding-left: 50px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px; }\n\n.text {\n  color: black;\n  font-weight: 250; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBR0g7RUFDSSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFO0lBQ0Usb0JBQW1CLEVBQ3BCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEIsRUFBQTs7QUFHSDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRTtJQUNFLFlBQVcsRUFDWixFQUFBOztBQUdIO0VBQ0Usd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixzQ0FBcUM7RUFDckMsOENBQTRDLEVBRTdDOztBQUdEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYyxFQUNmOztBQUVEO0VBQ0UsOEJBQTZCO0VBQzdCLG1DQUFrQztFQUNsQywyQkFBMEI7RUFDMUIsc0NBQXFDO0VBQ3JDLFVBQVMsRUFDVjs7QUFFRDtFQUNFLFVBQVM7RUFDVCxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0U7SUFDRSx3QkFBdUIsRUFFeEI7RUFDRDtJQUNFLGVBQWM7SUFDZCxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYixhQUFZLEVBQ2I7RUFDRDtJQUNFLGdCQUFlO0lBQ2YsZ0JBQWUsRUFDaEI7RUFDRDtJQUNFLDRCQUEyQjtJQUMzQixlQUFjO0lBQ2QsT0FBTSxFQUNQO0VBQ0Q7SUFDRSxlQUFjLEVBQ2Y7RUFDRDtJQUNFLGtCQUFpQjtJQUNqQix3QkFBdUIsRUFDeEI7RUFDRDtJQUNFLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0UsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixhQUFZLEVBQ2I7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixlQUFjLEVBQ2Y7RUFDRDtJQUNFLDhCQUE2QjtJQUM3QixtQ0FBa0M7SUFDbEMsMkJBQTBCO0lBQzFCLHNDQUFxQztJQUNyQyxVQUFTLEVBQ1Y7RUFDRDtJQUNFLFVBQVM7SUFDVCxxQkFBb0IsRUFDckI7RUFDRDtJQUNFLGNBQWEsRUFDZCxFQUFBOztBQUdIO0VBQ0UsVUFBUztFQUNULDJCQUEwQjtFQUMxQixpQkFBZ0IsRUFDakI7O0FBRUg7RUFDSSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQiwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsUUFBTztFQUNQLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFHRCxxQkFBcUI7O0FBQ3JCO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFHRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usb0VBQW1FO0VBQ25FLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUNGLEVBQUM7O0FBR0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICB9XG4gIFxuICAjd3JhcHBlciAjY29udGVudC13cmFwcGVyIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIGJvZHkuZml4ZWQtbmF2ICNjb250ZW50LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgfVxuICBcbiAgYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG5cbmJvZHkuZml4ZWQtbmF2LnNpZGViYXItdG9nZ2xlZCAjY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGJvZHkuZml4ZWQtbmF2ICNjb250ZW50LXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMjVweDtcbiAgICB9XG4gICAgYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XG4gICAgdG9wOiAwLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCAtIDM1cHgpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIC8vIHBhZGRpbmc6IDYwcHggMCAwO1xuICB9XG5cblxuICAuc2lkZWJhciAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUuZHJvcHVwIHtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnNpZGViYXIudG9nZ2xlZCB7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgICAgIC8vIHBhZGRpbmc6IDYwcHggMCAwO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAyMjVweDtcbiAgICB9XG4gICAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gICAgLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiBjYWxjKDEyMHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhci5maXhlZC10b3Age1xuICAgIHRvcDogNTZweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbi5kaXZpZGVye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjN2I3YjdiO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IC44NDYycmVtO1xufVxuXG4uYWN0aXZle1xuICAgIGNvbG9yOiAjNTY0OGZmICFpbXBvcnRhbnQ7IFxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnR7XG4gICAgei1pbmRleDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6ICMyMWM4N2E7XG59XG5cblxuLyoqICB3ZWxjb21lIGNhcmQgKiovXG4uZGVzY3JpcHRpb257XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVzZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi5tZXNzYWdle1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAxNTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmF2YXRhcntcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYWJvdXR7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTY0OGZmIDAlLCAjMjFjODdhIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweFxufVxuXG5cbi50ZXh0e1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG59Il19 */"

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

module.exports = "\n\n<div class=\"code\">\n    <div class=\"split-view\">\n        <div class=\"col-4 gradient\">\n            <!-- <div class=\"\" *ngIf=\"count==0\"></div> -->\n            <app-lesson1  *ngIf=\"count==1\"></app-lesson1>\n            <app-lesson2 *ngIf=\"count==2\"></app-lesson2>\n            <app-lesson3 *ngIf=\"count==3\"></app-lesson3>\n            <app-lesson4 *ngIf=\"count==4\"></app-lesson4>\n            <app-lesson5 *ngIf=\"count==5\"></app-lesson5>\n            <app-lesson6 *ngIf=\"count==6\"></app-lesson6>\n            <app-lesson7 *ngIf=\"count==7\"></app-lesson7>\n            <app-lesson8 *ngIf=\"count==8\"></app-lesson8>\n            <app-lesson9 *ngIf=\"count==9\"></app-lesson9>\n            <app-lesson10 *ngIf=\"count==10\"></app-lesson10>\n\n            <div class=\"footer-code\">\n                <div class=\"container space-2\">\n                    <button type=\"button\" class=\"btn btn-lg btn-primary back\" (click)=\"back()\"><span>Back</span></button>\n                    <button type=\"button\" class=\"btn btn-lg btn-primary next\" (click)=\"next()\"><span>Next</span></button>\n                </div>                  \n            </div>\n        </div>\n        <div class=\"col-4 editor\">\n            <textarea id=\"textbox\" name=\"textbox\" rows=\"4\" cols=\"50\">\n# Please enter code here\n\n            </textarea>\n            <div class=\"footer-code\">\n                <button type=\"button\" class=\"btn btn-lg btn-primary run\" onclick=\"runit()\"><span>Run</span></button>\n            </div>\n        </div>\n\n        <div class=\"col-4 terminal\">\n            <pre id=\"output\" class=\"main\"></pre> \n        </div>\n    </div> \n</div>"

/***/ }),

/***/ "./src/app/coding/coding.component.scss":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code {\n  margin-top: 60px; }\n\n.split-view {\n  display: flex;\n  flex: 1; }\n\n/*** Lesson ***/\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 87vh;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.lesson {\n  padding: 15px;\n  color: white; }\n\n.next {\n  font-size: 12px;\n  bottom: 0;\n  float: right; }\n\n.back {\n  font-size: 12px;\n  bottom: 0;\n  float: left; }\n\n.text {\n  font-weight: 150; }\n\n/*** Code Editor ***/\n\n.editor {\n  font-size: 17px;\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 87vh !important;\n  position: relative; }\n\n.run {\n  font-size: 12px;\n  z-index: 100;\n  float: right; }\n\n/*** OUTPUT ***/\n\n.terminal {\n  color: white;\n  background-color: #212529 !important;\n  padding: 15px;\n  height: 87vh !important; }\n\n#output {\n  color: white; }\n\n/*** Code Footer ***/\n\n.footer-code {\n  height: 37px;\n  position: absolute;\n  bottom: 0px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvY29kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksY0FBYTtFQUNiLFFBQU8sRUFDVjs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0VBQ0ksb0VBQW1FO0VBQ25FLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGtCQUFnQjtFQUNoQixtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxjQUFZO0VBQ1osYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFVO0VBQ1YsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixVQUFVO0VBQ1YsWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNELHFCQUFxQjs7QUFDckI7RUFDSSxnQkFBZTtFQUNmLGtCQUFnQjtFQUNoQixtQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRCxnQkFBZ0I7O0FBQ2hCO0VBQ0ksYUFBWTtFQUNaLHFDQUFvQztFQUNwQyxjQUFZO0VBQ1osd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVELHFCQUFxQjs7QUFDckI7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGV7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLnNwbGl0LXZpZXd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xufVxuXG4vKioqIExlc3NvbiAqKiovXG4uZ3JhZGllbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2NDhmZiAwJSwgIzIxYzg3YSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogODd2aDtcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xufVxuXG4ubGVzc29ue1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXh0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3R0b20gOiAwO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmJhY2t7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvdHRvbSA6IDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiAxNTA7XG59XG4vKioqIENvZGUgRWRpdG9yICoqKi9cbi5lZGl0b3J7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgcGFkZGluZy1yaWdodDowcHg7XG4gICAgaGVpZ2h0OiA4N3ZoICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucnVue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB6LWluZGV4OjEwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi8qKiogT1VUUFVUICoqKi9cbi50ZXJtaW5hbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBoZWlnaHQ6IDg3dmggIWltcG9ydGFudDtcbn1cblxuI291dHB1dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qKiogQ29kZSBGb290ZXIgKioqL1xuLmZvb3Rlci1jb2Rle1xuICAgIGhlaWdodDogMzdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare function runit(): any;
var CodingComponent = /** @class */ (function () {
    function CodingComponent() {
        this.count = 0;
    }
    CodingComponent.prototype.next = function () {
        if (this.count < 11) {
            this.count++;
            console.log(this.count);
        }
    };
    CodingComponent.prototype.back = function () {
        if (this.count >= 0) {
            this.count--;
            console.log(this.count);
        }
    };
    CodingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coding-component',
            template: __webpack_require__(/*! ./coding.component.html */ "./src/app/coding/coding.component.html"),
            styles: [__webpack_require__(/*! ./coding.component.scss */ "./src/app/coding/coding.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "./src/app/coding/lesson1/lesson1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson1/lesson1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson1 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson1/lesson1.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson1/lesson1.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uMS9sZXNzb24xLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb24xL2xlc3NvbjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson1/lesson1.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson1/lesson1.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson1.component.html */ "./src/app/coding/lesson1/lesson1.component.html"),
            styles: [__webpack_require__(/*! ./lesson1.component.scss */ "./src/app/coding/lesson1/lesson1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson1Component);
    return Lesson1Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson10/lesson10.component.html":
/*!*********************************************************!*\
  !*** ./src/app/coding/lesson10/lesson10.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson10 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson10/lesson10.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/coding/lesson10/lesson10.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uMTAvbGVzc29uMTAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29kaW5nL2xlc3NvbjEwL2xlc3NvbjEwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbntcbiAgICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/coding/lesson10/lesson10.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson10/lesson10.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./lesson10.component.html */ "./src/app/coding/lesson10/lesson10.component.html"),
            styles: [__webpack_require__(/*! ./lesson10.component.scss */ "./src/app/coding/lesson10/lesson10.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson10Component);
    return Lesson10Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson2/lesson2.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson2/lesson2.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson2 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson2/lesson2.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson2/lesson2.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uMi9sZXNzb24yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb24yL2xlc3NvbjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson2/lesson2.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson2/lesson2.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson2.component.html */ "./src/app/coding/lesson2/lesson2.component.html"),
            styles: [__webpack_require__(/*! ./lesson2.component.scss */ "./src/app/coding/lesson2/lesson2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson2Component);
    return Lesson2Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson3/lesson3.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson3/lesson3.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson3 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson3/lesson3.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson3/lesson3.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uMy9sZXNzb24zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb24zL2xlc3NvbjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson3/lesson3.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson3/lesson3.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson3.component.html */ "./src/app/coding/lesson3/lesson3.component.html"),
            styles: [__webpack_require__(/*! ./lesson3.component.scss */ "./src/app/coding/lesson3/lesson3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson3Component);
    return Lesson3Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson4/lesson4.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson4/lesson4.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson4 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson4/lesson4.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson4/lesson4.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uNC9sZXNzb240LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb240L2xlc3NvbjQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson4/lesson4.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson4/lesson4.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson4.component.html */ "./src/app/coding/lesson4/lesson4.component.html"),
            styles: [__webpack_require__(/*! ./lesson4.component.scss */ "./src/app/coding/lesson4/lesson4.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson4Component);
    return Lesson4Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson5/lesson5.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson5/lesson5.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson5 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson5/lesson5.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson5/lesson5.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uNS9sZXNzb241LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb241L2xlc3NvbjUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson5/lesson5.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson5/lesson5.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson5.component.html */ "./src/app/coding/lesson5/lesson5.component.html"),
            styles: [__webpack_require__(/*! ./lesson5.component.scss */ "./src/app/coding/lesson5/lesson5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson5Component);
    return Lesson5Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson6/lesson6.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson6/lesson6.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson6 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson6/lesson6.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson6/lesson6.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uNi9sZXNzb242LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb242L2xlc3NvbjYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson6/lesson6.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson6/lesson6.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson6.component.html */ "./src/app/coding/lesson6/lesson6.component.html"),
            styles: [__webpack_require__(/*! ./lesson6.component.scss */ "./src/app/coding/lesson6/lesson6.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson6Component);
    return Lesson6Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson7/lesson7.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson7/lesson7.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson7 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson7/lesson7.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson7/lesson7.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uNy9sZXNzb243LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb243L2xlc3NvbjcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson7/lesson7.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson7/lesson7.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson7.component.html */ "./src/app/coding/lesson7/lesson7.component.html"),
            styles: [__webpack_require__(/*! ./lesson7.component.scss */ "./src/app/coding/lesson7/lesson7.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson7Component);
    return Lesson7Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson8/lesson8.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson8/lesson8.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson9 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson8/lesson8.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson8/lesson8.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uOC9sZXNzb244LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb244L2xlc3NvbjguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson8/lesson8.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson8/lesson8.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson8.component.html */ "./src/app/coding/lesson8/lesson8.component.html"),
            styles: [__webpack_require__(/*! ./lesson8.component.scss */ "./src/app/coding/lesson8/lesson8.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson8Component);
    return Lesson8Component;
}());



/***/ }),

/***/ "./src/app/coding/lesson9/lesson9.component.html":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson9/lesson9.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <p class=\"text\">\n    lesson9 works!\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/coding/lesson9/lesson9.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/coding/lesson9/lesson9.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: white; }\n\n.main {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9jb2RpbmcvbGVzc29uOS9sZXNzb245LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvZGluZy9sZXNzb245L2xlc3NvbjkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWlue1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/coding/lesson9/lesson9.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/coding/lesson9/lesson9.component.ts ***!
  \*****************************************************/
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
            template: __webpack_require__(/*! ./lesson9.component.html */ "./src/app/coding/lesson9/lesson9.component.html"),
            styles: [__webpack_require__(/*! ./lesson9.component.scss */ "./src/app/coding/lesson9/lesson9.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Lesson9Component);
    return Lesson9Component;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- Sidebar -->\n  <ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item divider\">\n        Menu\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"/dashboard/:id\">\n        <span data-feather=\"home\"></span>\n        Dashboard <span class=\"sr-only\">(current)</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/coding/:id\">\n        <span data-feather=\"file\"></span>\n        Learn\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/chat/:id\">\n        <span data-feather=\"shopping-cart\"></span>\n        Chat\n      </a>\n    </li>\n    <li class=\"nav-item divider\">\n        More\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"openModal()\">\n          <span data-feather=\"shopping-cart\"></span>\n          Help\n        </a>\n      </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"shopping-cart\"></span>\n          Settings\n        </a>\n    </li>\n  </ul>\n\n    <!-- Main Content -->\n    <div id=\"content-wrapper\">\n      <div class=\"container-fluid\">\n\n        <!-- Breadcrumbs-->\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n              <a href=\"/dashboard/:id\">Dashboard</a>\n            </li>\n          </ol>\n          \n        <!-- Welcome message -->\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"gradient\"> \n              <div class=\"about col-9\">\n                <div class=\"col-4 avatar\">\n\n                </div>\n                <div class=\"col-8 description\">\n                  <div class=\"message\">\n                    welcome back!\n                  </div>\n                  <div class=\"user\">\n                    Libbyj98\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-4 description\">\n                <div class=\"message\">\n                  Level 1\n                </div>\n                <div class=\"user\">\n                  1500 points\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Get Started -->\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h4 class=\"text\">\n              Get Started Now\n            </h4>\n          </div>\n        </div>\n        <div class=\"card col-12\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Learn Python 2</h5>\n            <p class=\"card-text\">Python is one the three most popular interpreted languages. Taught in numerous schools globally</p>\n          </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: flex;\n  margin-top: 56px; }\n\n#wrapper #content-wrapper {\n  overflow-x: hidden;\n  width: 100%;\n  padding-top: 20px; }\n\nbody.fixed-nav #content-wrapper {\n  margin-top: 56px;\n  padding-left: 120px; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\nbody.fixed-nav.sidebar-toggled #content-wrapper {\n  padding-left: 0; }\n\n@media (min-width: 768px) {\n  body.fixed-nav #content-wrapper {\n    padding-left: 225px; }\n  body.fixed-nav.sidebar-toggled #content-wrapper {\n    padding-left: 120px; } }\n\n.navbar-nav .form-inline .input-group {\n  width: 100%; }\n\n.navbar-nav .nav-item.active .nav-link {\n  color: #fff; }\n\n.navbar-nav .nav-item .nav-link:focus {\n  outline: none; }\n\n.navbar-nav .nav-item .nav-link .badge {\n  position: absolute;\n  margin-left: 0.75rem;\n  top: 0.3rem;\n  font-weight: 400;\n  font-size: 0.5rem; }\n\n@media (min-width: 768px) {\n  .navbar-nav .form-inline .input-group {\n    width: auto; } }\n\n.sidebar {\n  width: 120px !important;\n  background-color: white;\n  min-height: calc(100vh - 56px - 35px);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1); }\n\n.sidebar .nav-item:last-child {\n  margin-bottom: 1rem; }\n\n.sidebar .nav-item .nav-link {\n  text-align: left;\n  padding: 0.75rem 1rem;\n  width: 120px; }\n\n.sidebar .nav-item .nav-link span {\n  font-size: 0.65rem;\n  display: block; }\n\n.sidebar .nav-item .dropdown-menu {\n  position: absolute !important;\n  -webkit-transform: none !important;\n  transform: none !important;\n  left: calc(120px + 0.5rem) !important;\n  margin: 0; }\n\n.sidebar .nav-item .dropdown-menu.dropup {\n  bottom: 0;\n  top: auto !important; }\n\n.sidebar .nav-item.dropdown .dropdown-toggle::after {\n  display: none; }\n\n.sidebar.toggled {\n  width: 0 !important;\n  overflow: hidden; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    width: 225px !important; }\n  .sidebar .nav-item .nav-link {\n    display: block;\n    width: 100%;\n    text-align: left;\n    padding: 1rem;\n    width: 225px; }\n  .sidebar .nav-item .nav-link span {\n    font-size: 1rem;\n    display: inline; }\n  .sidebar .nav-item .dropdown-menu {\n    position: static !important;\n    margin: 0 1rem;\n    top: 0; }\n  .sidebar .nav-item.dropdown .dropdown-toggle::after {\n    display: block; }\n  .sidebar.toggled {\n    overflow: visible;\n    width: 120px !important; }\n  .sidebar.toggled .nav-item:last-child {\n    margin-bottom: 1rem; }\n  .sidebar.toggled .nav-item .nav-link {\n    text-align: center;\n    padding: 0.75rem 1rem;\n    width: 120px; }\n  .sidebar.toggled .nav-item .nav-link span {\n    font-size: 0.65rem;\n    display: block; }\n  .sidebar.toggled .nav-item .dropdown-menu {\n    position: absolute !important;\n    -webkit-transform: none !important;\n    transform: none !important;\n    left: calc(120px + 0.5rem) !important;\n    margin: 0; }\n  .sidebar.toggled .nav-item .dropdown-menu.dropup {\n    bottom: 0;\n    top: auto !important; }\n  .sidebar.toggled .nav-item.dropdown .dropdown-toggle::after {\n    display: none; } }\n\n.sidebar.fixed-top {\n  top: 56px;\n  height: calc(100vh - 56px);\n  overflow-y: auto; }\n\n.divider {\n  padding-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: #7b7b7b;\n  line-height: 30px;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: .8462rem; }\n\n.active {\n  color: #5648ff !important;\n  font-weight: 500 !important; }\n\n.content {\n  z-index: 0;\n  position: relative;\n  left: 0;\n  margin-left: 230px;\n  min-height: 100%; }\n\n.main-content {\n  padding: 25px; }\n\n.container-fluid {\n  width: 100%; }\n\n.nav-link {\n  color: #21c87a; }\n\n/**  welcome card **/\n\n.description {\n  padding: 0;\n  color: white;\n  padding-left: 20px;\n  float: left; }\n\n.user {\n  color: white;\n  font-weight: 400;\n  font-size: 30px; }\n\n.message {\n  color: white;\n  font-weight: 150;\n  font-size: 20px; }\n\n.avatar {\n  border-radius: 5rem;\n  background-color: white;\n  width: 5rem;\n  height: 5rem;\n  float: left; }\n\n.about {\n  padding-left: 50px; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  position: relative;\n  height: 12.5rem;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  display: flex;\n  border-radius: 0.25rem;\n  margin-bottom: 40px; }\n\n.text {\n  color: black;\n  font-weight: 250; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUdIO0VBQ0ksZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRTtJQUNFLG9CQUFtQixFQUNwQjtFQUNEO0lBQ0Usb0JBQW1CLEVBQ3BCLEVBQUE7O0FBR0g7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0U7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsc0NBQXFDO0VBQ3JDLDhDQUE0QyxFQUU3Qzs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQ0FBa0M7RUFDbEMsMkJBQTBCO0VBQzFCLHNDQUFxQztFQUNyQyxVQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxVQUFTO0VBQ1QscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFO0lBQ0Usd0JBQXVCLEVBRXhCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxnQkFBZTtJQUNmLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFDRSw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLE9BQU0sRUFDUDtFQUNEO0lBQ0UsZUFBYyxFQUNmO0VBQ0Q7SUFDRSxrQkFBaUI7SUFDakIsd0JBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtJQUNFLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsYUFBWSxFQUNiO0VBQ0Q7SUFDRSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNmO0VBQ0Q7SUFDRSw4QkFBNkI7SUFDN0IsbUNBQWtDO0lBQ2xDLDJCQUEwQjtJQUMxQixzQ0FBcUM7SUFDckMsVUFBUyxFQUNWO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QscUJBQW9CLEVBQ3JCO0VBQ0Q7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLFVBQVM7RUFDVCwyQkFBMEI7RUFDMUIsaUJBQWdCLEVBQ2pCOztBQUVIO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBR0QscUJBQXFCOztBQUNyQjtFQUNFLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDaEI7O0FBR0Q7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG9FQUFtRTtFQUNuRSwrQkFBOEI7RUFDOUIsK0JBQThCO0VBQzlCLHlCQUF3QjtFQUN4QiwrQkFBOEI7RUFDOUIsMkJBQTBCO0VBQzFCLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFDRixFQUFDOztBQUdEO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN3cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gIH1cbiAgXG4gICN3cmFwcGVyICNjb250ZW50LXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICBcbiAgYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICB9XG4gIFxuICBib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cblxuYm9keS5maXhlZC1uYXYuc2lkZWJhci10b2dnbGVkICNjb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgYm9keS5maXhlZC1uYXYgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xuICAgIH1cbiAgICBib2R5LmZpeGVkLW5hdi5zaWRlYmFyLXRvZ2dsZWQgI2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm5hdmJhci1uYXYgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICB0b3A6IDAuM3JlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2YmFyLW5hdiAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgfVxuICBcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4IC0gMzVweCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgLy8gcGFkZGluZzogNjBweCAwIDA7XG4gIH1cblxuICAuc2lkZWJhciAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IGNhbGMoMTIwcHggKyAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc2lkZWJhciAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUuZHJvcHVwIHtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5uYXYtaXRlbS5kcm9wZG93biAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnNpZGViYXIudG9nZ2xlZCB7XG4gICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICB3aWR0aDogMjI1cHggIWltcG9ydGFudDtcbiAgICAgIC8vIHBhZGRpbmc6IDYwcHggMCAwO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIHdpZHRoOiAyMjVweDtcbiAgICB9XG4gICAgLnNpZGViYXIgLm5hdi1pdGVtIC5uYXYtbGluayBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gICAgLnNpZGViYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAuc2lkZWJhciAubmF2LWl0ZW0uZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAubmF2LWxpbmsgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnNpZGViYXIudG9nZ2xlZCAubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiBjYWxjKDEyMHB4ICsgMC41cmVtKSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuc2lkZWJhci50b2dnbGVkIC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudS5kcm9wdXAge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zaWRlYmFyLnRvZ2dsZWQgLm5hdi1pdGVtLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAuc2lkZWJhci5maXhlZC10b3Age1xuICAgIHRvcDogNTZweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbi5kaXZpZGVye1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjN2I3YjdiO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IC44NDYycmVtO1xufVxuXG4uYWN0aXZle1xuICAgIGNvbG9yOiAjNTY0OGZmICFpbXBvcnRhbnQ7IFxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnR7XG4gICAgei1pbmRleDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgY29sb3I6ICMyMWM4N2E7XG59XG5cblxuLyoqICB3ZWxjb21lIGNhcmQgKiovXG4uZGVzY3JpcHRpb257XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVzZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi5tZXNzYWdle1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAxNTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmF2YXRhcntcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYWJvdXR7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNTY0OGZmIDAlLCAjMjFjODdhIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweFxufVxuXG5cbi50ZXh0e1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG59Il19 */"

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
    function DashboardComponent(modalService) {
        this.modalService = modalService;
    }
    DashboardComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/help/help.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Help</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n       \n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/help/help.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9kYXNoYm9hcmQvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNJLG1CQUFrQixFQUNyQjtBQUVELGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IscUJBQW9CLEVBQ3JCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQTBCLFVBQVUsRUFBRztBQUN2QztFQUEwQixXQUFVLEVBQUc7QUFFdkMsa0JBQWtCO0FBQ2xCO0VBQXFCLG1CQUFtQixFQUFJIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uICB7IGxlZnQ6ICAwcHg7fVxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24geyByaWdodDogMHB4O31cblxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCAgeyBwYWRkaW5nLWxlZnQ6ICAzMHB4OyB9XG4iXX0= */"

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
    function HelpComponent(modalService) {
        this.modalService = modalService;
    }
    HelpComponent.prototype.close = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/dashboard/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/dashboard/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
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

module.exports = ".typewriter {\n  color: white;\n  font-weight: 200;\n  line-height: 1.2;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  padding-top: 50px; }\n\n.css-typing p {\n  border-right: .15em solid white;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.css-typing p:nth-child(1) {\n  width: 12em;\n  -webkit-animation: type 2s steps(40, end);\n  animation: type 2s steps(40, end);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.css-typing p:nth-child(2) {\n  width: 10em;\n  opacity: 0;\n  -webkit-animation: type2 2s steps(40, end);\n  animation: type2 2s steps(40, end);\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.css-typing p:nth-child(3) {\n  width: 17.5em;\n  opacity: 0;\n  -webkit-animation: type3 5s steps(40, end), blink 0.5s step-end infinite alternate;\n  animation: type3 2s steps(40, end), blink 0.5s step-end infinite alternate;\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n@keyframes type {\n  0% {\n    width: 0; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    border: none; } }\n\n@-webkit-keyframes type {\n  0% {\n    width: 0; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    border: none; } }\n\n@keyframes type2 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    opacity: 1;\n    border: none; } }\n\n@-webkit-keyframes type2 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  99.9% {\n    border-right: .15em solid white; }\n  100% {\n    opacity: 1;\n    border: none; } }\n\n@keyframes type3 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes type3 {\n  0% {\n    width: 0; }\n  1% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  50% {\n    border-color: transparent; } }\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: tranparent; } }\n\n.header {\n  color: white;\n  font-weight: 200;\n  line-height: 1;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  padding-top: 50px;\n  padding-bottom: 25px; }\n\n.options {\n  color: white;\n  font-weight: 200;\n  line-height: 1;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9kYXNoYm9hcmQvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxnQ0FBK0I7RUFDL0Isb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCwwQ0FBeUM7RUFDekMsa0NBQWlDO0VBQ2pDLHNDQUFxQztFQUNyQyw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsV0FBVTtFQUNWLDJDQUEwQztFQUMxQyxtQ0FBa0M7RUFDbEMsNEJBQTJCO0VBQzNCLG9CQUFtQjtFQUNuQixzQ0FBcUM7RUFDckMsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLFdBQVU7RUFDVixtRkFBaUY7RUFDakYsMkVBQXlFO0VBQ3pFLDRCQUEyQjtFQUMzQixvQkFBbUI7RUFDbkIsc0NBQXFDO0VBQ3JDLDhCQUE2QixFQUM5Qjs7QUFFRDtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxnQ0FBK0IsRUFBQTtFQUVqQztJQUNFLGFBQVksRUFBQSxFQUFBOztBQUloQjtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxnQ0FBK0IsRUFBQTtFQUVqQztJQUNFLGFBQVksRUFBQSxFQUFBOztBQUloQjtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLGdDQUErQixFQUFBO0VBRWpDO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBOztBQUloQjtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLGdDQUErQixFQUFBO0VBRWpDO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBOztBQUloQjtFQUNFO0lBQ0UsU0FBUSxFQUFBO0VBRVY7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLFdBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0U7SUFDRSxTQUFRLEVBQUE7RUFFVjtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLDBCQUF5QixFQUFBLEVBQUE7O0FBRzdCO0VBQ0U7SUFDRSx5QkFBd0IsRUFBQSxFQUFBOztBQUs5QjtFQUNJLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFFdkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZSxFQUVsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBld3JpdGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uY3NzLXR5cGluZyBwIHtcbiAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIHdoaXRlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuY3NzLXR5cGluZyBwOm50aC1jaGlsZCgxKSB7XG4gICAgd2lkdGg6IDEyZW07XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGUgMnMgc3RlcHMoNDAsIGVuZCk7XG4gICAgYW5pbWF0aW9uOiB0eXBlIDJzIHN0ZXBzKDQwLCBlbmQpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC5jc3MtdHlwaW5nIHA6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogMTBlbTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlMiAycyBzdGVwcyg0MCwgZW5kKTtcbiAgICBhbmltYXRpb246IHR5cGUyIDJzIHN0ZXBzKDQwLCBlbmQpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC5jc3MtdHlwaW5nIHA6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogMTcuNWVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGUzIDVzIHN0ZXBzKDQwLCBlbmQpLCBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogdHlwZTMgMnMgc3RlcHMoNDAsIGVuZCksIGJsaW5rIC41cyBzdGVwLWVuZCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyB0eXBlIHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG4gICAgOTkuOSUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZSB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIGJvcmRlci1yaWdodDogLjE1ZW0gc29saWQgd2hpdGU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyB0eXBlMiB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIDElIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIGJvcmRlci1yaWdodDogLjE1ZW0gc29saWQgd2hpdGU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlMiB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIDElIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIGJvcmRlci1yaWdodDogLjE1ZW0gc29saWQgd2hpdGU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgdHlwZTMge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICAxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZTMge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICAxJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFucGFyZW50O1xuICAgIH1cbiAgfVxuXG5cbi5oZWFkZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG59XG5cbi5vcHRpb25ze1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcblxufSJdfQ== */"

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

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

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
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n        <div class=\"carousel-caption text-right\">\n            <h1>Coding Made Simple</h1>\n            <p>Join hundreds of other learners on Code Space</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n      <img class=\"center-fit\" src=\"./assets/img/labWork.jpeg\">\n    </div>\n    <div class=\"carousel-item\">\n        <div class=\"carousel-caption text-left\">\n            <h1>Learn Python</h1>\n            <p>Click below to learn the most used coding language</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n        <img class=\"center-fit\" src=\"./assets/img/labWork2.jpeg\">\n      </div>\n    <div class=\"carousel-item\">\n        <div class=\"carousel-caption text-right\">\n            <h1>Coding Made Simple</h1>\n            <p>Join hundreds of other learners on Code Space</p>\n            <p><button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Get started today</span></button>\n        </div>\n      <img class=\"center-fit\" src=\"./assets/img/labWork3.jpeg\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>     \n\n"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-fit {\n  max-width: 100%;\n  max-height: 100vh;\n  margin: auto;\n  display: block; }\n\n/* Carousel base class */\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 40rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: inline-block;\n  /* change the default display type to inline-block */\n  overflow: hidden;\n  /* hide the overflow */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9ob21lL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsYUFBWTtFQUNaLGVBQWMsRUFDakI7O0FBRUQseUJBQXlCOztBQUN6QjtFQUNJLG9CQUFtQixFQUVwQjs7QUFDRCxrRUFBa0U7O0FBQ2xFO0VBQ0UsYUFBWSxFQUNiOztBQUVELDJEQUEyRDs7QUFDM0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxnQkFBZTtFQUNmLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFBRSxxREFBcUQ7RUFDNUUsaUJBQWdCO0VBQU8sdUJBQXVCLEVBQy9DIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItZml0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4uY2Fyb3VzZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgXG4gIH1cbiAgLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBib3R0b206IDNyZW07XG4gIH1cbiAgXG4gIC8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXG4gIC5jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDQwcmVtO1xuICB9XG4gIC5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogY2hhbmdlIHRoZSBkZWZhdWx0IGRpc3BsYXkgdHlwZSB0byBpbmxpbmUtYmxvY2sgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgIC8qIGhpZGUgdGhlIG92ZXJmbG93ICovXG4gIH1cbiAgIl19 */"

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

module.exports = "<!-- CAROUSEL -->\n<app-carousel></app-carousel>\n<!-- ABOUT -->\n<div class=\"container main\">\n    <hr>\n    <p class=\"text-center text-header\"> Key features of <span class=\"purple\"> Code Space </span> </p>\n    <div class=\"row\">\n        <div class=\"col-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Practise Smarter</h5>\n                    <p class=\"card-text\"> Puts coding into broader scenarios. Allows you to learn with a more applied approach</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Peer Coding</h5>\n                    <p class=\"card-text\">Code Space allows learners the ability to code simultaneously to solve a problem</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-4 d-flex marketing\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Chat to peers</h5>\n                    <p class=\"card-text\">Stuck on a problem? Simply message other learners on the forum to get their help on solving a problem </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr class=\"featurette-divider\">\n</div>\n\n<!-- FEATURETTES -->\n<section class = \"features\">\n    <div class = \"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-6 col-lg-5 offset-lg-1 order-md-2\">\n                <div class=\"img-effect img-effect-solid mb-5 mb-md-0\">\n                    <img class=\"img-fluid\" src=\"/assets/img/cs_60.jpeg\">\n                </div>\n            </div>\n        <div class=\"col-md-6 col-lg-4 offset-lg-1 order-md-1\">\n                <h2 class=\"featurette-heading\">Learning to Code has never been so simple</h2>\n                <div class = \"text-left feature-text\">\n                    Code Space's online tutorials easily allow students of any ability to learn coding. Get started coding today! \n                </div>\n                <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=\"openModal()\"><span>Sign Up</span></button>\n            </div>\n        </div>\n\n    </div>\n</section>\n<!-- /REVIEW -->\n<section class = \"gradient text-white space-lg\">\n    <div class = \"container review\">\n        <div class=\"row justify-content-center\">\n                <div class=\"col-md- media\">\n                    <img class=\"avatar\" src=\"/assets/img/cs_15.jpeg\">\n                </div>\n                <div class=\"col-md-8 media-text\">\n                    <h2 class=\"review-heading\">“Coding is such a vital skill today and Code Space is a great way to start learning”</h2>\n                    <span> Emma, Warwick University</span>\n                </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-fit {\n  max-width: 100%;\n  max-height: 100vh;\n  margin: auto;\n  display: block; }\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 40rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: inline-block;\n  /* change the default display type to inline-block */\n  overflow: hidden;\n  /* hide the overflow */ }\n\n.main {\n  margin-top: 7.0625rem;\n  margin-bottom: 3.0625rem; }\n\n.text-header {\n  font-size: 30px;\n  padding-bottom: 2.0625rem;\n  padding-top: 3.0625rem; }\n\n.purple {\n  color: #5648ff; }\n\n/* Marketing\n------------------------- */\n\n.marketing {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.text {\n  font-size: 20px; }\n\n.about {\n  margin-top: 9.0625rem;\n  margin-bottom: 9.0625rem; }\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n\n.featurette-heading {\n  font-weight: 500;\n  font-family: Objective,sans-serif;\n  line-height: 1.35;\n  font-size: 35px;\n  letter-spacing: -.05rem;\n  margin-bottom: 1.5rem !important; }\n\n.features {\n  margin-top: 7.0625rem;\n  margin-bottom: 7.0625rem; }\n\n.feature-text {\n  font-size: 17px;\n  font-weight: 400;\n  padding-bottom: 20px;\n  font-family: Objective,sans-serif;\n  color: #828a91 !important;\n  line-height: 1.75; }\n\n.img-effect-solid:before {\n  position: absolute;\n  top: 35%;\n  right: 0;\n  bottom: 10%;\n  left: 0;\n  content: \"\";\n  background-color: #5648ff; }\n\n.img-effect, .img-effect > img {\n  position: relative; }\n\n.img-effect > img {\n  box-shadow: 0 25px 100px -5px rgba(0, 0, 0, 0.15);\n  z-index: 1; }\n\n.img-effect-solid {\n  padding-left: 20%;\n  padding-right: 10%; }\n\n.img-effect {\n  position: relative; }\n\n/* Review\n------------------------- */\n\n.review {\n  color: white; }\n\n/* Thin out the marketing headings */\n\n.review-heading {\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: -.05rem;\n  padding-bottom: 15px;\n  font-family: Objective,sans-serif; }\n\n.gradient {\n  background-image: linear-gradient(135deg, #5648ff 0%, #21c87a 100%);\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  padding: 4.5rem 0;\n  position: relative; }\n\n.media {\n  margin-right: 1.5rem;\n  padding: 0; }\n\n.avatar {\n  width: 7.5rem;\n  height: 7.5rem;\n  border-radius: 50%; }\n\n.media-body {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osZUFBYyxFQUNqQjs7QUFFRDtFQUNBLG9CQUFtQixFQUVsQjs7QUFDRCxrRUFBa0U7O0FBQ2xFO0VBQ0EsYUFBWSxFQUNYOztBQUVELDJEQUEyRDs7QUFDM0Q7RUFDQSxjQUFhLEVBQ1o7O0FBQ0Q7RUFDQSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxnQkFBZTtFQUNmLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFBRSxxREFBcUQ7RUFDNUUsaUJBQWdCO0VBQU8sdUJBQXVCLEVBQzdDOztBQUdEO0VBQ0ksc0JBQXFCO0VBQ3JCLHlCQUF3QixFQUMzQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHVCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7NEJBQzRCOztBQUM1QjtFQUNJLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQix5QkFBd0IsRUFDM0I7O0FBR0Q7NEJBQzRCOztBQUM1QjtFQUNJLGVBQWM7RUFBRSx1Q0FBdUMsRUFDeEQ7O0FBRUgscUNBQXFDOztBQUNyQztFQUNJLGlCQUFnQjtFQUNoQixrQ0FBaUM7RUFDakMsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGlDQUErQixFQUNsQzs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQix5QkFBd0IsRUFDM0I7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixxQkFBb0I7RUFDcEIsa0NBQWlDO0VBQ2pDLDBCQUF3QjtFQUN4QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFNBQVE7RUFDUixZQUFXO0VBQ1gsUUFBTztFQUNQLFlBQVc7RUFDWCwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrREFBNEM7RUFDNUMsV0FBVSxFQUNiOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFHRDs0QkFDNEI7O0FBQzVCO0VBQ0ksYUFBWSxFQUNmOztBQUVELHFDQUFxQzs7QUFDckM7RUFDSSxpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLHdCQUF1QjtFQUN2QixxQkFBb0I7RUFDcEIsa0NBQWlDLEVBRXBDOztBQUNEO0VBQ0ksb0VBQW1FO0VBQ25FLCtCQUE4QjtFQUM5QiwrQkFBOEI7RUFDOUIseUJBQXdCO0VBQ3hCLCtCQUE4QjtFQUM5QiwyQkFBMEI7RUFDMUIseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsbUJBQWtCLEVBRXJCOztBQUVEO0VBQ0kscUJBQW9CO0VBQ3BCLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGNBQVk7RUFDWixlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1maXQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJvdXNlbCB7XG5tYXJnaW4tYm90dG9tOiA0cmVtO1xuXG59XG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbmJvdHRvbTogM3JlbTtcbn1cblxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbi5jYXJvdXNlbC1pdGVtIHtcbmhlaWdodDogNDByZW07XG59XG4uY2Fyb3VzZWwtaXRlbSA+IGltZyB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5sZWZ0OiAwO1xubWluLXdpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbm9iamVjdC1maXQ6IGNvdmVyO1xuZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiBjaGFuZ2UgdGhlIGRlZmF1bHQgZGlzcGxheSB0eXBlIHRvIGlubGluZS1ibG9jayAqL1xub3ZlcmZsb3c6IGhpZGRlbjsgICAgICAvKiBoaWRlIHRoZSBvdmVyZmxvdyAqL1xufVxuICAgICAgXG5cbi5tYWlueyBcbiAgICBtYXJnaW4tdG9wOiA3LjA2MjVyZW07IFxuICAgIG1hcmdpbi1ib3R0b206IDMuMDYyNXJlbTsgXG59XG5cbi50ZXh0LWhlYWRlcntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206ICAyLjA2MjVyZW07XG4gICAgcGFkZGluZy10b3A6ICAzLjA2MjVyZW07XG59XG5cbi5wdXJwbGV7XG4gICAgY29sb3I6ICM1NjQ4ZmY7XG59XG4vKiBNYXJrZXRpbmdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5tYXJrZXRpbmd7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWJvdXR7XG4gICAgbWFyZ2luLXRvcDogOS4wNjI1cmVtOyBcbiAgICBtYXJnaW4tYm90dG9tOiA5LjA2MjVyZW07IFxufVxuXG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXG4gIH1cbiAgXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBPYmplY3RpdmUsc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtIWltcG9ydGFudDtcbn1cblxuLmZlYXR1cmVze1xuICAgIG1hcmdpbi10b3A6IDcuMDYyNXJlbTsgXG4gICAgbWFyZ2luLWJvdHRvbTogNy4wNjI1cmVtOyBcbn1cblxuLmZlYXR1cmUtdGV4dHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogT2JqZWN0aXZlLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM4MjhhOTEhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuXG4uaW1nLWVmZmVjdC1zb2xpZDpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY0OGZmO1xufVxuXG4uaW1nLWVmZmVjdCwgLmltZy1lZmZlY3Q+aW1ne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZy1lZmZlY3Q+aW1ne1xuICAgIGJveC1zaGFkb3c6MCAyNXB4IDEwMHB4IC01cHggcmdiYSgwLDAsMCwuMTUpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbWctZWZmZWN0LXNvbGlke1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLmltZy1lZmZlY3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qIFJldmlld1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnJldmlldyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4ucmV2aWV3LWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IE9iamVjdGl2ZSxzYW5zLXNlcmlmO1xuXG59XG4uZ3JhZGllbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzU2NDhmZiAwJSwgIzIxYzg3YSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgcGFkZGluZzogNC41cmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG4gIFxuLm1lZGlhe1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5hdmF0YXJ7XG4gICAgd2lkdGg6Ny41cmVtO1xuICAgIGhlaWdodDogNy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1lZGlhLWJvZHl7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4iXX0= */"

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
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
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

module.exports = "<div class=\"#login-modal\" id=\"login-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Welcome back</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">\n                      <span class=\"glyphicon glyphicon-user\"></span> \n                    </div>\n                    <input type=\"text\" class=\"form-control text-center\" id=\"user\" placeholder=\"Username\">\n                  </div>     \n              </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control text-center\" id=\"password\" placeholder=\"Password\">\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"close\" click=\"close()\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\" id=\"signUp\" click=\"logIn()\">Log In</button>\n            </div>\n          </form>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9ob21lL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNJLG1CQUFrQixFQUNyQjtBQUVELGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IscUJBQW9CLEVBQ3JCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQTBCLFVBQVUsRUFBRztBQUN2QztFQUEwQixXQUFVLEVBQUc7QUFFdkMsa0JBQWtCO0FBQ2xCO0VBQXFCLG1CQUFtQixFQUFJIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLmlubmVyLWFkZG9uIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uICB7IGxlZnQ6ICAwcHg7fVxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24geyByaWdodDogMHB4O31cblxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCAgeyBwYWRkaW5nLWxlZnQ6ICAzMHB4OyB9XG4iXX0= */"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.close = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    LoginComponent.prototype.logIn = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-modal',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/home/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/home/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"#signup-modal\" id=\"signup-modal\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Sign Up and Start Learning!</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">\n                      <span class=\"glyphicon glyphicon-user\"></span> \n                    </div>\n                    <input type=\"text\" class=\"form-control text-center\" id=\"user\" placeholder=\"Username\">\n                  </div>     \n              </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control text-center\" id=\"password\" placeholder=\"Password\">\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" id=\"close\" click=\"close()\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\" id=\"signUp\" click=\"signUp()\">Sign Up</button>\n            </div>\n          </form>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* enable absolute positioning */\n.inner-addon {\n  position: relative; }\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px; }\n.right-addon .glyphicon {\n  right: 0px; }\n/* add padding  */\n.left-addon input {\n  padding-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbGl2aWFqb2huc29uL0RvY3VtZW50cy91bml2ZXJzaXR5L3RoaXJkX3llYXIvcmVwb3MvY29kZS1zY2hvb2wvc3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0VBQ0ksbUJBQWtCLEVBQ3JCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixxQkFBb0IsRUFDckI7QUFFRCxnQkFBZ0I7QUFDaEI7RUFBMEIsVUFBVSxFQUFHO0FBQ3ZDO0VBQTBCLFdBQVUsRUFBRztBQUV2QyxrQkFBa0I7QUFDbEI7RUFBcUIsbUJBQW1CLEVBQUkiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmcgKi9cbi5pbm5lci1hZGRvbiB7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG5cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDBweDt9XG5cbi8qIGFkZCBwYWRkaW5nICAqL1xuLmxlZnQtYWRkb24gaW5wdXQgIHsgcGFkZGluZy1sZWZ0OiAgMzBweDsgfVxuIl19 */"

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
    function SignupComponent(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
        this.user = {
            id: "",
            password: "",
        };
    }
    SignupComponent.prototype.close = function () {
        this.modalRef.hide();
        this.modalRef = null;
    };
    SignupComponent.prototype.signUp = function (id) {
        var _this = this;
        this.userService.addUser(id).subscribe(function (user) { _this.user = user; }, function (err) { return console.error(err); }, function () { return console.log('added user'); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-modal',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/home/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/app/services/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'dashboard';
    }
    /** GET hero by id once logging in */
    UserService.prototype.getUser = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.http.get(url);
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.usersUrl, _user__WEBPACK_IMPORTED_MODULE_1__["User"], httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return console.log("added user w/ id=" + user.id); }));
    };
    /** DELETE: delete the hero from the server */
    UserService.prototype.deleteUser = function (user) {
        var id = typeof user === 'string' ? user : user.id;
        var url = this.usersUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted user id=" + id); }));
    };
    /** PUT: update the user on the server */
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.usersUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated user id=" + user.id); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/user.ts":
/*!**********************************!*\
  !*** ./src/app/services/user.ts ***!
  \**********************************/
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

module.exports = __webpack_require__(/*! /Users/oliviajohnson/Documents/university/third_year/repos/code-school/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
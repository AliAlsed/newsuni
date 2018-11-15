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

/***/ "./src/app/add-news/add-news.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-news/add-news.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\r\n\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\nform{\r\n    padding: 35px;\r\n}\r\n\r\n.inputfile + label {\r\n    font-size: 1.25em;\r\n    font-weight: 700;\r\n    color: white;\r\n    background-color: rgb(100, 149, 237);\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n    background-color: rgb(51, 96, 179);\r\n}\r\n\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/add-news/add-news.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-news/add-news.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-header\">\n  <div id=\"breadcrumb\">  Add news </div>\n</div>\n<mat-card style=\"margin:50px\">\n    <mat-card-content> \n<form style=\"text-align: center\" #f=\"ngForm\" (ngSubmit)=\"save(f)\">\n\n    <div class=\"example-container\">\n        <mat-form-field>\n          <input matInput name=\"title\" ngModel placeholder=\"news Title\" style=\"text-align: right\" \n          required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput name=\"shortDesc\" ngModel placeholder=\"short Description\" style=\"text-align: right\" required>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput name=\"upload_at\" ngModel [matDatepicker]=\"picker\" placeholder=\"upload-at\" required>\n            <mat-datepicker-toggle matSuffix  [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field>\n          <textarea matInput name=\"describtion\" ngModel placeholder=\"Describtion\" style=\"text-align: right\" required></textarea>\n        </mat-form-field>\n\n      </div>\n  <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"uploadImage($event)\">\n  <label for=\"file\">upload news image</label><br>\n  <button type=\"submit\" [disabled]=\"!f.valid\" mat-button color=\"primary\" style=\"align-self: flex-end\"> Save </button>\n\n\n</form>\n</mat-card-content> \n\n</mat-card>"

/***/ }),

/***/ "./src/app/add-news/add-news.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-news/add-news.component.ts ***!
  \************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var AddNewsComponent = /** @class */ (function () {
    function AddNewsComponent(storage, _NewsService) {
        this.storage = storage;
        this._NewsService = _NewsService;
        this.news = {
            title: null,
            shortDesc: null,
            Description: null,
            date: null,
            image: null
        };
    }
    AddNewsComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    };
    AddNewsComponent.prototype.save = function (form) {
        var _this = this;
        console.log(form.value.describtion);
        console.log(form.value.shortDesc);
        console.log(form.value.title);
        console.log(this.image);
        if (this.image) {
            this._NewsService.createnews(form.value.title, form.value.shortDesc, form.value.describtion, this.date, this.image).then(function (res) {
                alert('Add Seccessfully');
                _this.image = '';
            });
        }
        else {
            alert('upload failed please refresh your browser and try again and not missing any record');
        }
    };
    AddNewsComponent.prototype.uploadImage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, path, task, ref;
            return __generator(this, function (_a) {
                file = event.target.files[0];
                path = "posts/" + file.name;
                if (file.type.split('/')[0] !== 'image') {
                    return [2 /*return*/, alert('only image files')];
                }
                else {
                    task = this.storage.upload(path, file).then(function (res) {
                        console.log(res);
                    });
                    ref = this.storage.ref(path);
                    this.downloadURL = ref.getDownloadURL();
                    console.log('Image Uploaded!');
                    this.downloadURL.subscribe(function (url) { return (_this.image = url); });
                }
                return [2 /*return*/];
            });
        });
    };
    AddNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-news',
            template: __webpack_require__(/*! ./add-news.component.html */ "./src/app/add-news/add-news.component.html"),
            styles: [__webpack_require__(/*! ./add-news.component.css */ "./src/app/add-news/add-news.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"], _news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], AddNewsComponent);
    return AddNewsComponent;
}());



/***/ }),

/***/ "./src/app/all-news/all-news.component.css":
/*!*************************************************!*\
  !*** ./src/app/all-news/all-news.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-news/all-news.component.html":
/*!**************************************************!*\
  !*** ./src/app/all-news/all-news.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-header\">\n  <div id=\"breadcrumb\">  All news </div>\n</div>\n<div   style=\"margin:50px\">\n    <table class=\"table table-striped\">\n        <thead class=\"thead\">\n          <tr>\n            <th style=\"margin-right:245px;padding:5px\"><h3>title</h3></th>\n            <th scope=\"col\"><h3>short description</h3> </th>\n            <th scope=\"col\"><h3> description </h3></th>\n            <th scope=\"col\"><h3>Action</h3></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of Data\">\n            <td>{{item.title}}</td>\n            <td>{{item.shortdesc}}</td>\n            <td>{{item.Description}}</td>\n            <td> <button mat-button color=\"accent\" value=\"delete\" (click)=\"del(item.id)\"> delete </button> &nbsp;&nbsp; <button mat-button color=\"primary\" value=\"update\" (click)=\"up(item)\"> update </button></td>\n          </tr>\n        </tbody>\n      </table>     \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/all-news/all-news.component.ts":
/*!************************************************!*\
  !*** ./src/app/all-news/all-news.component.ts ***!
  \************************************************/
/*! exports provided: AllNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllNewsComponent", function() { return AllNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllNewsComponent = /** @class */ (function () {
    function AllNewsComponent(firestoreService, router) {
        this.firestoreService = firestoreService;
        this.router = router;
    }
    AllNewsComponent.prototype.ngOnInit = function () {
        this.newsList = this.firestoreService.getNews().valueChanges();
        console.log(this.newsList);
    };
    AllNewsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.newsList.subscribe(function (data) {
            console.log(data);
            _this.Data = data;
        });
    };
    AllNewsComponent.prototype.del = function (item) {
        this.firestoreService.deleteNews(item).then(function () {
            alert('deleted successfully');
        });
    };
    AllNewsComponent.prototype.up = function (item) {
        this.router.navigate(['update-news', item]);
        console.log(item);
    };
    AllNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-news',
            template: __webpack_require__(/*! ./all-news.component.html */ "./src/app/all-news/all-news.component.html"),
            styles: [__webpack_require__(/*! ./all-news.component.css */ "./src/app/all-news/all-news.component.css")]
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllNewsComponent);
    return AllNewsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-part-->\n<app-sidebar></app-sidebar>\n<!--sidebar-menu-->\n\n<!--main-container-part-->\n<div id=\"content\">\n  <!--breadcrumbs-->\n\n  <router-outlet></router-outlet>\n\n</div>\n\n\n\n<!--end-Footer-part-->\n<app-footer></app-footer>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AdminPanel';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.firebase.ts":
/*!*********************************!*\
  !*** ./src/app/app.firebase.ts ***!
  \*********************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyA1s-Xe95HYY1fx8zOBSAnvpFA7OFElFtM",
    authDomain: "httplearn.firebaseapp.com",
    databaseURL: "https://httplearn.firebaseio.com",
    projectId: "httplearn",
    storageBucket: "httplearn.appspot.com",
    messagingSenderId: "161541075301"
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-news/add-news.component */ "./src/app/add-news/add-news.component.ts");
/* harmony import */ var _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-news/all-news.component */ "./src/app/all-news/all-news.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _app_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.firebase */ "./src/app/app.firebase.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./news.service */ "./src/app/news.service.ts");
/* harmony import */ var _scrollable_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scrollable.directive */ "./src/app/scrollable.directive.ts");
/* harmony import */ var _update_news_update_news_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./update-news/update-news.component */ "./src/app/update-news/update-news.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// tslint:disable-next-line:import-spacing
















/*
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];


*/
var routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
    {
        path: 'add-news',
        component: _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
    },
    {
        path: 'all-news',
        component: _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_6__["AllNewsComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
    },
    {
        path: 'update-news',
        component: _update_news_update_news_component__WEBPACK_IMPORTED_MODULE_20__["UpdateNewsComponent"],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsComponent"],
                _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_6__["AllNewsComponent"],
                _scrollable_directive__WEBPACK_IMPORTED_MODULE_19__["ScrollableDirective"],
                _update_news_update_news_component__WEBPACK_IMPORTED_MODULE_20__["UpdateNewsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_app_firebase__WEBPACK_IMPORTED_MODULE_14__["firebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"]
            ],
            providers: [_news_service__WEBPACK_IMPORTED_MODULE_18__["NewsService"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_23__["APP_BASE_HREF"], useValue: '/' }],
            // tslint:disable-next-line:no-trailing-whitespace
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
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
    function AuthGuard(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
        this.isloggedin = false;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        var authObserver = this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.router.navigate(['login']);
                _this.isloggedin = false;
                authObserver.unsubscribe();
            }
            else {
                _this.isloggedin = true;
                authObserver.unsubscribe();
            }
        });
        return this.isloggedin;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (loggedin) {
                if (loggedin) {
                    resolve(loggedin);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row-fluid\">\n    <div id=\"footer\" class=\"span12\"> 2013 &copy; Matrix Admin. Brought to you by <a href=\"http://themedesigner.in\">Themedesigner.in</a>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\r\n\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\nform{\r\n    padding: 35px;\r\n}\r\n\r\n.inputfile + label {\r\n    font-size: 1.25em;\r\n    font-weight: 700;\r\n    color: white;\r\n    background-color: rgb(100, 149, 237);\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n    background-color: rgb(51, 96, 179);\r\n}\r\n\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-header\">\n    <div id=\"breadcrumb\">  Login page </div>\n  </div>\n<mat-card style=\"margin:50px\">\n    <mat-card-content> \n<form style=\"text-align: center\" #f=\"ngForm\" (ngSubmit)=\"signIn(f)\">\n    <div class=\"example-container\">\n        <mat-form-field>\n          <input matInput type=\"email\" name=\"email\" ngModel placeholder=\"Email\"\n          email\n          required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput name=\"password\" type=\"password\" ngModel placeholder=\"Password\"  required>\n          </mat-form-field>\n      </div>\n  <button type=\"submit\" [disabled]=\"!f.valid\" mat-button color=\"primary\" style=\"align-self: flex-end\"> Save </button>\n\n\n</form>\n</mat-card-content> \n\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(_NewsService, router) {
        this._NewsService = _NewsService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function (f) {
        var _this = this;
        console.log('' + f.value.email);
        this._NewsService.login(f.value.email, f.value.password).then(function () {
            _this.router.navigate(['add-news']);
        }, function (err) {
            alert(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(firestore) {
        this.firestore = firestore;
    }
    NewsService.prototype.createnews = function (title, shortdesc, Description, date, image) {
        var id = this.firestore.createId();
        return this.firestore.doc("newsList/" + id).set({
            id: id,
            title: title,
            shortdesc: shortdesc,
            Description: Description,
            date: date,
            image: image,
        });
    };
    NewsService.prototype.updateNews = function (id, title, shortdesc, Description, date, image) {
        return this.firestore.doc("newsList/" + id).set({
            id: id,
            title: title,
            shortdesc: shortdesc,
            Description: Description,
            date: date,
            image: image,
        });
    };
    NewsService.prototype.getNews = function () {
        return this.firestore.collection('newsList');
    };
    NewsService.prototype.deleteNews = function (newsid) {
        return this.firestore.doc("newsList/" + newsid).delete();
    };
    NewsService.prototype.login = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/scrollable.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/scrollable.directive.ts ***!
  \*****************************************/
/*! exports provided: ScrollableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
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

var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(el) {
        this.el = el;
        this.scrollPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollableDirective.prototype.onScroll = function (event) {
        try {
            var top_1 = event.target.scrollTop;
            var height = this.el.nativeElement.scrollHeight;
            var offset = this.el.nativeElement.offsetHeight;
            // emit bottom event
            if (top_1 > height - offset - 1) {
                this.scrollPosition.emit('bottom');
            }
            // emit top event
            if (top_1 === 0) {
                this.scrollPosition.emit('top');
            }
        }
        catch (err) { }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollableDirective.prototype, "scrollPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollableDirective.prototype, "onScroll", null);
    ScrollableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrollable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollableDirective);
    return ScrollableDirective;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n<h1 style=\"color:white\"> The Bridge </h1>\n</div>\n  <!--close-Header-part-->\n  \n  \n  <!--top-Header-menu-->\n  <div id=\"search\" class=\"navbar navbar-inverse\">\n    <ul class=\"nav\">\n      <li class=\"\" (click)=\"logout()\"><a title=\"\" href=\"login.html\"><i class=\"icon icon-share-alt\"></i> <span class=\"text\" >Logout</span></a></li>\n    </ul>\n  </div>\n  <!--close-top-Header-menu-->\n  <!--start-top-serch-->\n  \n  <!--close-top-serch-->\n  <!--sidebar-menu-->\n  <div id=\"sidebar\"><a routerLink=\"\" class=\"visible-phone\"><i class=\"icon icon-home\"></i> Dashboard</a>\n    <ul>\n      <li class=\"active\"><a a routerLink=\"\"><i class=\"icon icon-home\"></i> <span>Dashboard</span></a> </li>\n      <li> <a routerLink=\"/add-news\"><i class=\"icon icon-pencil\"></i> <span>Add News</span></a> </li>\n      <li> <a routerLink=\"/all-news\"><i class=\"icon icon-inbox\"></i> <span>All News</span></a> </li>\n      <li><a routerLink=\"/\"><i class=\"icon icon-th\"></i> <span>Notification</span></a></li> \n    </ul>\n  </div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function SidebarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.router.navigate(['login']);
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/update-news/update-news.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-news/update-news.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\r\n\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\nform{\r\n    padding: 35px;\r\n}\r\n\r\n.inputfile + label {\r\n    font-size: 1.25em;\r\n    font-weight: 700;\r\n    color: white;\r\n    background-color: rgb(100, 149, 237);\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n    background-color: rgb(51, 96, 179);\r\n}\r\n\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/update-news/update-news.component.html":
/*!********************************************************!*\
  !*** ./src/app/update-news/update-news.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-header\">\n  <div id=\"breadcrumb\">  Update news </div>\n</div>\n<mat-card style=\"margin:50px\">\n  <mat-card-content>\n    <div class=\"example-container\" style=\"text-align: center\">\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"title\"   placeholder=\"news Title\" style=\"text-align: right\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput   [(ngModel)]=\"shortdesc\" placeholder=\"short Description\" style=\"text-align: right\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput  [(ngModel)]=\"Description\" placeholder=\"Describtion\" style=\"text-align: right\" required></textarea>\n      </mat-form-field>\n    </div>\n    <div style=\"text-align: center\">\n    <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"uploadImage($event)\">\n    <label for=\"file\">upload news image</label><br>\n    <button type=\"submit\" [disabled]=\"!title || !shortdesc || !Description\" mat-button color=\"primary\" style=\"align-self: flex-end\" (click)=\"save()\"> Update </button>\n  </div>\n  </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/update-news/update-news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-news/update-news.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateNewsComponent", function() { return UpdateNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateNewsComponent = /** @class */ (function () {
    function UpdateNewsComponent(router, storage, _NewsService, route) {
        this.router = router;
        this.storage = storage;
        this._NewsService = _NewsService;
        this.route = route;
        this.data = {
            title: null,
            shortdesc: null,
            Description: null,
            image: null,
            id: ''
        };
    }
    UpdateNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        this.router.params.subscribe(function (data) {
            _this.title = data.title;
            _this.shortdesc = data.shortdesc;
            _this.Description = data.Description;
            _this.data.id = data.id;
            _this.image = data.image;
            console.log(_this.data);
        });
    };
    UpdateNewsComponent.prototype.ngAfterViewInit = function () {
    };
    UpdateNewsComponent.prototype.uploadImage = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var path = "posts/" + file.name;
        if (file.type.split('/')[0] !== 'image') {
            return alert('only image files');
        }
        else {
            var task = this.storage.upload(path, file).then(function (res) {
                console.log(res);
            });
            var ref = this.storage.ref(path);
            this.downloadURL = ref.getDownloadURL();
            console.log('Image Uploaded!');
            this.downloadURL.subscribe(function (url) { return (_this.image = url); });
        }
    };
    UpdateNewsComponent.prototype.save = function () {
        var _this = this;
        console.log(this.data.id);
        console.log(this.title);
        console.log(this.shortdesc);
        console.log(this.Description);
        console.log(this.image);
        if (this.image) {
            this._NewsService.updateNews(this.data.id, this.title, this.shortdesc, this.Description, this.date, this.image).then(function (res) {
                console.log(res);
                alert('updated successfully ');
                _this.route.navigate(['all-news']);
            });
        }
        else {
            alert('upload failed please refresh your browser and try again and not missing any record');
        }
    };
    UpdateNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-news',
            template: __webpack_require__(/*! ./update-news.component.html */ "./src/app/update-news/update-news.component.html"),
            styles: [__webpack_require__(/*! ./update-news.component.css */ "./src/app/update-news/update-news.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateNewsComponent);
    return UpdateNewsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AliPr\Desktop\the bridge\AdminPanel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-dashboard/product-dashboard.component */ "./src/app/components/product-dashboard/product-dashboard.component.ts");
/* harmony import */ var _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/teams-dashboard/teams-dashboard.component */ "./src/app/components/teams-dashboard/teams-dashboard.component.ts");
/* harmony import */ var _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/operations-dashboard/operations-dashboard.component */ "./src/app/components/operations-dashboard/operations-dashboard.component.ts");






var routes = [
    { path: 'proyectos', component: _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProductDashboardComponent"] },
    { path: 'equipos', component: _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TeamsDashboardComponent"] },
    { path: 'operaciones', component: _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["OperationsDashboardComponent"] },
    { path: '', redirectTo: '/proyectos', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.material.modules.ts":
/*!*****************************************!*\
  !*** ./src/app/app.material.modules.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");












var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.modules */ "./src/app/app.material.modules.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-dashboard/product-dashboard.component */ "./src/app/components/product-dashboard/product-dashboard.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/teams-dashboard/teams-dashboard.component */ "./src/app/components/teams-dashboard/teams-dashboard.component.ts");
/* harmony import */ var _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/operations-dashboard/operations-dashboard.component */ "./src/app/components/operations-dashboard/operations-dashboard.component.ts");





// Material

// Componentes





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["ProductDashboardComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["TeamsDashboardComponent"],
                _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["OperationsDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                // Material
                _app_material_modules__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/operations-dashboard/operations-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/operations-dashboard/operations-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n    margin: 10px;\r\n}\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYXRpb25zLWRhc2hib2FyZC9vcGVyYXRpb25zLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0VBRUU7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcGVyYXRpb25zLWRhc2hib2FyZC9vcGVyYXRpb25zLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/operations-dashboard/operations-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/operations-dashboard/operations-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n    <h3>Seleccione Proyecto: </h3>\r\n\r\n    <mat-form-field>\r\n      <mat-label>Proyecto</mat-label>\r\n      <mat-select>\r\n        <mat-option>ERP</mat-option>\r\n        <mat-option>CRM</mat-option>\r\n        <mat-option>BI</mat-option>\r\n\r\n      </mat-select>\r\n    </mat-form-field>\r\n  \r\n    <h3>Panel: </h3>\r\n\r\n    <div class=\"row\" style=\"justify-content:space-between\">\r\n      <div>Backlog</div>\r\n      <div>Analisis</div>\r\n      <div>En desarrollo</div>\r\n      <div>Terminado</div>\r\n    </div>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <div class=\"row\" style=\"justify-content:space-between\">\r\n        <div>\r\n          <mat-card class=\"example-card\">\r\n            <mat-card-header>\r\n              <mat-card-title>Ticket</mat-card-title>\r\n              <mat-card-subtitle>Descripcion corta</mat-card-subtitle>\r\n            </mat-card-header>\r\n            \r\n            <mat-card-content>\r\n              <p>\r\n                Mas detalles sobre el ticket\r\n              </p>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-button>Mas</button>              \r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/operations-dashboard/operations-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/operations-dashboard/operations-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperationsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsDashboardComponent", function() { return OperationsDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperationsDashboardComponent = /** @class */ (function () {
    function OperationsDashboardComponent() {
    }
    OperationsDashboardComponent.prototype.ngOnInit = function () {
    };
    OperationsDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operations-dashboard',
            template: __webpack_require__(/*! ./operations-dashboard.component.html */ "./src/app/components/operations-dashboard/operations-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./operations-dashboard.component.css */ "./src/app/components/operations-dashboard/operations-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperationsDashboardComponent);
    return OperationsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/product-dashboard/product-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/product-dashboard/product-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.description{\r\n    background: lightgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRhc2hib2FyZC9wcm9kdWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWRhc2hib2FyZC9wcm9kdWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/product-dashboard/product-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product-dashboard/product-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-grid-list cols=\"3\" rowHeight=\"3:1\" class=\"content\">\r\n  <mat-grid-tile>ERP</mat-grid-tile>\r\n  <mat-grid-tile>CRM</mat-grid-tile>\r\n  <mat-grid-tile>BI</mat-grid-tile>\r\n  <mat-grid-tile class=\"description\">PSA Spring ERP</mat-grid-tile>\r\n  <mat-grid-tile class=\"description\">PSA Spring CRM</mat-grid-tile>\r\n  <mat-grid-tile class=\"description\">PSA Business Analytics</mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product-dashboard/product-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product-dashboard/product-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDashboardComponent", function() { return ProductDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductDashboardComponent = /** @class */ (function () {
    function ProductDashboardComponent() {
    }
    ProductDashboardComponent.prototype.ngOnInit = function () {
    };
    ProductDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-dashboard',
            template: __webpack_require__(/*! ./product-dashboard.component.html */ "./src/app/components/product-dashboard/product-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./product-dashboard.component.css */ "./src/app/components/product-dashboard/product-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductDashboardComponent);
    return ProductDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/teams-dashboard/teams-dashboard.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/teams-dashboard/teams-dashboard.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtcy1kYXNoYm9hcmQvdGVhbXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW1zLWRhc2hib2FyZC90ZWFtcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/teams-dashboard/teams-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/teams-dashboard/teams-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n\r\n  <h3>Buscador: </h3>\r\n\r\n  <div class=\"row\" style=\"justify-content:flex-start\" >\r\n         \r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Persona\">\r\n        <mat-icon matSuffix>search</mat-icon>\r\n      </mat-form-field>\r\n      \r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n        \r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Rol Column -->\r\n          <ng-container matColumnDef=\"rol\">\r\n            <th mat-header-cell *matHeaderCellDef> Rol </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.rol}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Assignment Column -->\r\n          <ng-container matColumnDef=\"assignment\">\r\n            <th mat-header-cell *matHeaderCellDef> Assignment </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.assignment}} </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        \r\n  </div>\r\n  \r\n  \r\n  <h3>Equipos de desarrollo: </h3>\r\n\r\n  <div class=\"row\">\r\n    <div>ERP</div>\r\n    <div>CRM</div>\r\n    <div>BI</div>\r\n  </div>\r\n  <mat-divider></mat-divider>\r\n  <div class=\"row\">\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\r\n    </mat-list>\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\r\n    </mat-list>\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\r\n    </mat-list>\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/teams-dashboard/teams-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/teams-dashboard/teams-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeamsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsDashboardComponent", function() { return TeamsDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { id: 1, name: 'Juan Perez', rol: 'Team lead', assignment: 'BI' },
    { id: 2, name: 'Pablo Gonzalez', rol: 'Ssr. Dev.', assignment: 'CRM' },
    { id: 3, name: 'Gonzalo Fernandez', rol: 'Jr. Dev.', assignment: 'ERP' },
];
var TeamsDashboardComponent = /** @class */ (function () {
    function TeamsDashboardComponent() {
        this.displayedColumns = ['id', 'name', 'rol', 'assignment'];
        this.dataSource = ELEMENT_DATA;
    }
    TeamsDashboardComponent.prototype.ngOnInit = function () {
    };
    TeamsDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams-dashboard',
            template: __webpack_require__(/*! ./teams-dashboard.component.html */ "./src/app/components/teams-dashboard/teams-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./teams-dashboard.component.css */ "./src/app/components/teams-dashboard/teams-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamsDashboardComponent);
    return TeamsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n    background: lightpink;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer style=\"background:#dcdcdc\">\r\n\r\n    <div class=\"text-center\">\r\n        <strong>Footer</strong>\r\n    </div>\r\n\r\n    <div>\r\n        About: ...\r\n    </div>\r\n    <div>\r\n        Contact: ...\r\n    </div>\r\n\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row button,\r\n.button-row a {\r\n  /* margin-right: 8px; */\r\n  margin-left: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJvdyBidXR0b24sXHJcbi5idXR0b24tcm93IGEge1xyXG4gIC8qIG1hcmdpbi1yaWdodDogOHB4OyAqL1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span style=\"cursor:pointer\">PSA Integrated Managment System</span>\r\n\r\n  <div class=\"button-row\">\r\n    <button routerLink=\"/proyectos\" mat-stroked-button>Proyectos</button>\r\n    <button routerLink=\"/equipos\" mat-stroked-button>Equipos</button>\r\n    <button routerLink=\"/operaciones\" mat-stroked-button>Operaciones</button>\r\n    <button mat-stroked-button>Finanzas</button>\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<!--CONTENIDO PRINCIPAL-->\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!--FOOTER-->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Axel\Aninfo2019GrupoPar\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
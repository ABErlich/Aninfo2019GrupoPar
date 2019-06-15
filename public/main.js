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
/* harmony import */ var _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/dashboard/product-dashboard.component */ "./src/app/components/product/dashboard/product-dashboard.component.ts");
/* harmony import */ var _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/teams-dashboard/teams-dashboard.component */ "./src/app/components/teams-dashboard/teams-dashboard.component.ts");
/* harmony import */ var _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/operations-dashboard/operations-dashboard.component */ "./src/app/components/operations-dashboard/operations-dashboard.component.ts");
/* harmony import */ var _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-project/new-project.component */ "./src/app/components/new-project/new-project.component.ts");
/* harmony import */ var _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tasks/new/new-task.component */ "./src/app/components/tasks/new/new-task.component.ts");
/* harmony import */ var _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tasks/dashboard/project-tasks.component */ "./src/app/components/tasks/dashboard/project-tasks.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-dashboard/project-dashboard.component */ "./src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project-risks/project-risks-dashboard.component */ "./src/app/components/project-risks/project-risks-dashboard.component.ts");
/* harmony import */ var _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contracts/dashboard/contracts-dashboard.component */ "./src/app/components/contracts/dashboard/contracts-dashboard.component.ts");
/* harmony import */ var _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/soporte/soporte.component */ "./src/app/components/soporte/soporte.component.ts");
/* harmony import */ var _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/soporte-mis-tickets/soporte-mis-tickets.component */ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.ts");
/* harmony import */ var _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contracts/new/new-contract.component */ "./src/app/components/contracts/new/new-contract.component.ts");
/* harmony import */ var _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clients/dashboard/clients-dashboard.component */ "./src/app/components/clients/dashboard/clients-dashboard.component.ts");
/* harmony import */ var _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/new/new-client.component */ "./src/app/components/clients/new/new-client.component.ts");
/* harmony import */ var _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contracts/edit/edit-contract.component */ "./src/app/components/contracts/edit/edit-contract.component.ts");
/* harmony import */ var _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ticket-detalle/ticket-detalle.component */ "./src/app/components/ticket-detalle/ticket-detalle.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product/details/product-details.component */ "./src/app/components/product/details/product-details.component.ts");
/* harmony import */ var _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contracts/configuration/contracts-configuration.component */ "./src/app/components/contracts/configuration/contracts-configuration.component.ts");
/* harmony import */ var _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/soporte-nuevo-ticket/soporte-nuevo-ticket.component */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts");























var routes = [
    { path: 'proyectos', component: _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDashboardComponent"] },
    { path: 'equipos', component: _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TeamsDashboardComponent"] },
    { path: 'operaciones', component: _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["OperationsDashboardComponent"] },
    { path: 'productos', component: _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProductDashboardComponent"] },
    { path: 'detalle-producto', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailsComponent"] },
    { path: 'contratos', component: _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["ContractDashboardComponent"] },
    { path: 'nuevo-contrato', component: _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_15__["NewContractComponent"] },
    { path: 'editar-contrato', component: _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_18__["EditContractComponent"] },
    { path: 'configuracion-contrato', component: _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_21__["ContractConfigurationComponent"] },
    { path: 'nuevo-proyecto', component: _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__["NewProjectComponent"] },
    { path: 'proyecto/:id/tareas', component: _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_8__["ProjectTasksComponent"] },
    { path: 'proyecto/:id/detalle', component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDetailsComponent"] },
    { path: 'proyecto/:id/crear-tarea', component: _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"] },
    { path: 'riesgos', component: _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["ProjectRisksDashboardComponent"] },
    { path: 'soporte', component: _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_13__["SoporteComponent"] },
    { path: 'soporte/mistickets', component: _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_14__["SoporteMisTicketsComponent"] },
    { path: 'clientes', component: _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["ClientDashboardComponent"] },
    { path: 'nuevo-cliente', component: _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_17__["NewClientComponent"] },
    { path: 'ticketdetalle/:numeroTicket', component: _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_19__["TicketDetalleComponent"] },
    { path: 'soporte/nuevoticket', component: _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_22__["SoporteNuevoTicketComponent"] },
    { path: '', redirectTo: '/proyectos', pathMatch: 'full' },
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
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
















var modules = [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules,
            exports: modules
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_material_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.material.modules */ "./src/app/app.material.modules.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/dashboard/product-dashboard.component */ "./src/app/components/product/dashboard/product-dashboard.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/teams-dashboard/teams-dashboard.component */ "./src/app/components/teams-dashboard/teams-dashboard.component.ts");
/* harmony import */ var _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/operations-dashboard/operations-dashboard.component */ "./src/app/components/operations-dashboard/operations-dashboard.component.ts");
/* harmony import */ var _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-project/new-project.component */ "./src/app/components/new-project/new-project.component.ts");
/* harmony import */ var _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tasks/new/new-task.component */ "./src/app/components/tasks/new/new-task.component.ts");
/* harmony import */ var _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/tasks/dashboard/project-tasks.component */ "./src/app/components/tasks/dashboard/project-tasks.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project-risks/project-risks-dashboard.component */ "./src/app/components/project-risks/project-risks-dashboard.component.ts");
/* harmony import */ var _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project-dashboard/project-dashboard.component */ "./src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contracts/dashboard/contracts-dashboard.component */ "./src/app/components/contracts/dashboard/contracts-dashboard.component.ts");
/* harmony import */ var _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/soporte/soporte.component */ "./src/app/components/soporte/soporte.component.ts");
/* harmony import */ var _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/soporte-mis-tickets/soporte-mis-tickets.component */ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.ts");
/* harmony import */ var _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/contracts/new/new-contract.component */ "./src/app/components/contracts/new/new-contract.component.ts");
/* harmony import */ var _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/clients/dashboard/clients-dashboard.component */ "./src/app/components/clients/dashboard/clients-dashboard.component.ts");
/* harmony import */ var _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/clients/new/new-client.component */ "./src/app/components/clients/new/new-client.component.ts");
/* harmony import */ var _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/contracts/edit/edit-contract.component */ "./src/app/components/contracts/edit/edit-contract.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/product/details/product-details.component */ "./src/app/components/product/details/product-details.component.ts");
/* harmony import */ var _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/contracts/configuration/contracts-configuration.component */ "./src/app/components/contracts/configuration/contracts-configuration.component.ts");
/* harmony import */ var _services_example_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/ticket-detalle/ticket-detalle.component */ "./src/app/components/ticket-detalle/ticket-detalle.component.ts");
/* harmony import */ var _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/soporte-nuevo-ticket/soporte-nuevo-ticket.component */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts");

// Modulos







// Material



// Componentes




















// Servicios







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"],
                _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["ProductDashboardComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_28__["ProductDetailsComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["TeamsDashboardComponent"],
                _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OperationsDashboardComponent"],
                _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_15__["NewProjectComponent"],
                _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_17__["ProjectTasksComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_18__["ProjectDetailsComponent"],
                _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDashboardComponent"],
                _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["ContractDashboardComponent"],
                _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_24__["NewContractComponent"],
                _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_27__["EditContractComponent"],
                _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_22__["SoporteComponent"],
                _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_23__["SoporteMisTicketsComponent"],
                _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ClientDashboardComponent"],
                _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_26__["NewClientComponent"],
                _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_35__["TicketDetalleComponent"],
                _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_29__["ContractConfigurationComponent"],
                _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ProjectRisksDashboardComponent"],
                _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_16__["NewTaskComponent"],
                _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_36__["SoporteNuevoTicketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                // Material
                _app_material_modules__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
            ],
            providers: [
                _services_example_service__WEBPACK_IMPORTED_MODULE_30__["ExampleService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_31__["ProductService"],
                _services_contract_service__WEBPACK_IMPORTED_MODULE_32__["ContractService"],
                _services_ticket_service__WEBPACK_IMPORTED_MODULE_33__["TicketService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_34__["ClientService"],
                _config_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"]
            ],
            bootstrap: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/clients/dashboard/clients-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/clients/dashboard/clients-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2Rhc2hib2FyZC9jbGllbnRzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9kYXNoYm9hcmQvY2xpZW50cy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/clients/dashboard/clients-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/dashboard/clients-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/nuevo-cliente\" mat-raised-button color=\"primary\">Nuevo cliente</button>\n\n<mat-divider style=\"margin: 5px\"></mat-divider>\n\n<table mat-table [dataSource]=\"dataSource\" >\n\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef> Código </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"address\">\n      <th mat-header-cell *matHeaderCellDef> Dirección </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"phoneNumbers\">\n      <th mat-header-cell *matHeaderCellDef> Telefonos </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumbers}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Mail </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n  \n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/clients/dashboard/clients-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clients/dashboard/clients-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDashboardComponent", function() { return ClientDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");



var ClientDashboardComponent = /** @class */ (function () {
    function ClientDashboardComponent(clientService) {
        this.clientService = clientService;
        this.displayedColumns = ['code', 'name', 'address', 'phoneNumbers', 'email'];
        this.dataSource = null;
    }
    // Se ejecuta al crearse el component
    ClientDashboardComponent.prototype.ngOnInit = function () {
        var clients = this.clientService.getClients();
        this.dataSource = clients;
    };
    ClientDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients-dashboard',
            template: __webpack_require__(/*! ./clients-dashboard.component.html */ "./src/app/components/clients/dashboard/clients-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./clients-dashboard.component.css */ "./src/app/components/clients/dashboard/clients-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ClientDashboardComponent);
    return ClientDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/new/new-client.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/clients/new/new-client.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL25ldy9uZXctY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9uZXcvbmV3LWNsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiAgXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/clients/new/new-client.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/clients/new/new-client.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Nuevo Cliente:</h4>\n<div class=\"form\">\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.code\" matInput placeholder=\"Código\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.name\" matInput placeholder=\"Nombre\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.address\" matInput placeholder=\"Dirección\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"full-width\">\n        <input [(ngModel)]=\"client.phoneNumbers\" matInput placeholder=\"Telefonos\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <input [(ngModel)]=\"client.email\" matInput placeholder=\"EMail\">\n    </mat-form-field>\n</div>\n\n\n<button (click)=\"addClient()\" mat-raised-button color=\"primary\">Agregar</button>"

/***/ }),

/***/ "./src/app/components/clients/new/new-client.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/clients/new/new-client.component.ts ***!
  \****************************************************************/
/*! exports provided: NewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientComponent", function() { return NewClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var src_app_models_Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Client */ "./src/app/models/Client.ts");





var NewClientComponent = /** @class */ (function () {
    function NewClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.client = new src_app_models_Client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
    }
    // Se ejecuta al crearse el component
    NewClientComponent.prototype.ngOnInit = function () {
    };
    NewClientComponent.prototype.addClient = function () {
        this.clientService.addClient(this.client);
        this.router.navigate(['/clientes']);
    };
    NewClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-client',
            template: __webpack_require__(/*! ./new-client.component.html */ "./src/app/components/clients/new/new-client.component.html"),
            styles: [__webpack_require__(/*! ./new-client.component.css */ "./src/app/components/clients/new/new-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewClientComponent);
    return NewClientComponent;
}());



/***/ }),

/***/ "./src/app/components/contracts/configuration/contracts-configuration.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/contracts/configuration/contracts-configuration.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvY29uZmlndXJhdGlvbi9jb250cmFjdHMtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9jb25maWd1cmF0aW9uL2NvbnRyYWN0cy1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICBcbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/contracts/configuration/contracts-configuration.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/contracts/configuration/contracts-configuration.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Configuraciones:</h4>\n<div class=\"form\">\n    <mat-form-field class=\"full-width\">\n        <span matPrefix>Mostrar alerta &nbsp;</span>\n        \n        <input type=\"number\" [(ngModel)]=\"configuration.daysBeforeExpiration\" matInput placeholder=\"Dias\" [formControl]=\"expireFormControl\"> \n        <span matSuffix>antes del vencimiento del contrato</span>\n        <mat-error *ngIf=\"expireFormControl.hasError('min')\">\n            Por favor ingresar un tiempo en días válido (> 0)\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n            <span matPrefix>Mostrar alerta &nbsp;</span>\n            \n            <input type=\"number\" [(ngModel)]=\"configuration.hoursBeforeResponseLimit\" matInput placeholder=\"Horas\" [formControl]=\"responsetimeFormControl\">\n            <span matSuffix>antes del tiempo de respuesta limite</span>\n            <mat-error *ngIf=\"responsetimeFormControl.hasError('min')\">\n                Por favor ingresar un tiempo en horas válido (> 0)\n            </mat-error>\n        </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <span matPrefix>Mostrar alerta cuando se llega al &nbsp;</span>            \n        <input type=\"number\" [(ngModel)]=\"configuration.percentageOfTotalIncidents\" matInput placeholder=\"Porciento\" [formControl]=\"percentageFormControl\">\n        <span matSuffix>del limite de incidencias</span>\n        <mat-error *ngIf=\"percentageFormControl.hasError('min') || percentageFormControl.hasError('max')\">\n            Por favor ingresar un porcentaje válido (0 - 100)%\n        </mat-error>\n       \n    </mat-form-field>\n\n    \n\n</div>\n\n\n<button (click)=\"editConfiguration()\" mat-raised-button color=\"primary\">Modificar</button>"

/***/ }),

/***/ "./src/app/components/contracts/configuration/contracts-configuration.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/contracts/configuration/contracts-configuration.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ContractConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractConfigurationComponent", function() { return ContractConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ContractConfigurationComponent = /** @class */ (function () {
    function ContractConfigurationComponent(contractService, clientService, adapter, router) {
        this.contractService = contractService;
        this.clientService = clientService;
        this.adapter = adapter;
        this.router = router;
        this.configuration = null;
        this.percentageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(100),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0)
        ]);
        this.expireFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0)
        ]);
        this.responsetimeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0)
        ]);
    }
    ContractConfigurationComponent.prototype.ngOnInit = function () {
        this.configuration = this.contractService.getConfiguration();
    };
    ContractConfigurationComponent.prototype.editConfiguration = function () {
        if (this.percentageFormControl.valid && this.expireFormControl.valid && this.responsetimeFormControl.valid) {
            this.contractService.editConfiguration(this.configuration);
            this.router.navigate(['/contratos']);
        }
    };
    ContractConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-configuration',
            template: __webpack_require__(/*! ./contracts-configuration.component.html */ "./src/app/components/contracts/configuration/contracts-configuration.component.html"),
            styles: [__webpack_require__(/*! ./contracts-configuration.component.css */ "./src/app/components/contracts/configuration/contracts-configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContractConfigurationComponent);
    return ContractConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/contracts/dashboard/contracts-dashboard.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/contracts/dashboard/contracts-dashboard.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvZGFzaGJvYXJkL2NvbnRyYWN0cy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9kYXNoYm9hcmQvY29udHJhY3RzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/contracts/dashboard/contracts-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/contracts/dashboard/contracts-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button routerLink=\"/nuevo-contrato\" mat-raised-button color=\"primary\">Nuevo contrato</button>\n<button style=\"float: right\" routerLink=\"/configuracion-contrato\" mat-raised-button color=\"primary\">Configuración</button>\n\n<mat-divider style=\"margin: 5px\"></mat-divider>\n\n<table mat-table [dataSource]=\"dataSource\" >\n\n    <ng-container matColumnDef=\"client\">\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.client?.name}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef> Fecha Inicio </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.startDate?.toLocaleDateString()}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef> Fecha Fin </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate?.toLocaleDateString()}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"incidentLimit\">\n      <th mat-header-cell *matHeaderCellDef> Limite de incidentes </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.incidentLimit}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"responseTime\">\n      <th mat-header-cell *matHeaderCellDef> Tiempo de respuesta(hs) </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.responseTime}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"alert\">\n      <th mat-header-cell *matHeaderCellDef> Alerta </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <button *ngIf=\"element.showAlert\" matTooltip=\"{{element.alertMessages}}\" mat-button mat-icon-button>\n            <i class=\"material-icons\">\n              warning\n            </i>\n          </button>\n          \n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edicion\">\n      <th mat-header-cell *matHeaderCellDef> Editar </th>\n      <td mat-cell *matCellDef=\"let element\">\n          <button mat-button mat-icon-button (click)=\"editContract(element)\">\n            <i class=\"material-icons\">\n              edit\n            </i>\n          </button>\n          \n      </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  "

/***/ }),

/***/ "./src/app/components/contracts/dashboard/contracts-dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/contracts/dashboard/contracts-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContractDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDashboardComponent", function() { return ContractDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContractDashboardComponent = /** @class */ (function () {
    function ContractDashboardComponent(contractService, productService, router) {
        this.contractService = contractService;
        this.productService = productService;
        this.router = router;
        this.displayedColumns = ['client', 'startDate', 'endDate', 'incidentLimit', 'responseTime', 'alert', 'edicion'];
        this.dataSource = null;
    }
    // Se ejecuta al crearse el component
    ContractDashboardComponent.prototype.ngOnInit = function () {
        var contracts = this.contractService.getContracts();
        this.dataSource = contracts;
    };
    ContractDashboardComponent.prototype.editContract = function (contract) {
        this.router.navigate(['/editar-contrato'], { queryParams: { contractId: contract.id } });
    };
    ContractDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contracts-dashboard',
            template: __webpack_require__(/*! ./contracts-dashboard.component.html */ "./src/app/components/contracts/dashboard/contracts-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./contracts-dashboard.component.css */ "./src/app/components/contracts/dashboard/contracts-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContractDashboardComponent);
    return ContractDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/contracts/edit/edit-contract.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/contracts/edit/edit-contract.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvZWRpdC9lZGl0LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJhY3RzL2VkaXQvZWRpdC1jb250cmFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiAgXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/contracts/edit/edit-contract.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/contracts/edit/edit-contract.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Editar Contrato:</h4>\n<div class=\"form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Client</mat-label>\n      <mat-select [disabled]=\"true\" [(ngModel)]=\"contract.clientCode\">\n        <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\n          {{client.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input [disabled]=\"true\" matInput [matDatepicker]=\"pickerStart\" [(ngModel)]=\"contract.startDate\" placeholder=\"Fecha de incio\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerStart></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]=\"contract.endDate\" placeholder=\"Fecha de Finalización\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerEnd></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.incidentLimit\" matInput placeholder=\"Limite de incidentes\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.responseTime\" matInput placeholder=\"Tiempo de respuesta (hs)\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.description\" matInput placeholder=\"Descripción\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.penalty\" matInput placeholder=\"Penalidad\"></textarea>\n    </mat-form-field>\n</div>\n\n\n<button (click)=\"editContract()\" mat-raised-button color=\"primary\">Modificar</button>"

/***/ }),

/***/ "./src/app/components/contracts/edit/edit-contract.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/contracts/edit/edit-contract.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContractComponent", function() { return EditContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Contract */ "./src/app/models/Contract.ts");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");







var EditContractComponent = /** @class */ (function () {
    function EditContractComponent(contractService, clientService, adapter, router, route) {
        this.contractService = contractService;
        this.clientService = clientService;
        this.adapter = adapter;
        this.router = router;
        this.route = route;
        this.clients = [];
        this.contract = new src_app_models_Contract__WEBPACK_IMPORTED_MODULE_2__["Contract"]({});
    }
    // Se ejecuta al crearse el component
    EditContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        // formato de fecha
        this.adapter.setLocale('es');
        // Traigo los clientes disponibles
        this.clients = this.clientService.getClients();
        this.route.queryParams.subscribe(function (queryParams) {
            var contractId = _this.route.snapshot.queryParams["contractId"];
            _this.contract = _this.contractService.getById(contractId);
        });
    };
    EditContractComponent.prototype.editContract = function () {
        this.contractService.editContract(this.contract);
        this.router.navigate(['/contratos']);
    };
    EditContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-contract',
            template: __webpack_require__(/*! ./edit-contract.component.html */ "./src/app/components/contracts/edit/edit-contract.component.html"),
            styles: [__webpack_require__(/*! ./edit-contract.component.css */ "./src/app/components/contracts/edit/edit-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditContractComponent);
    return EditContractComponent;
}());



/***/ }),

/***/ "./src/app/components/contracts/new/new-contract.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/contracts/new/new-contract.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvbmV3L25ldy1jb250cmFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9uZXcvbmV3LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICBcbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/contracts/new/new-contract.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/contracts/new/new-contract.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Nuevo Contrato:</h4>\n<div class=\"form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Client</mat-label>\n      <mat-select [(ngModel)]=\"contract.clientCode\">\n        <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\n          {{client.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [matDatepicker]=\"pickerStart\" [(ngModel)]=\"contract.startDate\" placeholder=\"Fecha de incio\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerStart></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]=\"contract.endDate\" placeholder=\"Fecha de Finalización\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerEnd></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.incidentLimit\" matInput placeholder=\"Limite de incidentes\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.responseTime\" matInput placeholder=\"Tiempo de respuesta (hs)\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.description\" matInput placeholder=\"Descripción\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.penalty\" matInput placeholder=\"Penalidad\"></textarea>\n    </mat-form-field>\n</div>\n\n\n<button (click)=\"addContract()\" mat-raised-button color=\"primary\">Agregar</button>"

/***/ }),

/***/ "./src/app/components/contracts/new/new-contract.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/contracts/new/new-contract.component.ts ***!
  \********************************************************************/
/*! exports provided: NewContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContractComponent", function() { return NewContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Contract */ "./src/app/models/Contract.ts");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");







var NewContractComponent = /** @class */ (function () {
    function NewContractComponent(contractService, clientService, adapter, router) {
        this.contractService = contractService;
        this.clientService = clientService;
        this.adapter = adapter;
        this.router = router;
        this.clients = [];
        this.contract = new src_app_models_Contract__WEBPACK_IMPORTED_MODULE_2__["Contract"]({});
    }
    // Se ejecuta al crearse el component
    NewContractComponent.prototype.ngOnInit = function () {
        // formato de fecha
        this.adapter.setLocale('es');
        // Traigo los clientes disponibles
        this.clients = this.clientService.getClients();
    };
    NewContractComponent.prototype.addContract = function () {
        this.contractService.addContract(this.contract);
        this.router.navigate(['/contratos']);
    };
    NewContractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-contract',
            template: __webpack_require__(/*! ./new-contract.component.html */ "./src/app/components/contracts/new/new-contract.component.html"),
            styles: [__webpack_require__(/*! ./new-contract.component.css */ "./src/app/components/contracts/new/new-contract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NewContractComponent);
    return NewContractComponent;
}());



/***/ }),

/***/ "./src/app/components/new-project/new-project.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proyect-form-wrapper {\n    margin: 5px;\n    padding: 5px;\n}\n\n.proyect-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n     background-color: white;\n     padding:10px 20px;\n}\n\n.proyect-form-input {\n    width: 100%;\n}\n\n.alineado-derecha {\n    display: block;\n    margin: 0 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1wcm9qZWN0L25ldy1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJveWVjdC1mb3JtLXdyYXBwZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb3llY3QtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xufVxuXG4ucHJveWVjdC1mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaW5lYWRvLWRlcmVjaGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <br>\n  <h2>Nuevo Proyecto</h2>\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"submit()\" class=\"proyect-form\">\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput placeholder=\"Nombre\" [formControl]=\"projectForm.get('name')\" id=\"new-project-name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput class=\"proyect-form-input\" placeholder=\"Codigo\" [formControl]=\"projectForm.get('code')\" id=\"new-project-code\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput class=\"proyect-form-input\" placeholder=\"Lider de Proyecto\" [formControl]=\"projectForm.get('leader')\" id=\"new-project-leader\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Fecha Inicio\" [formControl]=\"projectForm.get('beginDate')\" id=\"new-project-begin-date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput [matDatepicker]=\"endPicker\" placeholder=\"Fecha Fin\" [formControl]=\"projectForm.get('endDate')\" id=\"new-project-end-date\">\n      <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #endPicker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <mat-select [formControl]=\"projectForm.get('type')\" placeholder=\"Tipo de Proyecto\">\n        <mat-option *ngFor=\"let projectType of projectTypes\" [value]=\"projectType\">\n          {{ projectType.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput class=\"proyect-form-input\" placeholder=\"Descripcion\" [formControl]=\"projectForm.get('description')\" id=\"new-project-description\">\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\" type=\"submit\" id=\"new-project-submit\" value=\"Enviar\">Crear</button>\n  </form>\n\n  <p id=\"new-project-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\n</div>"

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_ProjectType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/ProjectType */ "./src/app/models/ProjectType.ts");







var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(service, router) {
        this.service = service;
        this.router = router;
        this.projectTypes = src_app_models_ProjectType__WEBPACK_IMPORTED_MODULE_6__["PROJECT_TYPE_LIST"];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            leader: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            beginDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    NewProjectComponent.prototype.submit = function () {
        if (this.projectForm.valid) {
            var project = new src_app_models_Project__WEBPACK_IMPORTED_MODULE_3__["default"]();
            project.code = this.projectForm.value.code;
            project.name = this.projectForm.value.name;
            project.leader = this.projectForm.value.leader;
            project.beginDate = this.projectForm.value.beginDate;
            project.endDate = this.projectForm.value.endDate;
            project.description = this.projectForm.value.description;
            project.currentVersion = this.projectForm.value.currentVersion;
            project.type = this.projectForm.value.type;
            this.service.saveProject(project);
            this.router.navigate(['proyectos']);
        }
        else {
            this.submitResultMessage = 'Faltan campos obligatorios.';
        }
    };
    NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__(/*! ./new-project.component.html */ "./src/app/components/new-project/new-project.component.html"),
            styles: [__webpack_require__(/*! ./new-project.component.css */ "./src/app/components/new-project/new-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/operations-dashboard/operations-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/operations-dashboard/operations-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 300px;\n    margin: 10px;\n}\n  \n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcGVyYXRpb25zLWRhc2hib2FyZC9vcGVyYXRpb25zLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0VBRUU7SUFDRSxtRkFBbUY7SUFDbkYsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcGVyYXRpb25zLWRhc2hib2FyZC9vcGVyYXRpb25zLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/operations-dashboard/operations-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/operations-dashboard/operations-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n    <h3>Seleccione Proyecto: </h3>\n\n    <mat-form-field>\n      <mat-label>Proyecto</mat-label>\n      <mat-select>\n        <mat-option>ERP</mat-option>\n        <mat-option>CRM</mat-option>\n        <mat-option>BI</mat-option>\n\n      </mat-select>\n    </mat-form-field>\n  \n    <h3>Panel: </h3>\n\n    <div class=\"row\" style=\"justify-content:space-between\">\n      <div>Backlog</div>\n      <div>Analisis</div>\n      <div>En desarrollo</div>\n      <div>Terminado</div>\n    </div>\n\n    <mat-divider></mat-divider>\n\n    <div class=\"row\" style=\"justify-content:space-between\">\n        <div>\n          <mat-card class=\"example-card\">\n            <mat-card-header>\n              <mat-card-title>Ticket</mat-card-title>\n              <mat-card-subtitle>Descripcion corta</mat-card-subtitle>\n            </mat-card-header>\n            \n            <mat-card-content>\n              <p>\n                Mas detalles sobre el ticket\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button>Mas</button>              \n            </mat-card-actions>\n          </mat-card>\n        </div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n\n</div>"

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

/***/ "./src/app/components/product/dashboard/product-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/product/dashboard/product-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2Rhc2hib2FyZC9wcm9kdWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9kYXNoYm9hcmQvcHJvZHVjdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/product/dashboard/product-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/dashboard/product-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Filtros</h4>\n<mat-form-field>\n  <mat-label>Cliente</mat-label>\n  <mat-select [(value)]=\"clientFilter\">\n    <mat-option [value]=\"\"></mat-option>\n    <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\n      {{client.name}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n&nbsp;\n<mat-form-field>\n  <mat-label>Producto</mat-label>\n  <mat-select [(value)]=\"prodFilter\">\n    <mat-option [value]=\"\"></mat-option>\n    <mat-option *ngFor=\"let prod of productNames\" [value]=\"prod\">\n      {{prod}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<br/>\n<button mat-button (click)=\"filter()\">Filtrar <mat-icon>search</mat-icon></button>\n<button mat-button (click)=\"resetFilter()\">Borrar filtro<mat-icon>delete</mat-icon></button>\n\n\n<table mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"version\">\n      <th mat-header-cell *matHeaderCellDef> Versión </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"client\">\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.client?.name}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"detail\">\n      <th mat-header-cell *matHeaderCellDef> Detalles </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-button mat-icon-button (click)=\"viewDetails(element)\">\n              <i class=\"material-icons\">\n                view_headline\n              </i>\n            </button>\n      \n      </td>\n    </ng-container>\n  \n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  "

/***/ }),

/***/ "./src/app/components/product/dashboard/product-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/dashboard/product-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDashboardComponent", function() { return ProductDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");






var ProductDashboardComponent = /** @class */ (function () {
    function ProductDashboardComponent(productService, clientService, exampleService, router) {
        this.productService = productService;
        this.clientService = clientService;
        this.exampleService = exampleService;
        this.router = router;
        this.displayedColumns = ['name', 'version', 'client', 'detail'];
        this.prodFilter = null;
        this.clientFilter = null;
        this.productNames = null;
        this.clients = null;
        this.dataSource = null;
        this.products = null;
    }
    // Se ejecuta al crearse el component
    ProductDashboardComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
        this.dataSource = this.products;
        this.productNames = Array.from(new Set(this.products.map(function (p) { return p.name; })));
        this.clients = this.clientService.getClients();
    };
    ProductDashboardComponent.prototype.viewDetails = function (product) {
        this.router.navigate(['/detalle-producto'], { queryParams: { productId: product.id } });
    };
    ProductDashboardComponent.prototype.filter = function () {
        var _this = this;
        var result = this.products;
        if (this.prodFilter) {
            result = result.filter(function (d) { return d.name == _this.prodFilter; });
        }
        if (this.clientFilter) {
            result = result.filter(function (d) { return d.clientCode == _this.clientFilter; });
        }
        this.dataSource = result;
    };
    ProductDashboardComponent.prototype.resetFilter = function () {
        this.dataSource = this.products;
    };
    ProductDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-dashboard',
            template: __webpack_require__(/*! ./product-dashboard.component.html */ "./src/app/components/product/dashboard/product-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./product-dashboard.component.css */ "./src/app/components/product/dashboard/product-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductDashboardComponent);
    return ProductDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/product/details/product-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/product/details/product-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/product/details/product-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/details/product-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul>\n    <li *ngFor=\"let req of requirements\">\n        {{ req.description }}\n    </li>    \n</ul>\n"

/***/ }),

/***/ "./src/app/components/product/details/product-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product/details/product-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, exampleService, route) {
        this.productService = productService;
        this.exampleService = exampleService;
        this.route = route;
        this.requirements = null;
    }
    // Se ejecuta al crearse el component
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            var productId = _this.route.snapshot.queryParams["productId"];
            console.log(productId);
            _this.requirements = _this.productService.getRequirementsByProduct(productId);
            console.log(_this.requirements);
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/components/product/details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/components/product/details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n\n.description{\n    background: lightgreen;\n}\n\n.container {\n    margin: 5px;\n    padding: 5px;\n}\n\n.projects-dashboard-table {\n    width: 100%;\n    background: none;\n}\n\n#new-project-button {\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n  }\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n.portafolio-proyectos-boton-acciones{\n      margin-right: 10px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRhc2hib2FyZC9wcm9qZWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRhc2hib2FyZC9wcm9qZWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3RzLWRhc2hib2FyZC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5wb3J0YWZvbGlvLXByb3llY3Rvcy1ib3Rvbi1hY2Npb25lc3tcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <br>\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" routerLink=\"/nuevo-proyecto\" mat-raised-button color=\"primary\">Crear Proyecto</button>\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" routerLink=\"/riesgos\" mat-raised-button color=\"primary\">Ver Riesgos</button>\n  <br>\n  <h2>Listado de Proyectos</h2>\n  <table mat-table [dataSource]=\"projects\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef> Codigo </th>\n      <td mat-cell *matCellDef=\"let project\"> {{project.code}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let project\"> {{project.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef> Tipo </th>\n      <td mat-cell *matCellDef=\"let project\"> {{project.type.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"leader\">\n      <th mat-header-cell *matHeaderCellDef> Lider de Proyecto </th>\n      <td mat-cell *matCellDef=\"let project\"> {{project.leader}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"currentVersion\">\n      <th mat-header-cell *matHeaderCellDef> Version </th>\n      <td mat-cell *matCellDef=\"let project\"> {{project.currentVersion}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"acciones\">\n      <th mat-header-cell *matHeaderCellDef> Acciones </th>\n      <td mat-cell *matCellDef=\"let project\">\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/tareas\">Ver Tareas</button>\n        <button mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/detalle\">Ver Detalles</button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardComponent", function() { return ProjectDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");




var ProjectDashboardComponent = /** @class */ (function () {
    function ProjectDashboardComponent(service, exampleService) {
        this.service = service;
        this.exampleService = exampleService;
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['code', 'name', 'leader', 'type', 'currentVersion', 'acciones'];
        this.projects = this.service.getProjects();
    };
    ProjectDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project-dashboard',
            template: __webpack_require__(/*! ./project-dashboard.component.html */ "./src/app/components/project-dashboard/project-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./project-dashboard.component.css */ "./src/app/components/project-dashboard/project-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <h2>Detalle de Proyecto</h2>\n\n  <br>\n\n  <mat-tab-group style=\"border:1px solid #ccc; background-color: white;    border-radius: 16px;\">\n    <mat-tab label=\"Detalles\">\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Codigo</b>\n          </div>\n          {{project.code}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Nombre</b>\n          </div>\n          {{project.name}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Lider del Proyecto</b>\n          </div>\n          {{project.leader}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Fecha de Inicio</b>\n          </div>\n          {{project.beginDate}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Fecha de Fin</b>\n          </div>\n          {{project.endDate}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Tipo de Proyecto</b>\n          </div>\n          {{project.type.name}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Version Actual</b>\n          </div>\n          {{project.currentVersion}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Version Actual</b>\n          </div>\n          {{project.currentVersion}}\n        </mat-list-item>\n        <mat-list-item role=\"listitem\">\n          <div class=\"subtitulo-detalle\" style=\"display: inline; width: 20%\">\n            <b>Descripcion</b>\n          </div>\n        </mat-list-item>\n        <mat-list-item role=\"listitem\"> {{project.description}}\n        </mat-list-item>\n      </mat-list>\n\n\n    </mat-tab>\n    <mat-tab label=\"Tareas\"> Tareas</mat-tab>\n    <mat-tab label=\"Riesgos\"> Riesgos </mat-tab>\n  </mat-tab-group>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getProject(id);
    };
    ProjectDetailsComponent.prototype.getProject = function (id) {
        this.project = this.service.getProject(id);
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/components/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n\n.description{\n    background: lightgreen;\n}\n\n.container {\n    margin: 5px;\n    padding: 5px;\n}\n\n.projects-dashboard-table {\n    width: 100%;\n    background: none;\n}\n\n#new-project-button {\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n  }\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n.portafolio-proyectos-boton-acciones{\n      margin-right: 10px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJpc2tzL3Byb2plY3Qtcmlza3MtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3Qtcmlza3MvcHJvamVjdC1yaXNrcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0cy1kYXNoYm9hcmQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbiNuZXctcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tYWNjaW9uZXN7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n    <h1 style=\"text-align: center;\"> Riesgos por Proyecto</h1>\n    <br>\n    <br>\n    <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\">Agregar Riesgo</button>\n    <br>\n    <br>\n    <table mat-table [dataSource]=\"risks\" class=\"mat-elevation-z8\">\n\n      <ng-container matColumnDef=\"project_code\">\n        <th mat-header-cell *matHeaderCellDef> Codigo de Proyecto</th>\n        <td mat-cell *matCellDef=\"let risk\"> {{risk.project_code}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"motive\">\n        <th mat-header-cell *matHeaderCellDef> Motivo </th>\n        <td mat-cell *matCellDef=\"let risk\"> {{risk.motive}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"impact\">\n        <th mat-header-cell *matHeaderCellDef> Impacto </th>\n        <td mat-cell *matCellDef=\"let risk\"> {{risk.impact}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"probability\">\n        <th mat-header-cell *matHeaderCellDef> Probabilidad </th>\n        <td mat-cell *matCellDef=\"let risk\"> {{risk.probability}} </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"acciones\">\n        <th mat-header-cell *matHeaderCellDef> Acciones </th>\n        <td mat-cell *matCellDef=\"let risk\">\n          <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\">Ver Riesgo</button>\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  \n    </table>\n  \n  </div>"

/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectRisksDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRisksDashboardComponent", function() { return ProjectRisksDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/risk.service */ "./src/app/services/risk.service.ts");




var ProjectRisksDashboardComponent = /** @class */ (function () {
    function ProjectRisksDashboardComponent(service, exampleService) {
        this.service = service;
        this.exampleService = exampleService;
    }
    ProjectRisksDashboardComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['project_code', 'motive', 'impact', 'probability', 'acciones'];
        this.risks = this.service.getRisks();
    };
    ProjectRisksDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project-risks-dashboard',
            template: __webpack_require__(/*! ./project-risks-dashboard.component.html */ "./src/app/components/project-risks/project-risks-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./project-risks-dashboard.component.css */ "./src/app/components/project-risks/project-risks-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_3__["RiskService"],
            src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"]])
    ], ProjectRisksDashboardComponent);
    return ProjectRisksDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n}\n\n.example-spacer {\n    flex: 1 1 auto;\n}\n\n.example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\ntable {\n    width: 100%;\n}\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW1pcy10aWNrZXRzL3NvcG9ydGUtbWlzLXRpY2tldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUtbWlzLXRpY2tldHMvc29wb3J0ZS1taXMtdGlja2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiwgLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button routerLink=\"/soporte\" mat-flat-button color=\"primary\">Overview</button>\n  <button routerLink=\"/soporte/mistickets\" mat-flat-button color=\"primary\">Mis\n    Tickets</button>\n  <button routerLink=\"/soporte/nuevoticket\" mat-flat-button color=\"primary\">Nuevo Ticket</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<h4>Filtros</h4>\n\n<mat-form-field>\n  <mat-label>Responsable</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\n      {{responsable}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-button-row\">\n  <button mat-button (click)=\"filtrar(selected)\">Aplicar filtro<mat-icon>search</mat-icon></button>\n  <button mat-button (click)=\"borrarFiltro()\">Borrar filtro<mat-icon>delete</mat-icon></button>\n</div>\n\n<table mat-table [dataSource]=\"filterDataSource\">\n\n  <ng-container matColumnDef=\"numeroTicket\">\n    <th mat-header-cell *matHeaderCellDef> Nro Ticket </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.numeroTicket}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"cliente\">\n    <th mat-header-cell *matHeaderCellDef> Cliente </th>\n    <td mat-cell *matCellDef=\"let element\"> {{this.getClient(element.clienteCode).name}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"producto\">\n    <th mat-header-cell *matHeaderCellDef> Producto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.producto}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"severidad\">\n    <th mat-header-cell *matHeaderCellDef> Severidad </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.severidad}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"tipo\">\n    <th mat-header-cell *matHeaderCellDef> Tipo </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.tipo}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"asunto\">\n    <th mat-header-cell *matHeaderCellDef> Asunto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.asunto}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"fechaAlta\">\n    <th mat-header-cell *matHeaderCellDef> Fecha Alta </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.fechaAlta?.toLocaleDateString()}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"estado\">\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.estado}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"opciones\">\n    <th mat-header-cell *matHeaderCellDef> Opciones </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button>\n        <mat-icon routerLink=\"/ticketdetalle/{{element.numeroTicket}}\">remove_red_eye</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SoporteMisTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoporteMisTicketsComponent", function() { return SoporteMisTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");




var SoporteMisTicketsComponent = /** @class */ (function () {
    function SoporteMisTicketsComponent(ticketService, clientService) {
        this.ticketService = ticketService;
        this.clientService = clientService;
        this.displayedColumns = ['numeroTicket', 'cliente', 'producto', 'severidad', 'tipo', 'asunto', 'fechaAlta', 'estado', 'opciones'];
        this.dataSource = null;
        this.filterDataSource = null;
        this.selected = undefined;
        this.responsables = [];
    }
    // Se ejecuta al crearse el component
    SoporteMisTicketsComponent.prototype.ngOnInit = function () {
        var tickets = this.ticketService.getTickets();
        this.dataSource = tickets;
        this.responsables = this.removeDuplicates(this.dataSource, "responsable");
    };
    SoporteMisTicketsComponent.prototype.filtrar = function (responsable) {
        this.filterDataSource = this.dataSource.filter(function (registro) {
            return registro.responsable == responsable;
        });
    };
    SoporteMisTicketsComponent.prototype.borrarFiltro = function () {
        this.filterDataSource = this.dataSource;
        this.selected = undefined;
    };
    SoporteMisTicketsComponent.prototype.removeDuplicates = function (originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i][prop]);
        }
        return newArray;
    };
    SoporteMisTicketsComponent.prototype.getClient = function (code) {
        return this.clientService.getById(code);
    };
    SoporteMisTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soporte-mis-tickets',
            template: __webpack_require__(/*! ./soporte-mis-tickets.component.html */ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.html"),
            styles: [__webpack_require__(/*! ./soporte-mis-tickets.component.css */ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], SoporteMisTicketsComponent);
    return SoporteMisTicketsComponent;
}());



/***/ }),

/***/ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\n.form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW51ZXZvLXRpY2tldC9zb3BvcnRlLW51ZXZvLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUtbnVldm8tdGlja2V0L3NvcG9ydGUtbnVldm8tdGlja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiwgLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiAgXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<h4>Nuevo Ticket</h4>\n\n<div class=\"form\">\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Cliente</mat-label>\n    <mat-select (selectionChange)=\"getProductsByClient()\" [(ngModel)]=\"nuevoTicket.clienteCode\">\n      <mat-option *ngFor=\"let cliente of clientes\" [value]=\"cliente.code\">\n        {{cliente.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Tipo de Ticket</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.tipo\">\n      <mat-option value=\"Incidente\">\n        Incidente\n      </mat-option>\n      <mat-option value=\"Segerencia\">\n        Sugerencia\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Producto</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.producto\">\n      <mat-option *ngFor=\"let prod of products\" [value]=\"prod\">\n        {{prod}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Severidad</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.severidad\">\n      <mat-option value=\"Baja\">\n        Baja\n      </mat-option>\n      <mat-option value=\"Media\">\n        Media\n      </mat-option>\n      <mat-option value=\"Alta\">\n        Alta\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input [(ngModel)]=\"nuevoTicket.asunto\" matInput placeholder=\"Asunto\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Responsable</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.responsable\">\n      <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\n        {{responsable}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <textarea [(ngModel)]=\"nuevoTicket.descripcion\" matInput placeholder=\"Descripción\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Estado</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.estado\">\n      <mat-option value=\"Abierto\">\n        Abierto\n      </mat-option>\n      <mat-option value=\"En progreso\">\n        En progreso\n      </mat-option>\n      <mat-option value=\"Cerrado\">\n        Cerrado\n      </mat-option>\n      <mat-option value=\"Escalado a desarrollo\">\n        Escalado a desarrollo\n      </mat-option>\n      <mat-option value=\"Escalado a implementacion\">\n        Escalado a implementacion\n      </mat-option>\n      <mat-option value=\"A la espera del cliente\">\n        A la espera del cliente\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n\n<button (click)=\"addTicket()\" mat-raised-button color=\"primary\">Agregar</button>"

/***/ }),

/***/ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SoporteNuevoTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoporteNuevoTicketComponent", function() { return SoporteNuevoTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var src_app_models_Ticket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Ticket */ "./src/app/models/Ticket.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SoporteNuevoTicketComponent = /** @class */ (function () {
    function SoporteNuevoTicketComponent(location, clientService, productService, ticketService, router) {
        this.location = location;
        this.clientService = clientService;
        this.productService = productService;
        this.ticketService = ticketService;
        this.router = router;
        this.clientes = null;
        this.products = null;
        this.responsables = null;
    }
    SoporteNuevoTicketComponent.prototype.ngOnInit = function () {
        this.nuevoTicket = new src_app_models_Ticket__WEBPACK_IMPORTED_MODULE_4__["Ticket"]();
        this.clientes = this.clientService.getClients();
        this.products = this.productService.getProducts().map(function (p) { return p.name + " " + p.version; });
        this.responsables = Array.from(new Set(this.ticketService.getTickets().map(function (t) { return t.responsable; })));
    };
    SoporteNuevoTicketComponent.prototype.goBack = function () {
        this.location.back();
    };
    SoporteNuevoTicketComponent.prototype.getProductsByClient = function () {
        this.products = this.productService.getProductsByClient(this.nuevoTicket.clienteCode).map(function (t) { return t.name + " " + t.version; });
        console.log(this.nuevoTicket.clienteCode);
    };
    SoporteNuevoTicketComponent.prototype.addTicket = function () {
        this.nuevoTicket.fechaAlta = new Date();
        this.ticketService.addTicket(this.nuevoTicket);
        this.router.navigate(['/soporte/mistickets']);
    };
    SoporteNuevoTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soporte-nuevo-ticket',
            template: __webpack_require__(/*! ./soporte-nuevo-ticket.component.html */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html"),
            styles: [__webpack_require__(/*! ./soporte-nuevo-ticket.component.css */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SoporteNuevoTicketComponent);
    return SoporteNuevoTicketComponent;
}());



/***/ }),

/***/ "./src/app/components/soporte/soporte.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/soporte/soporte.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n}\n\n.example-spacer {\n    flex: 1 1 auto;\n}\n\n.example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\ntable {\n    width: 100%;\n}\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlL3NvcG9ydGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUvc29wb3J0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiwgLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soporte/soporte.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/soporte/soporte.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-flat-button color=\"primary\">Overview</button>\n  <button id=\"nav-router-mistickets\" routerLink=\"/soporte/mistickets\" mat-flat-button color=\"primary\">Mis\n    Tickets</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<h4>Filtros</h4>\n\n<mat-form-field>\n  <mat-label>Producto</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option *ngFor=\"let producto of productos\" [value]=\"producto\">\n      {{producto}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-button-row\">\n  <button mat-button (click)=\"filtrar(selected)\">Aplicar filtro<mat-icon>search</mat-icon></button>\n  <button mat-button (click)=\"borrarFiltro()\">Borrar filtro<mat-icon>delete</mat-icon></button>\n</div>\n\n<table mat-table [dataSource]=\"filterDataSource\">\n\n  <ng-container matColumnDef=\"producto\">\n    <th mat-header-cell *matHeaderCellDef> Producto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.producto}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"version\">\n    <th mat-header-cell *matHeaderCellDef> Version </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.vProducto}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"cliente\">\n    <th mat-header-cell *matHeaderCellDef> Cliente </th>\n    <td mat-cell *matCellDef=\"let element\"> {{this.getClient(element.clienteCode).name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"severidad\">\n    <th mat-header-cell *matHeaderCellDef> Severidad </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.severidad}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"responsable\">\n    <th mat-header-cell *matHeaderCellDef> Responsable </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.responsable}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"opciones\">\n    <th mat-header-cell *matHeaderCellDef> Opciones </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button>\n        <mat-icon routerLink=\"/ticketdetalle/{{element.numeroTicket}}\">remove_red_eye</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/components/soporte/soporte.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/soporte/soporte.component.ts ***!
  \*********************************************************/
/*! exports provided: SoporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoporteComponent", function() { return SoporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/client.service */ "./src/app/services/client.service.ts");




var SoporteComponent = /** @class */ (function () {
    function SoporteComponent(ticketService, clientService) {
        this.ticketService = ticketService;
        this.clientService = clientService;
        this.displayedColumns = ['producto', 'version', 'cliente', 'severidad', 'responsable', 'opciones'];
        this.dataSource = null;
        this.filterDataSource = null;
        this.selected = undefined;
        this.productos = [];
    }
    // Se ejecuta al crearse el component
    SoporteComponent.prototype.ngOnInit = function () {
        var tickets = this.ticketService.getTickets();
        this.dataSource = tickets;
        this.filterDataSource = this.dataSource;
        this.productos = this.removeDuplicates(this.dataSource, "producto");
    };
    SoporteComponent.prototype.filtrar = function (producto) {
        this.filterDataSource = this.dataSource.filter(function (reg) {
            return reg.producto == producto;
        });
    };
    SoporteComponent.prototype.borrarFiltro = function () {
        this.filterDataSource = this.dataSource;
        this.selected = undefined;
    };
    SoporteComponent.prototype.removeDuplicates = function (originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i][prop]);
        }
        return newArray;
    };
    SoporteComponent.prototype.getClient = function (code) {
        return this.clientService.getById(code);
    };
    SoporteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soporte',
            template: __webpack_require__(/*! ./soporte.component.html */ "./src/app/components/soporte/soporte.component.html"),
            styles: [__webpack_require__(/*! ./soporte.component.css */ "./src/app/components/soporte/soporte.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"], src_app_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], SoporteComponent);
    return SoporteComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/dashboard/project-tasks.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/tasks/dashboard/project-tasks.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightblue;\n}\n\ntable {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9kYXNoYm9hcmQvcHJvamVjdC10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9kYXNoYm9hcmQvcHJvamVjdC10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/tasks/dashboard/project-tasks.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tasks/dashboard/project-tasks.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"tasks\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Nombre </th>\n    <td mat-cell *matCellDef=\"let task\"> {{task.name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"asignee\">\n    <th mat-header-cell *matHeaderCellDef> Asignado a </th>\n    <td mat-cell *matCellDef=\"let task\">\n      <mat-form-field>\n        <mat-select value=\"{{task.asignee}}\" (selectionChange)=\"onAsigneeChange($event, task)\">\n          <mat-option *ngFor=\"let resource of resources\" [value]=\"resource\">\n            {{ resource }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\n    <td mat-cell *matCellDef=\"let task\">\n      <mat-form-field>\n        <mat-select value=\"{{task.state}}\" (selectionChange)=\"onStateChange($event, task)\">\n          <mat-option *ngFor=\"let state of priorities\" [value]=\"state\">\n            {{ state }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"priority\">\n    <th mat-header-cell *matHeaderCellDef> Prioridad </th>\n    <td mat-cell *matCellDef=\"let task\"> {{task.priority}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"estimatedTime\">\n    <th mat-header-cell *matHeaderCellDef> Tiempo Estimado </th>\n    <td mat-cell *matCellDef=\"let task\"> {{task.estimatedTime}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"dedicatedTime\">\n    <th mat-header-cell *matHeaderCellDef> Tiempo Dedicado </th>\n    <td mat-cell *matCellDef=\"let task\"> {{task.dedicatedTime}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<br>\n\n<button routerLink=\"/proyecto/{{ getProjectId() }}/crear-tarea\" mat-raised-button color=\"primary\">Crear Tarea</button>\n"

/***/ }),

/***/ "./src/app/components/tasks/dashboard/project-tasks.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tasks/dashboard/project-tasks.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTasksComponent", function() { return ProjectTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");





var ProjectTasksComponent = /** @class */ (function () {
    function ProjectTasksComponent(route, service) {
        this.route = route;
        this.service = service;
        this.displayedColumns = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];
        this.resources = ['', 'Fernando Soluzzia', 'Felipe Codeo'];
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__["TASK_STATE_LIST"];
    }
    ProjectTasksComponent.prototype.ngOnInit = function () {
        var id = this.getProjectId();
        this.getTasks(id);
    };
    ProjectTasksComponent.prototype.getTasks = function (id) {
        this.tasks = this.service.getTasksByProject(id);
    };
    ProjectTasksComponent.prototype.getProjectId = function () {
        return this.route.snapshot.paramMap.get('id');
    };
    ProjectTasksComponent.prototype.onAsigneeChange = function (event, task) {
        var newAsignee = event.source.value;
        this.service.setTaskAsignee(task.name, task.projectId, newAsignee);
    };
    ProjectTasksComponent.prototype.onStateChange = function (event, task) {
        var newState = event.source.value;
        this.service.setTaskState(task.name, task.projectId, newState);
    };
    ProjectTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-tasks',
            template: __webpack_require__(/*! ./project-tasks.component.html */ "./src/app/components/tasks/dashboard/project-tasks.component.html"),
            styles: [__webpack_require__(/*! ./project-tasks.component.css */ "./src/app/components/tasks/dashboard/project-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])
    ], ProjectTasksComponent);
    return ProjectTasksComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/new/new-task.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/tasks/new/new-task.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n}\n\n.proyect-form-input {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XG59XG5cbi5wcm95ZWN0LWZvcm0taW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tasks/new/new-task.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/tasks/new/new-task.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Proyecto {{ projectId }} - Nueva Tarea</h2>\n\n<div class=\"task-form\">\n  <mat-form-field class=\"proyect-form-input\">\n    <input matInput placeholder=\"Titulo\" [(ngModel)]=\"task.name\">\n  </mat-form-field>\n\n  <mat-form-field class=\"proyect-form-input\">\n    <input matInput class=\"proyect-form-input\" placeholder=\"Tiempo estimado\" type=\"number\" [(ngModel)]=\"task.estimatedTime\">\n  </mat-form-field>\n  \n  <mat-form-field class=\"proyect-form-input\">\n    <input matInput class=\"proyect-form-input\" placeholder=\"Tiempo dedicado\" type=\"number\" [(ngModel)]=\"task.dedicatedTime\">\n  </mat-form-field>\n\n  <mat-form-field class=\"proyect-form-input\">\n    <mat-label>Prioridad</mat-label>\n    <mat-select [(ngModel)]=\"task.priority\">\n      <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\n        {{ priority }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"proyect-form-input\">\n    <textarea matInput class=\"proyect-form-input\" placeholder=\"Descripcion\" [(ngModel)]=\"task.description\"></textarea>\n  </mat-form-field>\n\n  <br>\n\n  <button (click)=\"addTask()\" mat-raised-button color=\"primary\">Crear</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tasks/new/new-task.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tasks/new/new-task.component.ts ***!
  \************************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");





var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.task = new src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__["TASK_PRIORITY_LIST"];
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.projectId = this.route.snapshot.paramMap.get('id');
    };
    NewTaskComponent.prototype.addTask = function () {
        this.task.projectId = this.projectId;
        this.task.state = src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskState"].PENDING;
        this.taskService.addTask(this.task);
        this.router.navigate(['/proyecto', this.projectId, 'tareas']);
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/components/tasks/new/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.css */ "./src/app/components/tasks/new/new-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/teams-dashboard/teams-dashboard.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/teams-dashboard/teams-dashboard.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtcy1kYXNoYm9hcmQvdGVhbXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYW1zLWRhc2hib2FyZC90ZWFtcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/teams-dashboard/teams-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/teams-dashboard/teams-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <h3>Buscador: </h3>\n\n  <div class=\"row\" style=\"justify-content:flex-start\" >\n         \n      <mat-form-field>\n        <input matInput placeholder=\"Persona\">\n        <mat-icon matSuffix>search</mat-icon>\n      </mat-form-field>\n      \n  </div>\n\n  <div class=\"row\">\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n          <!--- Note that these columns can be defined in any order.\n                The actual rendered columns are set as a property on the row definition\" -->\n        \n          <!-- Position Column -->\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> Id </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n        \n          <!-- Rol Column -->\n          <ng-container matColumnDef=\"rol\">\n            <th mat-header-cell *matHeaderCellDef> Rol </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.rol}} </td>\n          </ng-container>\n        \n          <!-- Assignment Column -->\n          <ng-container matColumnDef=\"assignment\">\n            <th mat-header-cell *matHeaderCellDef> Assignment </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.assignment}} </td>\n          </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        \n  </div>\n  \n  \n  <h3>Equipos de desarrollo: </h3>\n\n  <div class=\"row\">\n    <div>ERP</div>\n    <div>CRM</div>\n    <div>BI</div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\">\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\n    </mat-list>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\n    </mat-list>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\">Juan Perez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Pablo Gonzalez</mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item role=\"listitem\">Gonzalo Fernandez</mat-list-item>\n    </mat-list>\n  </div>\n\n\n\n\n</div>"

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

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\nmat-form-field {\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<mat-card>\n  <h4> Detalle del Ticket </h4>\n  <div class=\"example-button-row\">\n    <button mat-flat-button color=\"primary\"> {{ticket.estado}} </button>\n  </div>\n  <p> Numero de Ticket: {{ticket.numeroTicket}} </p>\n  <p> Producto: {{ticket.producto}} {{ticket.vProducto}} </p>\n  <p> Asunto: {{ticket.asunto}} </p>\n  <p> SLA: </p>\n  <p> Tipo de Ticket: {{ticket.tipo}} </p>\n  <p> Fecha de Alta: {{ticket.fechaAlta?.toLocaleDateString()}} </p>\n</mat-card>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<mat-form-field>\n  <mat-label>Departamento</mat-label>\n  <mat-select [(value)]=\"inDepartamento\">\n    <mat-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento\">\n      {{departamento}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Severidad</mat-label>\n  <mat-select [(value)]=\"inSeveridad\">\n    <mat-option *ngFor=\"let severidad of severidades\" [value]=\"severidad\">\n      {{severidad}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Estado</mat-label>\n  <mat-select [(value)]=\"inEstado\">\n    <mat-option *ngFor=\"let estado of estados\" [value]=\"estado\">\n      {{estado}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Responsable</mat-label>\n  <mat-select [(value)]=\"inResponsable\">\n    <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\n      {{responsable}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-button-row\">\n  <button mat-flat-button color=\"primary\" (click)=\"onClick()\"> Aplicar cambios </button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<mat-card>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cupiditate natus ad eius enim corporis\n    quibusdam\n    amet ipsa. Dolore itaque praesentium et minima quia ut, eveniet nam beatae ad deserunt!</p>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.ts ***!
  \***********************************************************************/
/*! exports provided: TicketDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetalleComponent", function() { return TicketDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");





var TicketDetalleComponent = /** @class */ (function () {
    function TicketDetalleComponent(location, route, ticketService) {
        this.location = location;
        this.route = route;
        this.ticketService = ticketService;
        this.estados = ['Abierto', 'En progreso', 'Cerrado', 'Escalado a desarrollo', 'Escalado a implementacion', 'A la espera del cliente'];
        this.departamentos = ['Desarrollo', 'Implementacion'];
        this.severidades = ['Baja', 'Media', 'Alta'];
    }
    TicketDetalleComponent.prototype.ngOnInit = function () {
        this.getTicket();
        this.responsables = this.ticketService.getResponsables();
        this.inEstado = this.ticket.estado;
        this.inResponsable = this.ticket.responsable;
        this.inDepartamento = this.ticket.departamento;
        this.inSeveridad = this.ticket.severidad;
    };
    TicketDetalleComponent.prototype.goBack = function () {
        this.location.back();
    };
    TicketDetalleComponent.prototype.getTicket = function () {
        var id = +this.route.snapshot.paramMap.get('numeroTicket');
        this.ticket = this.ticketService.getTicket(id);
    };
    TicketDetalleComponent.prototype.onClick = function () {
        this.ticket.departamento = this.inDepartamento;
        this.ticket.severidad = this.inSeveridad;
        this.ticket.estado = this.inEstado;
        this.ticket.responsable = this.inResponsable;
    };
    TicketDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-detalle',
            template: __webpack_require__(/*! ./ticket-detalle.component.html */ "./src/app/components/ticket-detalle/ticket-detalle.component.html"),
            styles: [__webpack_require__(/*! ./ticket-detalle.component.css */ "./src/app/components/ticket-detalle/ticket-detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]])
    ], TicketDetalleComponent);
    return TicketDetalleComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this._config = {
            PathAPI: '/api'
        };
    }
    Object.defineProperty(AppConfig.prototype, "setting", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.get = function (key) {
        return this._config[key];
    };
    AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());

;


/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightpink;\n  }\n\n\nfooter {\n  height: 80px;\n  background: lightblue;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7O0FBR0Y7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gIH1cblxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer>\n\n    <div class=\"text-center\">\n        <strong>Footer</strong>\n    </div>\n\n    <div>\n        About: ...\n    </div>\n    <div>\n        Contact: ...\n    </div>\n\n</footer>\n"

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

module.exports = ".button-row button,\n.button-row a {\n  margin: 5px 5px;\n  width: 150px;\n}\n\nmat-sidenav {\n  text-align: center;\n  width: 205px;\n}\n\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\nh1 {\n  margin: 10px;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.container {\n  margin: 5px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJvdyBidXR0b24sXG4uYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjA1cHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span>PSA System</span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <div class=\"button-row\">\n      <button id=\"nav-router-proyectos\" routerLink=\"/proyectos\" mat-raised-button>Proyectos</button>\n    </div>\n    <div class=\"button-row\">\n      <button mat-raised-button>Recursos</button>\n    </div>\n    <div class=\"button-row\">\n        <button id=\"nav-router-clientes\" routerLink=\"/clientes\" mat-raised-button>Clientes</button>\n    </div>\n    <div class=\"button-row\">\n      <button id=\"nav-router-productos\" routerLink=\"/productos\" mat-raised-button>Productos</button>\n    </div>\n    <div class=\"button-row\">\n      <button id=\"nav-router-contratos\" routerLink=\"/contratos\" mat-raised-button>Contratos</button>\n    </div>\n    <div class=\"button-row\">\n      <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-raised-button>Soporte</button>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div class=\"container\">\n      <!--CONTENIDO PRINCIPAL-->\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

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

/***/ "./src/app/models/Client.ts":
/*!**********************************!*\
  !*** ./src/app/models/Client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/models/Contract.ts":
/*!************************************!*\
  !*** ./src/app/models/Contract.ts ***!
  \************************************/
/*! exports provided: Contract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract; });
var Contract = /** @class */ (function () {
    function Contract(obj) {
        Object.assign(this, obj);
        this.alertMessages = [];
        this.incidents = [];
    }
    return Contract;
}());



/***/ }),

/***/ "./src/app/models/ContractsConfiguration.ts":
/*!**************************************************!*\
  !*** ./src/app/models/ContractsConfiguration.ts ***!
  \**************************************************/
/*! exports provided: ContractsConfigurations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsConfigurations", function() { return ContractsConfigurations; });
var ContractsConfigurations = /** @class */ (function () {
    function ContractsConfigurations() {
        this.daysBeforeExpiration = 0;
        this.percentageOfTotalIncidents = 95;
        this.hoursBeforeResponseLimit = 2;
    }
    return ContractsConfigurations;
}());



/***/ }),

/***/ "./src/app/models/Product.ts":
/*!***********************************!*\
  !*** ./src/app/models/Product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(obj) {
        Object.assign(this, obj);
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/models/Project.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Project = /** @class */ (function () {
    function Project() {
        this.tasks = [];
    }
    Project.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    return Project;
}());
/* harmony default export */ __webpack_exports__["default"] = (Project);


/***/ }),

/***/ "./src/app/models/ProjectType.ts":
/*!***************************************!*\
  !*** ./src/app/models/ProjectType.ts ***!
  \***************************************/
/*! exports provided: default, PROJECT_TYPE_DEV, PROJECT_TYPE_IMPL, PROJECT_TYPE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_TYPE_DEV", function() { return PROJECT_TYPE_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_TYPE_IMPL", function() { return PROJECT_TYPE_IMPL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_TYPE_LIST", function() { return PROJECT_TYPE_LIST; });
var PROJECT_TYPE_IMPL_CODE = 'IMPL';
var PROJECT_TYPE_IMPL_NAME = 'Implementación';
var PROJECT_TYPE_DEV_CODE = 'DEV';
var PROJECT_TYPE_DEV_NAME = 'Desarrollo';
var ProjectType = /** @class */ (function () {
    function ProjectType(code, name) {
        this.code = code;
        this.name = name;
    }
    return ProjectType;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProjectType);
var PROJECT_TYPE_DEV = new ProjectType(PROJECT_TYPE_DEV_CODE, PROJECT_TYPE_DEV_NAME);
var PROJECT_TYPE_IMPL = new ProjectType(PROJECT_TYPE_IMPL_CODE, PROJECT_TYPE_IMPL_NAME);
var PROJECT_TYPE_LIST = [
    PROJECT_TYPE_DEV,
    PROJECT_TYPE_IMPL
];


/***/ }),

/***/ "./src/app/models/Risk.ts":
/*!********************************!*\
  !*** ./src/app/models/Risk.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Risk = /** @class */ (function () {
    function Risk() {
    }
    return Risk;
}());
/* harmony default export */ __webpack_exports__["default"] = (Risk);


/***/ }),

/***/ "./src/app/models/Task.ts":
/*!********************************!*\
  !*** ./src/app/models/Task.ts ***!
  \********************************/
/*! exports provided: TaskPriority, TASK_PRIORITY_LIST, TaskState, TASK_STATE_LIST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPriority", function() { return TaskPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_PRIORITY_LIST", function() { return TASK_PRIORITY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskState", function() { return TaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATE_LIST", function() { return TASK_STATE_LIST; });
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "Baja";
    TaskPriority["MEDIUM"] = "Media";
    TaskPriority["HIGH"] = "Alta";
})(TaskPriority || (TaskPriority = {}));
var TASK_PRIORITY_LIST = [
    TaskPriority.LOW,
    TaskPriority.MEDIUM,
    TaskPriority.HIGH
];
var TaskState;
(function (TaskState) {
    TaskState["DEVELOPMENT"] = "Desarrollo";
    TaskState["COMPLETED"] = "Completado";
    TaskState["PENDING"] = "Pendiente";
})(TaskState || (TaskState = {}));
var TASK_STATE_LIST = [
    TaskState.PENDING,
    TaskState.DEVELOPMENT,
    TaskState.COMPLETED
];
var Task = /** @class */ (function () {
    function Task(name, asignee, state, priority, estimatedTime, dedicatedTime, projectId) {
        this.name = name;
        this.asignee = asignee;
        this.state = state;
        this.priority = priority;
        this.estimatedTime = estimatedTime;
        this.dedicatedTime = dedicatedTime;
        this.projectId = projectId;
    }
    return Task;
}());
/* harmony default export */ __webpack_exports__["default"] = (Task);


/***/ }),

/***/ "./src/app/models/Ticket.ts":
/*!**********************************!*\
  !*** ./src/app/models/Ticket.ts ***!
  \**********************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this.pathAPI = this.config.setting['PathAPI'];
    }
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var ClientService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientService, _super);
    function ClientService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clients = [
            { code: '123', name: 'Techint', address: 'Bouchard', email: "techint@techint.com", phoneNumbers: ["2414-6342", "2414-6343"] },
            { code: '999', name: 'Total', address: 'Moreno', email: "total@total.com", phoneNumbers: ["6343-2453"] },
            { code: '456', name: 'Central Perk', address: 'New York', email: "CPerk@CPerk.com", phoneNumbers: ["4565-8745"] },
            { code: '354', name: 'Benelli', address: 'Corrientes', email: "Benelli@Benelli.com", phoneNumbers: [] },
            { code: 'A8D', name: 'Ford', address: 'Pacheco', email: "Ford@Ford.com", phoneNumbers: ["2369-6599"] },
            { code: 'PM5', name: 'BocaJrs', address: 'Brandsen', email: "Boca@Boca.com", phoneNumbers: ["1212-1212"] },
            { code: '8UN', name: 'Neverest', address: 'Himalayas', email: "Never@Rest.com", phoneNumbers: ["8000-0042"] },
            { code: '90Z', name: 'ECorp', address: 'Belgrano', email: "Ecorp@Ecorp.com", phoneNumbers: ["4321-EVIL"] },
        ];
        return _this;
    }
    ClientService.prototype.getClients = function () {
        return this.clients;
    };
    ClientService.prototype.addClient = function (client) {
        if (!this.clients.map(function (c) { return c.name; }).includes(client.name)) {
            this.clients.push(client);
        }
    };
    // El nombre es nuestro identificador
    ClientService.prototype.getClientByName = function (name) {
        return this.clients.filter(function (c) { return c.name == name; })[0];
    };
    ClientService.prototype.getClientByCode = function (code) {
        return this.clients.filter(function (c) { return c.code == code; })[0];
    };
    ClientService.prototype.getById = function (id) {
        return this.clients.find(function (c) { return c.code == id; });
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ClientService);
    return ClientService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/contract.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/*! exports provided: ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_Contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Contract */ "./src/app/models/Contract.ts");
/* harmony import */ var _models_ContractsConfiguration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ContractsConfiguration */ "./src/app/models/ContractsConfiguration.ts");
/* harmony import */ var _ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.service */ "./src/app/services/client.service.ts");








var ContractService = /** @class */ (function () {
    function ContractService(ticketService, clientService) {
        this.ticketService = ticketService;
        this.clientService = clientService;
        this.EXPIRE_MESSAGE = "El contrato esta a punto de vencerse";
        this.INCIDENTS_MESSAGE = "La cantidad de incidencias supero el umbral de alerta";
        this.RESPONSE_MESSAGE = "El tiempo limite de respuesta a un incidente esta por alcanzarse";
        this.configuration = new _models_ContractsConfiguration__WEBPACK_IMPORTED_MODULE_5__["ContractsConfigurations"]();
        this.contracts = [
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 1, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '123' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 2, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '999' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 3, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '456' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 4, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 1, clientCode: '354' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 5, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 1, clientCode: 'A8D' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 6, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 8, clientCode: 'PM5' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 7, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 8, clientCode: '8UN' }),
            new _models_Contract__WEBPACK_IMPORTED_MODULE_4__["Contract"]({ id: 8, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 50, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 2, clientCode: '90Z' }),
        ];
    }
    ContractService.prototype.getContracts = function () {
        var _this = this;
        // Configuro las alertas
        this.contracts.forEach(function (c) {
            ////// OBTENGO Clientes
            c.client = _this.clientService.getClientByCode(c.clientCode);
            ////// OBTENGO TICKETS RELACIONADOS A ESTE CONTRATO
            c.incidents = _this.ticketService.getIncidentsByClient(c.clientCode);
            ////// ALERTAS DE VENCIMIENTO DE CONTRATO
            var date = new Date();
            date.setDate(date.getDate() + _this.configuration.daysBeforeExpiration);
            if (c.endDate && date >= c.endDate) {
                c.showAlert = true;
                if (!c.alertMessages.includes(_this.EXPIRE_MESSAGE)) {
                    c.alertMessages.push(_this.EXPIRE_MESSAGE);
                }
            }
            ///////
            /////// ALERTA DE TIEMPO DE RESPUESTA
            c.incidents.forEach(function (i) {
                var fechaLimite = new Date(i.fechaAlta);
                fechaLimite.setHours(i.fechaAlta.getHours() + c.responseTime);
                var diff = fechaLimite.getTime() - new Date().getTime(); // Diferencia en milisec
                diff = diff / 1000; // Diferencia en seg;
                diff = diff / 60; // Diferencia en minutos
                diff = diff / 60; // Diferencia en Horas
                if (i.estado == "Abierto" && diff > 0 && diff < _this.configuration.hoursBeforeResponseLimit) {
                    c.showAlert = true;
                    if (!c.alertMessages.includes(_this.RESPONSE_MESSAGE)) {
                        c.alertMessages.push(_this.RESPONSE_MESSAGE);
                    }
                }
            });
            //////
            /////// ALERTAS DE INCIDENCIAS
            var alertLimit = c.incidentLimit * _this.configuration.percentageOfTotalIncidents / 100;
            if (c.incidents && c.incidents.length >= alertLimit) {
                c.showAlert = true;
                if (!c.alertMessages.includes(_this.INCIDENTS_MESSAGE)) {
                    c.alertMessages.push(_this.INCIDENTS_MESSAGE);
                }
            }
            /////////////////////////
        });
        return this.contracts;
    };
    ContractService.prototype.addContract = function (contract) {
        var lastId = this.contracts.map(function (c) { return c.id; }).sort()[this.contracts.length - 1];
        contract.id = lastId + 1;
        this.contracts.push(contract);
    };
    ContractService.prototype.getById = function (id) {
        return this.contracts.find(function (c) { return c.id == id; });
    };
    ContractService.prototype.editContract = function (contract) {
        var index = this.contracts.findIndex(function (c) { return c.id == contract.id; });
        this.contracts.splice(index, 1, contract);
    };
    ContractService.prototype.getConfiguration = function () {
        return this.configuration;
    };
    ContractService.prototype.editConfiguration = function (conf) {
        this.configuration = conf;
    };
    ContractService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"], _client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/services/example.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/example.service.ts ***!
  \*********************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var ExampleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleService, _super);
    function ExampleService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Ejemplo de como hacer un GET a la API
    ExampleService.prototype.exampleGet = function (param) {
        // Le paso un parametro
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('parametro', param);
        return this.http.get(this.pathAPI + '/db').map(function (res) {
            return res || null;
        });
    };
    ExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ExampleService);
    return ExampleService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Product */ "./src/app/models/Product.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.service */ "./src/app/services/client.service.ts");






var ProductService = /** @class */ (function () {
    function ProductService(clientService) {
        this.clientService = clientService;
        this.products = [
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 1, name: 'CRM', version: '2.0.5', clientCode: '123', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 2, name: 'CRM', version: '2.0.5', clientCode: '999', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 3, name: 'CRM', version: '3.1.1', clientCode: 'A8D', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 4, name: 'BI', version: '3.0.1', clientCode: 'A8D', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 5, name: 'BI', version: '2.0.5', clientCode: '999', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 6, name: 'ERP', version: '2.0.5', clientCode: '123', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 7, name: 'ERP', version: '2.1.5', clientCode: 'PM5', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 8, name: 'IMS', version: '2.0.4', clientCode: '354', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 9, name: 'IMS', version: '2.6.5', clientCode: '456', requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 10, name: 'IMS', version: '2.0.5', clientCode: '999', requirements: [] }),
        ];
    }
    // Ejemplo de como hacer un GET a la API
    ProductService.prototype.getProducts = function () {
        var _this = this;
        this.products.forEach(function (p) {
            /// OBTENGO CLIENTES
            p.client = _this.clientService.getClientByCode(p.clientCode);
        });
        return this.products;
    };
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getRequirementsByProduct = function (productId) {
        return this.products.find(function (p) { return p.id == productId; }).requirements;
    };
    ProductService.prototype.getProductsByClient = function (clientCode) {
        return this.products.filter(function (p) { return p.clientCode == clientCode; });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Project */ "./src/app/models/Project.ts");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var _models_ProjectType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ProjectType */ "./src/app/models/ProjectType.ts");





var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projects = [];
        var proyecto = new _models_Project__WEBPACK_IMPORTED_MODULE_2__["default"]();
        proyecto.code = 'COD1';
        proyecto.name = 'PSA';
        proyecto.leader = 'Fernando Soluzzia';
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = 'PSA Proyecto Basse';
        proyecto.currentVersion = 'Alpha';
        proyecto.tasks = [
            new _models_Task__WEBPACK_IMPORTED_MODULE_3__["default"]('Tarea 1', 'Fernando Soluzzia', _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskState"].COMPLETED, _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskPriority"].HIGH, 5, 5, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_3__["default"]('Tarea 2', 'Fernando Soluzzia', _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskState"].DEVELOPMENT, _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskPriority"].MEDIUM, 2, 1, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_3__["default"]('Tarea 3', 'Felipe Codeo', _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskState"].PENDING, _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskPriority"].LOW, 1, 0, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_3__["default"]('Tarea 4', null, _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskState"].PENDING, _models_Task__WEBPACK_IMPORTED_MODULE_3__["TaskPriority"].MEDIUM, 5, 0, proyecto.code)
        ];
        proyecto.type = _models_ProjectType__WEBPACK_IMPORTED_MODULE_4__["PROJECT_TYPE_DEV"];
        this.projects.push(proyecto);
    }
    ProjectService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectService.prototype.saveProject = function (project) {
        this.projects.push(project);
    };
    ProjectService.prototype.getProject = function (id) {
        var results = this.projects.filter(function (p) { return p.code === id; });
        return results.length ? results[0] : null;
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/risk.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/risk.service.ts ***!
  \******************************************/
/*! exports provided: RiskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskService", function() { return RiskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Risk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Risk */ "./src/app/models/Risk.ts");



var RiskService = /** @class */ (function () {
    function RiskService() {
        this.risks = [];
        var riesgo = new _models_Risk__WEBPACK_IMPORTED_MODULE_2__["default"]();
        riesgo.id = 1;
        riesgo.motive = "Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros";
        riesgo.description = "Baja disponibilidad de recursos";
        riesgo.impact = 0.7;
        riesgo.probability = 0.4;
        riesgo.project_code = "COD1";
        this.risks.push(riesgo);
        var riesgo = new _models_Risk__WEBPACK_IMPORTED_MODULE_2__["default"]();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9;
        riesgo.probability = 0.7;
        riesgo.project_code = "COD1";
        this.risks.push(riesgo);
    }
    RiskService.prototype.getRisks = function () {
        return this.risks;
    };
    RiskService.prototype.saveRisk = function (risk) {
        this.risks.push(risk);
    };
    RiskService.prototype.getRisk = function (id) {
        var results = this.risks.filter(function (p) { return p.id === id; });
        return results.length ? results[0] : null;
    };
    RiskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RiskService);
    return RiskService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "./src/app/services/project.service.ts");



var TaskService = /** @class */ (function () {
    function TaskService(projectService) {
        this.projectService = projectService;
    }
    TaskService.prototype.getTasksByProject = function (projectId) {
        var project = this.projectService.getProject(projectId);
        return project.tasks;
    };
    TaskService.prototype.addTask = function (task) {
        var project = this.projectService.getProject(task.projectId);
        project.addTask(task);
    };
    TaskService.prototype.setTaskAsignee = function (taskName, projectId, newAsignee) {
        var project = this.projectService.getProject(projectId);
        var task = project.tasks.find(function (t) { return t.name === taskName; });
        task.asignee = newAsignee;
    };
    TaskService.prototype.setTaskState = function (taskName, projectId, newState) {
        var project = this.projectService.getProject(projectId);
        var task = project.tasks.find(function (t) { return t.name === taskName; });
        task.state = newState;
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/ticket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ticket.service.ts ***!
  \********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");





var TicketService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TicketService, _super);
    function TicketService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tickets = [
            { numeroTicket: 1, clienteCode: "123", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: 'Desarrollo' },
            { numeroTicket: 2, clienteCode: "123", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: '' },
            { numeroTicket: 3, clienteCode: "999", tipo: 'Incidente', producto: 'SAP', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Pablo Juanes', fechaAlta: new Date(), departamento: '' },
            { numeroTicket: 4, clienteCode: "456", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Facundo Gonzalez', fechaAlta: new Date(), departamento: '' },
            { numeroTicket: 5, clienteCode: "354", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Gonzalo Facundez', fechaAlta: new Date(), departamento: '' },
        ];
        return _this;
    }
    // Ejemplo de como hacer un GET a la API
    TicketService.prototype.getTickets = function () {
        return this.tickets;
    };
    TicketService.prototype.getTicket = function (id) {
        var resultado = null;
        this.tickets.forEach(function (element) {
            if (element.numeroTicket == id) {
                resultado = element;
            }
        });
        return resultado;
    };
    TicketService.prototype.addTicket = function (ticket) {
        var lastId = this.tickets.map(function (c) { return c.numeroTicket; }).sort()[this.tickets.length - 1];
        ticket.numeroTicket = lastId + 1;
        this.tickets.push(ticket);
    };
    TicketService.prototype.getIncidentsByClient = function (clientCode) {
        return this.tickets.filter(function (t) { return t.tipo == 'Incidente' && t.clienteCode == clientCode; });
    };
    TicketService.prototype.getResponsables = function () {
        var results = this.removeDuplicates(this.tickets, 'responsable');
        return results;
    };
    TicketService.prototype.removeDuplicates = function (originalArray, prop) {
        var newArray = [];
        var lookupObject = {};
        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }
        for (i in lookupObject) {
            newArray.push(lookupObject[i][prop]);
        }
        return newArray;
    };
    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TicketService);
    return TicketService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



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

module.exports = __webpack_require__(/*! /home/mpicco/uba/aninfo/codigo/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var _components_project_risks_new_risk_new_risk_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project-risks/new-risk/new-risk.component */ "./src/app/components/project-risks/new-risk/new-risk.component.ts");
/* harmony import */ var _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/dashboard/clients-dashboard.component */ "./src/app/components/clients/dashboard/clients-dashboard.component.ts");
/* harmony import */ var _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clients/new/new-client.component */ "./src/app/components/clients/new/new-client.component.ts");
/* harmony import */ var _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contracts/edit/edit-contract.component */ "./src/app/components/contracts/edit/edit-contract.component.ts");
/* harmony import */ var _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ticket-detalle/ticket-detalle.component */ "./src/app/components/ticket-detalle/ticket-detalle.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product/details/product-details.component */ "./src/app/components/product/details/product-details.component.ts");
/* harmony import */ var _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/contracts/configuration/contracts-configuration.component */ "./src/app/components/contracts/configuration/contracts-configuration.component.ts");
/* harmony import */ var _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/soporte-nuevo-ticket/soporte-nuevo-ticket.component */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts");
/* harmony import */ var _components_ticket_nueva_tarea_ticket_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ticket-nueva-tarea/ticket-nueva-tarea.component */ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.ts");
/* harmony import */ var _components_resources_dashboard_resources_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/resources/dashboard/resources-dashboard.component */ "./src/app/components/resources/dashboard/resources-dashboard.component.ts");
/* harmony import */ var _components_resources_assignment_resource_assignment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/resources/assignment/resource-assignment.component */ "./src/app/components/resources/assignment/resource-assignment.component.ts");
/* harmony import */ var _components_resources_unassignment_resource_unassignment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/resources/unassignment/resource-unassignment.component */ "./src/app/components/resources/unassignment/resource-unassignment.component.ts");
/* harmony import */ var _components_resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/resource-details/resource-details.component */ "./src/app/components/resource-details/resource-details.component.ts");





























var routes = [
    { path: 'proyectos', component: _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDashboardComponent"] },
    { path: 'equipos', component: _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["TeamsDashboardComponent"] },
    { path: 'operaciones', component: _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["OperationsDashboardComponent"] },
    { path: 'productos', component: _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["ProductDashboardComponent"] },
    { path: 'contratos', component: _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["ContractDashboardComponent"] },
    { path: 'recursos', component: _components_resources_dashboard_resources_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ResourcesDashboardComponent"] },
    { path: 'recursos/:id', component: _components_resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_28__["ResourceDetailsComponent"] },
    { path: 'recursos/:id/asignar', component: _components_resources_assignment_resource_assignment_component__WEBPACK_IMPORTED_MODULE_26__["ResourceAssignmentComponent"] },
    { path: 'recursos/:id/desasignar', component: _components_resources_unassignment_resource_unassignment_component__WEBPACK_IMPORTED_MODULE_27__["ResourceUnassignmentComponent"] },
    { path: 'nuevo-contrato', component: _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_15__["NewContractComponent"] },
    { path: 'editar-contrato', component: _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_19__["EditContractComponent"] },
    { path: 'configuracion-contrato', component: _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_22__["ContractConfigurationComponent"] },
    { path: 'nuevo-proyecto', component: _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__["NewProjectComponent"] },
    { path: 'proyecto/:id/tareas', component: _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_8__["ProjectTasksComponent"] },
    { path: 'proyecto/:id/detalle', component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDetailsComponent"] },
    { path: 'proyecto/:id/riesgos', component: _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["ProjectRisksDashboardComponent"] },
    { path: 'proyecto/:id/crear-riesgo', component: _components_project_risks_new_risk_new_risk_component__WEBPACK_IMPORTED_MODULE_16__["NewRiskComponent"] },
    { path: 'proyecto/:id/crear-tarea', component: _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"] },
    { path: 'productos/:id/detalle', component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_21__["ProductDetailsComponent"] },
    { path: 'soporte', component: _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_13__["SoporteComponent"] },
    { path: 'soporte/mistickets', component: _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_14__["SoporteMisTicketsComponent"] },
    { path: 'clientes', component: _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["ClientDashboardComponent"] },
    { path: 'nuevo-cliente', component: _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_18__["NewClientComponent"] },
    { path: 'ticketdetalle/:numeroTicket', component: _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_20__["TicketDetalleComponent"] },
    { path: 'soporte/nuevoticket', component: _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_23__["SoporteNuevoTicketComponent"] },
    { path: 'ticketdetalle/:numeroTicket/tarea', component: _components_ticket_nueva_tarea_ticket_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_24__["TicketNuevaTareaComponent"] },
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
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]];
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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product/dashboard/product-dashboard.component */ "./src/app/components/product/dashboard/product-dashboard.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/teams-dashboard/teams-dashboard.component */ "./src/app/components/teams-dashboard/teams-dashboard.component.ts");
/* harmony import */ var _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/operations-dashboard/operations-dashboard.component */ "./src/app/components/operations-dashboard/operations-dashboard.component.ts");
/* harmony import */ var _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/new-project/new-project.component */ "./src/app/components/new-project/new-project.component.ts");
/* harmony import */ var _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tasks/new/new-task.component */ "./src/app/components/tasks/new/new-task.component.ts");
/* harmony import */ var _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tasks/dashboard/project-tasks.component */ "./src/app/components/tasks/dashboard/project-tasks.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/project-risks/project-risks-dashboard.component */ "./src/app/components/project-risks/project-risks-dashboard.component.ts");
/* harmony import */ var _components_project_risks_new_risk_new_risk_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/project-risks/new-risk/new-risk.component */ "./src/app/components/project-risks/new-risk/new-risk.component.ts");
/* harmony import */ var _components_project_dashboard_dialogs_dialog_cancelar_proyecto_dialog_cancelar_proyecto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component */ "./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component.ts");
/* harmony import */ var _components_project_dashboard_dialogs_dialog_finalizar_proyecto_dialog_finalizar_proyecto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component */ "./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component.ts");
/* harmony import */ var _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project-dashboard/project-dashboard.component */ "./src/app/components/project-dashboard/project-dashboard.component.ts");
/* harmony import */ var _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/contracts/dashboard/contracts-dashboard.component */ "./src/app/components/contracts/dashboard/contracts-dashboard.component.ts");
/* harmony import */ var _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/soporte/soporte.component */ "./src/app/components/soporte/soporte.component.ts");
/* harmony import */ var _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/soporte-mis-tickets/soporte-mis-tickets.component */ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.ts");
/* harmony import */ var _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/contracts/new/new-contract.component */ "./src/app/components/contracts/new/new-contract.component.ts");
/* harmony import */ var _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/clients/dashboard/clients-dashboard.component */ "./src/app/components/clients/dashboard/clients-dashboard.component.ts");
/* harmony import */ var _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/clients/new/new-client.component */ "./src/app/components/clients/new/new-client.component.ts");
/* harmony import */ var _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/contracts/edit/edit-contract.component */ "./src/app/components/contracts/edit/edit-contract.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/product/details/product-details.component */ "./src/app/components/product/details/product-details.component.ts");
/* harmony import */ var _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/contracts/configuration/contracts-configuration.component */ "./src/app/components/contracts/configuration/contracts-configuration.component.ts");
/* harmony import */ var _components_resources_dashboard_resources_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/resources/dashboard/resources-dashboard.component */ "./src/app/components/resources/dashboard/resources-dashboard.component.ts");
/* harmony import */ var _components_resources_assignment_resource_assignment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/resources/assignment/resource-assignment.component */ "./src/app/components/resources/assignment/resource-assignment.component.ts");
/* harmony import */ var _components_resources_unassignment_resource_unassignment_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/resources/unassignment/resource-unassignment.component */ "./src/app/components/resources/unassignment/resource-unassignment.component.ts");
/* harmony import */ var _components_resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/resource-details/resource-details.component */ "./src/app/components/resource-details/resource-details.component.ts");
/* harmony import */ var _components_resource_details_add_resource_skill_dialog_add_resource_skill_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component */ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.ts");
/* harmony import */ var _services_example_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/example.service */ "./src/app/services/example.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/contract.service */ "./src/app/services/contract.service.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/ticket-detalle/ticket-detalle.component */ "./src/app/components/ticket-detalle/ticket-detalle.component.ts");
/* harmony import */ var _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/soporte-nuevo-ticket/soporte-nuevo-ticket.component */ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.ts");
/* harmony import */ var _components_common_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/common/message-dialog/message-dialog.component */ "./src/app/components/common/message-dialog/message-dialog.component.ts");
/* harmony import */ var _components_ticket_nueva_tarea_ticket_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/ticket-nueva-tarea/ticket-nueva-tarea.component */ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.ts");

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
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
                _components_product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["ProductDashboardComponent"],
                _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_33__["ProductDetailsComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_teams_dashboard_teams_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["TeamsDashboardComponent"],
                _components_operations_dashboard_operations_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["OperationsDashboardComponent"],
                _components_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_17__["NewProjectComponent"],
                _components_tasks_dashboard_project_tasks_component__WEBPACK_IMPORTED_MODULE_19__["ProjectTasksComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDetailsComponent"],
                _components_project_dashboard_project_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ProjectDashboardComponent"],
                _components_contracts_dashboard_contracts_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["ContractDashboardComponent"],
                _components_contracts_new_new_contract_component__WEBPACK_IMPORTED_MODULE_29__["NewContractComponent"],
                _components_contracts_edit_edit_contract_component__WEBPACK_IMPORTED_MODULE_32__["EditContractComponent"],
                _components_soporte_soporte_component__WEBPACK_IMPORTED_MODULE_27__["SoporteComponent"],
                _components_soporte_mis_tickets_soporte_mis_tickets_component__WEBPACK_IMPORTED_MODULE_28__["SoporteMisTicketsComponent"],
                _components_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["ClientDashboardComponent"],
                _components_clients_new_new_client_component__WEBPACK_IMPORTED_MODULE_31__["NewClientComponent"],
                _components_ticket_detalle_ticket_detalle_component__WEBPACK_IMPORTED_MODULE_45__["TicketDetalleComponent"],
                _components_contracts_configuration_contracts_configuration_component__WEBPACK_IMPORTED_MODULE_34__["ContractConfigurationComponent"],
                _components_project_risks_project_risks_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["ProjectRisksDashboardComponent"],
                _components_project_risks_new_risk_new_risk_component__WEBPACK_IMPORTED_MODULE_22__["NewRiskComponent"],
                _components_project_dashboard_dialogs_dialog_cancelar_proyecto_dialog_cancelar_proyecto_component__WEBPACK_IMPORTED_MODULE_23__["DialogCancelarProyecto"],
                _components_project_dashboard_dialogs_dialog_finalizar_proyecto_dialog_finalizar_proyecto_component__WEBPACK_IMPORTED_MODULE_24__["DialogFinalizarProyecto"],
                _components_tasks_new_new_task_component__WEBPACK_IMPORTED_MODULE_18__["NewTaskComponent"],
                _components_soporte_nuevo_ticket_soporte_nuevo_ticket_component__WEBPACK_IMPORTED_MODULE_46__["SoporteNuevoTicketComponent"],
                _components_common_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_47__["MessageDialogComponent"],
                _components_ticket_nueva_tarea_ticket_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_48__["TicketNuevaTareaComponent"],
                _components_resources_dashboard_resources_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["ResourcesDashboardComponent"],
                _components_resource_details_resource_details_component__WEBPACK_IMPORTED_MODULE_38__["ResourceDetailsComponent"],
                _components_resources_assignment_resource_assignment_component__WEBPACK_IMPORTED_MODULE_36__["ResourceAssignmentComponent"],
                _components_resources_unassignment_resource_unassignment_component__WEBPACK_IMPORTED_MODULE_37__["ResourceUnassignmentComponent"],
                _components_resource_details_add_resource_skill_dialog_add_resource_skill_dialog_component__WEBPACK_IMPORTED_MODULE_39__["AddResourceSkillDialog"]
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
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"]
            ],
            entryComponents: [
                _components_common_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_47__["MessageDialogComponent"],
                _components_project_dashboard_dialogs_dialog_cancelar_proyecto_dialog_cancelar_proyecto_component__WEBPACK_IMPORTED_MODULE_23__["DialogCancelarProyecto"],
                _components_project_dashboard_dialogs_dialog_finalizar_proyecto_dialog_finalizar_proyecto_component__WEBPACK_IMPORTED_MODULE_24__["DialogFinalizarProyecto"],
                _components_resource_details_add_resource_skill_dialog_add_resource_skill_dialog_component__WEBPACK_IMPORTED_MODULE_39__["AddResourceSkillDialog"]
            ],
            providers: [
                _services_example_service__WEBPACK_IMPORTED_MODULE_40__["ExampleService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_41__["ProductService"],
                _services_contract_service__WEBPACK_IMPORTED_MODULE_42__["ContractService"],
                _services_ticket_service__WEBPACK_IMPORTED_MODULE_43__["TicketService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_44__["ClientService"],
                _config_config__WEBPACK_IMPORTED_MODULE_6__["AppConfig"]
            ],
            bootstrap: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"]]
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

module.exports = "\r\ntable {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL2Rhc2hib2FyZC9jbGllbnRzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9kYXNoYm9hcmQvY2xpZW50cy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/clients/dashboard/clients-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/dashboard/clients-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/nuevo-cliente\" mat-raised-button color=\"primary\">Nuevo cliente</button>\r\n\r\n<mat-divider style=\"margin: 5px\"></mat-divider>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" >\r\n\r\n    <ng-container matColumnDef=\"code\">\r\n      <th mat-header-cell *matHeaderCellDef> Código </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n  \r\n\r\n    <ng-container matColumnDef=\"address\">\r\n      <th mat-header-cell *matHeaderCellDef> Dirección </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n    </ng-container>\r\n  \r\n\r\n    <ng-container matColumnDef=\"phoneNumbers\">\r\n      <th mat-header-cell *matHeaderCellDef> Telefonos </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumbers}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef> Mail </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n    </ng-container>\r\n  \r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>"

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

module.exports = ".form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n    border:1px solid #ccc;\r\n    background-color: white;\r\n    padding:10px 20px;\r\n\r\n    \r\n}\r\n  \r\n  \r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL25ldy9uZXctY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjs7O0FBR0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvbmV3L25ldy1jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcclxuXHJcbiAgICBcclxufVxyXG4gIFxyXG4gIFxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/clients/new/new-client.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/clients/new/new-client.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Nuevo Cliente:</h4>\r\n<div class=\"form\">\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input [(ngModel)]=\"client.code\" matInput placeholder=\"Código\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input [(ngModel)]=\"client.name\" matInput placeholder=\"Nombre\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input [(ngModel)]=\"client.address\" matInput placeholder=\"Dirección\">\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field class=\"full-width\">\r\n        <input [(ngModel)]=\"client.phoneNumbers\" matInput placeholder=\"Telefonos\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n        <input [(ngModel)]=\"client.email\" matInput placeholder=\"EMail\">\r\n    </mat-form-field>\r\n\r\n    <button (click)=\"addClient()\" mat-raised-button color=\"primary\">Agregar</button>\r\n</div>\r\n\r\n\r\n"

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

/***/ "./src/app/components/common/message-dialog/message-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/common/message-dialog/message-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL21lc3NhZ2UtZGlhbG9nL21lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/common/message-dialog/message-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/message-dialog/message-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\r\n<div mat-dialog-content>\r\n  <p>{{data.message}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button matDialogClose cdkFocusInitial>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/common/message-dialog/message-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/message-dialog/message-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: MessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function() { return MessageDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MessageDialogComponent = /** @class */ (function () {
    function MessageDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-dialog',
            template: __webpack_require__(/*! ./message-dialog.component.html */ "./src/app/components/common/message-dialog/message-dialog.component.html"),
            styles: [__webpack_require__(/*! ./message-dialog.component.css */ "./src/app/components/common/message-dialog/message-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MessageDialogComponent);
    return MessageDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/contracts/configuration/contracts-configuration.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/contracts/configuration/contracts-configuration.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n  \r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvY29uZmlndXJhdGlvbi9jb250cmFjdHMtY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9jb25maWd1cmF0aW9uL2NvbnRyYWN0cy1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiAgXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contracts/configuration/contracts-configuration.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/contracts/configuration/contracts-configuration.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Configuraciones:</h4>\r\n<div class=\"form\">\r\n    <mat-form-field class=\"full-width\">\r\n        <span matPrefix>Mostrar alerta &nbsp;</span>\r\n        \r\n        <input type=\"number\" [(ngModel)]=\"configuration.daysBeforeExpiration\" matInput placeholder=\"Dias\" [formControl]=\"expireFormControl\"> \r\n        <span matSuffix>antes del vencimiento del contrato</span>\r\n        <mat-error *ngIf=\"expireFormControl.hasError('min')\">\r\n            Por favor ingresar un tiempo en días válido (> 0)\r\n        </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n            <span matPrefix>Mostrar alerta &nbsp;</span>\r\n            \r\n            <input type=\"number\" [(ngModel)]=\"configuration.hoursBeforeResponseLimit\" matInput placeholder=\"Horas\" [formControl]=\"responsetimeFormControl\">\r\n            <span matSuffix>antes del tiempo de respuesta limite</span>\r\n            <mat-error *ngIf=\"responsetimeFormControl.hasError('min')\">\r\n                Por favor ingresar un tiempo en horas válido (> 0)\r\n            </mat-error>\r\n        </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n        <span matPrefix>Mostrar alerta cuando se llega al &nbsp;</span>            \r\n        <input type=\"number\" [(ngModel)]=\"configuration.percentageOfTotalIncidents\" matInput placeholder=\"Porciento\" [formControl]=\"percentageFormControl\">\r\n        <span matSuffix>del limite de incidencias</span>\r\n        <mat-error *ngIf=\"percentageFormControl.hasError('min') || percentageFormControl.hasError('max')\">\r\n            Por favor ingresar un porcentaje válido (0 - 100)%\r\n        </mat-error>\r\n       \r\n    </mat-form-field>\r\n\r\n    \r\n\r\n</div>\r\n\r\n\r\n<button (click)=\"editConfiguration()\" mat-raised-button color=\"primary\">Modificar</button>"

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

module.exports = "\r\ntable {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvZGFzaGJvYXJkL2NvbnRyYWN0cy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9kYXNoYm9hcmQvY29udHJhY3RzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/contracts/dashboard/contracts-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/contracts/dashboard/contracts-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button routerLink=\"/nuevo-contrato\" mat-raised-button color=\"primary\">Nuevo contrato</button>\r\n<button style=\"float: right\" routerLink=\"/configuracion-contrato\" mat-raised-button color=\"primary\">Configuración</button>\r\n\r\n<mat-divider style=\"margin: 5px\"></mat-divider>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" >\r\n\r\n    <ng-container matColumnDef=\"client\">\r\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.client?.name}} </td>\r\n    </ng-container>\r\n  \r\n\r\n    <ng-container matColumnDef=\"startDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Fecha Inicio </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.startDate?.toLocaleDateString()}} </td>\r\n    </ng-container>\r\n  \r\n\r\n    <ng-container matColumnDef=\"endDate\">\r\n      <th mat-header-cell *matHeaderCellDef> Fecha Fin </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate?.toLocaleDateString()}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"incidentLimit\">\r\n      <th mat-header-cell *matHeaderCellDef> Limite de incidentes </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.incidentLimit}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"responseTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Tiempo de respuesta(hs) </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.responseTime}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"alert\">\r\n      <th mat-header-cell *matHeaderCellDef> Alerta </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n          <button *ngIf=\"element.showAlert\" matTooltip=\"{{element.alertMessages}}\" mat-button mat-icon-button>\r\n            <i class=\"material-icons\">\r\n              warning\r\n            </i>\r\n          </button>\r\n          \r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edicion\">\r\n      <th mat-header-cell *matHeaderCellDef> Editar </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-button mat-icon-button (click)=\"editContract(element)\">\r\n            <i class=\"material-icons\">\r\n              edit\r\n            </i>\r\n          </button>\r\n          \r\n      </td>\r\n    </ng-container>\r\n  \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  \r\n  "

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

module.exports = ".form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n    border:1px solid #ccc;\r\n    background-color: white;\r\n    padding:10px 20px;\r\n\r\n    \r\n}\r\n  \r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvZWRpdC9lZGl0LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJhY3RzL2VkaXQvZWRpdC1jb250cmFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG5cclxuICAgIFxyXG59XHJcbiAgXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contracts/edit/edit-contract.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/contracts/edit/edit-contract.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Editar Contrato:</h4>\r\n<div class=\"form\">\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-label>Client</mat-label>\r\n      <mat-select [disabled]=\"true\" [(ngModel)]=\"contract.clientCode\">\r\n        <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\r\n          {{client.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input [disabled]=\"true\" matInput [matDatepicker]=\"pickerStart\" [(ngModel)]=\"contract.startDate\" placeholder=\"Fecha de incio\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pickerStart></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]=\"contract.endDate\" placeholder=\"Fecha de Finalización\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pickerEnd></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input type=\"number\" [(ngModel)]=\"contract.incidentLimit\" matInput placeholder=\"Limite de incidentes\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input type=\"number\" [(ngModel)]=\"contract.responseTime\" matInput placeholder=\"Tiempo de respuesta (hs)\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea [(ngModel)]=\"contract.description\" matInput placeholder=\"Descripción\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea [(ngModel)]=\"contract.penalty\" matInput placeholder=\"Penalidad\"></textarea>\r\n    </mat-form-field>\r\n</div>\r\n\r\n\r\n<button (click)=\"editContract()\" mat-raised-button color=\"primary\">Modificar</button>"

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

module.exports = ".form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n    border:1px solid #ccc;\r\n    background-color: white;\r\n    padding:10px 20px;\r\n\r\n    \r\n}\r\n  \r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvbmV3L25ldy1jb250cmFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXOztJQUVYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCOzs7QUFHckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9uZXcvbmV3LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuICBcclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/contracts/new/new-contract.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/contracts/new/new-contract.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Nuevo Contrato:</h4>\r\n<div class=\"form\">\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-label>Client</mat-label>\r\n      <mat-select [(ngModel)]=\"contract.clientCode\">\r\n        <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\r\n          {{client.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput [matDatepicker]=\"pickerStart\" [(ngModel)]=\"contract.startDate\" placeholder=\"Fecha de incio\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pickerStart></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]=\"contract.endDate\" placeholder=\"Fecha de Finalización\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pickerEnd></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input type=\"number\" [(ngModel)]=\"contract.incidentLimit\" matInput placeholder=\"Limite de incidentes\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input type=\"number\" [(ngModel)]=\"contract.responseTime\" matInput placeholder=\"Tiempo de respuesta (hs)\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea [(ngModel)]=\"contract.description\" matInput placeholder=\"Descripción\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <textarea [(ngModel)]=\"contract.penalty\" matInput placeholder=\"Penalidad\"></textarea>\r\n    </mat-form-field>\r\n\r\n    \r\n<button (click)=\"addContract()\" mat-raised-button color=\"primary\">Agregar</button>\r\n</div>\r\n\r\n"

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

module.exports = ".proyect-form-wrapper {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.proyect-form {\r\n    min-width: 150px;\r\n    max-width: 700px;\r\n    width: 100%;\r\n    border:1px solid #ccc;\r\n     background-color: white;\r\n     padding:10px 20px;\r\n}\r\n\r\n.proyect-form-input {\r\n    width: 100%;\r\n}\r\n\r\n.alineado-derecha {\r\n    display: block;\r\n    margin: 0 0 0 auto;\r\n}\r\n\r\n#new-project-result{\r\n    color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3llY3QtZm9ybS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJveWVjdC1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5wcm95ZWN0LWZvcm0taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGluZWFkby1kZXJlY2hhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG59XHJcblxyXG4jbmV3LXByb2plY3QtcmVzdWx0e1xyXG4gICAgY29sb3I6ICNmNDQzMzY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\r\n  <br>\r\n  <br>\r\n  <h2>Nuevo Proyecto</h2>\r\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"submit()\" class=\"proyect-form\">\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <input matInput placeholder=\"Nombre\" [formControl]=\"projectForm.get('name')\" id=\"new-project-name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <input matInput class=\"proyect-form-input\" placeholder=\"Codigo\" [formControl]=\"projectForm.get('code')\"\r\n        id=\"new-project-code\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <input matInput class=\"proyect-form-input\" placeholder=\"Lider de Proyecto\"\r\n        [formControl]=\"projectForm.get('leader')\" id=\"new-project-leader\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Fecha Inicio\" [formControl]=\"projectForm.get('beginDate')\"\r\n        id=\"new-project-begin-date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <input matInput [matDatepicker]=\"endPicker\" placeholder=\"Fecha Fin\" [formControl]=\"projectForm.get('endDate')\"\r\n        id=\"new-project-end-date\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #endPicker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <mat-select [formControl]=\"projectForm.get('type')\" placeholder=\"Tipo de Proyecto\">\r\n        <mat-option *ngFor=\"let projectType of projectTypes\" [value]=\"projectType\">\r\n          {{ projectType.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"proyect-form-input\">\r\n      <textarea matInput class=\"proyect-form-input\" placeholder=\"Descripcion\" matTextareaAutosize matAutosizeMinRows=5\r\n        [formControl]=\"projectForm.get('description')\" id=\"new-project-description\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" id=\"new-project-submit\" value=\"Enviar\">Crear</button>\r\n  </form>\r\n\r\n  <p id=\"new-project-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\r\n</div>"

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
/* harmony import */ var src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/ProjectState */ "./src/app/models/ProjectState.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");









var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(service, router, adapter) {
        this.service = service;
        this.router = router;
        this.adapter = adapter;
        this.projectTypes = src_app_models_ProjectType__WEBPACK_IMPORTED_MODULE_6__["PROJECT_TYPE_LIST"];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.adapter.setLocale('es');
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
            project.state = src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__["PROJECT_STATE_INITIAL"];
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
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]])
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

/***/ "./src/app/components/product/dashboard/product-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/product/dashboard/product-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ntable {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2Rhc2hib2FyZC9wcm9kdWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9kYXNoYm9hcmQvcHJvZHVjdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/product/dashboard/product-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/dashboard/product-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Portafolio de Productos</h1>\r\n  <br>\r\n  <br>\r\n\r\n  <h4>Filtros</h4>\r\n  <mat-form-field>\r\n    <mat-label>Cliente</mat-label>\r\n    <mat-select [(value)]=\"clientFilter\">\r\n      <mat-option [value]=\"\"></mat-option>\r\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\r\n        {{client.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  &nbsp;\r\n  <mat-form-field>\r\n    <mat-label>Producto</mat-label>\r\n    <mat-select [(value)]=\"prodFilter\">\r\n      <mat-option [value]=\"\"></mat-option>\r\n      <mat-option *ngFor=\"let prod of productNames\" [value]=\"prod\">\r\n        {{prod}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <br />\r\n  <button mat-button mat-raised-button style=\"margin-right: 20px;\" (click)=\"filter()\">Aplicar filtro <mat-icon>search\r\n    </mat-icon></button>\r\n  <button mat-button mat-raised-button (click)=\"resetFilter()\">Borrar filtro<mat-icon>delete</mat-icon></button>\r\n  <table style=\"margin-top: 20px\" mat-table [dataSource]=\"dataSource\">\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"version\">\r\n      <th mat-header-cell *matHeaderCellDef> Versión </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"client\">\r\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.client?.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"detail\">\r\n      <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n\r\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\r\n          routerLink=\"/productos/{{element.id}}/detalle\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">description</mat-icon>\r\n          Detalle\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n</div>"

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
            result = result.filter(function (d) { return d.client.code == _this.clientFilter; });
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

module.exports = ".detalle-producto{\r\n    border:1px solid #ccc; \r\n    background-color: white;    \r\n    border-radius: 16px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.subtitulo-detalle{\r\n    display: inline-block; \r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWxsZS1wcm9kdWN0b3tcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYzsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN1YnRpdHVsby1kZXRhbGxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIHdpZHRoOiAyMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/product/details/product-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/details/product-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n    <h1 style=\"text-align: center;\"> Portafolio de Producto</h1>\r\n    <br>\r\n    <h2>Detalle de Producto</h2>\r\n\r\n    <br>\r\n    <div class=\"detalle-producto\">\r\n        <mat-list role=\"list\">\r\n            <mat-list-item role=\"listitem\">\r\n                <div class=\"subtitulo-detalle\">\r\n                    <b>Nombre</b>\r\n                </div>\r\n                {{product.name}}\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n                <div class=\"subtitulo-detalle\">\r\n                    <b>Version</b>\r\n                </div>\r\n                {{product.version}}\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n                <div class=\"subtitulo-detalle\">\r\n                    <b>Codigo de Cliente</b>\r\n                </div>\r\n                {{product.client.code}}\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n                <div class=\"subtitulo-detalle\">\r\n                    <b>Cliente</b>\r\n                </div>\r\n                {{product.client.name}}\r\n            </mat-list-item>\r\n\r\n\r\n            <mat-list-item role=\"listitem\">\r\n                <div class=\"subtitulo-detalle\">\r\n                    <b>Requerimientos</b>\r\n                </div>\r\n                <br>\r\n\r\n            </mat-list-item>\r\n\r\n            <mat-list-item role=\"listitem\">\r\n                <ul>\r\n                    <li *ngFor=\"let req of product.requirements\">\r\n                        {{ req.description }}\r\n                    </li>\r\n                    <br>\r\n                </ul>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.requirements = null;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var idParam = this.route.snapshot.paramMap.get('id');
        var id = parseInt(idParam);
        this.getProduct(id);
    };
    ProductDetailsComponent.prototype.getProduct = function (id) {
        this.product = this.service.getProductById(id);
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/components/product/details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/components/product/details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: DialogCancelarProyecto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCancelarProyecto", function() { return DialogCancelarProyecto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");



var DialogCancelarProyecto = /** @class */ (function () {
    function DialogCancelarProyecto(service) {
        this.service = service;
    }
    DialogCancelarProyecto.prototype.cancelarProyecto = function () {
        this.service.cancelProject(this.projectCode);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogCancelarProyecto.prototype, "projectCode", void 0);
    DialogCancelarProyecto = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-cancelar-proyecto',
            template: __webpack_require__(/*! ./dialog-cancelar-proyecto.html */ "./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], DialogCancelarProyecto);
    return DialogCancelarProyecto;
}());



/***/ }),

/***/ "./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"Cancelar proyecto\">warning</mat-icon>\r\n    Cancelar Proyecto</h1>\r\n<div mat-dialog-content>\r\n    <p>¿Esta seguro de cancelar el proyecto?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button matDialogClose>Cerrar</button>\r\n    <button mat-button matDialogClose style=\"background-color:#f44336;\" (click)=\"cancelarProyecto()\">Cancelar</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DialogFinalizarProyecto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFinalizarProyecto", function() { return DialogFinalizarProyecto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");




var DialogFinalizarProyecto = /** @class */ (function () {
    function DialogFinalizarProyecto(service, dialogRef) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.mostrarMensajeError = false;
    }
    DialogFinalizarProyecto.prototype.finalizarProyecto = function () {
        if (this.service.finalizeProject(this.projectCode)) {
            this.dialogRef.close();
        }
        else {
            this.mostrarMensajeError = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFinalizarProyecto.prototype, "projectCode", void 0);
    DialogFinalizarProyecto = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-finalizar-proyecto',
            template: __webpack_require__(/*! ./dialog-finalizar-proyecto.html */ "./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DialogFinalizarProyecto);
    return DialogFinalizarProyecto;
}());



/***/ }),

/***/ "./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Finalizar el Proyecto</h1>\r\n<div mat-dialog-content>\r\n    <p>¿Esta seguro de querer finalizar el proyecto?</p>\r\n    <p>Recuerde que debe tener todas las tareas en estado finalizado para poder cambiar el estado</p>\r\n    <p *ngIf=mostrarMensajeError style=\"color:#f44336\">\r\n        Ha ocurrido un error. No puede finalizar el proyecto si existen tareas en curso\r\n    </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button matDialogClose>Cerrar</button>\r\n    <button mat-button style=\"background-color:#4caf50;\" (click)=\"finalizarProyecto()\">Finalizar</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.description{\r\n    background: lightgreen;\r\n}\r\n\r\n.tabla-fila-supero-el-umbral{\r\n    background-color: #ff5252;\r\n    color: white;\r\n    font-weight: 600\r\n}\r\n\r\n.container {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.projects-dashboard-table {\r\n    width: 100%;\r\n    background: none;\r\n}\r\n\r\n#new-project-button {\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntable td, table th {\r\n    text-align: center;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n.portafolio-proyectos-boton-acciones{\r\n    margin: 5px;\r\n}\r\n\r\n.portafolio-proyectos-boton-success{\r\n    background-color: #4caf50;\r\n}\r\n\r\n.portafolio-proyectos-boton-error{\r\n    background-color:#f44336;\r\n}\r\n\r\n.encabezado-tabla{\r\n    font-weight: 1000;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRhc2hib2FyZC9wcm9qZWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVFO0lBQ0UseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QtZGFzaGJvYXJkL3Byb2plY3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi50YWJsYS1maWxhLXN1cGVyby1lbC11bWJyYWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMtZGFzaGJvYXJkLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvcnRhZm9saW8tcHJveWVjdG9zLWJvdG9uLWFjY2lvbmVze1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiAgLnBvcnRhZm9saW8tcHJveWVjdG9zLWJvdG9uLXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4ucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tZXJyb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7XHJcbn1cclxuXHJcbiAgLmVuY2FiZXphZG8tdGFibGF7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\r\n  <br>\r\n  <br>\r\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" routerLink=\"/nuevo-proyecto\" mat-raised-button color=\"primary\">Crear Proyecto</button>\r\n  <br>\r\n  <h2>Listado de Proyectos</h2>\r\n  <table mat-table [dataSource]=\"projects\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"riesgos\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        <mat-icon *ngIf=\"project.atRisk()\" aria-hidden=\"false\" matTooltip=\"Hay {{project.risksAboveThreshold().length}} riesgo de {{project.risks.length}} que superan el máximo umbral permitido\"\r\n          aria-label=\"Tiene algun riesgo que supero el umbral\">warning</mat-icon>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"code\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Codigo </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.code}}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Nombre </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"currentVersion\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Version </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.currentVersion}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"leader\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Lider</th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.leader}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Tipo </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.type.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"state\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Estado </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.state.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dedicatedTime\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Horas dedicadas </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        {{project.dedicatedTime()}} \r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"acciones\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Acciones </th>\r\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\r\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/tareas\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment</mat-icon>\r\n          Tareas\r\n        </button>\r\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/detalle\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">description</mat-icon>\r\n          Detalles\r\n        </button>\r\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/riesgos\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment_late</mat-icon>\r\n          Riesgos\r\n        </button>\r\n        <button class=\"portafolio-proyectos-boton-acciones  portafolio-proyectos-boton-error\" *ngIf=\"estaEnCurso(project.state.name)\"\r\n          mat-raised-button color=\"primary\" (click)=\"openCancelarDialog(project.code)\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">error</mat-icon>\r\n          Cancelar\r\n        </button>\r\n        <button class=\"portafolio-proyectos-boton-acciones portafolio-proyectos-boton-success\" *ngIf=\"estaEnCurso(project.state.name)\"\r\n          mat-raised-button color=\"primary\" (click)=\"openFinalizarDialog(project.code)\">\r\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">done</mat-icon>\r\n          Finalizar\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  </table>\r\n\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_dialog_cancelar_proyecto_dialog_cancelar_proyecto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component */ "./src/app/components/project-dashboard/dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component.ts");
/* harmony import */ var _dialogs_dialog_finalizar_proyecto_dialog_finalizar_proyecto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component */ "./src/app/components/project-dashboard/dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component.ts");
/* harmony import */ var src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/ProjectState */ "./src/app/models/ProjectState.ts");








var ProjectDashboardComponent = /** @class */ (function () {
    function ProjectDashboardComponent(service, exampleService, dialog) {
        this.service = service;
        this.exampleService = exampleService;
        this.dialog = dialog;
    }
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['riesgos', 'code', 'name', 'currentVersion', 'leader', 'type', 'state', 'dedicatedTime', 'acciones'];
        this.projects = this.service.getProjects();
    };
    ProjectDashboardComponent.prototype.estaEnCurso = function (estadoProjecto) {
        return estadoProjecto != src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__["PROJECT_STATE_CANCEL"].name && estadoProjecto != src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__["PROJECT_STATE_FINALIZED"].name;
    };
    ProjectDashboardComponent.prototype.openCancelarDialog = function (projectCode) {
        var modalRef = this.dialog.open(_dialogs_dialog_cancelar_proyecto_dialog_cancelar_proyecto_component__WEBPACK_IMPORTED_MODULE_5__["DialogCancelarProyecto"], {
            width: '400px'
        });
        modalRef.componentInstance.projectCode = projectCode;
    };
    ProjectDashboardComponent.prototype.openFinalizarDialog = function (projectCode) {
        var modalRef = this.dialog.open(_dialogs_dialog_finalizar_proyecto_dialog_finalizar_proyecto_component__WEBPACK_IMPORTED_MODULE_6__["DialogFinalizarProyecto"], {
            width: '600px'
        });
        modalRef.componentInstance.projectCode = projectCode;
    };
    ProjectDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project-dashboard',
            template: __webpack_require__(/*! ./project-dashboard.component.html */ "./src/app/components/project-dashboard/project-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./project-dashboard.component.css */ "./src/app/components/project-dashboard/project-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
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

module.exports = ".portafolio-proyectos-boton-acciones{\r\n    margin-right: 10px;\r\n}\r\n\r\n.detalle-proyecto{\r\n    border:1px solid #ccc; \r\n    background-color: white;    \r\n    border-radius: 16px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.subtitulo-detalle{\r\n    display: inline-block; \r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tYWNjaW9uZXN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kZXRhbGxlLXByb3llY3Rve1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3VidGl0dWxvLWRldGFsbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgd2lkdGg6IDIwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\r\n  <br>\r\n  <h2>Detalle de Proyecto</h2>\r\n\r\n  <br>\r\n\r\n  <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\r\n    routerLink=\"/proyecto/{{project.code}}/tareas\">\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment</mat-icon>\r\n    Ver Tareas\r\n  </button>\r\n  <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\r\n    routerLink=\"/proyecto/{{project.code}}/riesgos\">\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment_late</mat-icon>\r\n    Ver Riesgos\r\n  </button>\r\n\r\n  <div class=\"detalle-proyecto\">\r\n    <mat-list role=\"list\">\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Codigo</b>\r\n        </div>\r\n        {{project.code}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Nombre</b>\r\n        </div>\r\n        {{project.name}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Lider del Proyecto</b>\r\n        </div>\r\n        {{project.leader}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Fecha de Inicio</b>\r\n        </div>\r\n        {{project.beginDate}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Fecha de Fin</b>\r\n        </div>\r\n        {{project.endDate}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Tipo de Proyecto</b>\r\n        </div>\r\n        {{project.type.name}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Version Actual</b>\r\n        </div>\r\n        {{project.currentVersion}}\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\">\r\n        <div class=\"subtitulo-detalle\">\r\n          <b>Descripcion</b>\r\n        </div>\r\n      </mat-list-item>\r\n      <mat-list-item role=\"listitem\"> {{project.description}}\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </div>\r\n\r\n\r\n</div>"

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

/***/ "./src/app/components/project-risks/new-risk/new-risk.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-risks/new-risk/new-risk.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.description{\r\n    background: lightgreen;\r\n}\r\n\r\n.container {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.projects-dashboard-table {\r\n    width: 100%;\r\n    background: none;\r\n}\r\n\r\n#new-project-button {\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  }\r\n\r\n.portafolio-proyectos-boton-acciones{\r\n      margin-right: 10px;\r\n  }\r\n\r\n.proyect-form-wrapper {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.risk-form {\r\n    min-width: 150px;\r\n    max-width: 700px;\r\n    width: 100%;\r\n    border:1px solid #ccc;\r\n     background-color: white;\r\n     padding:10px 20px;\r\n}\r\n\r\n.proyect-risk-input {\r\n    width: 100%;\r\n}\r\n\r\n.alineado-derecha {\r\n    display: block;\r\n    margin: 0 0 0 auto;\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJpc2tzL25ldy1yaXNrL25ldy1yaXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtLQUNwQix1QkFBdUI7S0FDdkIsaUJBQWlCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yaXNrcy9uZXctcmlzay9uZXctcmlzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMtZGFzaGJvYXJkLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcnRhZm9saW8tcHJveWVjdG9zLWJvdG9uLWFjY2lvbmVze1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucHJveWVjdC1mb3JtLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yaXNrLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICBwYWRkaW5nOjEwcHggMjBweDtcclxufVxyXG5cclxuLnByb3llY3Qtcmlzay1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFsaW5lYWRvLWRlcmVjaGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/project-risks/new-risk/new-risk.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-risks/new-risk/new-risk.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\r\n  <br>\r\n  <br>\r\n  <h2>Crear Riesgo</h2>\r\n  <form [formGroup]=\"riskForm\" (ngSubmit)=\"submit()\" class=\"risk-form\">\r\n    <mat-form-field class=\"risk-form-input\">\r\n      <input matInput placeholder=\"Motivo\" required [formControl]=\"riskForm.get('motive')\" id=\"new-risk-motive\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"risk-form-input\">\r\n      <input matInput class=\"risk-form-input\" required placeholder=\"Descripcion\" [formControl]=\"riskForm.get('description')\" id=\"new-risk-description\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"risk-form-input\">\r\n      <input matInput class=\"risk-form-input\" required type=\"number\" min=\"0\" max=\"1\" step=\".01\" placeholder=\"Impacto\" [formControl]=\"riskForm.get('impact')\" id=\"new-risk-impact\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"risk-form-input\">\r\n      <input matInput class=\"risk-form-input\"  required type=\"number\" min=\"0\" max=\"1\" step=\".01\" placeholder=\"Probabilidad\" [formControl]=\"riskForm.get('probability')\" id=\"new-risk-probability\">\r\n    </mat-form-field>\r\n\r\n    <br>\r\n    <button mat-raised-button color=\"primary\"  type=\"submit\" id=\"new-risk-submit\" value=\"Enviar\">Crear</button>\r\n  </form>\r\n\r\n  <p id=\"new-risk-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/project-risks/new-risk/new-risk.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-risks/new-risk/new-risk.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewRiskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRiskComponent", function() { return NewRiskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/risk.service */ "./src/app/services/risk.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_Risk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Risk */ "./src/app/models/Risk.ts");






var NewRiskComponent = /** @class */ (function () {
    function NewRiskComponent(service, router, redireccionRouter) {
        this.service = service;
        this.router = router;
        this.redireccionRouter = redireccionRouter;
    }
    NewRiskComponent.prototype.ngOnInit = function () {
        this.riskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            motive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            impact: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            probability: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.projectCode = this.router.snapshot.paramMap.get('id');
    };
    NewRiskComponent.prototype.submit = function () {
        if (this.riskForm.valid) {
            if (this.riskForm.value.impact < 0.0 || this.riskForm.value.impact > 1.0) {
                this.submitResultMessage = 'El valor del impacto debe encontrarse entre 0 y 1 .';
                return;
            }
            if (this.riskForm.value.probability < 0.0 || this.riskForm.value.probability > 1.0) {
                this.submitResultMessage = 'El valor de la probabilidad debe encontrarse entre 0 y 1 .';
                return;
            }
            var risk = new src_app_models_Risk__WEBPACK_IMPORTED_MODULE_5__["default"]();
            risk.motive = this.riskForm.value.motive;
            risk.description = this.riskForm.value.description;
            risk.impact = this.riskForm.value.impact;
            risk.probability = this.riskForm.value.probability;
            this.service.saveRisk(this.projectCode, risk);
            var redireccion = 'proyecto/' + this.projectCode + '/riesgos';
            this.redireccionRouter.navigate([redireccion]);
        }
        else {
            this.submitResultMessage = 'Faltan campos obligatorios.';
        }
    };
    NewRiskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-new-risk',
            template: __webpack_require__(/*! ./new-risk.component.html */ "./src/app/components/project-risks/new-risk/new-risk.component.html"),
            styles: [__webpack_require__(/*! ./new-risk.component.css */ "./src/app/components/project-risks/new-risk/new-risk.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_3__["RiskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewRiskComponent);
    return NewRiskComponent;
}());



/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.description{\r\n    background: lightgreen;\r\n}\r\n\r\n.container {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.projects-dashboard-table {\r\n    width: 100%;\r\n    background: none;\r\n}\r\n\r\n#new-risk-button {\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n  }\r\n\r\n.portafolio-proyectos-boton-acciones{\r\n      margin-right: 10px;\r\n  }\r\n\r\n.encabezado-tabla{\r\n    font-weight: 1000;\r\n    font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJpc2tzL3Byb2plY3Qtcmlza3MtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yaXNrcy9wcm9qZWN0LXJpc2tzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdHMtZGFzaGJvYXJkLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuI25ldy1yaXNrLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wb3J0YWZvbGlvLXByb3llY3Rvcy1ib3Rvbi1hY2Npb25lc3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbi5lbmNhYmV6YWRvLXRhYmxhe1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\"> Riesgos por Proyecto</h1>\r\n  <br>\r\n  <br>\r\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{projectCode}}/crear-riesgo\">Agregar Riesgo</button>\r\n  <br>\r\n  <br>\r\n  <table mat-table [dataSource]=\"risks\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"alerta\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"></th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\">\r\n        <mat-icon *ngIf=\"superoElUmbral(risk)\" aria-hidden=\"false\" matTooltip=\"El riesgo supero el máximo umbral permitido\"\r\n          aria-label=\"El riesgo supero el máximo umbral permitido\">warning</mat-icon>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Descripcion </th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.description}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"motive\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Motivo </th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.motive}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"impact\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Impacto </th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.impact | number:'1.1-3'}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"probability\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Probabilidad </th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.probability | number:'1.1-3'}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"umbral\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Exposicion </th>\r\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.getExposition() | number:'1.1-3'}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n  </table>\r\n\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/risk.service */ "./src/app/services/risk.service.ts");





var ProjectRisksDashboardComponent = /** @class */ (function () {
    function ProjectRisksDashboardComponent(service, route, exampleService) {
        this.service = service;
        this.route = route;
        this.exampleService = exampleService;
        this.MAXIMO_UMBRAL_PERMITIDO = 0.5;
    }
    ProjectRisksDashboardComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['alerta', 'motive', 'description', 'impact', 'probability', 'umbral'];
        var id = this.getProjectId();
        this.projectCode = id;
        this.MAXIMO_UMBRAL_PERMITIDO = 0.5;
        this.getRisks(id);
    };
    ProjectRisksDashboardComponent.prototype.getProjectId = function () {
        return this.route.snapshot.paramMap.get('id');
    };
    ProjectRisksDashboardComponent.prototype.getRisks = function (id) {
        this.risks = this.service.getRisksByProject(id);
    };
    ProjectRisksDashboardComponent.prototype.superoElUmbral = function (risk) {
        return risk.aboveThreshold(this.MAXIMO_UMBRAL_PERMITIDO);
    };
    ProjectRisksDashboardComponent.prototype.agregarEstilosSiSuperoElUmbral = function (risk) {
        if (this.superoElUmbral(risk)) {
            return {
                'background-color': '#ff5252',
                'color': 'white',
                'font-weight': 600
            };
        }
        return {};
    };
    ProjectRisksDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-project-risks-dashboard',
            template: __webpack_require__(/*! ./project-risks-dashboard.component.html */ "./src/app/components/project-risks/project-risks-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./project-risks-dashboard.component.css */ "./src/app/components/project-risks/project-risks-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_risk_service__WEBPACK_IMPORTED_MODULE_4__["RiskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_example_service__WEBPACK_IMPORTED_MODULE_1__["ExampleService"]])
    ], ProjectRisksDashboardComponent);
    return ProjectRisksDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skill-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL2FkZC1yZXNvdXJjZS1za2lsbC1kaWFsb2cvYWRkLXJlc291cmNlLXNraWxsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL2FkZC1yZXNvdXJjZS1za2lsbC1kaWFsb2cvYWRkLXJlc291cmNlLXNraWxsLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:250px; height: 300px;\">\r\n  <h1 mat-dialog-title>Ingrese Nuevo Skill</h1>\r\n  <div mat-dialog-content>\r\n    <form class=\"skill-form\" [formGroup]=\"newSkillForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Nombre\" formControlName=\"name\" required>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select formControlName=\"level\" placeholder=\"Nivel\" required>\r\n          <mat-option *ngFor=\"let level of skillLevels\" [value]=\"level\">\r\n            {{level}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Descripción\" formControlName=\"description\">\r\n      </mat-form-field>\r\n      <button mat-button color=\"primary\" type=\"submit\" style=\"margin-left: auto;\">Ok</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddResourceSkillDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResourceSkillDialog", function() { return AddResourceSkillDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_Skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Skill */ "./src/app/models/Skill.ts");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");






var AddResourceSkillDialog = /** @class */ (function () {
    function AddResourceSkillDialog(dialogRef, data, resourceService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.resourceService = resourceService;
        this.skillLevels = Object.values(_models_Skill__WEBPACK_IMPORTED_MODULE_4__["SkillLevels"]);
        this.newSkillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    AddResourceSkillDialog.prototype.onSubmit = function () {
        var _a = this.newSkillForm, valid = _a.valid, value = _a.value;
        if (valid) {
            this.resourceService.addSkillToResource(this.data.resourceId, value);
            this.dialogRef.close();
        }
    };
    AddResourceSkillDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-resource-skill-dialog',
            template: __webpack_require__(/*! ./add-resource-skill-dialog.component.html */ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-resource-skill-dialog.component.css */ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]])
    ], AddResourceSkillDialog);
    return AddResourceSkillDialog;
}());



/***/ }),

/***/ "./src/app/components/resource-details/resource-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/resource-details/resource-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtitle-actions {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: flex-start;\r\n  align-items: flex-start\r\n}\r\n\r\n.panel {\r\n  padding: 20px;\r\n  flex: 1 1 530px;\r\n}\r\n\r\n.collapsible-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding-left: 10px;\r\n}\r\n\r\n.primary-button {\r\n  height: 40px;\r\n  margin: 0 5px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL3Jlc291cmNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL3Jlc291cmNlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZS1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZsZXg6IDEgMSA1MzBweDtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/resource-details/resource-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/resource-details/resource-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Detalles: {{resource.name}}</h1>\r\n<h3>Identificación: {{resource.id}}</h3>\r\n<h3>Disponibilidad: {{resource.availableHours}}hs</h3>\r\n\r\n<div class=\"container\">\r\n  <div class=\"panel\">\r\n    <div class=\"subtitle-actions\">\r\n      <h2>Skills</h2>\r\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">Agregar</button>\r\n    </div>\r\n    <mat-accordion>\r\n      <mat-expansion-panel *ngFor=\"let skill of resource.skills\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>{{skill.name}}</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"collapsible-row\">\r\n          <p>Nivel: {{skill.level || '-'}}</p>\r\n          <button mat-icon-button color=\"primary\" disabled>\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Editar\">edit</mat-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"collapsible-row\">\r\n          <p>Descripción: {{skill.description || '-'}}</p>\r\n          <button mat-icon-button color=\"primary\" disabled>\r\n              <mat-icon aria-hidden=\"false\" aria-label=\"Editar\">edit</mat-icon>\r\n          </button>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"subtitle-actions\">\r\n      <h2>Proyectos</h2>\r\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" routerLink=\"/recursos/{{resource.id}}/asignar\">\r\n        Asignar\r\n      </button>\r\n    </div>\r\n    <table mat-table [dataSource]=\"resource.assignments\">\r\n      <ng-container matColumnDef=\"code\">\r\n        <th mat-header-cell *matHeaderCellDef> Código </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.code}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"projects\">\r\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.name}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"state\">\r\n        <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.state.name}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"beginDate\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"endDate\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.endDate.toLocaleDateString(\"es-AR\")}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"role\">\r\n          <th mat-header-cell *matHeaderCellDef> Rol </th>\r\n          <td mat-cell *matCellDef=\"let assignment;\">{{assignment.role}}</td>\r\n        </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n      <tr mat-row *matRowDef=\"let resources; columns: columnsToDisplay;\"></tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"subtitle-actions\">\r\n      <h2>Tareas</h2>\r\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" disabled>Asignar</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/resource-details/resource-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/resource-details/resource-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResourceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsComponent", function() { return ResourceDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var _add_resource_skill_dialog_add_resource_skill_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-resource-skill-dialog/add-resource-skill-dialog.component */ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.ts");






var ResourceDetailsComponent = /** @class */ (function () {
    function ResourceDetailsComponent(route, resourceService, dialog) {
        this.route = route;
        this.resourceService = resourceService;
        this.dialog = dialog;
        this.columnsToDisplay = ['code', 'projects', 'beginDate', 'endDate', 'role', 'state'];
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.resource = this.resourceService.getResourceById(id);
    };
    ResourceDetailsComponent.prototype.openDialog = function () {
        this.dialog.open(_add_resource_skill_dialog_add_resource_skill_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddResourceSkillDialog"], { data: { resourceId: this.resource.id } });
    };
    ResourceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource-details',
            template: __webpack_require__(/*! ./resource-details.component.html */ "./src/app/components/resource-details/resource-details.component.html"),
            styles: [__webpack_require__(/*! ./resource-details.component.css */ "./src/app/components/resource-details/resource-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ResourceDetailsComponent);
    return ResourceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/assignment/resource-assignment.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/assignment/resource-assignment.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n  background: lightblue;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checkbox {\r\n  padding-right: 20px;\r\n}\r\n\r\n.project-name {\r\n  width: 100%;\r\n}\r\n\r\n.roles-select {\r\n  width: 250px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.hours-select {\r\n  margin-right: 10px;\r\n}\r\n\r\n.assign-button {\r\n  justify-self: flex-end;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzaWdubWVudC9yZXNvdXJjZS1hc3NpZ25tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2lnbm1lbnQvcmVzb3VyY2UtYXNzaWdubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvbGVzLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhvdXJzLXNlbGVjdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduLWJ1dHRvbiB7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/resources/assignment/resource-assignment.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/resources/assignment/resource-assignment.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Asignar Recurso: {{resource.name}}</h1>\r\n\r\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\r\n\r\n<form #f=\"ngForm\" [formGroup]=\"assignForm\" (ngSubmit)=\"onSubmit(f)\">\r\n  <div class=\"container\" formArrayName=\"roleAndHoursForm\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let $index = index\"></tr>\r\n      <ng-container matColumnDef=\"select\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                        [checked]=\"rowSelection.hasValue() && isAllSelected()\"\r\n                        [indeterminate]=\"rowSelection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </th>\r\n        <td class=\"checkbox\" mat-cell *matCellDef=\"let row; let $index = index\" [formGroupName]=\"$index\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                        (change)=\"$event ? rowSelection.toggle(row) : null\"\r\n                        [checked]=\"rowSelection.isSelected(row)\"\r\n                        formControlName=\"selected\"\r\n                        >\r\n          </mat-checkbox>\r\n        </td>\r\n      </ng-container>\r\n      <!-- Project Column -->\r\n      <ng-container matColumnDef=\"project\">\r\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\r\n        <td class=\"project-name\" mat-cell *matCellDef=\"let project\"> {{project.name}} </td>\r\n      </ng-container>\r\n      <!-- Role Column -->\r\n      <ng-container matColumnDef=\"role\">\r\n        <th mat-header-cell *matHeaderCellDef> Rol </th>\r\n        <td mat-cell *matCellDef=\"let row; let $index = index;\" [formGroupName]=\"$index\">\r\n            <mat-form-field class=\"roles-select\">\r\n              <mat-select formControlName=\"role\" [required]=\"(assignForm.get('roleAndHoursForm')).at($index).value.selected\">\r\n                <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\r\n                  {{role}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n        </td>\r\n      </ng-container>\r\n      <!-- Hours Column -->\r\n      <ng-container matColumnDef=\"hours\">\r\n        <th mat-header-cell *matHeaderCellDef> Horas </th>\r\n        <td mat-cell *matCellDef=\"let row; let $index = index;\" [formGroupName]=\"$index\">\r\n          <mat-form-field class=\"hours-select\">\r\n            <input\r\n              matInput\r\n              type=\"number\"\r\n              formControlName=\"hours\"\r\n              min=\"1\"\r\n              [max]=\"resource.availableHours\"\r\n              [required]=\"(assignForm.get('roleAndHoursForm')).at($index).value.selected\"\r\n            />\r\n          </mat-form-field>\r\n        </td>\r\n      </ng-container>\r\n    </table>\r\n    <button\r\n      mat-raised-button\r\n      class=\"assign-button\"\r\n      color=\"primary\"\r\n      type=\"submit\"\r\n      [disabled]=\"rowSelection.isEmpty()\"\r\n    >\r\n      Asignar\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/resources/assignment/resource-assignment.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/resources/assignment/resource-assignment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ResourceAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceAssignmentComponent", function() { return ResourceAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_models_Resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Resource */ "./src/app/models/Resource.ts");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");









var ResourceAssignmentComponent = /** @class */ (function () {
    function ResourceAssignmentComponent(resourceService, projectService, route, formBuilder) {
        this.resourceService = resourceService;
        this.projectService = projectService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.displayedColumns = ['select', 'project', 'role', 'hours'];
        this.roles = Object.values(src_app_models_Resource__WEBPACK_IMPORTED_MODULE_6__["Roles"]);
        this.selection = [];
        this.assignForm = this.formBuilder.group({
            roleAndHoursForm: this.formBuilder.array([])
        });
    }
    ResourceAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.resource = this.resourceService.getResourceById(id);
        this.projects = this.projectService.getProjects();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.projects);
        this.rowSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.assignForm = this.formBuilder.group({
            roleAndHoursForm: this.formBuilder.array(this.projects.map(function () { return _this.formBuilder.group({
                selected: [false],
                role: [''],
                hours: ['']
            }); }))
        });
    };
    ResourceAssignmentComponent.prototype.onSelect = function (index) {
        if (this.selection.includes(index)) {
            this.selection = this.selection.filter(function (el) { return el !== index; });
        }
        else {
            this.selection = this.selection.concat([index]);
        }
    };
    ResourceAssignmentComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.assignForm, valid = _a.valid, value = _a.value;
        if (valid) {
            var roleAndHoursForm = value.roleAndHoursForm;
            roleAndHoursForm.map(function (value, index) {
                if (value.selected) {
                    _this.projectService.assignResource(_this.projects[index].code, _this.resource, value.role, value.hours);
                }
            });
        }
    };
    ResourceAssignmentComponent.prototype.isAllSelected = function () {
        var numSelected = this.rowSelection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ResourceAssignmentComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.rowSelection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.rowSelection.select(row); });
    };
    ResourceAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource-assignment',
            template: __webpack_require__(/*! ./resource-assignment.component.html */ "./src/app/components/resources/assignment/resource-assignment.component.html"),
            styles: [__webpack_require__(/*! ./resource-assignment.component.css */ "./src/app/components/resources/assignment/resource-assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ResourceAssignmentComponent);
    return ResourceAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/dashboard/resources-dashboard.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/resources/dashboard/resources-dashboard.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resources-button-row {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvZGFzaGJvYXJkL3Jlc291cmNlcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Rhc2hib2FyZC9yZXNvdXJjZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzb3VyY2VzLWJ1dHRvbi1yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/resources/dashboard/resources-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/dashboard/resources-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"resources-title\">Gestión de Recursos</h1>\r\n\r\n<div class=\"resources-button-row\">\r\n  <button id=\"\" routerLink=\"#\" mat-flat-button color=\"primary\" disabled>Generar Reporte</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\r\n\r\n<table mat-table [dataSource]=\"resources\">\r\n  <ng-container matColumnDef=\"recurso\">\r\n    <th mat-header-cell *matHeaderCellDef> Recurso </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      <a [routerLink]=\"['/recursos', resource.id]\"> {{resource.name}} </a>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"proyecto\">\r\n    <th mat-header-cell *matHeaderCellDef> Proyecto </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      <div *ngFor=\"let assignment of resource.assignments\">\r\n        {{assignment.project ? assignment.project.name : '-'}}\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"version\">\r\n    <th mat-header-cell *matHeaderCellDef> Versión </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      <div *ngFor=\"let assignment of resource.assignments\">\r\n        {{assignment.project ? assignment.project.currentVersion : '-'}}\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"beginDate\">\r\n    <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\r\n    <td mat-cell *matCellDef=\"let resource;\">\r\n        <div *ngFor=\"let assignment of resource.assignments\">\r\n          {{assignment.project && assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}\r\n        </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"endDate\">\r\n    <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\r\n    <td mat-cell *matCellDef=\"let resource;\">\r\n      <div *ngFor=\"let assignment of resource.assignments\">\r\n        {{assignment.project && assignment.project.endDate.toLocaleDateString(\"es-AR\")}}\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"rol\">\r\n    <th mat-header-cell *matHeaderCellDef> Rol </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      <div *ngFor=\"let assignment of resource.assignments\">\r\n        {{assignment.role || '-' }}\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"disponibilidad\">\r\n    <th mat-header-cell *matHeaderCellDef> Disponibilidad </th>\r\n    <td mat-cell *matCellDef=\"let resource\"> {{resource.availableHours}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"horasNoAsignadas\">\r\n    <th mat-header-cell *matHeaderCellDef> Horas no asignadas </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      {{calcRemainingHours(resource)}}\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"acciones\">\r\n    <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n    <td mat-cell *matCellDef=\"let resource\">\r\n      <button\r\n        mat-raised-button\r\n        color=\"primary\"\r\n        routerLink=\"/recursos/{{resource.id}}/asignar\"\r\n      >\r\n        Asignar\r\n      </button>\r\n      <button\r\n        mat-raised-button\r\n        color=\"secondary\"\r\n        routerLink=\"/recursos/{{resource.id}}/desasignar\"\r\n        [disabled]=\"calcRemainingHours(resource) === resource.availableHours\"\r\n        style=\"margin-left:10px;\"\r\n      >\r\n        Desasignar\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let resources; columns: columnsToDisplay;\"></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/resources/dashboard/resources-dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/resources/dashboard/resources-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ResourcesDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesDashboardComponent", function() { return ResourcesDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");



var ResourcesDashboardComponent = /** @class */ (function () {
    function ResourcesDashboardComponent(resourceService) {
        this.resourceService = resourceService;
        this.resources = [];
        this.columnsToDisplay = [
            'recurso',
            'proyecto',
            'version',
            'beginDate',
            'endDate',
            'rol',
            'disponibilidad',
            'horasNoAsignadas',
            'acciones'
        ];
    }
    ResourcesDashboardComponent.prototype.ngOnInit = function () {
        this.resources = this.resourceService.getResources();
    };
    ResourcesDashboardComponent.prototype.calcRemainingHours = function (resource) {
        return resource.availableHours - resource.assignments.reduce(function (acum, el) { return acum + el.hours; }, 0);
    };
    ResourcesDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resources-dashboard',
            template: __webpack_require__(/*! ./resources-dashboard.component.html */ "./src/app/components/resources/dashboard/resources-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./resources-dashboard.component.css */ "./src/app/components/resources/dashboard/resources-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
    ], ResourcesDashboardComponent);
    return ResourcesDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/resources/unassignment/resource-unassignment.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/resources/unassignment/resource-unassignment.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvdW5hc3NpZ25tZW50L3Jlc291cmNlLXVuYXNzaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL3VuYXNzaWdubWVudC9yZXNvdXJjZS11bmFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resources/unassignment/resource-unassignment.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/resources/unassignment/resource-unassignment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Desasignar Recurso: {{resource.name}}</h1>\r\n\r\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\r\n\r\n<div class=\"container\">\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"code\">\r\n      <th mat-header-cell *matHeaderCellDef> Código </th>\r\n      <td mat-cell *matCellDef=\"let assignment\">\r\n        {{assignment.project.code}}\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"project\">\r\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\r\n        <td mat-cell *matCellDef=\"let assignment\">\r\n          {{assignment.project.name}}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"beginDate\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">\r\n          {{assignment.project && assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"endDate\">\r\n        <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">\r\n          {{assignment.project && assignment.project.endDate.toLocaleDateString(\"es-AR\")}}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"role\">\r\n        <th mat-header-cell *matHeaderCellDef> Rol </th>\r\n        <td mat-cell *matCellDef=\"let assignment\">\r\n          {{assignment.role}}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"hours\">\r\n        <th mat-header-cell *matHeaderCellDef> Horas asignado </th>\r\n        <td mat-cell *matCellDef=\"let assignment\">\r\n          {{assignment.hours}}\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"state\">\r\n        <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.state.name}}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n        <td mat-cell *matCellDef=\"let resource; let $index = index\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"primary\"\r\n            (click)=\"unassign($index)\"\r\n          >\r\n            Desasignar\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n    <tr mat-row *matRowDef=\"let resource; columns: columnsToDisplay;\"></tr>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/resources/unassignment/resource-unassignment.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/resources/unassignment/resource-unassignment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResourceUnassignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceUnassignmentComponent", function() { return ResourceUnassignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");






var ResourceUnassignmentComponent = /** @class */ (function () {
    function ResourceUnassignmentComponent(resourceService, projectService, route, ref) {
        this.resourceService = resourceService;
        this.projectService = projectService;
        this.route = route;
        this.ref = ref;
        this.columnsToDisplay = ['code', 'project', 'beginDate', 'endDate', 'role', 'hours', 'state', 'actions'];
    }
    ResourceUnassignmentComponent.prototype.ngOnInit = function () {
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.resource = this.resourceService.getResourceById(id);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.resource.assignments);
    };
    ResourceUnassignmentComponent.prototype.unassign = function (index) {
        var code = this.resource.assignments[index].project.code;
        this.projectService.unassignResource(code, this.resource);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.resource.assignments);
    };
    ResourceUnassignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource-unassignment',
            template: __webpack_require__(/*! ./resource-unassignment.component.html */ "./src/app/components/resources/unassignment/resource-unassignment.component.html"),
            styles: [__webpack_require__(/*! ./resource-unassignment.component.css */ "./src/app/components/resources/unassignment/resource-unassignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ResourceUnassignmentComponent);
    return ResourceUnassignmentComponent;
}());



/***/ }),

/***/ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.example-button-row button, .example-button-row a {\r\n    margin-right: 8px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW1pcy10aWNrZXRzL3NvcG9ydGUtbWlzLXRpY2tldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUtbWlzLXRpY2tldHMvc29wb3J0ZS1taXMtdGlja2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/soporte-mis-tickets/soporte-mis-tickets.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\r\n  <button routerLink=\"/soporte\" mat-flat-button color=\"primary\">Overview</button>\r\n  <button routerLink=\"/soporte/mistickets\" mat-flat-button color=\"primary\">Mis\r\n    Tickets</button>\r\n  <button routerLink=\"/soporte/nuevoticket\" mat-flat-button color=\"primary\">Nuevo Ticket</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<h4>Filtros</h4>\r\n\r\n<mat-form-field>\r\n  <mat-label>Responsable</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\r\n      {{responsable}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-button (click)=\"filtrar(selected)\">Aplicar filtro<mat-icon>search</mat-icon></button>\r\n  <button mat-button (click)=\"borrarFiltro()\">Borrar filtro<mat-icon>delete</mat-icon></button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"filterDataSource\">\r\n\r\n  <ng-container matColumnDef=\"numeroTicket\">\r\n    <th mat-header-cell *matHeaderCellDef> Nro Ticket </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.numeroTicket}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"cliente\">\r\n    <th mat-header-cell *matHeaderCellDef> Cliente </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{this.getClient(element.clienteCode).name}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"producto\">\r\n    <th mat-header-cell *matHeaderCellDef> Producto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.producto}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"severidad\">\r\n    <th mat-header-cell *matHeaderCellDef> Severidad </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.severidad}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"tipo\">\r\n    <th mat-header-cell *matHeaderCellDef> Tipo </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.tipo}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"asunto\">\r\n    <th mat-header-cell *matHeaderCellDef> Asunto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.asunto}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"fechaAlta\">\r\n    <th mat-header-cell *matHeaderCellDef> Fecha Alta </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.fechaAlta?.toLocaleDateString()}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"estado\">\r\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.estado}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"opciones\">\r\n    <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-button>\r\n        <mat-icon routerLink=\"/ticketdetalle/{{element.numeroTicket}}\">remove_red_eye</mat-icon>\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>"

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

module.exports = ".example-button-row button, .example-button-row a {\r\n    margin-right: 8px;\r\n}\r\n.form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n\r\n    border:1px solid #ccc;\r\n    background-color: white;\r\n    padding:10px 20px;\r\n\r\n    \r\n}\r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW51ZXZvLXRpY2tldC9zb3BvcnRlLW51ZXZvLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW51ZXZvLXRpY2tldC9zb3BvcnRlLW51ZXZvLXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuICBcclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\r\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<h4>Nuevo Ticket</h4>\r\n\r\n<div class=\"form\">\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Cliente</mat-label>\r\n    <mat-select (selectionChange)=\"getProductsByClient()\" [(ngModel)]=\"nuevoTicket.clienteCode\">\r\n      <mat-option *ngFor=\"let cliente of clientes\" [value]=\"cliente.code\">\r\n        {{cliente.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Tipo de Ticket</mat-label>\r\n    <mat-select [(ngModel)]=\"nuevoTicket.tipo\">\r\n      <mat-option value=\"Incidente\">\r\n        Incidente\r\n      </mat-option>\r\n      <mat-option value=\"Segerencia\">\r\n        Sugerencia\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Producto</mat-label>\r\n    <mat-select [(ngModel)]=\"nuevoTicket.producto\">\r\n      <mat-option *ngFor=\"let prod of products\" [value]=\"prod\">\r\n        {{prod}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Severidad</mat-label>\r\n    <mat-select [(ngModel)]=\"nuevoTicket.severidad\">\r\n      <mat-option value=\"Baja\">\r\n        Baja\r\n      </mat-option>\r\n      <mat-option value=\"Media\">\r\n        Media\r\n      </mat-option>\r\n      <mat-option value=\"Alta\">\r\n        Alta\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <input [(ngModel)]=\"nuevoTicket.asunto\" matInput placeholder=\"Asunto\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Responsable</mat-label>\r\n    <mat-select [(ngModel)]=\"nuevoTicket.responsable\">\r\n      <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\r\n        {{responsable}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <textarea [(ngModel)]=\"nuevoTicket.descripcion\" matInput placeholder=\"Descripción\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Estado</mat-label>\r\n    <mat-select [(ngModel)]=\"nuevoTicket.estado\">\r\n      <mat-option value=\"Abierto\">\r\n        Abierto\r\n      </mat-option>\r\n      <mat-option value=\"En progreso\">\r\n        En progreso\r\n      </mat-option>\r\n      <mat-option value=\"Cerrado\">\r\n        Cerrado\r\n      </mat-option>\r\n      <mat-option value=\"Escalado a desarrollo\">\r\n        Escalado a desarrollo\r\n      </mat-option>\r\n      <mat-option value=\"Escalado a implementacion\">\r\n        Escalado a implementacion\r\n      </mat-option>\r\n      <mat-option value=\"A la espera del cliente\">\r\n        A la espera del cliente\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <button (click)=\"addTicket()\" mat-raised-button color=\"primary\">Agregar</button>\r\n</div>\r\n\r\n\r\n"

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
        var producto = this.nuevoTicket.producto.split(' ');
        this.nuevoTicket.producto = producto[0];
        this.nuevoTicket.vProducto = producto[1];
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

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.example-button-row button, .example-button-row a {\r\n    margin-right: 8px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlL3NvcG9ydGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUvc29wb3J0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/soporte/soporte.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/soporte/soporte.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\r\n  <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-flat-button color=\"primary\">Overview</button>\r\n  <button id=\"nav-router-mistickets\" routerLink=\"/soporte/mistickets\" mat-flat-button color=\"primary\">Mis\r\n    Tickets</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<h4>Filtros</h4>\r\n\r\n<mat-form-field>\r\n  <mat-label>Producto</mat-label>\r\n  <mat-select [(value)]=\"selected\">\r\n    <mat-option *ngFor=\"let producto of productos\" [value]=\"producto\">\r\n      {{producto}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-button (click)=\"filtrar(selected)\">Aplicar filtro<mat-icon>search</mat-icon></button>\r\n  <button mat-button (click)=\"borrarFiltro()\">Borrar filtro<mat-icon>delete</mat-icon></button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"filterDataSource\">\r\n\r\n  <ng-container matColumnDef=\"producto\">\r\n    <th mat-header-cell *matHeaderCellDef> Producto </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.producto}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"version\">\r\n    <th mat-header-cell *matHeaderCellDef> Version </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.vProducto}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"cliente\">\r\n    <th mat-header-cell *matHeaderCellDef> Cliente </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{this.getClient(element.clienteCode).name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"severidad\">\r\n    <th mat-header-cell *matHeaderCellDef> Severidad </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.severidad}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"responsable\">\r\n    <th mat-header-cell *matHeaderCellDef> Responsable </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.responsable}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"opciones\">\r\n    <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-button>\r\n        <mat-icon routerLink=\"/ticketdetalle/{{element.numeroTicket}}\">remove_red_eye</mat-icon>\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n"

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

module.exports = "mat-grid-tile {\r\n    background: lightblue;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9kYXNoYm9hcmQvcHJvamVjdC10YXNrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9kYXNoYm9hcmQvcHJvamVjdC10YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/tasks/dashboard/project-tasks.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tasks/dashboard/project-tasks.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\r\n  <h1 style=\"text-align: center;\">Gestion de Tareas</h1>\r\n  <br>\r\n  <br>\r\n\r\n  <table mat-table [dataSource]=\"tasks\" class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n      <td mat-cell *matCellDef=\"let task\"> {{task.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"asignee\">\r\n      <th mat-header-cell *matHeaderCellDef> Asignado a </th>\r\n      <td mat-cell *matCellDef=\"let task\">\r\n        <mat-form-field>\r\n          <mat-select value=\"{{task.asignee?.id || 0}}\" [compareWith]=\"compareResources\"\r\n            (selectionChange)=\"onAsigneeChange($event, task)\">\r\n            <mat-option *ngFor=\"let resource of resources\" [value]=\"resource.id\">\r\n              {{ resource.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"state\">\r\n      <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n      <td mat-cell *matCellDef=\"let task\">\r\n        <mat-form-field>\r\n          <mat-select value=\"{{task.state}}\" (selectionChange)=\"onStateChange($event, task)\">\r\n            <mat-option *ngFor=\"let state of priorities\" [value]=\"state\">\r\n              {{ state }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"priority\">\r\n      <th mat-header-cell *matHeaderCellDef> Prioridad </th>\r\n      <td mat-cell *matCellDef=\"let task\"> {{task.priority}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"estimatedTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Tiempo Estimado </th>\r\n      <td mat-cell *matCellDef=\"let task\"> {{task.estimatedTime}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dedicatedTime\">\r\n      <th mat-header-cell *matHeaderCellDef> Tiempo Dedicado </th>\r\n      <td mat-cell *matCellDef=\"let task\"> {{task.dedicatedTime}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <br>\r\n\r\n  <button routerLink=\"/proyecto/{{ getProjectId() }}/crear-tarea\" mat-raised-button color=\"primary\">Crear Tarea</button>\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/message-dialog/message-dialog.component */ "./src/app/components/common/message-dialog/message-dialog.component.ts");
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");
/* harmony import */ var src_app_models_Resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/Resource */ "./src/app/models/Resource.ts");









var ProjectTasksComponent = /** @class */ (function () {
    function ProjectTasksComponent(route, taskService, resourceService, dialog) {
        this.route = route;
        this.taskService = taskService;
        this.resourceService = resourceService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__["TASK_STATE_LIST"];
    }
    ProjectTasksComponent_1 = ProjectTasksComponent;
    ProjectTasksComponent.prototype.ngOnInit = function () {
        var id = this.getProjectId();
        this.getTasks(id);
        this.getResources(id);
    };
    ProjectTasksComponent.prototype.getTasks = function (id) {
        var tasks = this.taskService.getTasksByProject(id);
        this.tasks = tasks;
    };
    ProjectTasksComponent.prototype.refreshGrid = function () {
        console.log('refresh');
        this.getTasks(this.getProjectId());
    };
    ProjectTasksComponent.prototype.getResources = function (id) {
        var resources = this.resourceService.getResourcesByProject(id);
        resources.unshift(ProjectTasksComponent_1.EMPTY_RESOURCE);
        this.resources = resources;
    };
    ProjectTasksComponent.prototype.compareResources = function (a, b) {
        // fuerzo a que sean numeros
        a = parseInt(a.toString());
        b = parseInt(b.toString());
        if (a && b) {
            return a === b;
        }
        return false;
    };
    ProjectTasksComponent.prototype.getProjectId = function () {
        return this.route.snapshot.paramMap.get('id');
    };
    ProjectTasksComponent.prototype.onAsigneeChange = function (event, task) {
        var _this = this;
        var newAsigneeId = event.source.value;
        try {
            this.taskService.setTaskAsignee(task.name, task.projectId, newAsigneeId);
        }
        catch (error) {
            this.showDialog('Error al asignar', error.message, (function () {
                _this.refreshGrid();
            }).bind(this));
        }
    };
    ProjectTasksComponent.prototype.showDialog = function (title, message, afterClose) {
        var dialogRef = this.dialog.open(_common_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDialogComponent"], {
            width: '500px',
            data: { title: title, message: message }
        });
        if (afterClose) {
            dialogRef.afterClosed().subscribe(afterClose);
        }
    };
    ProjectTasksComponent.prototype.onStateChange = function (event, task) {
        var newState = event.source.value;
        this.taskService.setTaskState(task.name, task.projectId, newState);
    };
    var ProjectTasksComponent_1;
    ProjectTasksComponent.EMPTY_RESOURCE = new src_app_models_Resource__WEBPACK_IMPORTED_MODULE_8__["default"](0, '-', null, null, null);
    ProjectTasksComponent = ProjectTasksComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-tasks',
            template: __webpack_require__(/*! ./project-tasks.component.html */ "./src/app/components/tasks/dashboard/project-tasks.component.html"),
            styles: [__webpack_require__(/*! ./project-tasks.component.css */ "./src/app/components/tasks/dashboard/project-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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

module.exports = ".task-form {\r\n    min-width: 150px;\r\n    max-width: 700px;\r\n    width: 100%;\r\n    border:1px solid #ccc;\r\n    background-color: white;\r\n    padding:10px 20px;\r\n}\r\n\r\n.proyect-form-input {\r\n    width: 100%;\r\n}\r\n\r\n.task-form-wrapper {\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.task-form {\r\n    min-width: 150px;\r\n    max-width: 700px;\r\n    width: 100%;\r\n    border:1px solid #ccc;\r\n     background-color: white;\r\n     padding:10px 20px;\r\n}\r\n\r\n.task-form-input {\r\n    width: 100%;\r\n}\r\n\r\n.alineado-derecha {\r\n    display: block;\r\n    margin: 0 0 0 auto;\r\n}\r\n\r\n#new-task-result{\r\n    color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5wcm95ZWN0LWZvcm0taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0td3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRhc2stZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xyXG59XHJcblxyXG4udGFzay1mb3JtLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWxpbmVhZG8tZGVyZWNoYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcclxufVxyXG5cclxuI25ldy10YXNrLXJlc3VsdHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/tasks/new/new-task.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/tasks/new/new-task.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\r\n  <h2>Proyecto {{ projectId }} - Nueva Tarea</h2>\r\n\r\n  <form [formGroup]=\"taskForm\" (ngSubmit)=\"addTask()\" class=\"task-form\">\r\n    <mat-form-field class=\"task-form-input\">\r\n      <input matInput placeholder=\"Titulo\" [formControl]=\"taskForm.get('name')\" [(ngModel)]=\"task.name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"task-form-input\">\r\n      <input matInput class=\"task-form-input\" [formControl]=\"taskForm.get('estimatedTime')\"\r\n        placeholder=\"Tiempo estimado\" type=\"number\" [(ngModel)]=\"task.estimatedTime\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"task-form-input\">\r\n      <input matInput class=\"task-form-input\" [formControl]=\"taskForm.get('dedicatedTime')\"\r\n        placeholder=\"Tiempo dedicado\" type=\"number\" [(ngModel)]=\"task.dedicatedTime\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"task-form-input\">\r\n      <mat-label>Prioridad</mat-label>\r\n      <mat-select [(ngModel)]=\"task.priority\" [formControl]=\"taskForm.get('priority')\">\r\n        <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\r\n          {{ priority }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"task-form-input\">\r\n      <textarea matInput class=\"task-form-input\" [formControl]=\"taskForm.get('description')\" placeholder=\"Descripcion\"\r\n        [(ngModel)]=\"task.description\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <br>\r\n\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" id=\"new-task-submit\" value=\"Enviar\" mat-raised-button\r\n      color=\"primary\">Crear</button>\r\n\r\n    <p id=\"new-task-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\r\n  </form>\r\n\r\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");






var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.task = new src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["TASK_PRIORITY_LIST"];
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.projectId = this.route.snapshot.paramMap.get('id');
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            estimatedTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dedicatedTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    NewTaskComponent.prototype.addTask = function () {
        if (this.taskForm.valid) {
            this.task.name = this.taskForm.value.name;
            this.task.estimatedTime = this.taskForm.value.estimatedTime;
            this.task.dedicatedTime = this.taskForm.value.dedicatedTime;
            this.task.priority = this.taskForm.value.priority;
            this.task.description = this.taskForm.value.description;
            this.task.projectId = this.projectId;
            this.task.state = src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].PENDING;
            this.taskService.addTask(this.task);
            this.router.navigate(['/proyecto', this.projectId, 'tareas']);
        }
        else {
            this.submitResultMessage = 'Faltan campos obligatorios.';
        }
    };
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/components/tasks/new/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.css */ "./src/app/components/tasks/new/new-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]])
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

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button, .example-button-row a {\r\n    margin-right: 8px;\r\n}\r\n\r\nmat-form-field {\r\n    margin-right: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\r\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<mat-card>\r\n  <h4> Detalle del Ticket </h4>\r\n  <div class=\"example-button-row\">\r\n    <button mat-flat-button color=\"primary\"> {{ticket.estado}} </button>\r\n  </div>\r\n  <p> Numero de Ticket: {{ticket.numeroTicket}} </p>\r\n  <p> Producto: {{ticket.producto}} {{ticket.vProducto}} </p>\r\n  <p> Asunto: {{ticket.asunto}} </p>\r\n  <p> Tipo de Ticket: {{ticket.tipo}} </p>\r\n  <p> Fecha de Alta: {{ticket.fechaAlta?.toLocaleString()}} </p>\r\n  <p> Descripcion: {{ticket.descripcion}}</p>\r\n</mat-card>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<mat-form-field>\r\n  <mat-label>Departamento</mat-label>\r\n  <mat-select [(value)]=\"inDepartamento\">\r\n    <mat-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento\">\r\n      {{departamento}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Severidad</mat-label>\r\n  <mat-select [(value)]=\"inSeveridad\">\r\n    <mat-option *ngFor=\"let severidad of severidades\" [value]=\"severidad\">\r\n      {{severidad}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Estado</mat-label>\r\n  <mat-select [(value)]=\"inEstado\">\r\n    <mat-option *ngFor=\"let estado of estados\" [value]=\"estado\">\r\n      {{estado}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-form-field>\r\n  <mat-label>Responsable</mat-label>\r\n  <mat-select [(value)]=\"inResponsable\">\r\n    <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\r\n      {{responsable}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<div class=\"example-button-row\">\r\n  <button mat-flat-button color=\"primary\" (click)=\"onClick()\"> Aplicar cambios </button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<div class=\"example-button-row\">\r\n  <button routerLink=\"/ticketdetalle/{{ticket.numeroTicket}}/tarea\" mat-flat-button color=\"primary\">Agregar\r\n    tarea</button>\r\n</div>\r\n\r\n<mat-divider style=\"margin: 10px\"></mat-divider>\r\n\r\n<table mat-table [dataSource]=\"ticket.tareas\">\r\n  <ng-container matColumnDef=\"nombre\">\r\n    <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"asignado\">\r\n    <th mat-header-cell *matHeaderCellDef> Asignado </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"element.asignee\">\r\n          <mat-option *ngFor=\"let resource of resources\" value=\"{{resource}}\">\r\n            {{ resource }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"estado\">\r\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"element.state\">\r\n          <mat-option *ngFor=\"let state of states\" value=\"{{state}}\">\r\n            {{ state }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"prioridad\">\r\n    <th mat-header-cell *matHeaderCellDef> Prioridad </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"element.priority\">\r\n          <mat-option *ngFor=\"let priority of priorities\" value=\"{{priority}}\">\r\n            {{ priority }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"proyecto\">\r\n    <th mat-header-cell *matHeaderCellDef> Proyecto </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"element.projectId\" (selectionChange)=\"agregarTareaAProyecto(element)\">\r\n          <mat-option *ngFor=\"let project of projects\" value=\"{{project.code}}\">\r\n            {{ project.code }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>"

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
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");








var TicketDetalleComponent = /** @class */ (function () {
    function TicketDetalleComponent(location, route, ticketService, projectService, taskService) {
        this.location = location;
        this.route = route;
        this.ticketService = ticketService;
        this.projectService = projectService;
        this.taskService = taskService;
        this.displayedColumns = ['nombre', 'asignado', 'estado', 'prioridad', 'proyecto'];
        this.estados = ['Abierto', 'En progreso', 'Cerrado', 'Escalado a desarrollo', 'Escalado a implementacion', 'A la espera del cliente'];
        this.departamentos = ['Desarrollo', 'Implementacion'];
        this.severidades = ['Baja', 'Media', 'Alta'];
        this.resources = ['', 'Fernando Soluzzia', 'Felipe Codeo'];
        this.states = src_app_models_Task__WEBPACK_IMPORTED_MODULE_5__["TASK_STATE_LIST"];
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_5__["TASK_PRIORITY_LIST"];
    }
    TicketDetalleComponent.prototype.ngOnInit = function () {
        this.getTicket();
        this.responsables = this.ticketService.getResponsables();
        this.inEstado = this.ticket.estado;
        this.inResponsable = this.ticket.responsable;
        this.inDepartamento = this.ticket.departamento;
        this.inSeveridad = this.ticket.severidad;
        this.projects = this.projectService.getProjects();
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
    TicketDetalleComponent.prototype.agregarTareaAProyecto = function (element) {
        this.taskService.addTask(element);
    };
    TicketDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-detalle',
            template: __webpack_require__(/*! ./ticket-detalle.component.html */ "./src/app/components/ticket-detalle/ticket-detalle.component.html"),
            styles: [__webpack_require__(/*! ./ticket-detalle.component.css */ "./src/app/components/ticket-detalle/ticket-detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]])
    ], TicketDetalleComponent);
    return TicketDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button, .example-button-row a {\r\n    margin-right: 8px;\r\n}\r\n\r\n.form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtbnVldmEtdGFyZWEvdGlja2V0LW51ZXZhLXRhcmVhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LW51ZXZhLXRhcmVhL3RpY2tldC1udWV2YS10YXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Nueva tarea - Ticket</h4>\r\n\r\n<div class=\"form\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Titulo\" [(ngModel)]=\"task.name\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Prioridad</mat-label>\r\n    <mat-select [(ngModel)]=\"task.priority\">\r\n      <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\r\n        {{ priority }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <textarea matInput placeholder=\"Descripcion\" [(ngModel)]=\"task.description\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <button (click)=\"addTask()\" mat-raised-button color=\"primary\">Crear</button>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TicketNuevaTareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketNuevaTareaComponent", function() { return TicketNuevaTareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var TicketNuevaTareaComponent = /** @class */ (function () {
    function TicketNuevaTareaComponent(location, ticketService, route) {
        this.location = location;
        this.ticketService = ticketService;
        this.route = route;
        this.task = new src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.priorities = src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["TASK_PRIORITY_LIST"];
    }
    TicketNuevaTareaComponent.prototype.ngOnInit = function () {
    };
    TicketNuevaTareaComponent.prototype.getTicket = function () {
        var id = +this.route.snapshot.paramMap.get('numeroTicket');
        this.ticket = this.ticketService.getTicket(id);
    };
    TicketNuevaTareaComponent.prototype.addTask = function () {
        this.getTicket();
        this.task.state = src_app_models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].PENDING;
        this.ticket.tareas.push(this.task);
        this.location.back();
    };
    TicketNuevaTareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-nueva-tarea',
            template: __webpack_require__(/*! ./ticket-nueva-tarea.component.html */ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.html"),
            styles: [__webpack_require__(/*! ./ticket-nueva-tarea.component.css */ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_2__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TicketNuevaTareaComponent);
    return TicketNuevaTareaComponent;
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

module.exports = "mat-grid-tile {\r\n    background: lightpink;\r\n  }\r\n\r\n\r\nfooter {\r\n  height: 80px;\r\n  background: lightblue;\r\n  margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7O0FBR0Y7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcclxuICB9XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer>\r\n\r\n    <div class=\"text-center\">\r\n        <strong>Footer</strong>\r\n    </div>\r\n\r\n    <div>\r\n        About: ...\r\n    </div>\r\n    <div>\r\n        Contact: ...\r\n    </div>\r\n\r\n</footer>\r\n"

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

module.exports = ".button-row button,\r\n.button-row a {\r\n  margin: 5px 5px;\r\n  width: 150px;\r\n}\r\n\r\nmat-sidenav {\r\n  text-align: center;\r\n  width: 205px;\r\n}\r\n\r\n.example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #eee;\r\n}\r\n\r\nh1 {\r\n  margin: 10px;\r\n}\r\n\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.container {\r\n  margin: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n.side-menu {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJvdyBidXR0b24sXHJcbi5idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbjogNXB4IDVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwNXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaWNvbiB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav mode=\"side\" opened>\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <span>PSA System</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <div class=\"side-menu\">\r\n      <div class=\"button-row\">\r\n        <button id=\"nav-router-proyectos\" routerLink=\"/proyectos\" mat-raised-button>Proyectos</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button id=\"nav-router-recursos\" routerLink=\"/recursos\" mat-raised-button>Recursos</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n          <button id=\"nav-router-clientes\" routerLink=\"/clientes\" mat-raised-button>Clientes</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button id=\"nav-router-productos\" routerLink=\"/productos\" mat-raised-button>Productos</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button id=\"nav-router-contratos\" routerLink=\"/contratos\" mat-raised-button>Contratos</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-raised-button>Soporte</button>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div class=\"container\">\r\n      <!--CONTENIDO PRINCIPAL-->\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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
        this.riskThreshold = 0.5;
        this.tasks = [];
        this.risks = [];
        this.resources = [];
    }
    Project.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Project.prototype.dedicatedTime = function () {
        return this.tasks.map(function (t) { return t.dedicatedTime; })
            .reduce(function (a, b) { return a + b; }, 0);
    };
    Project.prototype.atRisk = function () {
        var _this = this;
        return this.risks.some(function (r) { return r.aboveThreshold(_this.riskThreshold); });
    };
    Project.prototype.risksAboveThreshold = function () {
        var _this = this;
        return this.risks.filter(function (r) { return r.aboveThreshold(_this.riskThreshold); });
    };
    return Project;
}());
/* harmony default export */ __webpack_exports__["default"] = (Project);


/***/ }),

/***/ "./src/app/models/ProjectState.ts":
/*!****************************************!*\
  !*** ./src/app/models/ProjectState.ts ***!
  \****************************************/
/*! exports provided: default, PROJECT_STATE_INITIAL, PROJECT_STATE_IN_PROGRESS, PROJECT_STATE_FINALIZED, PROJECT_STATE_CANCEL, PROJECT_TYPE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_STATE_INITIAL", function() { return PROJECT_STATE_INITIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_STATE_IN_PROGRESS", function() { return PROJECT_STATE_IN_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_STATE_FINALIZED", function() { return PROJECT_STATE_FINALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_STATE_CANCEL", function() { return PROJECT_STATE_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_TYPE_LIST", function() { return PROJECT_TYPE_LIST; });
var PROJECT_STATE_INITIAL_NAME = 'Inicio';
var PROJECT_STATE_IN_PROGRESS_NAME = 'En progreso';
var PROJECT_STATE_FINALIZED_NAME = 'Finalizado';
var PROJECT_STATE_CANCEL_NAME = 'Cancelado';
var ProjectState = /** @class */ (function () {
    function ProjectState(name) {
        this.name = name;
    }
    return ProjectState;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProjectState);
var PROJECT_STATE_INITIAL = new ProjectState(PROJECT_STATE_INITIAL_NAME);
var PROJECT_STATE_IN_PROGRESS = new ProjectState(PROJECT_STATE_IN_PROGRESS_NAME);
var PROJECT_STATE_FINALIZED = new ProjectState(PROJECT_STATE_FINALIZED_NAME);
var PROJECT_STATE_CANCEL = new ProjectState(PROJECT_STATE_CANCEL_NAME);
var PROJECT_TYPE_LIST = [
    PROJECT_STATE_INITIAL,
    PROJECT_STATE_IN_PROGRESS,
    PROJECT_STATE_FINALIZED,
    PROJECT_STATE_CANCEL
];


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

/***/ "./src/app/models/Resource.ts":
/*!************************************!*\
  !*** ./src/app/models/Resource.ts ***!
  \************************************/
/*! exports provided: Roles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["DEVELOPER"] = "Desarrollador";
    Roles["ANALYST"] = "Analista Funcional";
    Roles["PROJECT_LEADER"] = "Lider de Proyecto";
    Roles["PRODUCT_LEADER"] = "Lider de Producto";
    Roles["SOFTWARE_ARCHITECHT"] = "Arquitecto de Software";
    Roles["QA"] = "QA";
    Roles["AUTOMATIZATION"] = "Automatizaci\u00F3n";
    Roles["DEVOPS"] = "DevOps";
    Roles["DATA_SCIENTIST"] = "Data Scientist";
})(Roles || (Roles = {}));
var Resource = /** @class */ (function () {
    function Resource(id, name, assignments, availableHours, skills) {
        this.id = id;
        this.name = name;
        this.assignments = assignments;
        this.skills = skills;
        this.availableHours = availableHours;
    }
    ;
    return Resource;
}());
/* harmony default export */ __webpack_exports__["default"] = (Resource);


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
    Risk.prototype.getExposition = function () {
        return this.probability * this.impact;
    };
    Risk.prototype.aboveThreshold = function (threshold) {
        return this.getExposition() > threshold;
    };
    return Risk;
}());
/* harmony default export */ __webpack_exports__["default"] = (Risk);


/***/ }),

/***/ "./src/app/models/Skill.ts":
/*!*********************************!*\
  !*** ./src/app/models/Skill.ts ***!
  \*********************************/
/*! exports provided: SkillLevels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillLevels", function() { return SkillLevels; });
var SkillLevels;
(function (SkillLevels) {
    SkillLevels["LOW"] = "1";
    SkillLevels["MID"] = "2";
    SkillLevels["HIGH"] = "3";
})(SkillLevels || (SkillLevels = {}));
var Skill = /** @class */ (function () {
    function Skill(name, level, description) {
        this.name = name;
        this.level = level;
        this.description = description;
    }
    ;
    return Skill;
}());
/* harmony default export */ __webpack_exports__["default"] = (Skill);


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
        this.clients = [
            { code: '123', name: 'Techint', address: 'Bouchard', email: "techint@techint.com", phoneNumbers: ["2414-6342", "2414-6343"] },
            { code: '999', name: 'Total', address: 'Moreno', email: "total@total.com", phoneNumbers: ["6343-2453"] },
            { code: '354', name: 'Benelli', address: 'Corrientes', email: "Benelli@Benelli.com", phoneNumbers: [] },
        ];
        this.requeriments = [
            { description: 'Pagar la factura' },
            { description: 'Se desea que la funcionalidad tenga soporte 24/7' },
            { description: 'Se necesita obtener reportes de facturacion para las reuniones mensuales' }
        ];
        this.products = [
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 1, name: 'CRM', version: '2.0.5', client: this.clients[0], requirements: [this.requeriments[1], this.requeriments[2]] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 2, name: 'CRM', version: '2.0.5', client: this.clients[0], requirements: [this.requeriments[0], this.requeriments[2]] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 3, name: 'CRM', version: '3.1.1', client: this.clients[1], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 4, name: 'BI', version: '3.0.1', client: this.clients[1], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 5, name: 'BI', version: '2.0.5', client: this.clients[1], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 6, name: 'ERP', version: '2.0.5', client: this.clients[1], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 7, name: 'ERP', version: '2.1.5', client: this.clients[2], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 8, name: 'IMS', version: '2.0.4', client: this.clients[2], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 9, name: 'IMS', version: '2.6.5', client: this.clients[1], requirements: [] }),
            new _models_Product__WEBPACK_IMPORTED_MODULE_4__["Product"]({ id: 10, name: 'IMS', version: '2.0.5', client: this.clients[0], requirements: [] }),
        ];
    }
    // Ejemplo de como hacer un GET a la API
    ProductService.prototype.getProducts = function () {
        var _this = this;
        this.products.forEach(function (p) {
            /// OBTENGO CLIENTES
            p.client = _this.clientService.getClientByCode(p.client.code);
        });
        return this.products;
    };
    ProductService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getRequirementsByProduct = function (productId) {
        return this.products.find(function (p) { return p.id == productId; }).requirements;
    };
    ProductService.prototype.getProductById = function (productId) {
        var results = this.products.filter(function (p) { return p.id === productId; });
        return results.length ? results[0] : null;
    };
    ProductService.prototype.getProductsByClient = function (clientCode) {
        return this.products.filter(function (p) { return p.client.code == clientCode; });
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
/* harmony import */ var _models_Risk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Risk */ "./src/app/models/Risk.ts");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Task */ "./src/app/models/Task.ts");
/* harmony import */ var _models_ProjectType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ProjectType */ "./src/app/models/ProjectType.ts");
/* harmony import */ var _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/ProjectState */ "./src/app/models/ProjectState.ts");
/* harmony import */ var _models_Resource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/Resource */ "./src/app/models/Resource.ts");








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
        proyecto.state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__["PROJECT_STATE_IN_PROGRESS"];
        proyecto.type = _models_ProjectType__WEBPACK_IMPORTED_MODULE_5__["PROJECT_TYPE_DEV"];
        var placeholderDev1 = new _models_Resource__WEBPACK_IMPORTED_MODULE_7__["default"](4, 'Fernando Soluzzia', [{ project: proyecto, role: _models_Resource__WEBPACK_IMPORTED_MODULE_7__["Roles"].PROJECT_LEADER, hours: 10 }], 10);
        var placeholderDev2 = new _models_Resource__WEBPACK_IMPORTED_MODULE_7__["default"](3, 'Felipe Codeo', [{ project: proyecto, role: _models_Resource__WEBPACK_IMPORTED_MODULE_7__["Roles"].DEVELOPER, hours: 20 }], 20);
        proyecto.tasks = [
            new _models_Task__WEBPACK_IMPORTED_MODULE_4__["default"]('Tarea 1', placeholderDev1, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].COMPLETED, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskPriority"].HIGH, 5, 5, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_4__["default"]('Tarea 2', placeholderDev1, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].DEVELOPMENT, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskPriority"].MEDIUM, 2, 1, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_4__["default"]('Tarea 3', placeholderDev2, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].PENDING, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskPriority"].LOW, 1, 0, proyecto.code),
            new _models_Task__WEBPACK_IMPORTED_MODULE_4__["default"]('Tarea 4', null, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskState"].PENDING, _models_Task__WEBPACK_IMPORTED_MODULE_4__["TaskPriority"].MEDIUM, 5, 0, proyecto.code)
        ];
        var riesgo = new _models_Risk__WEBPACK_IMPORTED_MODULE_3__["default"]();
        riesgo.id = 1;
        riesgo.motive = "Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros";
        riesgo.description = "Baja disponibilidad de recursos";
        riesgo.impact = 0.7;
        riesgo.probability = 0.4;
        proyecto.risks.push(riesgo);
        riesgo = new _models_Risk__WEBPACK_IMPORTED_MODULE_3__["default"]();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9;
        riesgo.probability = 0.7;
        proyecto.risks.push(riesgo);
        this.projects.push(proyecto);
        var proyecto2 = new _models_Project__WEBPACK_IMPORTED_MODULE_2__["default"]();
        proyecto2.code = 'CUO';
        proyecto2.name = 'CUOMA';
        proyecto2.leader = 'Santiago de Cuoma';
        proyecto2.beginDate = new Date();
        proyecto2.endDate = new Date();
        proyecto2.description = 'Proyecto para la gestion de operaciones de la Consultora CUOMA';
        proyecto2.currentVersion = 'Alpha';
        proyecto2.state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__["PROJECT_STATE_INITIAL"];
        proyecto2.type = _models_ProjectType__WEBPACK_IMPORTED_MODULE_5__["PROJECT_TYPE_DEV"];
        this.projects.push(proyecto2);
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
    ProjectService.prototype.cancelProject = function (id) {
        var results = this.projects.filter(function (p) { return p.code === id; });
        results[0].state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__["PROJECT_STATE_CANCEL"];
    };
    ProjectService.prototype.finalizeProject = function (id) {
        var results = this.projects.filter(function (p) { return p.code === id; });
        var project = results[0];
        var sinTareasPendientes = true;
        project.tasks.forEach(function (task, index) {
            if (task.state != "Completado") {
                sinTareasPendientes = false;
            }
        });
        if (sinTareasPendientes) {
            project.state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__["PROJECT_STATE_FINALIZED"];
            return true;
        }
        return false;
    };
    ProjectService.prototype.assignResource = function (id, resource, role, hours) {
        var project = this.projects.find(function (p) { return p.code === id; });
        if (!project.resources.find(function (r) { return r.id === resource.id; })) {
            project.resources.push(resource);
            resource.assignments.push({ project: project, role: role, hours: hours });
        }
    };
    ProjectService.prototype.unassignResource = function (id, resource) {
        var project = this.projects.find(function (p) { return p.code === id; });
        var resourceIndex = project.resources.findIndex(function (r) { return r.id === resource.id; });
        if (resourceIndex) {
            project.resources.splice(resourceIndex, 1);
            var projectIndex = resource.assignments.findIndex(function (a) { return a.project.code === project.code; });
            resource.assignments.splice(projectIndex, 1);
        }
    };
    ProjectService.prototype.getProjectsByResourceId = function (id) {
        return this.projects.filter(function (proj) { return proj.resources.find(function (res) { return res.id === id; }); });
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

/***/ "./src/app/services/resource.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Resource */ "./src/app/models/Resource.ts");
/* harmony import */ var _models_Skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Skill */ "./src/app/models/Skill.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.service */ "./src/app/services/project.service.ts");





var ResourceService = /** @class */ (function () {
    function ResourceService(projectService) {
        this.projectService = projectService;
        var project = projectService.getProject('COD1');
        this.resources = [
            new _models_Resource__WEBPACK_IMPORTED_MODULE_2__["default"](1, 'Juan Develo', [{ project: project, role: _models_Resource__WEBPACK_IMPORTED_MODULE_2__["Roles"].DEVELOPER, hours: 20 }], 20, [new _models_Skill__WEBPACK_IMPORTED_MODULE_3__["default"]('Python', _models_Skill__WEBPACK_IMPORTED_MODULE_3__["SkillLevels"].HIGH), new _models_Skill__WEBPACK_IMPORTED_MODULE_3__["default"]('Inglés', _models_Skill__WEBPACK_IMPORTED_MODULE_3__["SkillLevels"].MID)]),
            new _models_Resource__WEBPACK_IMPORTED_MODULE_2__["default"](2, 'Pedro Desarro', [], 20, []),
            new _models_Resource__WEBPACK_IMPORTED_MODULE_2__["default"](3, 'Felipe Codeo', [{ project: project, role: _models_Resource__WEBPACK_IMPORTED_MODULE_2__["Roles"].DEVELOPER, hours: 20 }], 20, []),
            new _models_Resource__WEBPACK_IMPORTED_MODULE_2__["default"](4, 'Fernando Soluzzia', [{ project: project, role: _models_Resource__WEBPACK_IMPORTED_MODULE_2__["Roles"].PROJECT_LEADER, hours: 20 }], 20, [new _models_Skill__WEBPACK_IMPORTED_MODULE_3__["default"]('Ingles', _models_Skill__WEBPACK_IMPORTED_MODULE_3__["SkillLevels"].HIGH)]),
            new _models_Resource__WEBPACK_IMPORTED_MODULE_2__["default"](5, 'Hector Analis', [{ project: project, role: _models_Resource__WEBPACK_IMPORTED_MODULE_2__["Roles"].ANALYST, hours: 20 }], 20, [new _models_Skill__WEBPACK_IMPORTED_MODULE_3__["default"]('Ingles', _models_Skill__WEBPACK_IMPORTED_MODULE_3__["SkillLevels"].MID)])
        ];
    }
    ResourceService.prototype.getResources = function () {
        return this.resources;
    };
    ResourceService.prototype.getResourcesByProject = function (projectId) {
        return this.resources.filter(function (r) { return r.assignments.find(function (assignment) { return assignment.project && assignment.project.code === projectId; }); });
    };
    ResourceService.prototype.getResourceById = function (id) {
        return this.resources.find(function (r) { return r.id === id; });
    };
    ResourceService.prototype.addSkillToResource = function (id, skill) {
        var resource = this.resources.find(function (res) { return res.id === id; });
        if (resource) {
            resource.skills.push(skill);
        }
    };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], ResourceService);
    return ResourceService;
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
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");



var RiskService = /** @class */ (function () {
    function RiskService(service) {
        this.service = service;
    }
    RiskService.prototype.getRisksByProject = function (id) {
        return this.service.getProject(id).risks;
    };
    RiskService.prototype.saveRisk = function (projectCode, risk) {
        this.service.getProject(projectCode).risks.push(risk);
    };
    RiskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
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
/* harmony import */ var _models_ProjectState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ProjectState */ "./src/app/models/ProjectState.ts");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource.service */ "./src/app/services/resource.service.ts");





var TaskService = /** @class */ (function () {
    function TaskService(projectService, resourceService) {
        this.projectService = projectService;
        this.resourceService = resourceService;
    }
    TaskService.prototype.getTasksByProject = function (projectId) {
        var project = this.projectService.getProject(projectId);
        return project.tasks.slice(0); // devuelvo un clon
    };
    TaskService.prototype.addTask = function (task) {
        var project = this.projectService.getProject(task.projectId);
        project.addTask(task);
    };
    TaskService.prototype.setTaskAsignee = function (taskName, projectCode, newAsigneeId) {
        var project = this.projectService.getProject(projectCode);
        var task = project.tasks.find(function (t) { return t.name === taskName; });
        if (newAsigneeId === null || newAsigneeId === 0) {
            task.asignee = null; // TODO: falta verificar que la tarea esté completada, etc. etc. etc.
            return;
        }
        if (task.asignee && task.asignee.id === newAsigneeId) {
            throw new Error("El recurso " + newAsigneeId + " ya est\u00E1 asignado a la tarea " + taskName);
        }
        var newAsigneeTasks = project.tasks.filter(function (t) { return t.asignee && t.asignee.id === newAsigneeId; });
        var alreadyAllocatedHours = newAsigneeTasks.map(function (t) { return t.estimatedTime; })
            .reduce(function (a, b) { return a + b; }, 0);
        var newAsignee = this.resourceService.getResourceById(newAsigneeId);
        if ((alreadyAllocatedHours + task.estimatedTime) > newAsignee.availableHours) {
            throw new Error("Asignar la tarea " + task.name + " al recurso " + newAsigneeId + " sobrepasar\u00EDa " +
                "las horas del recurso dedicadas al proyecto");
        }
        project.state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_3__["PROJECT_STATE_IN_PROGRESS"];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"]])
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
            { numeroTicket: 1, clienteCode: "123", tipo: 'Incidente', producto: 'CRM', vProducto: '2.0.5', severidad: 'Alta', estado: 'Abierto', asunto: 'Error en la generacion de un proyecto', descripcion: 'El usuario se posisiona el la solapa de proyecto, presiona el boton nuevo proyecto y se cierra el navegador', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: 'Desarrollo', tareas: [] },
            { numeroTicket: 2, clienteCode: "123", tipo: 'Incidente', producto: 'BI', vProducto: '2.0.5', severidad: 'Media', estado: 'A la espera del cliente', asunto: 'No permite generar un contrato nuevo', descripcion: 'En la solapa de contratos, cuando se quiere agregar un contrato nuevo, se completan los datos y el boton confirmar no funciona', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 3, clienteCode: "999", tipo: 'Incidente', producto: 'IMS', vProducto: '2.0.5', severidad: 'Alta', estado: 'En progreso', asunto: 'No abre la aplicacion', descripcion: 'La aplicacion no abre', responsable: 'Pablo Juanes', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 4, clienteCode: "456", tipo: 'Sugerencia', producto: 'IMS', vProducto: '2.6.5', severidad: 'Baja', estado: 'Abierto', asunto: 'Color en tickets', descripcion: 'Agregar color a los tickets segun el estado para ver rapidamente cual es cual', responsable: 'Facundo Gonzalez', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 5, clienteCode: "354", tipo: 'Sugerencia', producto: 'IMS', vProducto: '2.0.4', severidad: 'Baja', estado: 'Abierto', asunto: 'Aplicacion responsive', descripcion: 'Crear aplicacion para dispositivos mobiles', responsable: 'Gonzalo Facundez', fechaAlta: new Date(), departamento: '', tareas: [] },
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

module.exports = __webpack_require__(/*! C:\Users\Santi\Documents\75.09 Analisis de la Información\TP Grupal\Aninfo2019GrupoPar\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
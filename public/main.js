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

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n\n    \n}\n  \n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnRzL25ldy9uZXctY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjs7O0FBR0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudHMvbmV3L25ldy1jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XG5cbiAgICBcbn1cbiAgXG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/clients/new/new-client.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/clients/new/new-client.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Nuevo Cliente:</h4>\n<div class=\"form\">\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.code\" matInput placeholder=\"Código\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.name\" matInput placeholder=\"Nombre\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input [(ngModel)]=\"client.address\" matInput placeholder=\"Dirección\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"full-width\">\n        <input [(ngModel)]=\"client.phoneNumbers\" matInput placeholder=\"Telefonos\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <input [(ngModel)]=\"client.email\" matInput placeholder=\"EMail\">\n    </mat-form-field>\n\n    <button (click)=\"addClient()\" mat-raised-button color=\"primary\">Agregar</button>\n</div>\n\n\n"

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

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p>{{data.message}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button matDialogClose cdkFocusInitial>Ok</button>\n</div>\n"

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

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n\n    \n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvZWRpdC9lZGl0LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJhY3RzL2VkaXQvZWRpdC1jb250cmFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcblxuICAgIFxufVxuICBcbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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

module.exports = ".form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n\n    \n}\n  \n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdHMvbmV3L25ldy1jb250cmFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXOztJQUVYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCOzs7QUFHckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0cy9uZXcvbmV3LWNvbnRyYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6MTBweCAyMHB4O1xuXG4gICAgXG59XG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/contracts/new/new-contract.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/contracts/new/new-contract.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Nuevo Contrato:</h4>\n<div class=\"form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Client</mat-label>\n      <mat-select [(ngModel)]=\"contract.clientCode\">\n        <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\n          {{client.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [matDatepicker]=\"pickerStart\" [(ngModel)]=\"contract.startDate\" placeholder=\"Fecha de incio\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerStart></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]=\"contract.endDate\" placeholder=\"Fecha de Finalización\">\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerEnd></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.incidentLimit\" matInput placeholder=\"Limite de incidentes\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input type=\"number\" [(ngModel)]=\"contract.responseTime\" matInput placeholder=\"Tiempo de respuesta (hs)\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.description\" matInput placeholder=\"Descripción\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea [(ngModel)]=\"contract.penalty\" matInput placeholder=\"Penalidad\"></textarea>\n    </mat-form-field>\n\n    \n<button (click)=\"addContract()\" mat-raised-button color=\"primary\">Agregar</button>\n</div>\n\n"

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

module.exports = ".proyect-form-wrapper {\n    margin: 5px;\n    padding: 5px;\n}\n\n.proyect-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n     background-color: white;\n     padding:10px 20px;\n}\n\n.proyect-form-input {\n    width: 100%;\n}\n\n.alineado-derecha {\n    display: block;\n    margin: 0 0 0 auto;\n}\n\n#new-project-result{\n    color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvamVjdC9uZXctcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3llY3QtZm9ybS13cmFwcGVyIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm95ZWN0LWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICBwYWRkaW5nOjEwcHggMjBweDtcbn1cblxuLnByb3llY3QtZm9ybS1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbGluZWFkby1kZXJlY2hhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG59XG5cbiNuZXctcHJvamVjdC1yZXN1bHR7XG4gICAgY29sb3I6ICNmNDQzMzY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/new-project/new-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-project/new-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <br>\n  <h2>Nuevo Proyecto</h2>\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"submit()\" class=\"proyect-form\">\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput placeholder=\"Nombre\" [formControl]=\"projectForm.get('name')\" id=\"new-project-name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput class=\"proyect-form-input\" placeholder=\"Codigo\" [formControl]=\"projectForm.get('code')\"\n        id=\"new-project-code\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <mat-select [formControl]=\"projectForm.get('leader')\" placeholder=\"Lider de Proyecto\">\n        <mat-option *ngFor=\"let res of resources\" [value]=\"res.id\">\n          {{ res.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Fecha Inicio\" [formControl]=\"projectForm.get('beginDate')\"\n        id=\"new-project-begin-date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <input matInput [matDatepicker]=\"endPicker\" placeholder=\"Fecha Fin\" [formControl]=\"projectForm.get('endDate')\"\n        id=\"new-project-end-date\">\n      <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n      <mat-datepicker #endPicker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <mat-select [formControl]=\"projectForm.get('type')\" placeholder=\"Tipo de Proyecto\">\n        <mat-option *ngFor=\"let projectType of projectTypes\" [value]=\"projectType\">\n          {{ projectType.name }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <textarea matInput class=\"proyect-form-input\" placeholder=\"Descripcion\" matTextareaAutosize matAutosizeMinRows=5\n        [formControl]=\"projectForm.get('description')\" id=\"new-project-description\"></textarea>\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\" type=\"submit\" id=\"new-project-submit\" value=\"Enviar\">Crear</button>\n  </form>\n\n  <p id=\"new-project-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\n</div>"

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
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/resource.service */ "./src/app/services/resource.service.ts");










var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(projectService, resourceService, router, adapter) {
        this.projectService = projectService;
        this.resourceService = resourceService;
        this.router = router;
        this.adapter = adapter;
        this.projectTypes = src_app_models_ProjectType__WEBPACK_IMPORTED_MODULE_6__["PROJECT_TYPE_LIST"];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.resources = this.resourceService.getResources();
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
            project.beginDate = this.projectForm.value.beginDate;
            project.endDate = this.projectForm.value.endDate;
            project.description = this.projectForm.value.description;
            project.currentVersion = this.projectForm.value.currentVersion;
            project.type = this.projectForm.value.type;
            project.state = src_app_models_ProjectState__WEBPACK_IMPORTED_MODULE_7__["PROJECT_STATE_INITIAL"];
            var resId_1 = parseInt(this.projectForm.value.leader);
            project.leader = this.resources.find(function (r) { return r.id === resId_1; });
            this.projectService.saveProject(project);
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
            src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_9__["ResourceService"],
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

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Productos</h1>\n  <br>\n  <br>\n\n  <h4>Filtros</h4>\n  <mat-form-field>\n    <mat-label>Cliente</mat-label>\n    <mat-select [(value)]=\"clientFilter\">\n      <mat-option [value]=\"\"></mat-option>\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.code\">\n        {{client.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  &nbsp;\n  <mat-form-field>\n    <mat-label>Producto</mat-label>\n    <mat-select [(value)]=\"prodFilter\">\n      <mat-option [value]=\"\"></mat-option>\n      <mat-option *ngFor=\"let prod of productNames\" [value]=\"prod\">\n        {{prod}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br />\n  <button mat-button mat-raised-button style=\"margin-right: 20px;\" (click)=\"filter()\">Aplicar filtro <mat-icon>search\n    </mat-icon></button>\n  <button mat-button mat-raised-button (click)=\"resetFilter()\">Borrar filtro<mat-icon>delete</mat-icon></button>\n  <table style=\"margin-top: 20px\" mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"version\">\n      <th mat-header-cell *matHeaderCellDef> Versión </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.version}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"client\">\n      <th mat-header-cell *matHeaderCellDef> Cliente </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.client?.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"detail\">\n      <th mat-header-cell *matHeaderCellDef> Acciones </th>\n      <td mat-cell *matCellDef=\"let element\">\n\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\n          routerLink=\"/productos/{{element.id}}/detalle\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">description</mat-icon>\n          Detalle\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>"

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

module.exports = ".detalle-producto{\n    border:1px solid #ccc; \n    background-color: white;    \n    border-radius: 16px;\n    margin-top: 10px;\n}\n\n.subtitulo-detalle{\n    display: inline-block; \n    width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWxsZS1wcm9kdWN0b3tcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJ0aXR1bG8tZGV0YWxsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHdpZHRoOiAyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/product/details/product-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/details/product-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n    <h1 style=\"text-align: center;\"> Portafolio de Producto</h1>\n    <br>\n    <h2>Detalle de Producto</h2>\n\n    <br>\n    <div class=\"detalle-producto\">\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\">\n                <div class=\"subtitulo-detalle\">\n                    <b>Nombre</b>\n                </div>\n                {{product.name}}\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n                <div class=\"subtitulo-detalle\">\n                    <b>Version</b>\n                </div>\n                {{product.version}}\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n                <div class=\"subtitulo-detalle\">\n                    <b>Codigo de Cliente</b>\n                </div>\n                {{product.client.code}}\n            </mat-list-item>\n            <mat-list-item role=\"listitem\">\n                <div class=\"subtitulo-detalle\">\n                    <b>Cliente</b>\n                </div>\n                {{product.client.name}}\n            </mat-list-item>\n\n\n            <mat-list-item role=\"listitem\">\n                <div class=\"subtitulo-detalle\">\n                    <b>Requerimientos</b>\n                </div>\n                <br>\n\n            </mat-list-item>\n\n            <mat-list-item role=\"listitem\">\n                <ul>\n                    <li *ngFor=\"let req of product.requirements\">\n                        {{ req.description }}\n                    </li>\n                    <br>\n                </ul>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n\n</div>"

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

module.exports = "<h1 mat-dialog-title>\n    <mat-icon aria-hidden=\"false\" aria-label=\"Cancelar proyecto\">warning</mat-icon>\n    Cancelar Proyecto</h1>\n<div mat-dialog-content>\n    <p>¿Esta seguro de cancelar el proyecto?</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button matDialogClose>Cerrar</button>\n    <button mat-button matDialogClose style=\"background-color:#f44336;\" (click)=\"cancelarProyecto()\">Cancelar</button>\n</div>"

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

module.exports = "<h1 mat-dialog-title>Finalizar el Proyecto</h1>\n<div mat-dialog-content>\n    <p>¿Esta seguro de querer finalizar el proyecto?</p>\n    <p>Recuerde que debe tener todas las tareas en estado finalizado para poder cambiar el estado</p>\n    <p *ngIf=mostrarMensajeError style=\"color:#f44336\">\n        Ha ocurrido un error. No puede finalizar el proyecto si existen tareas en curso\n    </p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button matDialogClose>Cerrar</button>\n    <button mat-button style=\"background-color:#4caf50;\" (click)=\"finalizarProyecto()\">Finalizar</button>\n</div>"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n\n.description{\n    background: lightgreen;\n}\n\n.tabla-fila-supero-el-umbral{\n    background-color: #ff5252;\n    color: white;\n    font-weight: 600\n}\n\n.container {\n    margin: 5px;\n    padding: 5px;\n}\n\n.projects-dashboard-table {\n    width: 100%;\n    background: none;\n}\n\n#new-project-button {\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n}\n\ntable td, table th {\n    text-align: center;\n}\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n}\n\n.portafolio-proyectos-boton-acciones{\n    margin: 5px;\n}\n\n.portafolio-proyectos-boton-success{\n    background-color: #4caf50;\n}\n\n.portafolio-proyectos-boton-error{\n    background-color:#f44336;\n}\n\n.encabezado-tabla{\n    font-weight: 1000;\n    font-size: 16px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRhc2hib2FyZC9wcm9qZWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVFO0lBQ0UseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3QtZGFzaGJvYXJkL3Byb2plY3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cblxuLnRhYmxhLWZpbGEtc3VwZXJvLWVsLXVtYnJhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwXG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3RzLWRhc2hib2FyZC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3J0YWZvbGlvLXByb3llY3Rvcy1ib3Rvbi1hY2Npb25lc3tcbiAgICBtYXJnaW46IDVweDtcbn1cblxuICAucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tc3VjY2Vzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4ucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tZXJyb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O1xufVxuXG4gIC5lbmNhYmV6YWRvLXRhYmxhe1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/project-dashboard/project-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/project-dashboard/project-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <br>\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" routerLink=\"/nuevo-proyecto\" mat-raised-button color=\"primary\">Crear Proyecto</button>\n  <br>\n  <h2>Listado de Proyectos</h2>\n  <table mat-table [dataSource]=\"projects\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"riesgos\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        <mat-icon *ngIf=\"project.atRisk()\" aria-hidden=\"false\" matTooltip=\"Hay {{project.risksAboveThreshold().length}} riesgo de {{project.risks.length}} que superan el máximo umbral permitido\"\n          aria-label=\"Tiene algun riesgo que supero el umbral\">warning</mat-icon>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Codigo </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.code}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Nombre </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"currentVersion\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Version </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.currentVersion}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"leader\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Lider</th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.leader.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Tipo </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.type.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"state\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Estado </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.state.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dedicatedTime\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Horas dedicadas </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        {{project.dedicatedTime()}} \n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"acciones\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Acciones </th>\n      <td mat-cell *matCellDef=\"let project\" [ngClass]=\"{'tabla-fila-supero-el-umbral': project.atRisk()}\">\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/tareas\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment</mat-icon>\n          Tareas\n        </button>\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/detalle\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">description</mat-icon>\n          Detalles\n        </button>\n        <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{project.code}}/riesgos\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment_late</mat-icon>\n          Riesgos\n        </button>\n        <button class=\"portafolio-proyectos-boton-acciones  portafolio-proyectos-boton-error\" *ngIf=\"estaEnCurso(project.state.name)\"\n          mat-raised-button color=\"primary\" (click)=\"openCancelarDialog(project.code)\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">error</mat-icon>\n          Cancelar\n        </button>\n        <button class=\"portafolio-proyectos-boton-acciones portafolio-proyectos-boton-success\" *ngIf=\"estaEnCurso(project.state.name)\"\n          mat-raised-button color=\"primary\" (click)=\"openFinalizarDialog(project.code)\">\n          <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">done</mat-icon>\n          Finalizar\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n</div>"

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

module.exports = ".portafolio-proyectos-boton-acciones{\n    margin-right: 10px;\n}\n\n.detalle-proyecto{\n    border:1px solid #ccc; \n    background-color: white;    \n    border-radius: 16px;\n    margin-top: 10px;\n}\n\n.subtitulo-detalle{\n    display: inline-block; \n    width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tYWNjaW9uZXN7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGV0YWxsZS1wcm95ZWN0b3tcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJ0aXR1bG8tZGV0YWxsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHdpZHRoOiAyMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <h2>Detalle de Proyecto</h2>\n\n  <br>\n\n  <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\n    routerLink=\"/proyecto/{{project.code}}/tareas\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment</mat-icon>\n    Ver Tareas\n  </button>\n  <button class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\"\n    routerLink=\"/proyecto/{{project.code}}/riesgos\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Tiene algun riesgo que supero el umbral\">assignment_late</mat-icon>\n    Ver Riesgos\n  </button>\n\n  <div class=\"detalle-proyecto\">\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Codigo</b>\n        </div>\n        {{project.code}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Nombre</b>\n        </div>\n        {{project.name}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Lider del Proyecto</b>\n        </div>\n        {{project.leader.name}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Fecha de Inicio</b>\n        </div>\n        {{project.beginDate}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Fecha de Fin</b>\n        </div>\n        {{project.endDate}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Tipo de Proyecto</b>\n        </div>\n        {{project.type.name}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Version Actual</b>\n        </div>\n        {{project.currentVersion}}\n      </mat-list-item>\n      <mat-list-item role=\"listitem\">\n        <div class=\"subtitulo-detalle\">\n          <b>Descripcion</b>\n        </div>\n      </mat-list-item>\n      <mat-list-item role=\"listitem\"> {{project.description}}\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n\n</div>"

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

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n\n.description{\n    background: lightgreen;\n}\n\n.container {\n    margin: 5px;\n    padding: 5px;\n}\n\n.projects-dashboard-table {\n    width: 100%;\n    background: none;\n}\n\n#new-project-button {\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n  }\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n.portafolio-proyectos-boton-acciones{\n      margin-right: 10px;\n  }\n\n.proyect-form-wrapper {\n    margin: 5px;\n    padding: 5px;\n}\n\n.risk-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n     background-color: white;\n     padding:10px 20px;\n}\n\n.proyect-risk-input {\n    width: 100%;\n}\n\n.alineado-derecha {\n    display: block;\n    margin: 0 0 0 auto;\n}\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJpc2tzL25ldy1yaXNrL25ldy1yaXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtLQUNwQix1QkFBdUI7S0FDdkIsaUJBQWlCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yaXNrcy9uZXctcmlzay9uZXctcmlzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3RzLWRhc2hib2FyZC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI25ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cblxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAucG9ydGFmb2xpby1wcm95ZWN0b3MtYm90b24tYWNjaW9uZXN7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAucHJveWVjdC1mb3JtLXdyYXBwZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnJpc2stZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xufVxuXG4ucHJveWVjdC1yaXNrLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaW5lYWRvLWRlcmVjaGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/project-risks/new-risk/new-risk.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-risks/new-risk/new-risk.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Portafolio de Proyectos</h1>\n  <br>\n  <br>\n  <h2>Crear Riesgo</h2>\n  <form [formGroup]=\"riskForm\" (ngSubmit)=\"submit()\" class=\"risk-form\">\n    <mat-form-field class=\"risk-form-input\">\n      <input matInput placeholder=\"Motivo\" required [formControl]=\"riskForm.get('motive')\" id=\"new-risk-motive\">\n    </mat-form-field>\n\n    <mat-form-field class=\"risk-form-input\">\n      <input matInput class=\"risk-form-input\" required placeholder=\"Descripcion\" [formControl]=\"riskForm.get('description')\" id=\"new-risk-description\">\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <mat-select [formControl]=\"riskForm.get('impact')\" placeholder=\"Impacto del Riesgo\">\n        <mat-option [value]=\"0.2\">Bajo</mat-option>\n        <mat-option [value]=\"0.5\">Medio</mat-option>\n        <mat-option [value]=\"0.8\">Alto</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"proyect-form-input\">\n      <mat-select [formControl]=\"riskForm.get('probability')\" placeholder=\"Probabilidad del Riesgo\">\n        <mat-option [value]=\"0.2\">Bajo</mat-option>\n        <mat-option [value]=\"0.5\">Medio</mat-option>\n        <mat-option [value]=\"0.8\">Alto</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <br>\n    <button mat-raised-button color=\"primary\"  type=\"submit\" id=\"new-risk-submit\" value=\"Enviar\">Crear</button>\n  </form>\n\n  <p id=\"new-risk-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\n</div>"

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

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n\n.description{\n    background: lightgreen;\n}\n\n.container {\n    margin: 5px;\n    padding: 5px;\n}\n\n.projects-dashboard-table {\n    width: 100%;\n    background: none;\n}\n\n#new-risk-button {\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n  }\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n.portafolio-proyectos-boton-acciones{\n      margin-right: 10px;\n  }\n\n.encabezado-tabla{\n    font-weight: 1000;\n    font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXJpc2tzL3Byb2plY3Qtcmlza3MtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1yaXNrcy9wcm9qZWN0LXJpc2tzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuLmRlc2NyaXB0aW9ue1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2plY3RzLWRhc2hib2FyZC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI25ldy1yaXNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5wb3J0YWZvbGlvLXByb3llY3Rvcy1ib3Rvbi1hY2Npb25lc3tcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4uZW5jYWJlemFkby10YWJsYXtcbiAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-risks/project-risks-dashboard.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project-risks/project-risks-dashboard.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\"> Riesgos por Proyecto</h1>\n  <br>\n  <br>\n  <button id=\"botonito\" class=\"portafolio-proyectos-boton-acciones\" mat-raised-button color=\"primary\" routerLink=\"/proyecto/{{projectCode}}/crear-riesgo\">Agregar Riesgo</button>\n  <br>\n  <br>\n  <table mat-table [dataSource]=\"risks\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"alerta\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"></th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\">\n        <mat-icon *ngIf=\"superoElUmbral(risk)\" aria-hidden=\"false\" matTooltip=\"El riesgo supero el máximo umbral permitido\"\n          aria-label=\"El riesgo supero el máximo umbral permitido\">warning</mat-icon>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Descripcion </th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.description}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"motive\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Motivo </th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{risk.motive}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"impact\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Impacto </th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{valorRiesgo(risk.impact)}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"probability\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Probabilidad </th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{valorRiesgo(risk.probability)}}  </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"umbral\">\n      <th mat-header-cell *matHeaderCellDef class=\"encabezado-tabla\"> Exposicion </th>\n      <td mat-cell *matCellDef=\"let risk\" [ngStyle]=\"agregarEstilosSiSuperoElUmbral(risk)\"> {{valorRiesgo(risk.getExposition())}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n</div>"

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
    ProjectRisksDashboardComponent.prototype.valorRiesgo = function (valor) {
        if (valor <= 0.3)
            return "Bajo";
        else if (valor <= 0.7)
            return "Medio";
        else
            return "Alto";
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

module.exports = ".skill-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL2FkZC1yZXNvdXJjZS1za2lsbC1kaWFsb2cvYWRkLXJlc291cmNlLXNraWxsLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL2FkZC1yZXNvdXJjZS1za2lsbC1kaWFsb2cvYWRkLXJlc291cmNlLXNraWxsLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxsLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/resource-details/add-resource-skill-dialog/add-resource-skill-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:250px; height: 300px;\">\n  <h1 mat-dialog-title>Ingrese Nuevo Skill</h1>\n  <div mat-dialog-content>\n    <form class=\"skill-form\" [formGroup]=\"newSkillForm\" (ngSubmit)=\"onSubmit()\">\n      <mat-form-field>\n        <input matInput placeholder=\"Nombre\" formControlName=\"name\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select formControlName=\"level\" placeholder=\"Nivel\" required>\n          <mat-option *ngFor=\"let level of skillLevels\" [value]=\"level\">\n            {{level}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Descripción\" formControlName=\"description\">\n      </mat-form-field>\n      <button mat-button color=\"primary\" type=\"submit\" style=\"margin-left: auto;\">Ok</button>\n    </form>\n  </div>\n\n</div>\n"

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

module.exports = ".subtitle-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: flex-start\n}\n\n.panel {\n  padding: 20px;\n  flex: 1 1 530px;\n}\n\n.collapsible-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: 10px;\n}\n\n.primary-button {\n  height: 40px;\n  margin: 0 5px;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL3Jlc291cmNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZS1kZXRhaWxzL3Jlc291cmNlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbn1cblxuLnBhbmVsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleDogMSAxIDUzMHB4O1xufVxuXG4uY29sbGFwc2libGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/resource-details/resource-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/resource-details/resource-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Detalles: {{resource.name}}</h1>\n<h3>Identificación: {{resource.id}}</h3>\n<h3>Disponibilidad: {{resource.availableHours}}hs</h3>\n\n<div class=\"container\">\n  <div class=\"panel\">\n    <div class=\"subtitle-actions\">\n      <h2>Skills</h2>\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">Agregar</button>\n    </div>\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let skill of resource.skills\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>{{skill.name}}</mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"collapsible-row\">\n          <p>Nivel: {{skill.level || '-'}}</p>\n          <button mat-icon-button color=\"primary\" disabled>\n            <mat-icon aria-hidden=\"false\" aria-label=\"Editar\">edit</mat-icon>\n          </button>\n        </div>\n        <div class=\"collapsible-row\">\n          <p>Descripción: {{skill.description || '-'}}</p>\n          <button mat-icon-button color=\"primary\" disabled>\n              <mat-icon aria-hidden=\"false\" aria-label=\"Editar\">edit</mat-icon>\n          </button>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  <div class=\"panel\">\n    <div class=\"subtitle-actions\">\n      <h2>Proyectos</h2>\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" routerLink=\"/recursos/{{resource.id}}/asignar\">\n        Asignar\n      </button>\n    </div>\n    <table mat-table [dataSource]=\"resource.assignments\">\n      <ng-container matColumnDef=\"code\">\n        <th mat-header-cell *matHeaderCellDef> Código </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.code}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"projects\">\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.name}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef> Estado </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.state.name}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"beginDate\">\n        <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"endDate\">\n        <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.endDate.toLocaleDateString(\"es-AR\")}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"role\">\n          <th mat-header-cell *matHeaderCellDef> Rol </th>\n          <td mat-cell *matCellDef=\"let assignment;\">{{assignment.role}}</td>\n        </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n      <tr mat-row *matRowDef=\"let resources; columns: columnsToDisplay;\"></tr>\n    </table>\n  </div>\n  <div class=\"panel\">\n    <div class=\"subtitle-actions\">\n      <h2>Tareas</h2>\n      <button class=\"primary-button\" mat-raised-button color=\"primary\" disabled>Asignar</button>\n    </div>\n  </div>\n</div>\n"

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

module.exports = ".selected {\n  background: lightblue;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n\n.checkbox {\n  padding-right: 20px;\n}\n\n.project-name {\n  width: 100%;\n}\n\n.roles-select {\n  width: 250px;\n  margin-right: 10px;\n}\n\n.hours-select {\n  margin-right: 10px;\n}\n\n.assign-button {\n  justify-self: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzaWdubWVudC9yZXNvdXJjZS1hc3NpZ25tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2lnbm1lbnQvcmVzb3VyY2UtYXNzaWdubWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm9sZXMtc2VsZWN0IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ob3Vycy1zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5hc3NpZ24tYnV0dG9uIHtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/resources/assignment/resource-assignment.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/resources/assignment/resource-assignment.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Asignar Recurso: {{resource.name}}</h1>\n\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\n\n<form #f=\"ngForm\" [formGroup]=\"assignForm\" (ngSubmit)=\"onSubmit(f)\">\n  <div class=\"container\" formArrayName=\"roleAndHoursForm\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns; let $index = index\"></tr>\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"rowSelection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"rowSelection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td class=\"checkbox\" mat-cell *matCellDef=\"let row; let $index = index\" [formGroupName]=\"$index\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? rowSelection.toggle(row) : null\"\n                        [checked]=\"rowSelection.isSelected(row)\"\n                        formControlName=\"selected\"\n                        >\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <!-- Project Column -->\n      <ng-container matColumnDef=\"project\">\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\n        <td class=\"project-name\" mat-cell *matCellDef=\"let project\"> {{project.name}} </td>\n      </ng-container>\n      <!-- Role Column -->\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef> Rol </th>\n        <td mat-cell *matCellDef=\"let row; let $index = index;\" [formGroupName]=\"$index\">\n            <mat-form-field class=\"roles-select\">\n              <mat-select formControlName=\"role\" [required]=\"(assignForm.get('roleAndHoursForm')).at($index).value.selected\">\n                <mat-option *ngFor=\"let role of roles\" [value]=\"role\">\n                  {{role}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n        </td>\n      </ng-container>\n      <!-- Hours Column -->\n      <ng-container matColumnDef=\"hours\">\n        <th mat-header-cell *matHeaderCellDef> Horas </th>\n        <td mat-cell *matCellDef=\"let row; let $index = index;\" [formGroupName]=\"$index\">\n          <mat-form-field class=\"hours-select\">\n            <input\n              matInput\n              type=\"number\"\n              formControlName=\"hours\"\n              min=\"1\"\n              [max]=\"resource.availableHours\"\n              [required]=\"(assignForm.get('roleAndHoursForm')).at($index).value.selected\"\n            />\n          </mat-form-field>\n        </td>\n      </ng-container>\n    </table>\n    <button\n      mat-raised-button\n      class=\"assign-button\"\n      color=\"primary\"\n      type=\"submit\"\n      [disabled]=\"rowSelection.isEmpty()\"\n    >\n      Asignar\n    </button>\n  </div>\n</form>\n"

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

module.exports = ".resources-button-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\ntable {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvZGFzaGJvYXJkL3Jlc291cmNlcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Rhc2hib2FyZC9yZXNvdXJjZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzb3VyY2VzLWJ1dHRvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/resources/dashboard/resources-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/resources/dashboard/resources-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"resources-title\">Gestión de Recursos</h1>\n\n<div class=\"resources-button-row\">\n  <button id=\"\" routerLink=\"#\" mat-flat-button color=\"primary\" disabled>Generar Reporte</button>\n</div>\n\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\n\n<table mat-table [dataSource]=\"resources\">\n  <ng-container matColumnDef=\"recurso\">\n    <th mat-header-cell *matHeaderCellDef> Recurso </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      <a [routerLink]=\"['/recursos', resource.id]\"> {{resource.name}} </a>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"proyecto\">\n    <th mat-header-cell *matHeaderCellDef> Proyecto </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      <div *ngFor=\"let assignment of resource.assignments\">\n        {{assignment.project ? assignment.project.name : '-'}}\n      </div>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"version\">\n    <th mat-header-cell *matHeaderCellDef> Versión </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      <div *ngFor=\"let assignment of resource.assignments\">\n        {{assignment.project ? assignment.project.currentVersion : '-'}}\n      </div>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"beginDate\">\n    <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\n    <td mat-cell *matCellDef=\"let resource;\">\n        <div *ngFor=\"let assignment of resource.assignments\">\n          {{assignment.project && assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}\n        </div>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"endDate\">\n    <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\n    <td mat-cell *matCellDef=\"let resource;\">\n      <div *ngFor=\"let assignment of resource.assignments\">\n        {{assignment.project && assignment.project.endDate.toLocaleDateString(\"es-AR\")}}\n      </div>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"rol\">\n    <th mat-header-cell *matHeaderCellDef> Rol </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      <div *ngFor=\"let assignment of resource.assignments\">\n        {{assignment.role || '-' }}\n      </div>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"disponibilidad\">\n    <th mat-header-cell *matHeaderCellDef> Disponibilidad </th>\n    <td mat-cell *matCellDef=\"let resource\"> {{resource.availableHours}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"horasNoAsignadas\">\n    <th mat-header-cell *matHeaderCellDef> Horas no asignadas </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      {{calcRemainingHours(resource)}}\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"acciones\">\n    <th mat-header-cell *matHeaderCellDef> Acciones </th>\n    <td mat-cell *matCellDef=\"let resource\">\n      <button\n        mat-raised-button\n        color=\"primary\"\n        routerLink=\"/recursos/{{resource.id}}/asignar\"\n      >\n        Asignar\n      </button>\n      <button\n        mat-raised-button\n        color=\"secondary\"\n        routerLink=\"/recursos/{{resource.id}}/desasignar\"\n        [disabled]=\"calcRemainingHours(resource) === resource.availableHours\"\n        style=\"margin-left:10px;\"\n      >\n        Desasignar\n      </button>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let resources; columns: columnsToDisplay;\"></tr>\n</table>\n"

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

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNvdXJjZXMvdW5hc3NpZ25tZW50L3Jlc291cmNlLXVuYXNzaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2VzL3VuYXNzaWdubWVudC9yZXNvdXJjZS11bmFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resources/unassignment/resource-unassignment.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/resources/unassignment/resource-unassignment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Desasignar Recurso: {{resource.name}}</h1>\n\n<mat-divider style=\"margin: 10px 5px;\"></mat-divider>\n\n<div class=\"container\">\n  <table mat-table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"code\">\n      <th mat-header-cell *matHeaderCellDef> Código </th>\n      <td mat-cell *matCellDef=\"let assignment\">\n        {{assignment.project.code}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"project\">\n        <th mat-header-cell *matHeaderCellDef> Proyecto </th>\n        <td mat-cell *matCellDef=\"let assignment\">\n          {{assignment.project.name}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"beginDate\">\n        <th mat-header-cell *matHeaderCellDef> Fecha inicio </th>\n        <td mat-cell *matCellDef=\"let assignment;\">\n          {{assignment.project && assignment.project.beginDate.toLocaleDateString(\"es-AR\")}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"endDate\">\n        <th mat-header-cell *matHeaderCellDef> Fecha fin </th>\n        <td mat-cell *matCellDef=\"let assignment;\">\n          {{assignment.project && assignment.project.endDate.toLocaleDateString(\"es-AR\")}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef> Rol </th>\n        <td mat-cell *matCellDef=\"let assignment\">\n          {{assignment.role}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"hours\">\n        <th mat-header-cell *matHeaderCellDef> Horas asignado </th>\n        <td mat-cell *matCellDef=\"let assignment\">\n          {{assignment.hours}}\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef> Estado </th>\n        <td mat-cell *matCellDef=\"let assignment;\">{{assignment.project.state.name}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Acciones </th>\n        <td mat-cell *matCellDef=\"let resource; let $index = index\">\n          <button\n            mat-raised-button\n            color=\"primary\"\n            (click)=\"unassign($index)\"\n          >\n            Desasignar\n          </button>\n        </td>\n      </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let resource; columns: columnsToDisplay;\"></tr>\n  </table>\n</div>\n\n"

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

module.exports = ".example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n.form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n\n    \n}\n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW51ZXZvLXRpY2tldC9zb3BvcnRlLW51ZXZvLXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7OztBQUdyQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlLW51ZXZvLXRpY2tldC9zb3BvcnRlLW51ZXZvLXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6MTBweCAyMHB4O1xuXG4gICAgXG59XG4gIFxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/soporte-nuevo-ticket/soporte-nuevo-ticket.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<h4>Nuevo Ticket</h4>\n\n<div class=\"form\">\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Cliente</mat-label>\n    <mat-select (selectionChange)=\"getProductsByClient()\" [(ngModel)]=\"nuevoTicket.clienteCode\">\n      <mat-option *ngFor=\"let cliente of clientes\" [value]=\"cliente.code\">\n        {{cliente.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Tipo de Ticket</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.tipo\">\n      <mat-option value=\"Incidente\">\n        Incidente\n      </mat-option>\n      <mat-option value=\"Segerencia\">\n        Sugerencia\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Producto</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.producto\">\n      <mat-option *ngFor=\"let prod of products\" [value]=\"prod\">\n        {{prod}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Severidad</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.severidad\">\n      <mat-option value=\"Baja\">\n        Baja\n      </mat-option>\n      <mat-option value=\"Media\">\n        Media\n      </mat-option>\n      <mat-option value=\"Alta\">\n        Alta\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input [(ngModel)]=\"nuevoTicket.asunto\" matInput placeholder=\"Asunto\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Responsable</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.responsable\">\n      <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\n        {{responsable}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <textarea [(ngModel)]=\"nuevoTicket.descripcion\" matInput placeholder=\"Descripción\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Estado</mat-label>\n    <mat-select [(ngModel)]=\"nuevoTicket.estado\">\n      <mat-option value=\"Abierto\">\n        Abierto\n      </mat-option>\n      <mat-option value=\"En progreso\">\n        En progreso\n      </mat-option>\n      <mat-option value=\"Cerrado\">\n        Cerrado\n      </mat-option>\n      <mat-option value=\"Escalado a desarrollo\">\n        Escalado a desarrollo\n      </mat-option>\n      <mat-option value=\"Escalado a implementacion\">\n        Escalado a implementacion\n      </mat-option>\n      <mat-option value=\"A la espera del cliente\">\n        A la espera del cliente\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button (click)=\"addTicket()\" mat-raised-button color=\"primary\">Agregar</button>\n</div>\n\n\n"

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

module.exports = ".example-icon {\n    padding: 0 14px;\n}\n\n.example-spacer {\n    flex: 1 1 auto;\n}\n\n.example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\ntable {\n    width: 100%;\n}\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3BvcnRlL3NvcG9ydGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcG9ydGUvc29wb3J0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiwgLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/soporte/soporte.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/soporte/soporte.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-flat-button color=\"primary\">Overview</button>\n  <button id=\"nav-router-mistickets\" routerLink=\"/soporte/mistickets\" mat-flat-button color=\"primary\">Mis\n    Tickets</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<h4>Filtros</h4>\n\n<mat-form-field>\n  <mat-label>Producto</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option *ngFor=\"let producto of productos\" [value]=\"producto\">\n      {{producto}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-button-row\">\n  <button mat-button (click)=\"filtrar(selected)\">Aplicar filtro<mat-icon>search</mat-icon></button>\n  <button mat-button (click)=\"borrarFiltro()\">Borrar filtro<mat-icon>delete</mat-icon></button>\n</div>\n\n<table mat-table [dataSource]=\"filterDataSource\">\n\n  <ng-container matColumnDef=\"producto\">\n    <th mat-header-cell *matHeaderCellDef> Producto </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.producto}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"version\">\n    <th mat-header-cell *matHeaderCellDef> Version </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.vProducto}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"cliente\">\n    <th mat-header-cell *matHeaderCellDef> Cliente </th>\n    <td mat-cell *matCellDef=\"let element\"> {{this.getClient(element.clienteCode).name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"severidad\">\n    <th mat-header-cell *matHeaderCellDef> Severidad </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.severidad}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"responsable\">\n    <th mat-header-cell *matHeaderCellDef> Responsable </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.responsable}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"opciones\">\n    <th mat-header-cell *matHeaderCellDef> Opciones </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button>\n        <mat-icon routerLink=\"/ticketdetalle/{{element.numeroTicket}}\">remove_red_eye</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

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

module.exports = "<div class=\"container\" style=\"display:block; margin: 15px 15px;\">\n  <h1 style=\"text-align: center;\">Gestion de Tareas</h1>\n  <br>\n  <br>\n\n  <table mat-table [dataSource]=\"tasks\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"asignee\">\n      <th mat-header-cell *matHeaderCellDef> Asignado a </th>\n      <td mat-cell *matCellDef=\"let task\">\n        <mat-form-field>\n          <mat-select value=\"{{task.asignee?.id || 0}}\" [compareWith]=\"compareResources\"\n            (selectionChange)=\"onAsigneeChange($event, task)\">\n            <mat-option *ngFor=\"let resource of resources\" [value]=\"resource.id\">\n              {{ resource.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"state\">\n      <th mat-header-cell *matHeaderCellDef> Estado </th>\n      <td mat-cell *matCellDef=\"let task\">\n        <mat-form-field>\n          <mat-select value=\"{{task.state}}\" (selectionChange)=\"onStateChange($event, task)\">\n            <mat-option *ngFor=\"let state of priorities\" [value]=\"state\">\n              {{ state }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"priority\">\n      <th mat-header-cell *matHeaderCellDef> Prioridad </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.priority}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"estimatedTime\">\n      <th mat-header-cell *matHeaderCellDef> Tiempo Estimado </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.estimatedTime}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dedicatedTime\">\n      <th mat-header-cell *matHeaderCellDef> Tiempo Dedicado </th>\n      <td mat-cell *matCellDef=\"let task\"> {{task.dedicatedTime}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <br>\n\n  <button routerLink=\"/proyecto/{{ getProjectId() }}/crear-tarea\" mat-raised-button color=\"primary\">Crear Tarea</button>\n</div>"

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

module.exports = ".task-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n    background-color: white;\n    padding:10px 20px;\n}\n\n.proyect-form-input {\n    width: 100%;\n}\n\n.task-form-wrapper {\n    margin: 5px;\n    padding: 5px;\n}\n\n.task-form {\n    min-width: 150px;\n    max-width: 700px;\n    width: 100%;\n    border:1px solid #ccc;\n     background-color: white;\n     padding:10px 20px;\n}\n\n.task-form-input {\n    width: 100%;\n}\n\n.alineado-derecha {\n    display: block;\n    margin: 0 0 0 auto;\n}\n\n#new-task-result{\n    color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7S0FDcEIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrcy9uZXcvbmV3LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XG59XG5cbi5wcm95ZWN0LWZvcm0taW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay1mb3JtLXdyYXBwZXIge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2stZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgIHBhZGRpbmc6MTBweCAyMHB4O1xufVxuXG4udGFzay1mb3JtLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaW5lYWRvLWRlcmVjaGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cblxuI25ldy10YXNrLXJlc3VsdHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tasks/new/new-task.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/tasks/new/new-task.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:block;margin: 15px 15px;\">\n  <h2>Proyecto {{ projectId }} - Nueva Tarea</h2>\n\n  <form [formGroup]=\"taskForm\" (ngSubmit)=\"addTask()\" class=\"task-form\">\n    <mat-form-field class=\"task-form-input\">\n      <input matInput placeholder=\"Titulo\" [formControl]=\"taskForm.get('name')\" [(ngModel)]=\"task.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"task-form-input\">\n      <input matInput class=\"task-form-input\" [formControl]=\"taskForm.get('estimatedTime')\"\n        placeholder=\"Tiempo estimado\" type=\"number\" [(ngModel)]=\"task.estimatedTime\">\n    </mat-form-field>\n\n    <mat-form-field class=\"task-form-input\">\n      <input matInput class=\"task-form-input\" [formControl]=\"taskForm.get('dedicatedTime')\"\n        placeholder=\"Tiempo dedicado\" type=\"number\" [(ngModel)]=\"task.dedicatedTime\">\n    </mat-form-field>\n\n    <mat-form-field class=\"task-form-input\">\n      <mat-label>Prioridad</mat-label>\n      <mat-select [(ngModel)]=\"task.priority\" [formControl]=\"taskForm.get('priority')\">\n        <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\n          {{ priority }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"task-form-input\">\n      <textarea matInput class=\"task-form-input\" [formControl]=\"taskForm.get('description')\" placeholder=\"Descripcion\"\n        [(ngModel)]=\"task.description\"></textarea>\n    </mat-form-field>\n\n    <br>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\" id=\"new-task-submit\" value=\"Enviar\" mat-raised-button\n      color=\"primary\">Crear</button>\n\n    <p id=\"new-task-result\" *ngIf=\"submitResultMessage\">{{submitResultMessage}}</p>\n  </form>\n\n</div>"

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

module.exports = ".example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\nmat-form-field {\n    margin-right: 10px;\n}\n\ntable {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWxsZS90aWNrZXQtZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/ticket-detalle/ticket-detalle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ticket-detalle/ticket-detalle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-button-row\">\n  <button (click)=\"goBack()\" mat-flat-button color=\"primary\">Atras</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<mat-card>\n  <h4> Detalle del Ticket </h4>\n  <div class=\"example-button-row\">\n    <button mat-flat-button color=\"primary\"> {{ticket.estado}} </button>\n  </div>\n  <p> Numero de Ticket: {{ticket.numeroTicket}} </p>\n  <p> Producto: {{ticket.producto}} {{ticket.vProducto}} </p>\n  <p> Asunto: {{ticket.asunto}} </p>\n  <p> SLA: </p>\n  <p> Tipo de Ticket: {{ticket.tipo}} </p>\n  <p> Fecha de Alta: {{ticket.fechaAlta?.toLocaleString()}} </p>\n  <p> Descripcion: {{ticket.descripcion}}</p>\n</mat-card>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<mat-form-field>\n  <mat-label>Departamento</mat-label>\n  <mat-select [(value)]=\"inDepartamento\">\n    <mat-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento\">\n      {{departamento}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Severidad</mat-label>\n  <mat-select [(value)]=\"inSeveridad\">\n    <mat-option *ngFor=\"let severidad of severidades\" [value]=\"severidad\">\n      {{severidad}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Estado</mat-label>\n  <mat-select [(value)]=\"inEstado\">\n    <mat-option *ngFor=\"let estado of estados\" [value]=\"estado\">\n      {{estado}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Responsable</mat-label>\n  <mat-select [(value)]=\"inResponsable\">\n    <mat-option *ngFor=\"let responsable of responsables\" [value]=\"responsable\">\n      {{responsable}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-button-row\">\n  <button mat-flat-button color=\"primary\" (click)=\"onClick()\"> Aplicar cambios </button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<div class=\"example-button-row\">\n  <button routerLink=\"/ticketdetalle/{{ticket.numeroTicket}}/tarea\" mat-flat-button color=\"primary\">Agregar\n    tarea</button>\n</div>\n\n<mat-divider style=\"margin: 10px\"></mat-divider>\n\n<table mat-table [dataSource]=\"ticket.tareas\">\n  <ng-container matColumnDef=\"nombre\">\n    <th mat-header-cell *matHeaderCellDef> Nombre </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"asignado\">\n    <th mat-header-cell *matHeaderCellDef> Asignado </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"element.asignee\">\n          <mat-option *ngFor=\"let resource of resources\" value=\"{{resource}}\">\n            {{ resource }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"estado\">\n    <th mat-header-cell *matHeaderCellDef> Estado </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"element.state\">\n          <mat-option *ngFor=\"let state of states\" value=\"{{state}}\">\n            {{ state }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"prioridad\">\n    <th mat-header-cell *matHeaderCellDef> Prioridad </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"element.priority\">\n          <mat-option *ngFor=\"let priority of priorities\" value=\"{{priority}}\">\n            {{ priority }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"proyecto\">\n    <th mat-header-cell *matHeaderCellDef> Proyecto </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"element.projectId\" (selectionChange)=\"agregarTareaAProyecto(element)\">\n          <mat-option *ngFor=\"let project of projects\" value=\"{{project.code}}\">\n            {{ project.code }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

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

module.exports = ".example-button-row button, .example-button-row a {\n    margin-right: 8px;\n}\n\n.form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtbnVldmEtdGFyZWEvdGlja2V0LW51ZXZhLXRhcmVhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LW51ZXZhLXRhcmVhL3RpY2tldC1udWV2YS10YXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sIC5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/ticket-nueva-tarea/ticket-nueva-tarea.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Nueva tarea - Ticket</h4>\n\n<div class=\"form\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Titulo\" [(ngModel)]=\"task.name\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Prioridad</mat-label>\n    <mat-select [(ngModel)]=\"task.priority\">\n      <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">\n        {{ priority }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <textarea matInput placeholder=\"Descripcion\" [(ngModel)]=\"task.description\"></textarea>\n  </mat-form-field>\n\n  <button (click)=\"addTask()\" mat-raised-button color=\"primary\">Crear</button>\n\n</div>\n\n"

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

module.exports = ".button-row button,\n.button-row a {\n  margin: 5px 5px;\n  width: 150px;\n}\n\nmat-sidenav {\n  text-align: center;\n  width: 205px;\n}\n\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n\nh1 {\n  margin: 10px;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.container {\n  margin: 5px;\n  padding: 5px;\n}\n\n.side-menu {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJvdyBidXR0b24sXG4uYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luOiA1cHggNXB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjA1cHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc2lkZS1tZW51IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span>PSA System</span>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <div class=\"side-menu\">\n      <div class=\"button-row\">\n        <button id=\"nav-router-proyectos\" routerLink=\"/proyectos\" mat-raised-button>Proyectos</button>\n      </div>\n      <div class=\"button-row\">\n        <button id=\"nav-router-recursos\" routerLink=\"/recursos\" mat-raised-button>Recursos</button>\n      </div>\n      <div class=\"button-row\">\n          <button id=\"nav-router-clientes\" routerLink=\"/clientes\" mat-raised-button>Clientes</button>\n      </div>\n      <div class=\"button-row\">\n        <button id=\"nav-router-productos\" routerLink=\"/productos\" mat-raised-button>Productos</button>\n      </div>\n      <div class=\"button-row\">\n        <button id=\"nav-router-contratos\" routerLink=\"/contratos\" mat-raised-button>Contratos</button>\n      </div>\n      <div class=\"button-row\">\n        <button id=\"nav-router-soporte\" routerLink=\"/soporte\" mat-raised-button>Soporte</button>\n      </div>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div class=\"container\">\n      <!--CONTENIDO PRINCIPAL-->\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
        var placeholderDev1 = new _models_Resource__WEBPACK_IMPORTED_MODULE_7__["default"](4, 'Fernando Soluzzia', [{ project: proyecto, role: _models_Resource__WEBPACK_IMPORTED_MODULE_7__["Roles"].PROJECT_LEADER, hours: 10 }], 10);
        var placeholderDev2 = new _models_Resource__WEBPACK_IMPORTED_MODULE_7__["default"](3, 'Felipe Codeo', [{ project: proyecto, role: _models_Resource__WEBPACK_IMPORTED_MODULE_7__["Roles"].DEVELOPER, hours: 20 }], 20);
        proyecto.code = 'COD1';
        proyecto.name = 'PSA';
        proyecto.leader = placeholderDev1;
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = 'PSA Proyecto Basse';
        proyecto.currentVersion = 'Alpha';
        proyecto.state = _models_ProjectState__WEBPACK_IMPORTED_MODULE_6__["PROJECT_STATE_IN_PROGRESS"];
        proyecto.type = _models_ProjectType__WEBPACK_IMPORTED_MODULE_5__["PROJECT_TYPE_DEV"];
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
        proyecto2.leader = placeholderDev2;
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
        if (project.leader) {
            this.assignResource(project.code, project.leader, _models_Resource__WEBPACK_IMPORTED_MODULE_7__["Roles"].PROJECT_LEADER, 0);
        }
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
            { numeroTicket: 1, clienteCode: "123", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: 'Desarrollo', tareas: [] },
            { numeroTicket: 2, clienteCode: "123", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'A la espera del cliente', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 3, clienteCode: "999", tipo: 'Incidente', producto: 'SAP', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Pablo Juanes', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 4, clienteCode: "456", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Facundo Gonzalez', fechaAlta: new Date(), departamento: '', tareas: [] },
            { numeroTicket: 5, clienteCode: "354", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Gonzalo Facundez', fechaAlta: new Date(), departamento: '', tareas: [] },
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
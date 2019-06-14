import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product/dashboard/product-dashboard.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectTasksComponent } from './components/project-tasks/project-tasks.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectRisksDashboardComponent } from './components/project-risks/project-risks-dashboard.component';
import { ContractDashboardComponent } from './components/contracts/dashboard/contracts-dashboard.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { SoporteMisTicketsComponent } from './components/soporte-mis-tickets/soporte-mis-tickets.component';
import { NewContractComponent } from './components/contracts/new/new-contract.component';
import { ClientDashboardComponent } from './components/clients/dashboard/clients-dashboard.component';
import { NewClientComponent } from './components/clients/new/new-client.component';
import { EditContractComponent } from './components/contracts/edit/edit-contract.component';
import { TicketDetalleComponent } from './components/ticket-detalle/ticket-detalle.component';
import { ProductDetailsComponent } from './components/product/details/product-details.component';
import { ContractConfigurationComponent } from './components/contracts/configuration/contracts-configuration.component';
import { SoporteNuevoTicketComponent } from './components/soporte-nuevo-ticket/soporte-nuevo-ticket.component';


const routes: Routes = [
  { path: 'proyectos', component: ProjectDashboardComponent },
  { path: 'equipos', component: TeamsDashboardComponent },
  { path: 'operaciones', component: OperationsDashboardComponent },
  { path: 'productos', component: ProductDashboardComponent },
  { path: 'detalle-producto', component: ProductDetailsComponent },
  { path: 'contratos', component: ContractDashboardComponent },

  { path: 'nuevo-contrato', component: NewContractComponent },
  { path: 'editar-contrato', component: EditContractComponent },
  { path: 'configuracion-contrato', component: ContractConfigurationComponent },
  { path: 'nuevo-proyecto', component: NewProjectComponent },
  { path: 'proyecto/:id/tareas', component: ProjectTasksComponent },
  { path: 'proyecto/:id/detalle', component: ProjectDetailsComponent },
  { path: 'riesgos', component: ProjectRisksDashboardComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'soporte/mistickets', component: SoporteMisTicketsComponent },
  { path: 'clientes', component: ClientDashboardComponent },
  { path: 'nuevo-cliente', component: NewClientComponent },
  { path: 'ticketdetalle/:numeroTicket', component: TicketDetalleComponent },
  { path: 'soporte/nuevoticket', component: SoporteNuevoTicketComponent },
  { path: '', redirectTo: '/proyectos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product/dashboard/product-dashboard.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectTasksComponent } from './components/project-tasks/project-tasks.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ContractDashboardComponent } from './components/contracts/dashboard/contracts-dashboard.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { SoporteMisTicketsComponent } from './components/soporte-mis-tickets/soporte-mis-tickets.component';
import { NewContractComponent } from './components/contracts/new/new-contract.component';
import { ClientDashboardComponent } from './components/clients/dashboard/clients-dashboard.component';
import { NewClientComponent } from './components/clients/new/new-client.component';
import { EditContractComponent } from './components/contracts/edit/edit-contract.component';
import { ProductDetailsComponent } from './components/product/details/product-details.component';

const routes: Routes = [
  { path: 'proyectos', component: ProjectDashboardComponent },
  { path: 'equipos', component: TeamsDashboardComponent },
  { path: 'operaciones', component: OperationsDashboardComponent },
  { path: 'productos', component: ProductDashboardComponent },
  { path: 'detalle-producto', component: ProductDetailsComponent },
  { path: 'contratos', component: ContractDashboardComponent },
  { path: 'nuevo-contrato', component: NewContractComponent},
  { path: 'editar-contrato', component: EditContractComponent},
  { path: 'nuevo-proyecto', component: NewProjectComponent },
  { path: 'proyecto/:id/tareas', component: ProjectTasksComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'soporte/mistickets', component: SoporteMisTicketsComponent },
  { path: 'clientes', component: ClientDashboardComponent},
  { path: 'nuevo-cliente', component: NewClientComponent},
  { path: '', redirectTo: '/proyectos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

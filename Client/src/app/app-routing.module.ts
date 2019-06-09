import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectTasksComponent } from './components/project-tasks/project-tasks.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';

const routes: Routes = [
  { path: 'proyectos', component: ProjectDashboardComponent },
  { path: 'equipos', component: TeamsDashboardComponent },
  { path: 'operaciones', component: OperationsDashboardComponent },
  { path: 'productos', component: ProductDashboardComponent},
  { path: 'nuevo-proyecto', component: NewProjectComponent },
  { path: 'proyecto/:id/tareas', component: ProjectTasksComponent },
  { path: '', redirectTo: '/proyectos', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

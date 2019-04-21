import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';

const routes: Routes = [
  { path: 'proyectos', component: ProductDashboardComponent },
  { path: 'equipos', component: TeamsDashboardComponent },
  { path: 'operaciones', component: OperationsDashboardComponent },
  { path: '', redirectTo: '/proyectos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}

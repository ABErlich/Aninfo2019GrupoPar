// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/config';
import { FormsModule } from '@angular/forms';

// Material
import { MaterialModule } from './app.material.modules';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';

// Componentes
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product/dashboard/product-dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { NewTaskComponent } from './components/tasks/new/new-task.component';
import { ProjectTasksComponent } from './components/tasks/dashboard/project-tasks.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectRisksDashboardComponent } from './components/project-risks/project-risks-dashboard.component';

import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ContractDashboardComponent } from './components/contracts/dashboard/contracts-dashboard.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { SoporteMisTicketsComponent } from './components/soporte-mis-tickets/soporte-mis-tickets.component';
import { NewContractComponent } from './components/contracts/new/new-contract.component';
import { ClientDashboardComponent } from './components/clients/dashboard/clients-dashboard.component';
import { NewClientComponent } from './components/clients/new/new-client.component';
import { EditContractComponent } from './components/contracts/edit/edit-contract.component';
import { ProductDetailsComponent } from './components/product/details/product-details.component';
import { ContractConfigurationComponent } from './components/contracts/configuration/contracts-configuration.component';

// Servicios
import { ExampleService } from './services/example.service';
import { ProductService } from './services/product.service';
import { ContractService } from './services/contract.service';
import { TicketService } from './services/ticket.service';
import { ClientService } from './services/client.service';
import { TicketDetalleComponent } from './components/ticket-detalle/ticket-detalle.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ProductDashboardComponent,
    ProductDetailsComponent,
    FooterComponent,
    TeamsDashboardComponent,
    OperationsDashboardComponent,
    NewProjectComponent,
    ProjectTasksComponent,
    ProjectDetailsComponent,
    ProjectDashboardComponent,
    ContractDashboardComponent,
    NewContractComponent,
    EditContractComponent,
    SoporteComponent,
    SoporteMisTicketsComponent,
    ClientDashboardComponent,
    NewClientComponent,
    TicketDetalleComponent,
    ContractConfigurationComponent,
    ProjectRisksDashboardComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // Material
    MaterialModule,
    MatSidenavModule
  ],
  providers: [
    ExampleService,
    ProductService,
    ContractService,
    TicketService,
    ClientService,
    AppConfig
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

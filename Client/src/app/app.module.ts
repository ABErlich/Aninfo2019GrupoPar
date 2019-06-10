// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/config';

// Material
import { MaterialModule } from './app.material.modules';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';

// Componentes
import { LayoutComponent } from './layout/layout.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TeamsDashboardComponent } from './components/teams-dashboard/teams-dashboard.component';
import { OperationsDashboardComponent } from './components/operations-dashboard/operations-dashboard.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectTasksComponent } from './components/project-tasks/project-tasks.component';


// Servicios
import { ExampleService } from './services/example.service';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProductService } from './services/product.service';
import { ContractDashboardComponent } from './components/contracts/dashboard/contracts-dashboard.component';
import { ContractService } from './services/contract.service';
import { SoporteComponent } from './components/soporte/soporte.component';
import { SoporteMisTicketsComponent } from './components/soporte-mis-tickets/soporte-mis-tickets.component';
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [
    LayoutComponent,
    ProductDashboardComponent,
    FooterComponent,
    TeamsDashboardComponent,
    OperationsDashboardComponent,
    NewProjectComponent,
    ProjectTasksComponent,
    ProjectDashboardComponent,
    ContractDashboardComponent,
    SoporteComponent,
    SoporteMisTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,
    MatSidenavModule
  ],
  providers: [
    ExampleService,
    ProductService,
    ContractService,
    TicketService,
    AppConfig
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

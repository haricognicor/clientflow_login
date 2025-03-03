import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReportsComponent } from './reports/reports.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TasksComponent,
    DocumentsComponent,
    ReportsComponent,
    ClientAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add routing module
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstraps AppComponent
})
export class AppModule { }

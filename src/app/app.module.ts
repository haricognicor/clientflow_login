import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Import this
import { CommonModule } from '@angular/common';
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
    AppRoutingModule,
    FormsModule, // ✅ Add FormsModule for template-driven forms (optional)
    ReactiveFormsModule,
    CommonModule // ✅ Add this for formGroup support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

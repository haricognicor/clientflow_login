import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // ✅ Import RouterModule and Routes
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { DocumentsComponent } from './documents/documents.component';
import { ReportsComponent } from './reports/reports.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientAddComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ✅ Register routes
  exports: [RouterModule] // ✅ Export RouterModule
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './modules/task-manager/pages/task-manager/task-manager.component';
import { CreateTaskComponent } from './modules/task-manager/components/create-task/create-task.component';
import { UpdateTaskComponent } from './modules/task-manager/components/update-task/update-task.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { CalculatorComponent } from './modules/calculator/pages/calculator/calculator.component';
import { ContactComponent } from './modules/contact/pages/contact/contact.component';
import { PageNotFoundComponent } from './modules/page-not-found/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'task', component: TaskManagerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'task/create', component: CreateTaskComponent },
  { path: 'task/update/:id', component: UpdateTaskComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

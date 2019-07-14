import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TaskManagerComponent } from './modules/task-manager/pages/task-manager/task-manager.component';
// import { ViewTaskComponent } from './modules/task-manager/components/view-task/view-task.component';
// import { CreateTaskComponent } from './modules/task-manager/components/create-task/create-task.component';
// import { UpdateTaskComponent } from './modules/task-manager/components/update-task/update-task.component';
// import { DeleteTaskComponent } from './modules/task-manager/components/delete-task/delete-task.component';
// import { HomeComponent } from './modules/home/pages/home/home.component';
// import { CalculatorComponent } from './modules/calculator/pages/calculator/calculator.component';
// import { ContactComponent } from './modules/contact/pages/contact/contact.component';
// import { PageNotFoundComponent } from './modules/page-not-found/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'calculator', component: CalculatorComponent },
  // { path: 'task-manager', component: TaskManagerComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  // {
  //   path: 'view/:id',
  //   component: ViewTaskComponent
  // },
  // {
  //   path: 'add',
  //   component: CreateTaskComponent
  // },
  // {
  //   path: 'update/:id',
  //   component: UpdateTaskComponent
  // },
  // {
  //   path: 'delete/:id',
  //   component: DeleteTaskComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/tasks',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

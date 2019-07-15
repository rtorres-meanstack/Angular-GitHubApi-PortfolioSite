import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksService } from './modules/task-manager/service/tasks.service';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactComponent } from './modules/contact/pages/contact/contact.component';
import { PageNotFoundComponent } from './modules/page-not-found/pages/page-not-found/page-not-found.component';

import { HomeHeroSliderComponent } from './modules/home/component/home-hero-slider/home-hero-slider.component';
import { GithubApiComponent } from './modules/home/component/github-api/github-api.component';
import { RafaelIntroComponent } from './modules/home/component/rafael-intro/rafael-intro.component';
import { CurrentSkillsetComponent } from './modules/home/component/current-skillset/current-skillset.component';
import { CalculatorComponent } from './modules/calculator/pages/calculator/calculator.component';
import { KillowattCalculatorComponent } from './modules/calculator/component/killowatt-calculator/killowatt-calculator.component';
import { ContactusHeaderComponent } from './modules/contact/components/contactus-header/contactus-header.component';
import { CalculatorHeaderComponent } from './modules/calculator/component/calculator-header/calculator-header.component';
import { TaskManagerComponent } from './modules/task-manager/pages/task-manager/task-manager.component';
import { CreateTaskComponent } from './modules/task-manager/components/create-task/create-task.component';
import { ViewTaskComponent } from './modules/task-manager/components/view-task/view-task.component';
import { UpdateTaskComponent } from './modules/task-manager/components/update-task/update-task.component';
import { DeleteTaskComponent } from './modules/task-manager/components/delete-task/delete-task.component';
import { TaskManagerHeaderComponent } from './modules/task-manager/components/task-manager-header/task-manager-header.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'task-manager', component: TaskManagerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'view/:id', component: ViewTaskComponent },
  { path: 'add', component: CreateTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent },
  { path: 'delete/:id', component: DeleteTaskComponent },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeHeroSliderComponent,
    GithubApiComponent,
    RafaelIntroComponent,
    CurrentSkillsetComponent,
    CalculatorComponent,
    KillowattCalculatorComponent,
    ContactusHeaderComponent,
    CalculatorHeaderComponent,
    TaskManagerComponent,
    CreateTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    TaskManagerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    SlimLoadingBarModule
  ],
  providers: [ TasksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

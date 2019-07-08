import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
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
    ContactusHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

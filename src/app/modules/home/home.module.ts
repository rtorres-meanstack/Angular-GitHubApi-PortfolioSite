import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroSliderComponent } from './component/home-hero-slider/home-hero-slider.component';
import { RafaelIntroComponent } from './component/rafael-intro/rafael-intro.component';
import { GithubApiComponent } from './component/github-api/github-api.component';
import { CurrentSkillsetComponent } from './component/current-skillset/current-skillset.component';

@NgModule({
  declarations: [HomeHeroSliderComponent, RafaelIntroComponent, GithubApiComponent, CurrentSkillsetComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

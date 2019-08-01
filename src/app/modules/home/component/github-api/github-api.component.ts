import { Component, OnInit } from '@angular/core';

declare function myGitHubApi(): any;
@Component({
  selector: 'app-github-api',
  templateUrl: './github-api.component.html',
  styleUrls: ['./github-api.component.css']
})
export class GithubApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myGitHubApi();
    console.log('MyGitHubApi called in ngOnInit');
  }

}

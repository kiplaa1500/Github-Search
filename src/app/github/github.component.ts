import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { User } from '../user'
import {Repo} from '../repos'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  Users!: User;
  Repos: Repo[] = [];
  constructor(public userHttpService: GithubService) { }

  ngOnInit() {
    this.searchGit('kiplaa1500');
  }
  searchGit(searchTerm: string) {
    this.userHttpService.searchGits(searchTerm).then(
      (success) => {
        this.Users = this.userHttpService.Users;
      },
      (error) => {
        console.log(error);
      }
    );
    this.userHttpService.searchRepos(searchTerm).then((success) => {
      this.Repos = this.userHttpService.Repos;
    });
  }
}

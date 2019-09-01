import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import { Repository } from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
    public searchRepo: string;
    public resultCount = 12;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public ProfileRequestService: ProfileRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
     
  }


      getDataFunction() {
          // this.ProfileRequestService.gitRepository(this.searchRepo);

      }


}

import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import { Repository } from '../repository'
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos:Repository;
  reponame:string;
  show:number;


   constructor(private ProfileRequestService: ProfileRequestService) { 
  
   }
  


  ngOnInit() {
  }
}
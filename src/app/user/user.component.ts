import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
// import { ProfileService } from '../profile-http/profile-request.service'
import { ProfileRequestService} from '../profile-http/profile-request.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  file: User;

  

  constructor(public http: HttpClient, public profileService: ProfileRequestService ) {
        
   }

  ngOnInit() {

    interface ApiResu{
      login:string;
      bio : string;
      repos:number;
      created_at:Date;
      followers:number;
      following:number;
      avatar_url: any;
  }
  this.http.get<ApiResu>("https://api.github.com/users/daneden?access_token=ade18153a212c214025b88ab03b8b2eeb6dd6e57").subscribe((data)=>{
    this.file = new User( data.login, data.bio, data.repos, data.created_at, data.followers, data.following,data.avatar_url)
   
  })
  }
}

import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

// import { ProfileRequestService} from '../profile-http/profile-request.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = "";
  result : any;
 

  constructor(public http: HttpClient ) {
        
   }

  ngOnInit() {

  //   interface ApiResu{
  //     login:string;
  //     bio : string;
  //     repos:number;
  //     created_at:Date;
  //     followers:number;
  //     following:number;
  //     avatar_url: any;
   }
   finduser() {
  this.http.get('https://api.github.com/users/' + this.username + "?access_token=39a70f774b971a7334639b758a7354261df36d50")
  .subscribe((result) =>{
      this.result = result;
      console.log(this.result);
  })
}
}

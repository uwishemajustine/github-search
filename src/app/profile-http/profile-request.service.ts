import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User} from '../user';


@Injectable({
  providedIn: 'root'
})

export class ProfileRequestService {
 
file:User;
  gitRepo: any;
  gitRepos: any;

  constructor(public http: HttpClient ) {
    this.file = new User("","",0,new Date(),0,0,"")
   }

   profileRequest(){
     interface ApiResu{
      username:string;
      bio : string;
      repos:number;
      created_at:Date;
      followers:number;
      following:number;
      avatar_url: any;
      pipeDate:any;
     }

     
     let promise = new Promise((resolve) =>{
      this.http.get<ApiResu>("https://api.github.com/users/" + this.file + "?access_token=" + environment.apiUrl).toPromise().then(resu=>{
        this.file.login = resu.username
        this.file.bio = resu.bio
        this.file.public_repos = resu.repos
        this.file.created_at = resu.created_at
        this.file.followers = resu.followers
        this.file.following = resu.following
        this.file.avatar_url = resu.avatar_url
        // this.file.pipeDate = resu.pipeDate
        resolve()
      },
     
      )
    })
    return promise
  }

}




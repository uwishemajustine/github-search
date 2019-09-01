import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User} from '../user'
import { Repository } from '../repository'

@Injectable({
  providedIn: 'root'
})

export class ProfileRequestService {
  getReposInfo(): any {
    throw new Error("Method not implemented.");
  }
  updateRepository(reponame: string): any {
    throw new Error("Method not implemented.");
  }
  getRepositoryInfo(): any {
    throw new Error("Method not implemented.");
  }
  updateShow(show: number): any {
    throw new Error("Method not implemented.");
  }
  updateUsers(username: string): any {
    throw new Error("Method not implemented.");
  }
  getProfileInfo(): any {
    throw new Error("Method not implemented.");
  }

file:User;

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
     }

     
     let promise = new Promise((resolve) =>{
      this.http.get<ApiResu>("https://api.github.com/users/" + this.file + "?access_token=" + environment.apiUrl).toPromise().then(resu=>{
        this.file.login = resu.username
        this.file.bio = resu.bio
        this.file.repos = resu.repos
        this.file.created_at = resu.created_at
        this.file.followers = resu.followers
        this.file.following = resu.following
        this.file.avatar_url = resu.avatar_url

        resolve()
      },
     
      )
    })
    return promise
  }
}
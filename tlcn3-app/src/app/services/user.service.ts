import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { Resume, User } from '../models';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  domainName="http://localhost:3000/";
  private avatarURL= new Subject<string>();
  private template = new Subject<string>();

  constructor(private http: HttpClient) { }

  getAvatarUrl(){
    return this.avatarURL.asObservable();
  }

  getUsers(){
    return this.http.get(this.domainName +'user/all');
  }
  getUserByID(userID){
    return this.http.get(this.domainName+'user/'+userID);
  }

  getTemplate(){
    return this.template.asObservable();
  }
  updateUserByID(userID, user: User){
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.put(this.domainName+'update/user/'+userID, user,{headers: headers});
  }

  updateAvatar(image: File){
    const postImage = new FormData();
    postImage.append("image", image);
    return this.http.post<{avatarUrl: string}>(this.domainName +'add/picture', postImage).subscribe(response=>{
      this.avatarURL.next(response.avatarUrl);
    });
  }

  changeTemplate(chooseTemp:string){
    this.template.next(chooseTemp);
  }
}

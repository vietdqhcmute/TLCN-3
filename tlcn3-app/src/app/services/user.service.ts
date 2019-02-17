import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { User } from '../models';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  domainName = environment.APIEndPoint;

  private avatarURL= new Subject<string>();
  constructor(private http: HttpClient) { }

  getAvatarUrl(){
    return this.avatarURL.asObservable();
  }

  getUsers(){
    return this.http.get<any>(this.domainName +'user/all');
  }
  getUserByID(userID){
    return this.http.get(this.domainName+'user/'+userID);
  }

  updateUserByID(userID, user: User){
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.put(this.domainName+'update/user/'+userID, user,{headers: headers});
  }

  deleteUserByID(userID:string){
    return this.http.delete(this.domainName+'delete/user/'+userID);
  }
  updateAvatar(image: File){
    const postImage = new FormData();
    postImage.append("image", image);
    return this.http.post<{imageUrl: string}>(this.domainName +'image-upload', postImage).subscribe(response=>{
      this.avatarURL.next(response.imageUrl);
    });
  }
}

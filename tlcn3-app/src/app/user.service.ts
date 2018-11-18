import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { Resume, User } from './models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get('http://localhost:3000/user/all');
  }
  getUserByID(userID){
    return this.http.get('http://localhost:3000/user/'+userID);
  }

  updateUserByID(userID, user: User){
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.put('http://localhost:3000/update/user/'+userID, user,{headers: headers});
  }

}

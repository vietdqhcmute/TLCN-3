import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { Resume, User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  domainName="http://localhost:3000/";

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(this.domainName +'user/all');
  }
  getUserByID(userID){
    return this.http.get(this.domainName+'user/'+userID);
  }

  updateUserByID(userID, user: User){
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.put(this.domainName+'update/user/'+userID, user,{headers: headers});
  }

}

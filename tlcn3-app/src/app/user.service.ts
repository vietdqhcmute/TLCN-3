import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

import { Resume } from './models';
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

  updateUserByID(userID, resume: Resume){
    const headers = new HttpHeaders({'Content-type':'application/json'});
    return this.http.put('http://localhost:3000/user/'+userID, resume,{headers: headers});
  }

}

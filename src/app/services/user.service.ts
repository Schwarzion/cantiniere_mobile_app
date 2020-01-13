import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //set access token in local storage
  setUserToken(token){
      localStorage.setItem('access_token', token);
  }

  //return access token
  getUserToken(){
      return localStorage.getItem('access_token');
  }

  getExpirationDate(){
    const decoded = jwt_decode(localStorage.getItem('access_token'));

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    if(!localStorage.getItem('access_token')){
        return false;
    }
    return true;
}


}

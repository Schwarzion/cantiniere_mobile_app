import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { environment } from '../../environments/environment';

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

  //get expiration date of token
  getExpirationDate(){
    const decoded = jwt_decode(localStorage.getItem('access_token'));

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  //set user info in localStorage
  setUser(){
    const decoded = jwt_decode(localStorage.getItem('access_token'));

    if (decoded.user === undefined) return null;

    const user = decoded.user;
    localStorage.setItem('userinfo', JSON.stringify(user));
  }
  
  

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('userinfo');
  }

  public get loggedIn(): boolean{
    if(!localStorage.getItem('access_token')){
        return false;
    }
    return true;
}


}

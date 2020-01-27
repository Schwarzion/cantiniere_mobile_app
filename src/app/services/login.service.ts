import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user):Observable <any>{
    console.log(user);
    return this.http.post(`${environment.apiUrl}/login`, user, { observe: 'response'});
  }
  addUser(newData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/user/register`, newData, { observe: 'response' });
  }
  forgerpassword(email){
      return this.http.post(`${environment.apiUrl}/forgotpassword?email=${email}`, {});
  }

}

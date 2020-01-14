import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { isJWTRequired } from "../utils/interceptor"

@Injectable({
  providedIn: 'root'
})
export class TokenincerptorService {

  constructor(private userservice: UserService) {   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //retrive token from user service
    const currentUser = this.userservice.getUserToken();

    //check if access_token is in userservice
    if ((currentUser && currentUser.length > 1) && isJWTRequired(request.url)) {

      //clone the http request and paste the authorization header
      request = request.clone({
          setHeaders: {
              Authorization: currentUser
          }
      });
    }

    //return the request
    return next.handle(request);
}

}

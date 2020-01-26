
import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class GuardService implements CanActivate {


  constructor(private userservice: UserService, private _router: Router) {
  }

  canActivate(): boolean  {
    if(!this.userservice.getUserToken()){
      this._router.navigate(['/']);
      return false;
    }
    return true;
  }

}
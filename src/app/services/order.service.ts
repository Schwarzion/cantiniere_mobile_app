import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

   putOrder(order): Observable<any>{
     return this.http.put<any>(environment.apiUrl+'/order/add', order).pipe(
      catchError(this.handleError('putOrder', []))
      );
   }
   
   getOrderForUser(): Observable<any> {
     let username = JSON.parse(localStorage.getItem('userinfo'));
     let id = username['id'];
     return this.http.get<any>(environment.apiUrl+'/order/findallforuser/'+id).pipe(
      catchError(this.handleError('getOrderForUser', []))
      );
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(error);
    };
  }
}

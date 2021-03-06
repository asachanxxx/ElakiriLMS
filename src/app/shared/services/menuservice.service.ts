import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { MenuItem } from '../menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  apiURL = "assets/data/menu.json";

  constructor(private http:HttpClient) { }

  getMenuItems():Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(this.apiURL).pipe(
      retry(1), catchError(this.handleError));
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

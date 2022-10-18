import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from "rxjs";
import { ITools } from "./tools";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _api = 'api/tools.json';

  constructor(private http: HttpClient) {}

  getTools(): Observable<ITools[]>{
    return this.http.get<ITools[]>(this._api)
    .pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    )
  }

   handleError(err: HttpErrorResponse){
    let errorMessage = '';

    if (err.error instanceof ErrorEvent){
      console.log(`An error ocurried', ${err.message}`);
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.error.message}`
    }
    console.log(errorMessage);
    return throwError(()=> errorMessage);
  }
}

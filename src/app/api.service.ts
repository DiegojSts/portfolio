import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, Observable,map, tap, throwError } from "rxjs";
import { IInfo } from "./info";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _data = "../assets/api/data.json";

  constructor(private http: HttpClient) { }

  getTools(): Observable<IInfo[]> {

    return this.http.get<IInfo[]>(this._data)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError)
      )
  }

  getToolsById(id: number): Observable<IInfo | undefined> {
    return this.getTools()
      .pipe(
        map((item: IInfo[]) => item.find(i => i.id === id))
      );
  }

  handleError(err: HttpErrorResponse) {
    
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      console.log(`An error ocurried', ${err.message}`);
    } else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.error.message}`
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}

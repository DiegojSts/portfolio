import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, Observable,map, tap, throwError } from "rxjs";
import { IInfo } from "./info";
import { objectInfo } from "./info";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private _data = "../assets/api/data.json";
  _data: IInfo[] = objectInfo ;

  constructor(private http: HttpClient) { }

  getTools() {

    // return this.http.get<IInfo[]>(this._data)
    //   .pipe(
    //     tap(data => JSON.stringify(data)),
    //     catchError(this.handleError)
    //   )
    console.log(this._data);
    return this._data;
  }

  // getToolsById(id: number): Observable<IInfo | undefined> {
  //   return this.getTools()
  //     .pipe(
  //       map((item: IInfo[]) => item.find(i => i.id === id))
  //     );
  // }

  getToolsById(id: number) {
    // return this.getTools()
    //   .pipe(
    //     map((item: IInfo[]) => item.find(i => i.id === id))
    //   );
    return this._data.find(tool => tool.id == id);
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

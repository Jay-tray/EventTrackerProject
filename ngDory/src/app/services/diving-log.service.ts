import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DivingLog } from '../models/diving-log';

@Injectable({
  providedIn: 'root'
})
export class DivingLogService {
   //fields
  url = environment.baseUrl + 'api/divinglogs';


  //methods
  constructor(private http: HttpClient) { }

  index(): Observable<DivingLog[]> {
    return this.http.get<DivingLog[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            'DivingLogService.index(): error retrieving diving log list: ' + err
            )
        );
      })
    );
  }

  show(id: number): Observable<DivingLog> {
    return this.http.get<DivingLog>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            'DivingLogService.index(): error retrieving diving log: ' + err
            )
        );
      })
    );
  }

  create(log: DivingLog):Observable<DivingLog> {

    return this.http.post<DivingLog>(this.url, log).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            'TodoService.index(): error creating todo: ' + err
            )
        );
      })
    );
  }



   update(log : DivingLog):Observable<DivingLog>  {


   return this.http.put<DivingLog>(`${this.url}/${log.id}`, log).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            'LogService.update(): error updating log: ' + err
            )
        );
      })
    )

     }

   destroy(id : number):Observable<void>  {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          new Error(
            'DivingLogService.delete(): error deleting log: ' + err
            )
        );
      })
    )}

}

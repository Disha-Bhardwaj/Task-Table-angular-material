import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  getData(){  
    return this.http.get("https://dothbe.com/test").pipe(
        catchError((err) => {
        return throwError(err);
        })
    );  
  }
}

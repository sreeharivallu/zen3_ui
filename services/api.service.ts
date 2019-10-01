import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiPath: any;
  constructor(private http: HttpClient) { 
    this.apiPath = "http://localhost:3000/fav/"
  }

  createFav(data){
    return this.http.post(this.apiPath, data);
  }

  getFavs(){
    return this.http.get(this.apiPath);
  }

  deleteFav(id){
    return this.http.delete(this.apiPath + id);
  }

  updateFav(data){   
    return this.http.put(this.apiPath, data);
  }
}

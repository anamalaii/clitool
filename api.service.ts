import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDetails(command:string){
    return this.http.get('http://localhost:3000/details/'+command,{ responseType: 'text'});
  }
  execute(c:string){
    return this.http.get('http://localhost:3000/execute/'+c,{ responseType: 'text'});
  }
}

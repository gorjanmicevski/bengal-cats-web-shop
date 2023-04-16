import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  findAllCats() {
    return this.http.get<any[]>('http://localhost:8080/cats')
  }

  registerClient(request: any) {
    return this.http.post('http://localhost:8080/clients', request)
  }
}

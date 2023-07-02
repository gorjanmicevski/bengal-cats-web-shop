import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  findAllCats() {
    return this.http.get<any[]>('/api').subscribe()
  }

  registerClient(request: any) {
    return this.http.post('api/clients', request)
  }

  getCountries() {
    return this.http.get<any[]>('https://rest-country-api.p.rapidapi.com/',{headers: {
        'X-RapidAPI-Key': 'da63dff341mshc2419b9864cae4bp1ed7e4jsn039b8b4e5c75',
        'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
      }})
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http: HttpClient) { }

  link: string = 'https://api.covid19api.com/';

  public getAll(): Observable<any> {
    return this.http.get(this.link + 'countries');
  }

  public dayOneLive(country: undefined): Observable<any> {
    return this.http.get(this.link + 'dayone/country/' + country + '/status/confirmed/live');
  }
}

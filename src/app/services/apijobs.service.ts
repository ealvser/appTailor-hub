import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApijobsService {

  constructor(private http: HttpClient) {
    console.log('GitHub Listo');
  }

  getJobs(url:string){
    return this.http.get(url);
  };

  getCountry(termino:string){
    return this.http.get(`/positions.json?utf8=%E2%9C%93&description=&location=${termino}&page=`);
  }
}

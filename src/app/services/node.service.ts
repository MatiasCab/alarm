import { Injectable } from '@angular/core';
import { baseUrl } from '../properties';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IDataToPredict } from '../interfaces/IDataToPredict';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  private url = baseUrl + '/nodes';

  getNodes(){
    return this.http.get(this.url);
  }

  doPrediction(data: IDataToPredict[]){
    let req = {
      evidence: data
    };
    return this.http.post(baseUrl + '/diagnose', req);
  }

}

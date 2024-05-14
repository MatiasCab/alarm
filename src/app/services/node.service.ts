import { Injectable } from '@angular/core';
import { baseUrl } from '../properties';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { IDataToPredict } from '../interfaces/IDataToPredict';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { INode } from '../interfaces/INode';
import { IPredictedNode } from '../interfaces/IPredictedNode';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  private url = baseUrl + '/variables';

  getNodes(): Observable<INode[]>{
    return this.http.get<INode[]>(this.url);
  }

  doPrediction(data: IDataToPredict[]): Observable<IPredictedNode[]>{
    let req = {
      evidence: data
    };
    return this.http.post<IPredictedNode[]>(baseUrl + '/diagnose', req);
  }

}

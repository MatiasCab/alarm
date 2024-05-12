import { Injectable } from '@angular/core';
import { baseUrl } from '../properties';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  private url = baseUrl + '/nodes';

  getNodes(){
    return this.http.get(this.url);
  }

}

import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JSONService {
  constructor(private http: HttpClient) {}

  getQuizData() {
    const url = './../../assets/atlant.json';
    return this.http.get(url);
  }
}

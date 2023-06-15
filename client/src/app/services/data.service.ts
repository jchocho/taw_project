import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import DataModel from "../models/data-model";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.url + '/api/movies');
  }

  getById(id: string): Observable<DataModel> {
    return this.http.get<DataModel>(this.url + '/api/movie/' + id);
  }

  add(data: any): Observable<any> {
    return this.http.post(this.url + '/api/movie', data);
  }

  deleteMovie(id: string) {
    return this.http.delete(this.url + '/api/movie/' + id);
    //return this.http.delete(`${this.url}/api/movie/${id}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoggerInterface } from 'src/app/models/logger.model';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private http: HttpClient) {}

  saveLogger(): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/logger`, {});
  }

  getLogger(): Observable<LoggerInterface[]> {
    return this.http.get<LoggerInterface[]>(`http://localhost:3000/logger`);
  }
}

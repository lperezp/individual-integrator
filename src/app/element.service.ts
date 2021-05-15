import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ChemicalElementInterface } from 'src/app/models/chemical-element.model';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private http: HttpClient) {}

  getAllChemicalElement(): Observable<ChemicalElementInterface[]> {
    return this.http.get<ChemicalElementInterface[]>(
      `http://localhost:3000/chemical-element`
    );
  }

  saveChemicalElement(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/chemical-element`, data);
  }
}

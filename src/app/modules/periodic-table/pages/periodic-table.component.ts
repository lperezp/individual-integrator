import { Component, OnInit } from '@angular/core';

import { CHEMICAL_ELEMENT_MOCK } from 'src/app/mocks/chemicalElement.mock';

import { ChemicalElementInterface } from './../../../models/chemical-element.model';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
})
export class PeriodicTableComponent implements OnInit {
  listElement: ChemicalElementInterface[] = CHEMICAL_ELEMENT_MOCK;
  constructor() {}

  ngOnInit(): void {
    console.log(this.listElement);
  }
}

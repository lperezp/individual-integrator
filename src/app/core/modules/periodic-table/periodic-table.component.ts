import { Component, OnInit } from '@angular/core';
import { CHEMICAL_ELEMENT_MOCK } from 'src/app/mocks/chemicalElement.mock';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
})
export class PeriodicTableComponent implements OnInit {
  listElement = CHEMICAL_ELEMENT_MOCK;
  constructor() {}

  ngOnInit(): void {}
}

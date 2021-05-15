import { Component, Input, OnInit } from '@angular/core';

import { ChemicalElementInterface } from 'src/app/models/chemical-element.model';

@Component({
  selector: 'app-modal-element-information',
  templateUrl: './modal-element-information.component.html',
  styleUrls: ['./modal-element-information.component.scss'],
})
export class ModalElementInformationComponent implements OnInit {
  @Input() index = 0;
    @Input() elementChemical: ChemicalElementInterface = {
    atomicMass: 0,
    atomicNumber: 0,
    atomicRadius: 0,
    block: '',
    boilingPoint: 0,
    bondingType: '',
    cpkHexColor: '',
    crystalStructure: '',
    density: 0,
    electronAffinity: 0,
    electronegativity: 0,
    electronicConfiguration: '',
    facts: '',
    group: 0,
    groupBlock: '',
    ionRadius: '',
    ionizationEnergy: 0,
    isotopes: '',
    magneticOrdering: '',
    meltingPoint: 0,
    molarHeatCapacity: 0,
    name: '',
    oxidationStates: '',
    period: 0,
    speedOfSound: 0,
    standardState: '',
    symbol: '',
    vanDelWaalsRadius: 0,
    yearDiscovered: 0,
    minerals: '',
    history: '',
  };

  constructor() {}

  ngOnInit(): void {
    console.log('init', this.elementChemical);
  }
}

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
    id: 0,
    atomicMass: 1.0079,
    atomicNumber: 0,
    atomicRadius: 3,
    block: {
      id: 1,
      value: 'S',
      description:
        'Los elementos del bloque s (por tener sus electrones de valencia en el orbital s) son aquellos situados en los grupos 1 y 2 de la tabla periódica de los elementos. ',
    },
    boilingPoint: 2,
    bondingType: {
      id: 3,
      name: 'Diatómico',
    },

    cpkHexColor: '',
    crystalStructure: {
      id: 1,
      name: 'Hexagonal compacto',
    },
    density: 0.000089,
    electronAffinity: -7,
    electronegativity: 2,
    electronicConfiguration: '',
    facts: '',
    group: 0,
    serieChemical: {
      id: 3,
      name: 'No metal',
    },
    ionRadius: '',
    ionizationEnergy: 131,
    isotopes: '',
    magneticOrdering: '',
    meltingPoint: 1,
    molarHeatCapacity: 28.83,
    name: '',
    oxidationStates: '',
    period: 0,
    speedOfSound: 131,
    standardState: {
      id: 1,
      name: 'Gas',
    },
    symbol: '',
    vanDelWaalsRadius: 12,
    yearDiscovered: 176,
    minerals: '',
    history: '',
    order: 1,
  };

  constructor() {}

  ngOnInit(): void {
    console.log('init', this.elementChemical);
  }
}

import { Component, OnInit } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { ElementService } from './../../../element.service';
import { ChemicalElementInterface } from './../../../models/chemical-element.model';
import { ModalElementInformationComponent } from '../components/modals/modal-element-information/modal-element-information.component';
import { CHEMICAL_ELEMENT_MOCK } from 'src/app/mocks/chemicalElement.mock';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
})
export class PeriodicTableComponent implements OnInit {
  listElement: ChemicalElementInterface[] = [];
  constructor(
    private elementService: ElementService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.getAllChemicalElement();
  }

  async getAllChemicalElement(): Promise<void> {
    this.listElement = await this.elementService
      .getAllChemicalElement()
      .toPromise();
  }

  saveChemicalElement(): void {
    const a = CHEMICAL_ELEMENT_MOCK;
    a.forEach(async (element) => {
      await this.elementService.saveChemicalElement(element).toPromise();
    });
  }

  openDetail(elementChemical: ChemicalElementInterface, index: number): void {
    this.modalService.create({
      nzFooter: null,
      nzClosable: true,
      nzCentered: true,
      nzMaskClosable: false,
      nzContent: ModalElementInformationComponent,
      nzClassName: 'modal-detail',
      nzComponentParams: {
        elementChemical,
        index,
      },
    });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalElementInformationComponent } from './modal-element-information.component';

describe('ModalElementInformationComponent', () => {
  let component: ModalElementInformationComponent;
  let fixture: ComponentFixture<ModalElementInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalElementInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalElementInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

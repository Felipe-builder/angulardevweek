import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrenciasComponent } from './incorrencias.component';

describe('IncorrenciasComponent', () => {
  let component: IncorrenciasComponent;
  let fixture: ComponentFixture<IncorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixasEtariasComponent } from './faixas-etarias.component';

describe('FaixasEtariasComponent', () => {
  let component: FaixasEtariasComponent;
  let fixture: ComponentFixture<FaixasEtariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaixasEtariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaixasEtariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

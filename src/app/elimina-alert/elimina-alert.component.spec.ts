import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAlertComponent } from './elimina-alert.component';

describe('EliminaAlertComponent', () => {
  let component: EliminaAlertComponent;
  let fixture: ComponentFixture<EliminaAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminaAlertComponent]
    });
    fixture = TestBed.createComponent(EliminaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

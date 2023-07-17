import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiContattoComponent } from './aggiungi-contatto.component';

describe('AggiungiContattoComponent', () => {
  let component: AggiungiContattoComponent;
  let fixture: ComponentFixture<AggiungiContattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiContattoComponent]
    });
    fixture = TestBed.createComponent(AggiungiContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

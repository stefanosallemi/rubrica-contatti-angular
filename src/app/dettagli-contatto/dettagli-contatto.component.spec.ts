import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliContattoComponent } from './dettagli-contatto.component';

describe('DettagliContattoComponent', () => {
  let component: DettagliContattoComponent;
  let fixture: ComponentFixture<DettagliContattoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliContattoComponent]
    });
    fixture = TestBed.createComponent(DettagliContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

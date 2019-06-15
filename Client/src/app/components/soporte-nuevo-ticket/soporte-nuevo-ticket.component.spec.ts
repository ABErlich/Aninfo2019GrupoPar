import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteNuevoTicketComponent } from './soporte-nuevo-ticket.component';

describe('SoporteNuevoTicketComponent', () => {
  let component: SoporteNuevoTicketComponent;
  let fixture: ComponentFixture<SoporteNuevoTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoporteNuevoTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteNuevoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteMisTicketsComponent } from './soporte-mis-tickets.component';

describe('SoporteMisTicketsComponent', () => {
  let component: SoporteMisTicketsComponent;
  let fixture: ComponentFixture<SoporteMisTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoporteMisTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteMisTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

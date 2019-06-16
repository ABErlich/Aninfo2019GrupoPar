import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNuevaTareaComponent } from './ticket-nueva-tarea.component';

describe('TicketNuevaTareaComponent', () => {
  let component: TicketNuevaTareaComponent;
  let fixture: ComponentFixture<TicketNuevaTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketNuevaTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketNuevaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

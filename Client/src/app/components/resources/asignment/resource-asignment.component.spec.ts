import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAsignmentComponent } from './resource-asignment.component';

describe('ResourceAsignmentComponent', () => {
  let component: ResourceAsignmentComponent;
  let fixture: ComponentFixture<ResourceAsignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceAsignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceAsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

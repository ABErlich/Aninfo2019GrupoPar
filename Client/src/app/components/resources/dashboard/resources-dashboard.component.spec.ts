import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDashboardComponent } from './resources-dashboard.component';

describe('ResourcesComponent', () => {
  let component: ResourcesDashboardComponent;
  let fixture: ComponentFixture<ResourcesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

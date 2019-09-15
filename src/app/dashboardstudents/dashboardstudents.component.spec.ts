import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentsComponent } from './dashboardstudents.component';

describe('DashboardStudentsComponent', () => {
  let component: DashboardStudentsComponent;
  let fixture: ComponentFixture<DashboardStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

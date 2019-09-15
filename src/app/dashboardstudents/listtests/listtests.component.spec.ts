import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtestsComponent } from './listtests.component';

describe('ListtestsComponent', () => {
  let component: ListtestsComponent;
  let fixture: ComponentFixture<ListtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

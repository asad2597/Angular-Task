import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProjectsComponent } from './display-projects.component';

describe('DisplayProjectsComponent', () => {
  let component: DisplayProjectsComponent;
  let fixture: ComponentFixture<DisplayProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayProjectsComponent]
    });
    fixture = TestBed.createComponent(DisplayProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

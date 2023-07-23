import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttabsContainerComponent } from './projecttabs-container.component';

describe('ProjecttabsContainerComponent', () => {
  let component: ProjecttabsContainerComponent;
  let fixture: ComponentFixture<ProjecttabsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjecttabsContainerComponent]
    });
    fixture = TestBed.createComponent(ProjecttabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

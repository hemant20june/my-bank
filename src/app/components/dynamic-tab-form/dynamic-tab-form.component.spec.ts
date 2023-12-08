import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabFormComponent } from './dynamic-tab-form.component';

describe('DynamicTabFormComponent', () => {
  let component: DynamicTabFormComponent;
  let fixture: ComponentFixture<DynamicTabFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTabFormComponent]
    });
    fixture = TestBed.createComponent(DynamicTabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

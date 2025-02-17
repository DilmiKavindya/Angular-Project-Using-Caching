import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormDetailsComponent } from './employee-form-details.component';

describe('EmployeeFormDetailsComponent', () => {
  let component: EmployeeFormDetailsComponent;
  let fixture: ComponentFixture<EmployeeFormDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

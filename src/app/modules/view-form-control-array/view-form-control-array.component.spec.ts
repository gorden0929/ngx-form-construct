import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormControlArrayComponent } from './view-form-control-array.component';

describe('ViewFormControlArrayComponent', () => {
  let component: ViewFormControlArrayComponent;
  let fixture: ComponentFixture<ViewFormControlArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormControlArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormControlArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

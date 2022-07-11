import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormControlBasicComponent } from './view-form-control-basic.component';

describe('ViewFormControlBasicComponent', () => {
  let component: ViewFormControlBasicComponent;
  let fixture: ComponentFixture<ViewFormControlBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormControlBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormControlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

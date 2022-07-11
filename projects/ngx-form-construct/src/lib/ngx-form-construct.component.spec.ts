import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormConstructComponent } from './ngx-form-construct.component';

describe('NgxFormConstructComponent', () => {
  let component: NgxFormConstructComponent;
  let fixture: ComponentFixture<NgxFormConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormConstructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

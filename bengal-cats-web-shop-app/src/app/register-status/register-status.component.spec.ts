import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStatusComponent } from './register-status.component';

describe('RegisterStatusComponent', () => {
  let component: RegisterStatusComponent;
  let fixture: ComponentFixture<RegisterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

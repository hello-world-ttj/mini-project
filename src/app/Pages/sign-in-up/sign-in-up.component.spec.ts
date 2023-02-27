import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUpComponent } from './sign-in-up.component';

describe('SignInUpComponent', () => {
  let component: SignInUpComponent;
  let fixture: ComponentFixture<SignInUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLoadingComponent } from './img-loading.component';

describe('ImgLoadingComponent', () => {
  let component: ImgLoadingComponent;
  let fixture: ComponentFixture<ImgLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

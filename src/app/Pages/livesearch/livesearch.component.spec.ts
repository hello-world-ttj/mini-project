import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesearchComponent } from './livesearch.component';

describe('LivesearchComponent', () => {
  let component: LivesearchComponent;
  let fixture: ComponentFixture<LivesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeSummaryComponent } from './anime-summary.component';

describe('AnimeSummaryComponent', () => {
  let component: AnimeSummaryComponent;
  let fixture: ComponentFixture<AnimeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

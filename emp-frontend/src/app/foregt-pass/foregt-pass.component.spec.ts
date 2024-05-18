import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegtPassComponent } from './foregt-pass.component';

describe('ForegtPassComponent', () => {
  let component: ForegtPassComponent;
  let fixture: ComponentFixture<ForegtPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForegtPassComponent]
    });
    fixture = TestBed.createComponent(ForegtPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

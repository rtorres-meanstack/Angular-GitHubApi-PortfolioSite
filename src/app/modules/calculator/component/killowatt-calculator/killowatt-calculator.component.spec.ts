import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillowattCalculatorComponent } from './killowatt-calculator.component';

describe('KillowattCalculatorComponent', () => {
  let component: KillowattCalculatorComponent;
  let fixture: ComponentFixture<KillowattCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillowattCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillowattCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

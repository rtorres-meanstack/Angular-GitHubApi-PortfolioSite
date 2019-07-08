import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSkillsetComponent } from './current-skillset.component';

describe('CurrentSkillsetComponent', () => {
  let component: CurrentSkillsetComponent;
  let fixture: ComponentFixture<CurrentSkillsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSkillsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

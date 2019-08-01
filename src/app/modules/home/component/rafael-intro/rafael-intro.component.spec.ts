import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafaelIntroComponent } from './rafael-intro.component';

describe('RafaelIntroComponent', () => {
  let component: RafaelIntroComponent;
  let fixture: ComponentFixture<RafaelIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafaelIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafaelIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

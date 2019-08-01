import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusHeaderComponent } from './contactus-header.component';

describe('ContactusHeaderComponent', () => {
  let component: ContactusHeaderComponent;
  let fixture: ComponentFixture<ContactusHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

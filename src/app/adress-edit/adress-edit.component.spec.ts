import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressEditComponent } from './adress-edit.component';

describe('AdressEditComponent', () => {
  let component: AdressEditComponent;
  let fixture: ComponentFixture<AdressEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

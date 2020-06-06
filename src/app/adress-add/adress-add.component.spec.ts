import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressAddComponent } from './adress-add.component';

describe('AdressAddComponent', () => {
  let component: AdressAddComponent;
  let fixture: ComponentFixture<AdressAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

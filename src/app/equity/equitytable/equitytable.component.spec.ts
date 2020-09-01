import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitytableComponent } from './equitytable.component';

describe('EquitytableComponent', () => {
  let component: EquitytableComponent;
  let fixture: ComponentFixture<EquitytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

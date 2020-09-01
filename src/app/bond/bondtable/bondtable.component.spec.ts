import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondtableComponent } from './bondtable.component';

describe('BondtableComponent', () => {
  let component: BondtableComponent;
  let fixture: ComponentFixture<BondtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

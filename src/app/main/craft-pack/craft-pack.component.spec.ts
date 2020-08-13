import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftPackComponent } from './craft-pack.component';

describe('CraftPackComponent', () => {
  let component: CraftPackComponent;
  let fixture: ComponentFixture<CraftPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

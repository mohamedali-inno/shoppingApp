import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemChangeComponent } from './cartitem-change.component';

describe('CartitemChangeComponent', () => {
  let component: CartitemChangeComponent;
  let fixture: ComponentFixture<CartitemChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartitemChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartitemChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

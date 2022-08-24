import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrderComponent } from './listar-order.component';

describe('ListarOrderComponent', () => {
  let component: ListarOrderComponent;
  let fixture: ComponentFixture<ListarOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

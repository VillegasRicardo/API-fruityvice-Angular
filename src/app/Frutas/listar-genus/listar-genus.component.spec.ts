import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGenusComponent } from './listar-genus.component';

describe('ListarGenusComponent', () => {
  let component: ListarGenusComponent;
  let fixture: ComponentFixture<ListarGenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarGenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBarbeirosComponent } from './listar-barbeiros.component';

describe('ListarBarbeirosComponent', () => {
  let component: ListarBarbeirosComponent;
  let fixture: ComponentFixture<ListarBarbeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarBarbeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBarbeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

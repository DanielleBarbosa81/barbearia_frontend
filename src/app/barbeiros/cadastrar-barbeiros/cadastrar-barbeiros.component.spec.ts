import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBarbeirosComponent } from './cadastrar-barbeiros.component';

describe('CadastrarBarbeirosComponent', () => {
  let component: CadastrarBarbeirosComponent;
  let fixture: ComponentFixture<CadastrarBarbeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarBarbeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarBarbeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

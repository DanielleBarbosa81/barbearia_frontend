import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBarbeiroComponent } from './form-barbeiro.component';

describe('FormBarbeiroComponent', () => {
  let component: FormBarbeiroComponent;
  let fixture: ComponentFixture<FormBarbeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBarbeiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBarbeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

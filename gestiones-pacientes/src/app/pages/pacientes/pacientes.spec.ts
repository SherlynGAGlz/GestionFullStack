import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacientes } from './pacientes';
// prueba unitaria para verificar que el componente de pacientes se crea correctamente
describe('Pacientes', () => {
  let component: Pacientes;
  let fixture: ComponentFixture<Pacientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pacientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pacientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

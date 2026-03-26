import { TestBed } from '@angular/core/testing';

import { Pacientes } from './pacientes';

// servicio para manejar la lógica relacionada con los pacientes en la app
describe('Pacientes', () => {
  let service: Pacientes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pacientes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

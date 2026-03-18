import { TestBed } from '@angular/core/testing';

import { Auth } from './auth';
// servicio para manejar la lógica relacionada con la autenticación en la app
describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

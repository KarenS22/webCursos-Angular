import { TestBed } from '@angular/core/testing';
import { GestionImagenesService } from './gestion-imagenes.service';

describe('GestionImagenesService', () => {
  let service: GestionImagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionImagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

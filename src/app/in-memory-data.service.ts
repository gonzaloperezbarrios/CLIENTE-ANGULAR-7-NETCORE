import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Carro } from './carro';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const carros = [
      { id: 11, name: 'Renault' },
      { id: 12, name: 'Mazda' },
      { id: 13, name: 'Chevrolet' },
      { id: 14, name: 'Ford' },
      { id: 15, name: 'Toyota' },
      { id: 16, name: 'Kia' }
    ];
    return {carros};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the carros array is empty,
  // the method below returns the initial number (11).
  // if the carros array is not empty, the method below returns the highest
  // hero id + 1.
  genId(carros: Carro[]): number {
    return carros.length > 0 ? Math.max(...carros.map(hero => hero.id)) + 1 : 11;
  }
}
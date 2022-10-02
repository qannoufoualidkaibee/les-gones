import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Gone } from './gone';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const gones: Gone[] = [
      { id: 12, name: 'Jean-Fabien', numberOfEatenPizzaSlices: 100 },
      { id: 13, name: 'Emmanuel', numberOfEatenPizzaSlices: 18 },
      { id: 14, name: 'Naoufal', numberOfEatenPizzaSlices: 20 },
      { id: 15, name: 'Arthur', numberOfEatenPizzaSlices: 50 },
      { id: 16, name: 'Meriem', numberOfEatenPizzaSlices: 50 },
      { id: 17, name: 'Côme', numberOfEatenPizzaSlices: 50 },
      { id: 18, name: 'Faical', numberOfEatenPizzaSlices: 50 },
      { id: 19, name: 'Nathan', numberOfEatenPizzaSlices: 50 },
      { id: 20, name: 'Aurélien', numberOfEatenPizzaSlices: 50 },
      { id: 20, name: 'Oualid', numberOfEatenPizzaSlices: 40 },
    ];
    const topGones: Gone[] = [...gones].sort(() => 0.5 - Math.random()).slice(0, 4);
    return {gones, topGones};
  }

  // Overrides the genId method to ensure that a gone always has an id.
  // If the gones array is empty,
  // the method below returns the initial number (11).
  // if the gones array is not empty, the method below returns the highest
  // gone id + 1.
  genId(gones: Gone[]): number {
    return gones.length > 0 ? Math.max(...gones.map(gone => gone.id)) + 1 : 11;
  }
}




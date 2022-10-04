export class Gone {
  id: number;
  name: string;
  numberOfEatenPizzaSlices: number;

  constructor(obj: Partial<Gone>) {
    Object.assign(this, obj);
  }
}

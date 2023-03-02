import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathClass {
  subtract(multiply: number, number: number) {
    return multiply - number;
  }
  multiply(addOne: number, number: number) {
    return addOne * number;
  }
  addOne(number: number) {
    return number + 1;
  }
}

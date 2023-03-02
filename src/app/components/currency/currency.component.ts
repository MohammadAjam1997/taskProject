import { Component, OnInit } from '@angular/core';
import { MathClass } from './mathClass-state.service';
import { ConfigerService } from 'src/app/shared/services/configer.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  constructor(
    public configSer: ConfigerService,
    private mathClass: MathClass
  ) {}

  ngOnInit(): void {
    alert(`1- ES6 Import
    answer:import {Car} from "app.js";
    answer:answer5,answer1,answer3
    2- Typescript Mastery :answer in code mathClass-state.service.ts`);
    alert(
      '2- Typescript Mastery' +
        '=' +
        this.mathClass.subtract(
          this.mathClass.multiply(this.mathClass.addOne(2), 2),
          1
        )
    );
  }
}

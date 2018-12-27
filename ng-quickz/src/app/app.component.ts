import { Component, OnInit } from '@angular/core';
import { JSONService } from './services/json.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-quickz';
  selectedStep = 0;
  data: any = {
    name: {
      question: 'My name is Quickz. What\'s yours?',
      default: 'Kirill',
      valueset: ['Kirill', 'Tanya', 'Domashka'],
    },
    surname: {
      question: 'Nice. But also I want to know your surname.<br/>Could you please share it?',
      default: 'Kutepov',
      valueset: ['Kutepov', 'Kutepova', 'Meow'],
    },
    price: {
      question: 'Have you any lucky number?',
      default: 200,
      valueset: [100, 200, 300, 400, 500],
    },
  };
  form: FormGroup;

  constructor(private json: JSONService) {}

  ngOnInit() {
    // this.json.getQuizData().subscribe(data => {
    //   this.data = data;
    // });

    this.form = new FormGroup(
      _.keys(this.data).reduce((output, key) => {
        output[key] = new FormControl(
          this.data[key].default,
          Validators.required,
        );
        return output;
      }, {}),
    );
  }

  get step(): any {
    // return this.data.sections && this.data[this.selectedStep];
    return { type: 'question' };
  }

  set step(value: any) {
    this.data.sections[this.selectedStep] = value;
  }

  get currentField(): any {
    return _.keys(this.data)[this.selectedStep];
  }

  get currentValueset(): any {
    return this.data[this.currentField].valueset;
  }

  get currentQuestion(): any {
    return this.data[this.currentField].question;
  }

  goNext() {
    this.selectedStep = Math.min(
      this.selectedStep + 1,
      _.keys(this.data).length - 1
    );
  }

  goBack() {
    this.selectedStep = Math.max(this.selectedStep - 1, 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { $ } from 'protractor';
import { JSONService } from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-quickz';
  data: {};

  constructor(private json: JSONService) {}

  ngOnInit() {
    this.json.getQuizData().subscribe(data => {
      this.data = data;
      console.log('data', this.data);
    });
  }
}

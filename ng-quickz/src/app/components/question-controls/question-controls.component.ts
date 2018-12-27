import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-controls',
  templateUrl: './question-controls.component.html',
  styleUrls: ['./question-controls.component.scss'],
})
export class QuestionControlsComponent implements OnInit {
  @Output() back = new EventEmitter<string>();
  @Output() forward = new EventEmitter<string>();

  onBackClick() {
    console.log('this.back.emit(null)');
    this.back.emit(null);
  }

  onForwardClick() {
    console.log('this.forward.emit(null)');
    this.forward.emit(null);
  }

  constructor() {}

  ngOnInit() {}
}

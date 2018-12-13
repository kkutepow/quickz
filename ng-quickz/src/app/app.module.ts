import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionControlsComponent } from './components/question-controls/question-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    HeaderComponent,
    FooterComponent,
    QuestionControlsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppModule {}

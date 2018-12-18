import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionControlsComponent } from './components/question-controls/question-controls.component';
import { QuizTrackerComponent } from './components/quiz-tracker/quiz-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    HeaderComponent,
    FooterComponent,
    QuestionControlsComponent,
    QuizTrackerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppModule {}

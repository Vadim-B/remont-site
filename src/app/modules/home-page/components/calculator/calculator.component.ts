import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public question = [
    'Выберите тип Вашего объекта',
    'Вопрос №2',
    'Вопрос №3',
    'Вопрос №4',
    'Вопрос №5',
    'Вопрос №6',
    'Вопрос №7',
    'Вопрос №8'
  ];

  public answers = [
    ['Вторичка', 'В новостройке', 'Котедж'],
    ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
    ['Вариант 5', 'Вариант 6', 'Вариант 7', 'Вариант 8'],
    ['Вариант 9', 'Вариант 1', 'Вариант 2', 'Вариант 3'],
    ['Вариант 4', 'Вариант 5', 'Вариант 6', 'Вариант 7'],
    ['Вариант 8', 'Вариант 9', 'Вариант 1', 'Вариант 2'],
    ['Вариант 3', 'Вариант 4', 'Вариант 5', 'Вариант 6'],
    ['Вариант 7', 'Вариант 8', 'Вариант 9', 'Вариант 1']
  ];

  public questionNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  public previousQuestion() {
    if (this.questionNumber > 0) {
      this.questionNumber -= 1;
    }
  }

  public nextQuestion() {
    if (this.questionNumber < 7) {
      this.questionNumber += 1;
    }
  }

}

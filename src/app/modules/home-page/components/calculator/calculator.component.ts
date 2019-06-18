import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { TelegramApiService } from 'src/app/services/telegram-api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public question = [
    'Выберите тип Вашего объекта',
    'Какая площадь у Вашего помещения',
    'В какой ценовой категории Вы планируете сделать ремонт',
    'Когда нужно приступить к ремонту',
    'Понадобятся ли какие-то доп. услуги?',
    'Получите покраску потолка в подарок и расчет стоимости ремонта помещения'
  ];

  public answers: FormGroup;

  public questionNumber = 0;

  public userTel: string;

  public message: string;
  public messageColor: string;

  constructor(
    private telegramApi: TelegramApiService
  ) { }

  ngOnInit() {
    // Init form
    this.answers = new FormGroup({
      'type': new FormControl(''),
      'square': new FormControl(''),
      'price': new FormControl(''),
      'starDate': new FormControl(''),
      'addServices': new FormControl(''),
    });
  }

  public previousQuestion() {
    if (this.questionNumber > 0) {
      this.questionNumber -= 1;
    }
  }

  public nextQuestion() {
    if (this.questionNumber < 5) {
      this.questionNumber += 1;
      console.log(this.answers.value);
    }
  }

  public submitCallbackForm(form: NgForm) {
    if (this.userTel && this.userTel.length === 10) {
      this.sendUserContact();

      // чистим форму
      form.resetForm();

      this.message = 'Спасибо! Наш менеджер свяжется с Вами в ближайшее время';
      this.messageColor = 'success';

    } else {
      this.message = '*Пожалуйста, укажите правильно Ваш номер телефона';
      this.messageColor = 'danger';
    }
  }

  /**
   * метод для отправки сообщения в телеграм с именем и телефоном пользователя
   */
  public sendUserContact() {
    const message = encodeURI(`
    <b>Хочу узнать стоимость!</b>
    Тип объекта: ${this.answers.value.type},
    Площадь: ${this.answers.value.square},
    Ценовая кат-ия: ${this.answers.value.price},
    Хочу начать: ${this.answers.value.starDate},
    Доп. услуги: ${this.answers.value.addServices},
    Мой тел.: ${this.userTel}
    `);

    this.telegramApi.sendMessage(message).subscribe((data: any) => {});
  }

}

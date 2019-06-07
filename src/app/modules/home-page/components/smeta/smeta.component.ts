import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TelegramApiService } from 'src/app/services/telegram-api.service';

@Component({
  selector: 'app-smeta',
  templateUrl: './smeta.component.html',
  styleUrls: ['./smeta.component.scss']
})
export class SmetaComponent implements OnInit {
  public callMeBack = {
    name: '',
    tel: ''
  };
  public formMessage = '';

  public classMessage = '';

  constructor(
    private telegramApi: TelegramApiService
  ) { }

  ngOnInit() {
  }

  public submitCallbackForm(form: NgForm) {
    if (this.callMeBack.name && this.callMeBack.tel.length === 10) {
      this.sendUserContact();

      // чистим форму
      form.resetForm();

      this.classMessage = 'success';
      this.formMessage = 'Менеджер с Вами свяжется в ближайшее время';

    } else {
      this.classMessage = 'danger';
      this.formMessage = '*Пожалуйста, заполните имя и номер телефона';
    }
  }

  /**
   * метод для отправки сообщения в телеграм с именем и телефоном пользователя
   * @param form - объект с состоянием формы
   */
  public sendUserContact() {
    const message = encodeURI(`
    <b>Хочу заказать замер и смету!</b>
    ${this.callMeBack.name},
    ${this.callMeBack.tel}
    `);

    this.telegramApi.sendMessage(message).subscribe((data: any) => {
      if (!data.ok) {
        console.log(data);
      } else {

      }
    });
  }

}

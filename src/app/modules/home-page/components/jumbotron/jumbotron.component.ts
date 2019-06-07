import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TelegramApiService } from 'src/app/services/telegram-api.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  public callMeBack = {
    name: '',
    tel: ''
  };
  public modalErrorMessage = false;

  public activeModal = 'callback';

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

      this.activeModal = 'thanks';

    } else {
      this.modalErrorMessage = true;
    }
  }

  /**
   * метод для отправки сообщения в телеграм с именем и телефоном пользователя
   * @param form - объект с состоянием формы
   */
  public sendUserContact() {
    const message = encodeURI(`
    <b>Перезвоните мне!</b>
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

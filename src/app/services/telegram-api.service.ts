import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelegramApiService {
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;
  private apiIdGroup: string = environment.apiIdGroup;
  constructor(
    private http: HttpClient
  ) { }

/**
 * метод ля отправки сообщения в телеграм
 * @param message - тело сообщения
 */
  sendMessage(message) {
    const url: any = `${this.apiUrl}${this.apiKey}/sendMessage?chat_id=${this.apiIdGroup}&parse_mode=html&text=${message}`;

    return this.http.post(url, 'httpOptions');
  }
}

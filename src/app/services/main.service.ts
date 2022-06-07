import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from "@angular/common/http";
import { baseUrl } from '../config/app-config.const';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(`${baseUrl.testUrl}/users`);
  }

  getUserById(userId: any) {
    return this.httpClient.get(`${baseUrl.testUrl}/users/${userId}`);
  }
}

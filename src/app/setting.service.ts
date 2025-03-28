import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  background = signal<URL>(new URL("/macos-sierra-glacier-mountains-snow-covered-alpenglow-5120x2880-6420.jpg"))
  constructor() { }
}

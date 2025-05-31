import { Component, input } from '@angular/core';

@Component({
  selector: 'app-setting-case',
  imports: [],
  templateUrl: './setting-case.component.html',
  styleUrl: './setting-case.component.css'
})
export class SettingCaseComponent {

  icon = input("icon");
  settingName = input("test")
}

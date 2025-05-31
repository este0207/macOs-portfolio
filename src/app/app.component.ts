import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FoldersComponent } from "./folders/folders.component";
import { FenetreNoteComponent } from "./fenetre-note/fenetre-note.component";
import { FenetreMailComponent } from './fenetre-mail/fenetre-mail.component';
import { FenetreSafariComponent } from "./fenetre-safari/fenetre-safari.component";
import { FenetrePhotoComponent } from "./fenetre-photo/fenetre-photo.component";
import { FenetreSettingComponent } from "./fenetre-setting/fenetre-setting.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, AppBarComponent, FoldersComponent, FenetreNoteComponent, FenetreMailComponent, FenetreSafariComponent, FenetrePhotoComponent, FenetreSettingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'macOs-portfolio';

  isMailVisible = false;
  isNoteVisible = false;
  isSafariVisible = false;
  isPhotoVisible = false;
  isSettingVisible = false;

  // settingService = inject();

  
  onShowWindows(event: string) {
    if (event == "mail") {
      this.isMailVisible = true;
    } if (event == "note") {
      this.isNoteVisible = true;
    } if (event == "safari") {
      this.isSafariVisible = true;
    } if (event == "photo") {
      this.isPhotoVisible = true;
    } if (event == "setting") {
      this.isSettingVisible = true;
    }
    console.log(event);
    
  }
  onQuitMail(event:any) {
    this.isMailVisible = false;
  }

  onQuitNote(event:any) {
    this.isNoteVisible = false;
  }
  onQuitSafari(event:any) {
    this.isSafariVisible = false;
  }

  onQuitPhoto(event:any) {
    this.isPhotoVisible = false;
  }
  onQuitSetting(event:any) {
    this.isSettingVisible = false;
  }
}

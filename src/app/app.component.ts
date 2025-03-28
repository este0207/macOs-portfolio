import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FoldersComponent } from "./folders/folders.component";
import { FenetreNoteComponent } from "./fenetre-note/fenetre-note.component";
import { FenetreMailComponent } from './fenetre-mail/fenetre-mail.component';
import { FenetreSafariComponent } from "./fenetre-safari/fenetre-safari.component";
import { FenetrePhotoComponent } from "./fenetre-photo/fenetre-photo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent, AppBarComponent, FoldersComponent, FenetreNoteComponent, FenetreMailComponent, FenetreSafariComponent, FenetrePhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'macOs-portfolio';

  isMailVisible = false;
  isNoteVisible = false;
  isSafariVisible = false;
  isPhotoVisible = false;

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
}

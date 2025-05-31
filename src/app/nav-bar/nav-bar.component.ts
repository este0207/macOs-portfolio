import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';
import { SocialsIconsComponent } from '../socials-icons/socials-icons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LinksComponent, SocialsIconsComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    const mydate = document.querySelector("#date") as HTMLElement;

    if (mydate) {
      setInterval(() => {
        const time = new Date();
        const fulldate = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        mydate.innerText = fulldate;
      }, 1000);
    } else {
      console.warn("Element with id 'date' not found.");
    }
  }
}

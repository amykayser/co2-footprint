import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import translations from 'assets/translations.json';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'co2-footprint';

  currentLanguage = 'de';

  public changeLanguage(lang:string)  {
    this.currentLanguage = lang;
  }

  public t(key: string): string {
    return (translations as any)[this.currentLanguage]?.[key];
  }
}

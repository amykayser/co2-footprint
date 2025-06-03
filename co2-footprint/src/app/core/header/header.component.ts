import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {AppComponent} from '../../app.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public getScreenWidth: any;

  public mobileViewport: boolean = false;
  public mobileNavigation: boolean = false;

  public readLTR: boolean = true;

  readingStyle: string = 'reading-ltr';
  mobileNavStyle!: string;
  languageDropdown!: string;

  public currentLanguage!: string;

  /* lower border for responsive breakpoints */
  desktopBreakpoint: number = 1024;

  constructor(private appComponent: AppComponent) {}

  public t(key: string): string {
    return this.appComponent.t(key);
  }
  ngOnInit() {
    this.currentLanguage = this.appComponent.currentLanguage;

    this.getScreenWidth = window.innerWidth;
    this.checkViewportWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.checkViewportWidth();
  }

  public checkViewportWidth() {
    this.mobileViewport = this.getScreenWidth < this.desktopBreakpoint ? true : false;
    this.mobileNavigation = this.getScreenWidth < this.desktopBreakpoint ? true : false;
  }

  toggleMobileMenu() {
    this.mobileNavigation = !this.mobileNavigation;
    if(this.mobileNavigation) {
      this.mobileNavStyle = 'mobile-nav-open';
    } else {
      this.mobileNavStyle = 'mobile-nav-closed';
    }
  }

  toggleLTRandRTL() {
    this.readLTR = !this.readLTR;
    if(this.readLTR) {
      this.readingStyle = 'reading-ltr';
      this.appComponent.changeLanguage('de');
      this.currentLanguage = 'de';
    } else {
      this.readingStyle = 'reading-rtl';
      this.appComponent.changeLanguage('ar');
      this.currentLanguage = 'ar';
    }
  }
}

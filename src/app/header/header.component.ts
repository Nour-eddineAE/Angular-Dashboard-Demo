import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItems } from './header-data';
import { Language } from '../model/header.model';
import { UserItem } from '../model/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSeacrhAsOverlay = false;
  selectedLanguage!: Language;
  languages: Language[] = languages;
  notifications = notifications;
  userItems = userItems;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // check inner width on resize event
    this.checkCanShowSeacrhAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSeacrhAsOverlay(window.innerWidth);
    //we can choose whichever we want
    this.selectedLanguage = this.languages[0];
  }
  getHeadClass(): string {
    let styleClass = '';
    //on large screens with
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSeacrhAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSeacrhAsOverlay = true;
    } else {
      this.canShowSeacrhAsOverlay = false;
    }
  }

  handleSelectedLanguage(language: Language): void {
    this.selectedLanguage = language;
  }
  handleLogout(item: UserItem) {
    if (item.label === 'Logout') {
      this.authenticationService.Logout().subscribe({
        next: (data) => {
          this.router.navigateByUrl('/login');
        },
      });
    }
  }
}

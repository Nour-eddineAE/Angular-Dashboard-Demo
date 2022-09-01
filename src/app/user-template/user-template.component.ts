import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from '../model/sidenavToggle.model';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss'],
})
export class UserTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

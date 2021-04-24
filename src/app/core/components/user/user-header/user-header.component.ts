import { Component, OnInit } from '@angular/core';

import { AppSettings } from 'src/app/shared/app.settings';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  menu = AppSettings.MENU;
  isMenuVisible = false;
  constructor() {}

  ngOnInit(): void {}

  closeMenu(): void {
    this.isMenuVisible = false;
  }
  openMenu(): void {
    this.isMenuVisible = true;
  }
}

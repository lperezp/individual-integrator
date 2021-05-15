import { Component } from '@angular/core';
import { AppSettings } from 'src/app/shared/app.settings';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  menu = AppSettings.MENU_ADMIN;
  isMenuVisible = false;
  constructor() {}

  closeMenu(): void {
    this.isMenuVisible = false;
  }
  openMenu(): void {
    this.isMenuVisible = true;
  }
}

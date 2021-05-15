import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  formLogin = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  isVisiblePwd = false;
  isError = false;
  subscriptionForm: Subscription | undefined;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.subscriptionForm = this.formLogin.valueChanges.subscribe({
      next: () => {
        this.isError = false;
      },
    });
  }

  async login(): Promise<void> {
    this.router.navigate(['/analysis']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    localStorage.setItem('auth', JSON.stringify(true));
    this._router.navigate(['/']);
  }
  submitForm(e: any) {
    console.log(e);
  }
}

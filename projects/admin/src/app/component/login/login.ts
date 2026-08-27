import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CONFIG } from '../../common/config';
import { Global } from '../../common/global';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  role: string = '-';
  obj = {
    type: 'Admin',
    staffId: 'AU-0001',
    password: 'Admin@123'
  }
  loading: boolean = false;
  _route = inject(Router);
  _global = inject(Global);
  _http = inject(HttpClient);
  constructor() {
  }
  ngOnInit(): void {
    localStorage.clear();
  }
  login() {
    this.loading = true;
   if (this.obj.staffId == 'AU-0001' && this.obj.password == 'Admin@123') {     
        localStorage.setItem('LoginInfo', JSON.stringify(this.obj));
        this._route.navigateByUrl('dashboard');
        this.loading = false;
      }
      else {
        alert("Invalid Id or Password");
        this.loading = false;
      };
  }

}

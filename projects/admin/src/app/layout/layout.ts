import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Global } from '../common/global';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit, AfterViewInit {
  _loginInfo = signal({ staffId: '', name: '', gender: '', mobile: '', branchId: '' })
  _global = inject(Global)
  _role = signal<string>('');
  IsLoading: Boolean = false;
  route = inject(ActivatedRoute);
  ngOnInit() {
    this.loginInfo()
    this._global.IsLoading$.subscribe(value => {
      this.IsLoading = value;
    })
    this._role.set(this._global.loginRole.value);
  }
  ngAfterViewInit(): void {
    this._global.loadScript();
  }
  logout() {
    this._global.logout();
  }
  loginInfo() {
    const info = JSON.parse(localStorage.getItem('LoginInfo') || '');
    this._loginInfo.set(info);
    this._global.setRole(info.role);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONFIG } from './config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Global {
  http = inject(HttpClient)
  _route = inject(Router)
  _applicantId = new BehaviorSubject<string>('-');
  _loader = new BehaviorSubject<boolean>(false);
  loginRole = new BehaviorSubject<string>('');
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Accept-Control-Allow-Origin', '*')
  constructor() { }
  setRole(name: string) {
    this.loginRole.next(name);
  }
  post(data: any): Observable<any> {
    return this.http.post(CONFIG.API_URL + data.url, data, { headers: this.headers });
  }
  readonly IsLoading$: Observable<Boolean> = this._loader.asObservable();
  logout() {
    localStorage.clear();
     this.loginRole.next('-');
    this._route.navigateByUrl('');
  }
  public loadJS(jsFile: string) {
    let node = document.createElement('script');
    node.src = jsFile;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public loadScript() {
    const jsArray = [
      './js/jquery.min.js',
      './assets/libs/choices.js/public/assets/scripts/choices.min.js',
      './assets/libs/@popperjs/core/umd/popper.min.js',
      './assets/libs/bootstrap/js/bootstrap.bundle.min.js',
      './assets/js/defaultmenu.min.js',
      // './assets/libs/node-waves/waves.min.js',
      './assets/js/sticky.js',
      './assets/libs/simplebar/simplebar.min.js',
      './assets/js/simplebar.js',
      './assets/libs/@simonwep/pickr/pickr.es5.min.js',
      // './assets/libs/apexcharts/apexcharts.min.js'
      // './assets/js/index.js',
      // './assets/js/custom-switcher.min.js',
      // './assets/js/custom.js'
      './assets/js/sidemenu.js'
    ];
    for (let i = 0; i < jsArray.length; i++) {
      let node = document.createElement('script');
      node.src = jsArray[i];
      node.type = 'text/javascript';
      node.async = true;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}

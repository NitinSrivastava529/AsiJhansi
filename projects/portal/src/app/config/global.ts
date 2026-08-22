import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root',
})
export class Global {
  http = inject(HttpClient)
  _route = inject(Router)
  _role = new BehaviorSubject<string>('');
  _applicantId = new BehaviorSubject<string>('-');
  _loader = new BehaviorSubject<boolean>(false);
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Accept-Control-Allow-Origin', '*')

  post(data: any): Observable<any> {
    return this.http.post(config.API_URL + data.url, data, { headers: this.headers });
  }
  readonly role$: Observable<string> = this._role.asObservable();
  readonly IsLoading$: Observable<Boolean> = this._loader.asObservable();
  logout() {
    localStorage.clear();
    this._route.navigateByUrl('');
  }  
  public loadScript() {
  const jsArray = [
    '/assets/js/plugins/jquery-3.7.1.min.js',
    '/assets/js/plugins/popper.min.js',
    '/assets/js/plugins/bootstrap.min.js',
    // GSAP
    '/assets/js/plugins/gsap/gsap.min.js',
    '/assets/js/plugins/gsap/SplitText.min.js',
    '/assets/js/plugins/gsap/ScrollSmoother.min.js',
    '/assets/js/plugins/gsap/ScrollTrigger.min.js',
    // Slick
    '/assets/js/plugins/slick.min.js',
    // Magnific Popup
    '/assets/js/plugins/jquery.magnific-popup.min.js',
    // Waypoints
    '/assets/js/plugins/jquery.waypoints.js',
    // CounterUp
    '/assets/js/plugins/jquery.counterup.min.js',
    // AOS
    '/assets/js/plugins/aos.js',
    // Theme
    '/assets/js/theme.js'
];
    for (let i = 0; i < jsArray.length; i++) {
      let node = document.createElement('script');
      node.src = jsArray[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}

import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { config } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  imports: [FormsModule, CommonModule,DatePipe],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit {
  item: any
  IsShow = false;
  sanitizer = inject(DomSanitizer)
  _http = inject(HttpClient)
  _global = inject(Global)

  ngOnInit(): void {
    this._global.loadScript()
    this.GetNotification();
  }
  GetNotification() {
    this._http.get(config.API_URL + 'api/master/GetNotification').subscribe(data => {
      this.item = data;    
    });
  }
  getUrl(file: string) {
    return config.API_URL + 'Resource/Notice/' + file
  }
}
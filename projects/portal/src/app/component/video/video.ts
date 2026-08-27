import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { config } from '../../config/config';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video implements OnInit,AfterViewInit {
  gallery:any;
  _http = inject(HttpClient)
  sanitizer = inject(DomSanitizer)
  _global = inject(Global)
  constructor() {

  }
  ngAfterViewInit(): void {
    this._global.loadScript()
  }
  ngOnInit(): void {
    this.GetVideo()
  }
    GetVideo() {
      this._http.get(config.API_URL + 'api/master/GetVideo').subscribe(data => {
          this.gallery = data;
        });
  }
  getYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}


import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { config } from 'rxjs';

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
      var data=[
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
        {path:"sSsw7QPrUk0"},
      ]
      this.gallery = data;
    // this._http.get('http://api.bkurashtriyatawadi.in/api/master/GetVideo').subscribe(data => {
    //   this.gallery = data;
    //   console.log(this.gallery) 
    // });
  }
  getYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}


import { HttpClient } from '@angular/common/http';
import { IGallery } from '../../model/gallery';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { config } from 'rxjs';
import { Active, CONFIG } from '../../common/config';
import { Global } from '../../common/global';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video implements OnInit {
  ipPhoto: any;
  largePhoto: any;
  IsShowImg: any;
  IsShow = false;
  gallery: IGallery[] = [];
  selectedFiles: File[] = [];
  AddObject: IGallery = {
    autoId: 0,
    type: 'Video',
    eventName: '-',
    path: '-',
    loginId: Active.memberId,
    creationDate: new Date()
  }
  _http = inject(HttpClient)
  sanitizer = inject(DomSanitizer)
  _global = inject(Global)
  ngOnInit(): void {
    this.GetVideo() 
  }
  GetVideo() {
    this._http.get<IGallery[]>(CONFIG.API_URL + 'api/master/GetVideo').subscribe(data => {
      this.gallery = data;
    });
  }
  getYoutubeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
  AddVideo(val: string) {
    this._global._loader.next(true)
    this._http.post(CONFIG.API_URL + `api/master/AddVideo?value=${val}&LoginId=Admin`, { headers: this._global.headers }).subscribe(data => {
      this.GetVideo()
      this._global._loader.next(false)
    });
  }
  Delete(id: number) {
    if (!confirm('are you sure?')) return
    this._global._loader.next(true)
    this._http.delete(CONFIG.API_URL + 'api/master/DeleteGallery?autoId=' + id).subscribe(data => {
      this.GetVideo()
      this._global._loader.next(false)
    });
  }
}

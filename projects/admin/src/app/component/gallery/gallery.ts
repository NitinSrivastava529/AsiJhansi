import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from '../../common/global';
import { CONFIG } from '../../common/config';
import { IGallery } from '../../model/gallery';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  imports: [FormsModule,CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
    ipPhoto: any;
  largePhoto: any;
  IsShowImg: any;
  IsShow = false;
  gallery: IGallery[] = [];
  selectedFiles: File[] = [];
  AddObject: IGallery = {
    autoId: 0,
    type: 'Photo',
    eventName: '',
    path: '-',
    loginId:'Admin',
    creationDate: new Date()
  }
 _global = inject(Global)
  _http = inject(HttpClient)
  sanitizer = inject(DomSanitizer)

    getUrl(file: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(CONFIG.API_URL + 'Resource/Gallery/' + file)
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
  ngOnInit(): void {
    this.GetGallery()
  }
  GetGallery() {
    this._http.get<IGallery[]>(CONFIG.API_URL + 'api/master/GetGallery').subscribe(data => {
      this.gallery = data;
    });
  }
changeFile(event: any) {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []) as File[];

    const maxSize = 600 * 1024; // 600 KB

    const allowedTypes = [
      // Images
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif'
    ];

    const invalidFile = files.find(file =>
      file.size > maxSize || !allowedTypes.includes(file.type)
    );

    if (invalidFile) {
      if (invalidFile.size > maxSize) {
        alert(`${invalidFile.name} must be less than 600 KB.`);
      } else {
        alert(`${invalidFile.name} is not a valid file type.`);
      }

      // Reset input
      input.value = '';

      // Clear selected files
      this.selectedFiles = [];

      return;
    }

    this.selectedFiles = files;
  }
  AddGallery() {
    this._global._loader.next(true)
    var formData = new FormData();
    formData.append('autoId', '1');
    formData.append('type', this.AddObject.type);
    formData.append('eventName', this.AddObject.eventName);
    formData.append('loginId', this.AddObject.loginId);
    formData.append('creationDate', new Date().toISOString());
    formData.append('path', this.selectedFiles[0]);
    this._http.post(CONFIG.API_URL + 'api/master/AddGallery', formData, { responseType: 'text' }).subscribe(data => {
      this.GetGallery()
      this._global._loader.next(false)
    });
  }
  Delete(id: number) {
    if (!confirm('are you sure?')) return
    this._global._loader.next(true)
    this._http.delete(CONFIG.API_URL + 'api/master/DeleteGallery?autoId=' + id).subscribe(data => {
      this.GetGallery()
      this._global._loader.next(false)
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CONFIG } from '../../common/config';
import { Global } from '../../common/global';
import { INotice } from '../../model/notice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  imports: [FormsModule, CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification implements OnInit {
  ipPhoto: any;
  largePhoto: any;
  IsShowImg: any;
  IsShow = false;
  items: INotice[] = [];
  selectedFiles: File[] = [];
  AddObject = {
    title: '',
    description: '',
    path: '-',
    creationDate: new Date()
  }
  _IsLoading = false;
  _global = inject(Global)
  _http = inject(HttpClient)
  sanitizer = inject(DomSanitizer)

  getUrl(file: string) {
    //return this.sanitizer.bypassSecurityTrustResourceUrl(CONFIG.API_URL + 'Resource/Notice/' + file)
    var url = this.sanitizer.bypassSecurityTrustResourceUrl(CONFIG.API_URL + 'Resource/Notice/' + file)
    window.open(CONFIG.API_URL + 'Resource/Notice/' + file, '_blank');
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
  ngOnInit(): void {
    this.GetNotice()
  }
  GetNotice() {
    this._http.get<INotice[]>(CONFIG.API_URL + 'api/master/GetNotification').subscribe(data => {
      this.items = data;
    });
  }
  changeFile(event: any) {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []) as File[];

    const maxSize = 5 * 1024 * 1024; // 5 MB

    const allowedTypes = [
      // Images
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      // PDF
      'application/pdf',
      // Word
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      // Excel
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];

    const invalidFile = files.find(file =>
      file.size > maxSize || !allowedTypes.includes(file.type)
    );

    if (invalidFile) {
      if (invalidFile.size > maxSize) {
        alert(`${invalidFile.name} must be less than 5 MB.`);
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
  AddNotice() {
    this._IsLoading = true;
    this._global._loader.next(true)
    var formData = new FormData();
    formData.append('autoId', '1');
    formData.append('title', this.AddObject.title);
    formData.append('description', this.AddObject.description);
    formData.append('creationDate', new Date().toISOString());
    formData.append('path', this.selectedFiles[0]);
    this._http.post(CONFIG.API_URL + 'api/master/AddNotification', formData, { responseType: 'text' }).subscribe(data => {
      this.GetNotice()
      this._global._loader.next(false)
      this._IsLoading = false;
    });
  }
  Delete(id: number) {
    if (!confirm('are you sure?')) return
    this._global._loader.next(true)
    this._http.delete(CONFIG.API_URL + 'api/master/DeleteNotification?autoId=' + id).subscribe(data => {
      this.GetNotice()
      this._global._loader.next(false)
    });
  }
}

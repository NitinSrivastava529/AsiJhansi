import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { config } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements AfterViewInit,OnInit {
  ipPhoto: any;
  largePhoto: any;
  gallery: any
  IsShowImg: any;
  IsShow = false;
  sanitizer = inject(DomSanitizer)
  _http = inject(HttpClient)
  _global = inject(Global)
  constructor() {

  }
  ngOnInit(): void {
     this._global.loadScript()
    this.GetGallery();
  }
  ngAfterViewInit(): void {
  
  }
  GetGallery() {
      var data=[
        {path:"JhansiFort.jpg"},      
        {path:"Chhatari-of-Raja-Gangadhar.jpg"},         
        {path:"Sahasra-Linga-Chandpur-Lalitpur.jpg"},              
        {path:"ChaurasiTomb.jpg"},
           {path:"JhansiFort.jpg"},      
        {path:"Chhatari-of-Raja-Gangadhar.jpg"},         
        {path:"Sahasra-Linga-Chandpur-Lalitpur.jpg"},              
        {path:"ChaurasiTomb.jpg"}       
      ]
      this.gallery = data;
    // this._http.get('http://api.bkurashtriyatawadi.in/api/master/GetGallery').subscribe(data => {
    //   this.gallery = data;
    //   console.log(this.gallery)
    // });
  }
  getUrl(file: string) {
    //return this.sanitizer.bypassSecurityTrustResourceUrl('http://api.bkurashtriyatawadi.in/Resource/Gallery/' + file)
    return this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/' + file)
  }
  showPhoto(url: string) {
    this.IsShowImg = url;
    this.IsShow = true;
  }
}

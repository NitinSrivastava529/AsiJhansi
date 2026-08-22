import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


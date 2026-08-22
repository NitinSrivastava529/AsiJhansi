import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-about-asi',
  imports: [],
  templateUrl: './about-asi.html',
  styleUrl: './about-asi.css',
})
export class AboutAsi implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


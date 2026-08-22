import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-about-jhansi-circle',
  imports: [],
  templateUrl: './about-jhansi-circle.html',
  styleUrl: './about-jhansi-circle.css',
})
export class AboutJhansiCircle implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

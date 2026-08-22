import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-public-information',
  imports: [],
  templateUrl: './public-information.html',
  styleUrl: './public-information.css',
})
export class PublicInformation implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-public-awareness',
  imports: [],
  templateUrl: './public-awareness.html',
  styleUrl: './public-awareness.css',
})
export class PublicAwareness implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


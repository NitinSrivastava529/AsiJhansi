import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-monuments',
  imports: [],
  templateUrl: './monuments.html',
  styleUrl: './monuments.css',
})
export class Monuments implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-who-is-who',
  imports: [],
  templateUrl: './who-is-who.html',
  styleUrl: './who-is-who.css',
})
export class WhoIsWho implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


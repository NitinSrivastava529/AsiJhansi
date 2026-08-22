import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-publication',
  imports: [],
  templateUrl: './publication.html',
  styleUrl: './publication.css',
})
export class Publication implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

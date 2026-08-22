import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';

@Component({
  selector: 'app-act-rules',
  imports: [],
  templateUrl: './act-rules.html',
  styleUrl: './act-rules.css',
})
export class ActRules implements OnInit {
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../common/global';
import { HttpClient } from '@angular/common/http';
import { Active } from '../../common/config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  _Active = Active;
  totalCount = {
    pending: 0,
    approved: 0,
    rejected: 0,
    total: 0,
    leadTotal: 0,
    applicantTotal: 0,
  };
  _http = inject(HttpClient)
  _global = inject(Global)
  constructor() { }
  ngOnInit(): void {
    this._global.loadScript();
  }
}

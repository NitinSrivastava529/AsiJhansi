import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-monuments',
  imports: [PdfViewerModule],
  templateUrl: './monuments.html',
  styleUrl: './monuments.css',
})
export class Monuments implements OnInit {
  pdfUrl="assets/Document/pdf-list-of-CPM-longitute-latitute.pdf";
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


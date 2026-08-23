import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-act-rules',
  imports: [PdfViewerModule],
  templateUrl: './act-rules.html',
  styleUrl: './act-rules.css',
})
export class ActRules implements OnInit {
  pdfUrl1 = "assets/Document/AMASR-act-1958.pdf";
  pdfUrl2 = "assets/Document/AMASR-rules-1959.pdf";
  pdfUrl3 = "assets/Document/Indian-Treasure-Trove-Act-1878.pdf";
  pdfUrl4 = "assets/Document/The-Antiquities-and-Art-Treasures-Act-1972.pdf";
  pdfUrl5 = "assets/Document/THE-ANCIENT-MONUMENTS-PRESERVATION-ACT-1904.pdf";
  pdfUrl6 = "assets/Document/The-Antiquities-and-Art-Treasures-Rules-1973.pdf";
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

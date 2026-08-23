import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-public-information',
  imports: [PdfViewerModule],
  templateUrl: './public-information.html',
  styleUrl: './public-information.css',
})
export class PublicInformation implements OnInit {
    pdfUrl1 = "assets/Document/Issued-in-public-intrest-English-format.pdf";
  pdfUrl2 = "assets/Document/Issued-in-public-intrest-English-format-1.pdf";
  pdfUrl3 = "assets/Document/Jhansi-Fort-Jhansi.pdf";
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}

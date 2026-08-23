import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../config/global';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-publication',
  imports: [PdfViewerModule],
  templateUrl: './publication.html',
  styleUrl: './publication.css',
})
export class Publication implements OnInit {
  pdfUrl1 = "assets/Document/Cultural-Heritage-of-Jhansi.pdf";
  pdfUrl2 = "assets/Document/झाँसी-की-सांस्कृतिक-धरोहर-झाँसी-मंडल.pdf";
  pdfUrl3 = "assets/Document/Kalinjar-Fort-Banda.pdf";
  pdfUrl4 = "assets/Document/कालिंजर-दुर्ग-बांदा.pdf";
  pdfUrl5 = "assets/Document/Deogarh-lalitpur.pdf";
  pdfUrl6 = "assets/Document/देवगढ़-ललितपुर.pdf";
  _global = inject(Global)
  constructor() { }
  ngOnInit() {
    this._global.loadScript();
  }
}


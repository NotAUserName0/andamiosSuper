import { afterRender, Component } from '@angular/core';
import { LandingService } from '../../landing.service';
import { Comunicado } from '../../models/comunicado';
import { Archivo } from '../../models/archivo';
import { PetitionsService } from '../../../petitions.service';
import { ActivatedRoute } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { fadeInAnimation } from '../../../fadeIn';

@Component({
  selector: 'app-proveeedores',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './proveeedores.component.html',
  styleUrl: './proveeedores.component.css',
  animations: [fadeInAnimation]
})
export class ProveeedoresComponent {

  archivo: any;
  archivoB64: any
  accion: any
  comunicados: Comunicado[] = []
  loading: boolean = false

  constructor(private landingService: LandingService,
    private helpers: PetitionsService, private activatedRoute: ActivatedRoute) {
    afterRender(() => {
      window.scroll(0, 0);
    })
    this.loading = true;
    this.activatedRoute.paramMap.subscribe(params => {
      this.accion = params.get('seccion');

      afterRender(() => {
        window.scroll(0, 0);
      })
      if (this.accion === 'alta' || this.accion === 'efactura') {
        this.obtenerArchivo();
      } else if (this.accion === 'comunicados') {
        this.obtenerComunicados();
      }
      this.loading = false;
    })
  }


  obtenerArchivo() {
    this.landingService.obtenerArchivo('proveedores').subscribe((res: any) => {
      //this.archivo = this.helpers.sanitizarPdf(res.file);
      //this.archivoB64 = this.base64toPDF(res.file);
      this.archivo = this.base64toPDF(res.file);
      this.loading = false;
    });
  }

  obtenerComunicados() {
    this.landingService.obtenerComunicados().subscribe((res: any) => {
      res.forEach(comunicado => {
        const dateInMilliseconds = Date.parse(comunicado.createdAt);
        const formattedDate = new Date(dateInMilliseconds).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });
        comunicado.createdAt = formattedDate;
      });
      this.comunicados = res;
      this.loading = false
    })
  }

  downloadFile(fileName: string, base64Content: string): void {
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    // Crear un objeto URL a partir del Blob
    const url = URL.createObjectURL(blob);

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;

    // Simular clic en el enlace temporal
    link.dispatchEvent(new MouseEvent('click'));

    // Liberar el objeto URL
    URL.revokeObjectURL(url);
  }

  base64toPDF(base64Content: string): string {
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    return URL.createObjectURL(blob);
  }
}

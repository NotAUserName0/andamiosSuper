import { afterRender, Component } from '@angular/core';
import { LandingService } from '../../landing.service';
import { PetitionsService } from '../../../petitions.service';
import { fadeInAnimation } from '../../../fadeIn';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  animations: [fadeInAnimation],
})
export class ClientesComponent {

  archivo:any
  archivoB64:any
  loading:boolean = false

  constructor(private landingService: LandingService, private petition:PetitionsService,
    private seo:SeoService
  ) {
    afterRender(() => {
      window.scroll(0,0);
    })
    this.loading = true;
    this.obtenerArchivo()
    this.seo.actualizarTitulo('Clientes');
    this.seo.generateTags({
      title:'Clientes',
      description:'Andamios Atlas pone a su disposicion un portal para clientes donde podra descargar los archivos necesarios para realizar sus pedidos.',
      slug:'clientes'
    })
  }

  obtenerArchivo(){
    this.landingService.obtenerArchivo('clientes').subscribe((res:any) => {
      this.archivo = this.petition.sanitizarPdf(res.archivo);
      this.archivoB64 = res.archivo;
      this.loading = false;
    });
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

}

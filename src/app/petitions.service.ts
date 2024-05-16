import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private sanitizer:DomSanitizer) { }

  sanitizar(cadena){
    /*cadena = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + cadena);
    return cadena*/
    if (cadena) {
      cadena = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + cadena);
    return cadena
    } else {
      return null;
    }
  }

  sanitizarPdf(cadena){
    if (cadena) {
      const byteCharacters = atob(cadena);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      // Crear un objeto URL a partir del Blob
      const url = URL.createObjectURL(blob);

      return url
    return cadena
    } else {
      return null;
    }
  }
}

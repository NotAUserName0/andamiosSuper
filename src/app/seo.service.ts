import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta:Meta, private title: Title) { }

  generateTags(config) {
    config = {
      title: "Andamios Atlas",
      description: "Andamios Atlás, el mayor líder en renta y venta de andamios en el mercado.",
      image: "",
      slug: "",
      ...config
    }

    this.meta.updateTag({name: config.title, content: config.description});
  }

  actualizarTitulo(titulo: string){
    this.title.setTitle(titulo)
  }

}

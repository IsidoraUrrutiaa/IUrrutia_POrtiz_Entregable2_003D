import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import {Article} from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  //objeto tipo arreglo de la interfaz Article
  noticias: Article[] = []

  constructor(private noticiasService:NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias', resp);
      //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
      this.noticias.push(...resp.articles);
    });
  }

}

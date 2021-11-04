import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
    icon: string;
    name: string;
    redirecTo: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  componentes: Componente[] = [
    
    {
      icon: 'shield-checkmark',
      name: 'Medidas sanitarias contra el covid',
      redirecTo: '/medidas'
    },
    {
      icon: 'newspaper',
      name: 'Noticias de impacto ambiental',
      redirecTo: '/news'
    },
    {
      icon: 'heart',
      name: 'Conócenos',
      redirecTo: '/conocenos'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

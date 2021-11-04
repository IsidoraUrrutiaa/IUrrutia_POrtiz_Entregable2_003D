import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
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
    {
      icon: 'people-circle',
      name: 'Comentarios',
      redirecTo: '/comentarios'
    },
    {
      icon: 'clipboard',
      name: 'Noticias Mundiales',
      redirecTo: '/noticias'
    },
  ];
}

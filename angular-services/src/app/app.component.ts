import { Component } from '@angular/core';

//Ao trocar o templateUrl do componente para template, é possivel passar componentes 
//diretamente no decorator do componente.LEMBRANDO QUE O TEMPLATE SÓ ACEITA STRINGS.
//Com isso o código fica mais enxuto pois o app.component.html pode ser eliminado pois nele
//só tem um componente que seria o router-outlet. Funciona da mesma forma

@Component({
  selector: 'app-root',
  template: `                
    <h1>Projeto Prático Angular Services</h1>
    <app-card></app-card>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wesley-services';
}

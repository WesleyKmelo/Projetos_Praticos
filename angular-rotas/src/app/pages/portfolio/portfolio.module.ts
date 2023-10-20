import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports:[CardComponent], //<=  esta linha permite que esse componente possa ser utilizado individualmente em outras partes da aplicação
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { //<=essa linha exporta esse módulo completo, que incluiop CardCOmponent

}

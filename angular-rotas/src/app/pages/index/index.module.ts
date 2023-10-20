import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  exports:[TitleComponent],  //<=  esta linha permite que esse componente possa ser utilizado individualmente em outras partes da aplicação
  imports: [
    CommonModule
  ]
})
export class IndexModule {  //<=essa linha exporta esse módulo completo

}

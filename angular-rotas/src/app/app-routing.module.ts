import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

//acima está sendo importada uma classe (RouterModule) que contêm métodos e um tipo(Routes)
//que tem uma coleção de propriedades que podem ser usadas.

//o atributo 'patchMatch aceita duas propriedades: 'full'=> quer dizer que o prefixo da rota tem que ser 
//exatamente igual ao passado no path, nesse caso vazio, e o 'prefix'=> que aceita vazio ou algo que contenha o 
//que está descrito no path.

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},//<=esse componente foi exportado na seção 'exports' do title.component.ts
  {path:"portifolio:", component:CardComponent,children:[    
    {path:":id", component:CardComponent} //<=criado parametro id para recuperar o valor na passagem da rota atraves de rotas children
  ]}, 
  {path:'**', redirectTo:""} //=>ROTA CORINGA que redireciona para um path vazio ou qualquer outro de preferência
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

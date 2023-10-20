import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//abaixo são importadas as rotas criadas pra essa aplicação.
//na seção imports abaixo, são declaradas as rotas que serão utilizadas pelo diretiva routerOutlet
import { IndexModule } from './pages/index/index.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [  //<=declaração dos componentes que serão renderizados na aplicação principal
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,         //<=importação do módulo personalizado registrado acima
    PortfolioModule      //<=importação do módulo personalizado registrado acima
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

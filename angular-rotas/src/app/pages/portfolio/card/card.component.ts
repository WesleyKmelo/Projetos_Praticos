import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //criado uma injeção de dependência privada do tipo ActivatedRoute para receber o valor 
  //de id que tá sendo passado no path do arquivo de rotas principal
  constructor(private parametroId:ActivatedRoute) {
    this.parametroId.params.subscribe(
      res=>console.log(res)
    )
   }

  ngOnInit(): void {
  }

}

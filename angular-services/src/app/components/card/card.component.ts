import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/PokemonData';
import { PokemonService } from "src/app/services/pokemon.service"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  pokemon:Pokemon
  pesqNome:string="Pesquise o Pokemon";
  tipoPoke:string[]=["Fogo","Pedra","Agua","Ar"];

  constructor(private service:PokemonService) { //<=injeção do service que acessa a api de pokemon
    
    //uma forma de inicializar valores em caso de erro. Lembrando que esse valores devem ser passados
    //exatamente como estão sendo montados pelo modelo Pokemon, que é observado pelo Observable

    this.pokemon = {          //<=objeto deve ser inicializdo aqui pois foi delcarado acima como do tipo Pokemon
      id:0,
      name:'Nada foi encontrado',
      sprites:{front_default:''},
      types:[{
        slot:0,
        type:{
          name:"Sem Tipos",
          url:"Sem Urls"}
          }]
    }
   } 

  ngOnInit(): void {
    this.getPokemon(this.pesqNome)
  }

 getPokemon(nomePoke:string){
    this.service.getPokemon(nomePoke).subscribe(   //<= metodo que solicita ao observable que pesquise o argumento passado
      {
        next: (poke)=> {       //<=next equivale ao get. Nesse caso uma função anonima recebe um objeto do tipo pokemon e atribui os dados
          this.pokemon = {
            id:poke.id,
            name:poke.name,
            sprites:poke.sprites,
            types:poke.types
          }
        },          
        error: (err) => console.log(err)
      }
    )
  }

}

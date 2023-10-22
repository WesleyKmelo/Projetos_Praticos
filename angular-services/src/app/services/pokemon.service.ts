//alem da interface Injectable, no arquivo de service podem ser importados quaisquer
//conjunto de dados que possam ser consumidos, como api's ou databases
//Aqui no caso , está sendo importado um arquivo que contem o acesso a uma api pokemon.

//A propriedade private permite que a variavel baseUrl possa ser exposta para quem injetar
//a dependencia de PokemonService, mas não permite que sofra modificações.Isso é uma boa
//prática de programação

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Pokemon } from '../models/PokemonData'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string="";
  private poke:Pokemon | any;

  //No construtor é injetado um objeto com qualquer nome do tipo HttpClient, que é uma classe 
  //do módulo HTTPCLIENTMODULE. No corpo do construtor é passado uma variavel que vai receber 
  //o valor da variavel pokeapi.

  //Os métodos para trabalhar com requisições Http são basicamente uma mistura do que está sendo 
  //injetado no construtor e o que está sendo construido em seu corpo
  constructor( private http:HttpClient) { 
    this.baseUrl = environment.pokeApi;
  }

    //esse método usa um dos métodos do objeto que foi injetado no construtor acima.
    //O Observable serve como se fosse um observador de um objeto bruto e sem tratamento
    //e que vai retornar os dados baseados em um tipo que foi passado entre <>. No caso Pokemon
    getPokemon(pokeName:string):Observable<Pokemon>{      
     this.poke= this
                .http
                .get<Pokemon>   //<= aqui o método get solicita os dados baseados nesse formato e isso vai ser observado pelo Observable.
                (`${this.baseUrl}${pokeName}`)

     return this.poke;
    }

}

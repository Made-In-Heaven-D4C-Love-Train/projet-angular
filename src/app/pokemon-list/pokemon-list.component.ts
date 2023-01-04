import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../models/pokemons.model';
import { PokemonsService } from '../shared/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons! : any;
  pokeSearch?: string;
  constructor(
    private Pokemon: PokemonsService
  ) { }

  ngOnInit(): void {
    this.Pokemon.getAllPokemons().subscribe((data: any) => {this.pokemons = data;
   
    })
  }

  getFilteredPokemons(): Pokemons[] {
    if(this.pokeSearch !== undefined)
    return this.pokemons.filter((pokemon: { name: (string | undefined)[]; }) => pokemon.name.indexOf(this.pokeSearch) !== -1);
    else return this.pokemons;
  }

}

import { Component } from '@angular/core';
import { PokemonsService } from './shared/pokemons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-angular';
  pokemons:any = [];
  constructor( private PokemonService: PokemonsService){}

  ngOnInit(){
  this.pokemons = this.PokemonService.pokemons;
  }
}

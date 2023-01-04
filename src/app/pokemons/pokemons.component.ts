import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  // pokemon : string = "Pikachu";
  // pokemon2 : string = this.pokemon;
  // type : string = "electric";


  @Input() pokemon?: string;
  pokemon2?: string = this.pokemon;
  @Input() type?: string;
  @Input() id?: string;
  @Input() url?: string;
  
  constructor( private Pokemon: PokemonsService) { }

  ngOnInit(): void {
  }

  getType(){
    return this.type;
  }

  getId(){
    return this.id;
  }

  supprimer(){
    if (confirm("Voulez-vous vraiment supprimer ce Pokémon ?")){
    this.Pokemon.delete(this.id);
    console.log(this.id);
    }
  }

  modifier(){
    console.log(this.Pokemon.get(this.id));
   
  }

  getURL(){
    return this.url;
  }
  
}

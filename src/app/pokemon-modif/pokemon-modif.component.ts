import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/pokemons.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemon-modif',
  templateUrl: './pokemon-modif.component.html',
  styleUrls: ['./pokemon-modif.component.scss']
})
export class PokemonModifComponent implements OnInit {
  
  Pokemons: any;
  pokemon: any;
  change: boolean = false;

  constructor(private route: ActivatedRoute, private Pokemon: PokemonsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    
    this.Pokemon.get(id).subscribe((value: any) => {
      
      this.pokemon = value;
    })
  }

  modif(){
    if(this.pokemon.name === "" || this.pokemon.type === "" || this.pokemon.url === "") alert("Les champs doivent être remplis !");
    else{
    this.Pokemon.update(this.pokemon).subscribe(() => { 
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
  }

}

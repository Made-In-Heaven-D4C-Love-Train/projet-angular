import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonModifComponent } from './pokemon-modif/pokemon-modif.component';
import { PokemonNewComponent } from './pokemon-new/pokemon-new.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsService } from './shared/pokemons.service';

const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListComponent
  },
  {
    path: 'new',
    component: PokemonNewComponent
  },
  {
    path: 'pokemons/update/:id',
    component: PokemonModifComponent
  },
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  declarations: [

  ],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  providers:[
    PokemonsService
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }

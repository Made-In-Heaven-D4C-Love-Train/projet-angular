import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Pokemons } from '../models/pokemons.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private dbPath = '/pokemon';
  pokemonRef: AngularFirestoreCollection<Pokemons>;
  //private pokemons?: any;
  constructor(
    private db: AngularFirestore
  ){
    this.pokemonRef = db.collection(this.dbPath);
  }
   pokemons = [
    {
      name: "Pikachu",
      type: "Electric",
    },
    {
      name: "Dracaufeu",
      type: "Fire",
    }
  ];
  pokemonSubject = new Subject<any[]>();
  getAllPokemons(): any{
    return this.pokemonRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    )
  }

  saveNewPokemon(pokemon: Pokemons): any {
    return new Observable(obs =>{
      this.pokemonRef.add({...pokemon}).then(() => { obs.next();})
    })
  }

  get(id: any): any{
    return new Observable(obs => {this.pokemonRef.doc(id).get().subscribe(res => {
      obs.next({id: res.id, ...res.data()});
    })})
  }

  update(pokemon: Pokemons){
    return new Observable(obs => {
      this.pokemonRef.doc(pokemon.id).update(pokemon);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`pokemon/${id}`).delete();
    console.log("Godzilla");
  }
}

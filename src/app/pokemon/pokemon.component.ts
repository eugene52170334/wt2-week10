import { Component, OnInit } from "@angular/core";

import { PokemonService } from "./pokemon.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-items",
    templateUrl: "./pokemon.component.html"
})
export class PokemonComponent implements OnInit {
    pokemons = [];
    pokemons$ : BehaviorSubject<Array<any>>;
    idxstart=0;
    constructor(private ps: PokemonService) { 
        this.pokemons$ = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        this.ps.getPokemons().subscribe(
            (response :any) =>{
                this.pokemons.push(...response.results);
                //console.log(this.pokemons);
                this.pokemons$.next(this.pokemons);
            }
        );
    }

    loadMore(){
        console.log("load more called");
        this.idxstart+=20;

        this.ps.getPokemons(this.idxstart).subscribe(
            (response:any) =>{
                this.pokemons.push(...response.results);
                //console.log(this.pokemons);
                this.pokemons$.next(this.pokemons);
            }
        );
    }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  // Properties
  title: string = "angular-learning";
  pokemons: string[] = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
  ];

  // Methods
  ngOnInit(): void {
    console.table(this.pokemons);
  }

  selectPokemon(name: string): void {
    console.log(`You selected ${name}`);
  }
}

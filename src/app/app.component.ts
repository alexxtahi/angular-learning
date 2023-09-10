import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Welcome to {{ pokemons[1] }}!</h1>`,
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
}

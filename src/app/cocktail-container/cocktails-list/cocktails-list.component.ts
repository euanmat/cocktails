import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
	
  cocktails: Cocktail[];
  activeCocktail: number;  

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
		this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
		this.cocktails = cocktails;
	});
  }

  choixCocktail(index: number) {
	this.activeCocktail = index;
	this.cocktailService.selectCocktail(index);
  }
}

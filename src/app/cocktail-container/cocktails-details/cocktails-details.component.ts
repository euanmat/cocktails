import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;	
  public index: number;

  constructor(private cocktailService: CocktailService, 
  private panierService: PanierService,
  private route: ActivatedRoute) { }

  ngOnInit() {
	  this.route.params.subscribe((params: Params) => {
  		if(params.id) {
  			this.index = params.id;
  		} else {
  			this.index = 0;
  		}

      this.cocktailService.getCocktail(this.index).subscribe((cocktail: Cocktail) => {
        this.cocktail = cocktail;
      })
    })
  }

  addPanier(ingredients: Ingredient[]) {
	  this.panierService.addIngredients(ingredients);
  }
  
  getUrl(): string[] {
	  return ['/cocktails', this.index + '', 'edit'];
  }
}

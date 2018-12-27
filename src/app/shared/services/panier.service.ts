import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Ingredient} from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>([]);

  constructor() { }
  
  addIngredients(ingredients: Ingredient[]) {
	  const currentValue = this.panier['value'];
	  if(currentValue.length) {
		  this.panier.next(currentValue.concat(ingredients));
	  } else {
		  this.panier.next(ingredients);
	  }
  }
  
}

import { Injectable } from '@angular/core';

import { Cocktail } from '../models/cocktail.model';

import { BehaviorSubject} from 'rxjs';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
	new Cocktail('Mojito', 'https://www.kitchensanctuary.com/wp-content/uploads/2016/08/Pineapple-and-Ginger-Mojitos-square.jpg', 'Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint. Its combination of sweetness, citrus, and mint flavors is intended to complement the rum, and has made the mojito a popular summer drink.'),
	new Cocktail('Pina Colada', 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/models/promotions/photos/29480/original/pina-colada-recipe-chowhound.jpg', 'The name piña colada literally means strained pineapple, a reference to the freshly pressed and strained pineapple juice used in the drink preparation.'),
	new Cocktail('White Russian', 'http://www.tastecocktails.com/wp-content/uploads/2016/11/WhiteRussian720FB.jpg', 'A White Russian is a cocktail made with vodka, coffee liqueur, and cream served with ice in an Old Fashioned glass. Often milk will be used as an alternative to cream.')
  ]);
	
  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }
  
  selectCocktail(index: number) {
	  this.cocktail.next(this.cocktails.value[index]);
  }
}

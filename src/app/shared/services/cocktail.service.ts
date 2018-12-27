import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';

import { filter, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
	  this.initCocktails();
  }
  
  initCocktails(): void {
	this.http.get<Cocktail[]>('https://cocktails-25319.firebaseio.com/cocktails.json').subscribe( (cocktails: Cocktail[]) => {
		this.cocktails.next(cocktails)
	});
  }
  
  getCocktail(index: number): Observable<Cocktail> {
	  return this.cocktails.pipe(filter((cocktails: Cocktail[]) => cocktails != null ),
		map((cocktails: Cocktail[]) => cocktails[index]));
  }
  
  ajoutCocktail(cocktail: Cocktail): void {
  	  // copie de la liste des cocktails actuelle
	  const cocktailsCopy: Cocktail[] = this.cocktails.value.slice();
	  let exists: boolean = false;
	  
	  // ajout du nouveau cocktail
	  cocktailsCopy.push(cocktail);  

	  // mise à jour de la liste + notification
	  this.save(cocktailsCopy);
  }
  
  editerCocktail(editCocktail: Cocktail): void {
  	  // copie de la liste des cocktails actuelle 
	  const cocktailsCopy = this.cocktails.value.slice();	
	  
	  // recherche du cocktail par son nom
	  const index = cocktailsCopy.findIndex( c => c.name === editCocktail.name);

	  // mise à jour du cocktail édité dans la liste
	  cocktailsCopy[index] = editCocktail;

	  // enregistrement en base de données
	  this.save(cocktailsCopy);
  }

    save(cocktails: Cocktail[]): void {
    	console.log("enregistrement en base de données !");
  		this.http.put('https://cocktails-25319.firebaseio.com/cocktails.json', cocktails).subscribe((ret: Cocktail[]) => {
  			this.cocktails.next(ret);
  		});
  }
}

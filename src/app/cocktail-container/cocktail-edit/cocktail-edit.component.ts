import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm: FormGroup;	
  public cocktail: Cocktail;
  private edit: boolean = false;

  constructor( private route: ActivatedRoute, private b: FormBuilder, private service: CocktailService ) { }

  ngOnInit() {
  		// est-ce que la route contient un id de cocktail ?
		this.route.params.subscribe(( params: Params ) => {
			if(params.id) {
				this.edit = true;
				// oui, mode édition = récupération du cocktail existant
				this.service.getCocktail(params.id).subscribe( (cocktail: Cocktail) => {
					this.cocktail = cocktail;
					this.initForm(this.cocktail);
				});
			} else {
				this.edit = false;
				// non, mode création
				this.initForm();
			}
	    })
	}
  
  initForm( cocktail: Cocktail = {name: '', img:'', desc: '', ingredients: []} ) {
	  this.cocktailForm = this.b.group({
		name: [cocktail.name, Validators.required],
		img: [cocktail.img, Validators.required],
		desc: [cocktail.desc],
		ingredients: this.b.array(
				cocktail.ingredients.map( ingredient => 
				this.b.group({
					name: [ingredient.name],
					quantity:[ingredient.quantity]
				})
			)
		)
	  })
  }
  
  saveCocktail() {
	// console.log(this.cocktail);
	if(this.edit) {
	  this.service.editerCocktail(this.cocktailForm.value);
	} else {
	  this.service.ajoutCocktail(this.cocktailForm.value);
	}
  }

  ajouterIngredient() {
	  (<FormArray>this.cocktailForm.get('ingredients')).push(this.b.group({
		  name: '',
		  quantity: ''
	  }));
  }
}

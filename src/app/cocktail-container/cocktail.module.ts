
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/modules/shared.module';

import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailRouting } from './cocktail.routing';

import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
	declarations:[
		CocktailsListComponent,
    	CocktailsDetailsComponent,
    	CocktailContainerComponent,
    	CocktailEditComponent,
    	FilterPipe
	],
	imports:[
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		CocktailRouting, 
		SharedModule
	],
	providers:[],
	exports:[]
})
export class CocktailModule { }
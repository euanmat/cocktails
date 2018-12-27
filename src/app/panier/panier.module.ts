import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { PanierRouting } from './panier.routing';

import {PanierComponent} from './panier.component';
import {IngredientsListComponent} from './ingredients-list/ingredients-list.component';

@NgModule({
	declarations:[
		PanierComponent,
		IngredientsListComponent
	],
	imports:[
		CommonModule,
		PanierRouting
	]
})
export class PanierModule{}
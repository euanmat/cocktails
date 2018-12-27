import { RouterModule, Route} from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';

const COCKTAIL_ROUTES = [
	{ path: 'cocktails', component: CocktailContainerComponent, children: [
		{ path: 'new', component: CocktailEditComponent },
		{ path: ':id', component: CocktailsDetailsComponent },
		{ path: ':id/edit', component: CocktailEditComponent },
		{ path: '', component: CocktailsDetailsComponent},
	]}
];

export const CocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES);
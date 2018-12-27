import { RouterModule, Route } from '@angular/router';
import { PanierComponent } from './panier.component';

const PANIER_ROUTE: Route[] = [
	{ path: 'panier', component: PanierComponent }
]

export const PanierRouting = RouterModule.forChild(PANIER_ROUTE);
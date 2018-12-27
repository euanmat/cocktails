import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { SharedModule} from './shared/modules/shared.module';
import { PanierModule } from './panier/panier.module';
import { ActiveDirective } from './shared/directives/active.directive';

import { AppRouting } from './app.routing';

import { PanierService } from './shared/services/panier.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	AppRouting,
  	HttpClientModule,
    CocktailModule,
    PanierModule,
    SharedModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    NavbarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { VoteButtonsComponent } from './vote-buttons/vote-buttons.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    NavbarComponent,
    FormComponent,
    ButtonComponent,
    VoteButtonsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//Module
import {SharedModule } from '../components/shared.module';


//Pages
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

//Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    SearchComponent,
    FavoritesComponent,
    DetailComponent,

  ]
})
export class PagesModule { }

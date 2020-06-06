import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientListComponent} from './client-list/client-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AdressListComponent} from './adress-list/adress-list.component';
import {ClientAddComponent} from './client-add/client-add.component';
import {AdressAddComponent} from './adress-add/adress-add.component';

const routes: Routes = [
  { path: 'list-clients', component: ClientListComponent},
  { path: 'list-adresses', component: AdressListComponent},
  { path: 'add-client', component: ClientAddComponent},
  { path: 'add-adress/:id', component:AdressAddComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

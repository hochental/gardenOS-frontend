import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientListComponent} from './client-list/client-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AdressListComponent} from './adress-list/adress-list.component';
import {ClientAddComponent} from './client-add/client-add.component';
import {AdressAddComponent} from './adress-add/adress-add.component';
import {AdressEditComponent} from './adress-edit/adress-edit.component';
import {ClientSingleComponent} from './client-single/client-single.component';
import {ClientEditComponent} from './client-edit/client-edit.component';

const routes: Routes = [
  { path: 'list-clients', component: ClientListComponent},
  { path: 'list-adresses', component: AdressListComponent},
  { path: 'add-client', component: ClientAddComponent},
  { path: 'add-adress/:id', component:AdressAddComponent },
  { path: 'edit-adress/:id', component:AdressEditComponent },
  { path: 'client/:id', component:ClientSingleComponent },
  { path: 'edit-client/:id', component:ClientEditComponent }
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

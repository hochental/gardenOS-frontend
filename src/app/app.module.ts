import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdressListComponent } from './adress-list/adress-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from './client-list/client-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { AdressAddComponent } from './adress-add/adress-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdressEditComponent } from './adress-edit/adress-edit.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientSingleComponent } from './client-single/client-single.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    AdressListComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientAddComponent,
    AdressFormComponent,
    AdressAddComponent,
    AdressEditComponent,
    ClientEditComponent,
    ClientSingleComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

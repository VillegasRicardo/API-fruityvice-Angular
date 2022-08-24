import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService }from '../app/Service/service.service'
import { HttpClientModule } from '@angular/common/http';

import { ListarComponent } from './Frutas/listar/listar.component';
import { ListarGenusComponent } from './Frutas/listar-genus/listar-genus.component';
import { ListarOrderComponent } from './Frutas/listar-order/listar-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarGenusComponent,
    ListarOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

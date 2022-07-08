import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalhesCadastroComponent } from './detalhes-cadastro/detalhes-cadastro.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhesCadastroComponent,
    NovoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

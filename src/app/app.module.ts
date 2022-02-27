import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    ListaArticoliComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';
import { AggiungiContattoComponent } from './aggiungi-contatto/aggiungi-contatto.component';
import { DettagliContattoComponent } from './dettagli-contatto/dettagli-contatto.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ContattiService } from './services/contatti.service';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RicercaComponent } from './ricerca/ricerca.component';
import { EliminaAlertComponent } from './elimina-alert/elimina-alert.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { TooltipModule } from 'primeng/tooltip';
import { DragDropModule } from 'primeng/dragdrop';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [
    AppComponent,
    ListaContattiComponent,
    AggiungiContattoComponent,
    DettagliContattoComponent,
    RicercaComponent,
    EliminaAlertComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    FormsModule,
    MessageModule,
    AutoCompleteModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    ToastModule,
    BrowserAnimationsModule,
    TooltipModule,
    ReactiveFormsModule,
    DragDropModule,
    OrderListModule,

  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    AutoCompleteModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    ToastModule,
    BrowserAnimationsModule,
    TooltipModule,
    ReactiveFormsModule,
    DragDropModule,
    OrderListModule,
    
  ],
  providers: [ContattiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

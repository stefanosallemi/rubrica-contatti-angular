import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';
import { AggiungiContattoComponent } from './aggiungi-contatto/aggiungi-contatto.component';
import { DettagliContattoComponent } from './dettagli-contatto/dettagli-contatto.component';
import { EliminaAlertComponent } from './elimina-alert/elimina-alert.component';

const routes: Routes = [
  { path: '', redirectTo: '/contatti', pathMatch: 'full' },
  { path: 'contatti', component: ListaContattiComponent },
  { path: 'aggiungi', component: AggiungiContattoComponent },
  { path: 'dettagli/:id', component: DettagliContattoComponent },
  { path: 'del', component: EliminaAlertComponent },
  { path: '**', redirectTo: '/contatti' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
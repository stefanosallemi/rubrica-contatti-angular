import { Component, Input } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Contatto } from '../models/contatto.model';
import { ContattiService } from '../services/contatti.service';

@Component({
  selector: 'app-elimina-alert',
  templateUrl: './elimina-alert.component.html',
  styleUrls: ['./elimina-alert.component.scss'],
})
export class EliminaAlertComponent {

  @Input() contatto!: Contatto;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private contattiService: ContattiService,
  ) { }

  confermaEliminazione() {
    this.confirmationService.confirm({
      message: "Sei sicuro di voler procedere? L'eliminazione è irreversibile.",
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Contatto eliminato con successo!',
        });
       /*  this.contattiService.confermaEliminazione(true, contatto.id); */
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Contatto non eliminato!',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Contatto non eliminato!',
            });
            break;
        }
      },
    });
  }
}

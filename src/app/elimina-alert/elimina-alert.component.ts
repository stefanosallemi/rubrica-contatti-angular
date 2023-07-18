import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ContattiService } from '../services/contatti.service';
@Component({
  selector: 'app-elimina-alert',
  templateUrl: './elimina-alert.component.html',
  styleUrls: ['./elimina-alert.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class EliminaAlertComponent {
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
        this.contattiService.confermaEliminazione(true);
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

import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from '../../contact.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
    FormsModule,
    ContactFormComponent,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contact[] {
    if (!this.filtroPorTexto) {
      return this.contacts;
    }
    return this.contacts.filter((contact) => {
      return contact.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contact[] {
    return this.filtrarContatosPorTexto().filter((contact) => {
      return contact.nome.toLocaleLowerCase().startsWith(letra);
    });
  }
}

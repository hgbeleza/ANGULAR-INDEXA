import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactComponent } from './components/contact/contact.component';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './contact.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    HeaderComponent,
    SeparatorComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda;

  filtrarContatosPorLetraInicial(letra: string): Contact[] {
    return this.contacts.filter((contact) => {
      return contact.nome.toLocaleLowerCase().startsWith(letra);
    });
  }
}

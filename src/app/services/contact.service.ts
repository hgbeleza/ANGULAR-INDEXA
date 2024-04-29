import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 2, nome: 'Antônio', telefone: '38 128451235' },
    { id: 2, nome: 'Ágata', telefone: '38 128451235' },
  ];

  constructor() {
    const contactLocalStorageString = localStorage.getItem('contacts');
    const contactLocalStorage = contactLocalStorageString
      ? JSON.parse(contactLocalStorageString)
      : null;
    this.contacts = contactLocalStorage || null;
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts() {
    return this.contacts;
  }
}

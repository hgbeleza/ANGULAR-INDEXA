import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactListComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}

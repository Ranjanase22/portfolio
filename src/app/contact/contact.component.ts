import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, ProjectsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}

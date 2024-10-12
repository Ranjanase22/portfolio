import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faBriefcase, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faHome = faHome;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faFileAlt = faFileAlt;        // File icon for Projects
  faEnvelope = faEnvelope;      // Envelope icon for Contact Me
}

import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WorkComponent } from '../work/work.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HomeComponent,WorkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

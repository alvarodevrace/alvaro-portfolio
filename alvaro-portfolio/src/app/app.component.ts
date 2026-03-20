import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ClientRailComponent } from './components/client-rail/client-rail.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StackComponent } from './components/stack/stack.component';
import { CursorComponent } from './shared/cursor/cursor.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CursorComponent,
    HeroComponent,
    ClientRailComponent,
    StackComponent,
    ExperienceComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}

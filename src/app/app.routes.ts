import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { CvComponent } from './cv/cv.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Wildcard route to handle not found routes
];


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DataService } from './shared/data.service';

const appRoutes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'work/:id', component: ViewDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/work', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

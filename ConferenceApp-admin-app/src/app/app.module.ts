import { Component, Input, Output, EventEmitter, ApplicationRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule, Router, ActivatedRoute  } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { Http, HttpModule} from '@angular/http';

import { EventServiceService } from './event-service.service';

import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-event/edit-Attende/edit-attendee.component';
import { Speaker } from './edit-event/edit-speakers/Speaker.model';
import { SpeakerFormComponent } from './edit-event/edit-speakers/edit-speaker.component';
import { ExhibitorFormComponent } from './edit-event/edit-exhibitors/edit-exhibitor.component';
import { InnerEventsFormComponent } from './edit-event/edit-inner-events/edit-inner-events.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'signup', component: SignupComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'help', component: HelpComponentComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create', component: CreateEventComponent },
  { path: 'event/:id', component: EditEventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponentComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponentComponent,
    SignupComponentComponent,
    LoginComponentComponent,
    HelpComponentComponent,
    EventsComponent,
    CreateEventComponent,
    EditEventComponent,
    EditFormComponent,
    SpeakerFormComponent,
    ExhibitorFormComponent,
    InnerEventsFormComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, HttpModule, CommonModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes, { useHash: true }), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCA20_4EESP91_VCovXIqtbMWrRjWnuD8g'
    })
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

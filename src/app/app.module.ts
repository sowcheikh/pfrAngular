import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUsersComponent } from './pages/users/add-users/add-users.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { DetailsUsersComponent } from './pages/users/details-users/details-users.component';
import { ProfilesComponent } from './pages/users/profiles/profiles.component';
import { ProfileSortieComponent } from './pages/users/profile-sortie/profile-sortie.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PromoComponent } from './gestion-parametre/promo/promo.component';
import { ReferentielComponent } from './gestion-parametre/referentiel/referentiel.component';
import { CompetenceComponent } from './gestion-parametre/competence/competence.component';
import { GrpCompetenceComponent } from './gestion-parametre/grp-competence/grp-competence.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DetailsUsersComponent,
    ProfilesComponent,
    ProfileSortieComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    JumbotronComponent,
    DashboardComponent,
    SidebarComponent,
    ChatComponent,
    PromoComponent,
    ReferentielComponent,
    CompetenceComponent,
    GrpCompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [{
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

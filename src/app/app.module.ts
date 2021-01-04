import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import {DragDropDirective} from './drag-drop.directive';
import { AddGrpComponent } from './gestion-parametre/grp-competence/add-grp/add-grp.component';
import { EditGrpComponent } from './gestion-parametre/grp-competence/edit-grp/edit-grp.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { ApprenantComponent } from './pages/apprenant/apprenant.component';
import { FormateurComponent } from './pages/formateur/formateur.component';
import { CmComponent } from './pages/cm/cm.component';
import {httpInterceptorProviders} from './_helpers';
import { AddReferentielComponent } from './gestion-parametre/referentiel/add-referentiel/add-referentiel.component';
import { ListApprenantComponent } from './pages/apprenant/list-apprenant/list-apprenant.component';
import { AddProfilesComponent } from './pages/users/profiles/add-profiles/add-profiles.component';
import {MaterialModule} from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { NiveauxComponent } from './gestion-parametre/competence/niveaux/niveaux.component';

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
    GrpCompetenceComponent,
    DragDropDirective,
    AddGrpComponent,
    EditGrpComponent,
    ApprenantComponent,
    FormateurComponent,
    CmComponent,
    AddReferentielComponent,
    ListApprenantComponent,
    AddProfilesComponent,
    ContactComponent,
    NiveauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatChipsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule, MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

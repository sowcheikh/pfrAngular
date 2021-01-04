import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {UsersComponent} from './pages/users/users.component';
import {AddUsersComponent} from './pages/users/add-users/add-users.component';
import {DetailsUsersComponent} from './pages/users/details-users/details-users.component';
import {EditUsersComponent} from './pages/users/edit-users/edit-users.component';
import {ProfilesComponent} from './pages/users/profiles/profiles.component';
import {ErrorComponent} from './error/error.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChatComponent} from './pages/chat/chat.component';
import {ProfileSortieComponent} from './pages/users/profile-sortie/profile-sortie.component';
import {PromoComponent} from './gestion-parametre/promo/promo.component';
import {ReferentielComponent} from './gestion-parametre/referentiel/referentiel.component';
import {CompetenceComponent} from './gestion-parametre/competence/competence.component';
import {GrpCompetenceComponent} from './gestion-parametre/grp-competence/grp-competence.component';
import {AddGrpComponent} from './gestion-parametre/grp-competence/add-grp/add-grp.component';
import {ApprenantComponent} from './pages/apprenant/apprenant.component';
import {FormateurComponent} from './pages/formateur/formateur.component';
import {CmComponent} from './pages/cm/cm.component';
import {AddReferentielComponent} from './gestion-parametre/referentiel/add-referentiel/add-referentiel.component';
import {ListApprenantComponent} from './pages/apprenant/list-apprenant/list-apprenant.component';
import {AddProfilesComponent} from './pages/users/profiles/add-profiles/add-profiles.component';
import {NiveauxComponent} from './gestion-parametre/competence/niveaux/niveaux.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: 'cm', component: CmComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'promo/list-apprenant', component: ListApprenantComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'users/add-user', component: AddUsersComponent},
      {path: 'users/:id', component: DetailsUsersComponent},
      {path: 'users/:id/edit', component: EditUsersComponent},
      {path: 'profiles', component: ProfilesComponent},
      {path: 'profiles/add-profile', component: AddProfilesComponent},
      {path: 'profileSortie', component: ProfileSortieComponent},
      {path: 'promo', component: PromoComponent},
      {path: 'referentiel', component: ReferentielComponent},
      {path: 'referentiel/add-referentiel', component: AddReferentielComponent},
      {path: 'competence', component: CompetenceComponent,
      children: [
        {path: ':id/niveau', component: NiveauxComponent}
      ]},
      {path: 'grpcompetence', component: GrpCompetenceComponent},
      {path: 'grpcompetence/add-grp', component: AddGrpComponent},
    ]},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

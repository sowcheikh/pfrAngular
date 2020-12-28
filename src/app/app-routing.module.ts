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

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'users/add-user', component: AddUsersComponent},
      {path: 'users/:id', component: DetailsUsersComponent},
      {path: 'users/:id/edit', component: EditUsersComponent},
      {path: 'profiles', component: ProfilesComponent},
      {path: 'profileSortie', component: ProfileSortieComponent},
      {path: 'promo', component: PromoComponent},
      {path: 'referentiel', component: ReferentielComponent},
      {path: 'competence', component: CompetenceComponent},
      {path: 'grpcompetence', component: GrpCompetenceComponent},
    ]},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

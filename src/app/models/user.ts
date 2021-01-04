import {Profile} from './profile';

export abstract class User {
  id: number;
  email: string;
  password: string;
  nom: string;
  prenom: string;
  status: boolean;
  genre: string;
  archive: boolean;
  avatar: any;
  // tslint:disable-next-line:variable-name
  profile_id: Profile;
  telephone: string;
  token?: string;


  protected constructor(id: number, email: string, password: string, nom: string, prenom: string, status: boolean,
                        // tslint:disable-next-line:variable-name
                        genre: string, archive: boolean, avatar: any, profile_id: Profile, telephone: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.nom = nom;
    this.prenom = prenom;
    this.status = status;
    this.genre = genre;
    this.archive = archive;
    this.telephone = telephone;
    this.avatar = avatar;
    this.profile_id = profile_id;
  }
}

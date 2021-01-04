import {Competence} from './competence';

export class GroupeCompetence {
  id?: number;
  libelle: string;
  description: string;
  archive: string;
  // tslint:disable-next-line:variable-name
  competence: Competence;
  // tslint:disable-next-line:variable-name
  constructor(id: number, libelle: string, description: string, archive: string, competence: Competence
              ) {
    this.id = id;
    this.libelle = libelle;
    this.description = description;
    this.archive = archive;
    this.competence = competence;
  }
}

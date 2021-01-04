import {GroupeCompetence} from './groupeComp';

export class Competence {
  id?: number;
  libelle: string;
  descriptif: string;
  archive: string;
  // tslint:disable-next-line:variable-name
  groupeCompetences: GroupeCompetence;
  constructor(id: number, libelle: string, descriptif: string, archive: string,
              // tslint:disable-next-line:variable-name
              groupeCompetences: GroupeCompetence
  ) {
    this.id = id;
    this.libelle = libelle;
    this.descriptif = descriptif;
    this.archive = archive;
    this.groupeCompetences = groupeCompetences;
  }
}

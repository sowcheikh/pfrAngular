import {GroupeCompetence} from './groupeComp';

export class Referentiel {
  id?: number;
  libelle: string;
  presentation: string;
  programme: any;
  // tslint:disable-next-line:variable-name
  critereEvaluation: string;
  // tslint:disable-next-line:variable-name
  critereAdmission: string;
  groupeCompetence: GroupeCompetence;
  constructor(id: number, libelle: string, presentation: string,
              // tslint:disable-next-line:variable-name
              programme: any, critereEvaluation: string,
              // tslint:disable-next-line:variable-name
              critereAdmission: string, groupeCompetence: GroupeCompetence) {
    this.id = id;
    this.libelle = libelle;
    this.presentation = presentation;
    this.programme = programme;
    this.critereEvaluation = critereEvaluation;
    this.critereAdmission = critereAdmission;
    this.groupeCompetence = groupeCompetence;
  }
}

export class Niveaux {
  id?: number;
  libelle: string;
  critereEvaluation: string;
  groupeAction: string;
  archive: string;
  // tslint:disable-next-line:variable-name
  constructor(id: number, libelle: string, critereEvaluation: string,
              groupeAction: string, archive: string,
  ) {
    this.id = id;
    this.libelle = libelle;
    this.groupeAction = groupeAction;
    this.critereEvaluation = critereEvaluation;
    this.archive = archive;
  }
}

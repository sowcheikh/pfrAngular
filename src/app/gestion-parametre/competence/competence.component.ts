import {Component, Input, OnInit} from '@angular/core';
import {Competence} from '../../models/competence';
import {FormControl} from '@angular/forms';
import {CompetenceService} from '../../services/competence.service';
import {GroupeCompetence} from '../../models/groupeComp';
import {GroupeCompService} from '../../services/groupe-comp.service';
import {Niveaux} from '../../models/niveaux';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  @Input() name: string;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  competences: Competence[] = [];
  grpCompetences: GroupeCompetence[] = [];
  niveaux: Niveaux[] = [];
  grp = false;
  submitted = false;
  id: number;


  // tslint:disable-next-line:typedef
  competence = new FormControl([]);
  niveau = new FormControl([]);
  constructor(private competenceService: CompetenceService,
              private groupeService: GroupeCompService) { }

  ngOnInit(): void {
    this.onFocusOutEvent();
  //  console.log(this.competence.value);
   // this.getCompetence(this.competence.value);
  }

  // tslint:disable-next-line:typedef
  getCompetence(id: any) {
    this.id = this.competence.value;
    console.log(this.id);
    this.groupeService.getCompInGroupeComp(id).subscribe(
      (res) => {
        console.log(res);
        this.competences = res['competence'];
       // console.log(this.competences[0]);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onFocusOutEvent() {
    this.groupeService.getGroupeComp().subscribe(
      (res) => {
        this.grpCompetences = res;
        // console.log(res);
        this.getCompetence(this.competence.value);
        this.getNiveau(this.niveau.value);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getNiveau(id: any) {
    this.id = this.niveau.value;
    this.groupeService.getCompInGroupeComp(id).subscribe(
      (res) => {
        console.log(res);
        this.niveaux = res['niveaux'];
        // console.log(this.competences[0]);
      }
    );
  }
}

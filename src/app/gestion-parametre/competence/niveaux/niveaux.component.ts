import { Component, OnInit } from '@angular/core';
import {Niveaux} from '../../../models/niveaux';
import {GroupeCompService} from '../../../services/groupe-comp.service';
import {ActivatedRoute} from '@angular/router';
import {CompetenceService} from '../../../services/competence.service';

@Component({
  selector: 'app-niveaux',
  templateUrl: './niveaux.component.html',
  styleUrls: ['./niveaux.component.scss']
})
export class NiveauxComponent implements OnInit {
// @ts-ignore
  niveau1 = Niveaux;
  niveau2 = Niveaux;
  niveau3 = Niveaux;
  constructor(private competenceService: CompetenceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res) => {
        const id = +res.id;
        this.competenceService.getCompetenceByID(id).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (res) => {
            console.log(res);
            this.niveau1 = res['niveaux'][0];
          }
        );
      }
    );
  }

}

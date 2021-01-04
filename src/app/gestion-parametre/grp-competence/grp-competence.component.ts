import { Component, OnInit } from '@angular/core';
import {GroupeCompService} from '../../services/groupe-comp.service';
import {GroupeCompetence} from '../../models/groupeComp';

@Component({
  selector: 'app-grp-competence',
  templateUrl: './grp-competence.component.html',
  styleUrls: ['./grp-competence.component.scss']
})
export class GrpCompetenceComponent implements OnInit {
  // tabs = [1, 2, 3, 4, 5, 6, 7, 8];
  groupeCompetences: GroupeCompetence[] = [];
  panelOpenState = false;

  constructor(private groupeService: GroupeCompService) { }

  ngOnInit(): void {
    this.groupeService.getGroupeComp().subscribe(
      (res) => {
        this.groupeCompetences = res;
        console.log(res);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grp-competence',
  templateUrl: './grp-competence.component.html',
  styleUrls: ['./grp-competence.component.scss']
})
export class GrpCompetenceComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

}

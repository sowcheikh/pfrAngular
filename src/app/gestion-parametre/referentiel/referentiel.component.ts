import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.scss']
})
export class ReferentielComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../services/referentiel.service';
import {Referentiel} from '../../models/referentiel';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.scss']
})
export class ReferentielComponent implements OnInit {
  // tabs = [1, 2, 3, 4, 5, 6, 7, 8];
  referentiels: Referentiel[] = [];
  constructor(private refService: ReferentielService) { }

  ngOnInit(): void {
    this.refService.getReferentiel().subscribe(
      (res) => {
        this.referentiels = res;
        console.log(res);
      }
    );
  }

}

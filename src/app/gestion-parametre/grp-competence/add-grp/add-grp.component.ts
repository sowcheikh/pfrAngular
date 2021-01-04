import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Competence} from '../../../models/competence';
import {CompetenceService} from '../../../services/competence.service';

@Component({
  selector: 'app-add-grp',
  templateUrl: './add-grp.component.html',
  styleUrls: ['./add-grp.component.scss']
})
export class AddGrpComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
               private competenceService: CompetenceService) {
  }

  // tslint:disable-next-line:typedef
  get f() { return this.form.controls; }
  form: FormGroup;
  step = 0;

  competences: Competence[] = [];

  // tslint:disable-next-line:typedef
  competence = new FormControl();
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [],
      libelle: ['', Validators.required],
      descriptif: ['', Validators.required],
      competence: ['', Validators.required]
    });
    this.getCompetence();
  }

  // tslint:disable-next-line:typedef
  public onSubmit() {
    console.log(this.form.value);
  }

  // tslint:disable-next-line:typedef
  addCompetence() {
    console.log('add competence');
  }
  // tslint:disable-next-line:typedef
  setStep(index: number) {
    this.step = index;
  }

  // tslint:disable-next-line:typedef
  nextStep() {
    this.step++;
  }
  // tslint:disable-next-line:typedef
  prevStep() {
    this.step--;
  }
  // tslint:disable-next-line:typedef
  getCompetence() {
    this.competenceService.getCompetence().subscribe(
      (res) => {
        this.competences = res;
      }
    );
  }
}

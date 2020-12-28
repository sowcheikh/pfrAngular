import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpCompetenceComponent } from './grp-competence.component';

describe('GrpCompetenceComponent', () => {
  let component: GrpCompetenceComponent;
  let fixture: ComponentFixture<GrpCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

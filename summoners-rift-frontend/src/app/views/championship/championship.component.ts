import { Component, OnInit } from '@angular/core';
import { Championship } from '../../models/championship.model';
import { Router } from '@angular/router';
import { ChampionshipService } from '../../services/championship.service'
import { Team } from 'src/app/models/teams.model';
import { FormControl, FormGroup, FormControlName, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  public championships: Championship[];
  public teamList: any = [];
  public selectedTeam = 'Selecione o time';
  public teamForm: FormGroup;
  

  constructor(
    private router: Router,
    private championshipService: ChampionshipService,
    private fb: FormBuilder
  ) {
    this.teamForm = fb.group({
      teamName: ["", Validators.required]
    })
    }

  ngOnInit(): void {
    this.getChampionship();
    this.getTeams()
  }

  selectNameTeam() {

  }

  getTeams() {
    this.teamForm = this.fb.group({
      'teamList':new FormControl(null, {validators: [Validators.required]})
    });
  }

  getChampionship() {
    this.championshipService.getAllChampionship().subscribe(championships => {
      this.championships = championships;
    })
  }
}

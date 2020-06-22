import { Component, OnInit } from '@angular/core';
import { Championship } from '../../models/championship.model';
import { Router } from '@angular/router';
import { ChampionshipService } from '../../services/championship.service'
import { FormControl, FormGroup, FormControlName, Validators, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  public championships: Championship[];
  public teamList: any = [];
  public selectedTeam = '';

  teamForm: FormGroup;

  constructor(
    private router: Router,
    private championshipService: ChampionshipService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getChampionship();
    this.getTeams()

    this.teamForm = new FormGroup({
      'teamList': new FormControl(null, {validators: [Validators.required]})
    });
  }

  getChampionship() {
    this.championshipService.getAllChampionship().subscribe(championships => {
      this.championships = championships;
      console.log(championships)
    })
  }

  getTeams() {
    this.championshipService.getAllChampionship().subscribe(response => {
      this.teamList = this.teamList.teamList
      console.log(response)
    })
  }
}

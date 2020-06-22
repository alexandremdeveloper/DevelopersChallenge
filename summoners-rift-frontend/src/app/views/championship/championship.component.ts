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
  public selectedTeam = 'Selecione o time';  

  constructor(
    private router: Router,
    private championshipService: ChampionshipService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getChampionship();
    // this.getTeams()
  }


  // getTeams() {
  //   this.championshipService.getAllChampionship().subscribe(teamList => {
  //     this.teamList = teamList
  //     console.log(teamList)
  //   })
  // }

  getChampionship() {
    this.championshipService.getAllChampionship().subscribe(championships => {
      this.championships = championships;
      console.log(championships)
    })
  }
}

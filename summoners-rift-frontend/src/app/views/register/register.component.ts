import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from 'src/app/services/championship.service';
import { Router } from "@angular/router";
import { FormGroup, Validators } from "@angular/forms";
import { Championship } from '../../models/championship.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public championship: Championship = {
    teamlist: [],
    final: [],
    winner: ''
  }

  constructor(
    private championshipService: ChampionshipService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createChampionship() {
      this.championshipService.create(this.championship).subscribe(() => {
        this.championshipService.showMessage('Campeonato cadastrado');
        this.router.navigate(['/championship']);
      })
  }

}

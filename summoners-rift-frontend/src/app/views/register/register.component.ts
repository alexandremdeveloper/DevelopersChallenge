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
  // createChampionshipForm: FormGroup;

  championship: Championship = {
    teamA: '',
    teamB: '',
    teamC: '',
    teamD: ''
  }

  constructor(
    private championshipService: ChampionshipService,
    // private formBuilder: FormBuilder,
    private router: Router
  ) { 
    // this.createChampionshipForm = formBuilder.group({
    //   id: [0],
    //   teamA: ["", Validators.required],
    //   teamB: ["", Validators.required],
    //   teamC: ["", Validators.required],
    //   teamD: ["", Validators.required],
    // })
    }

  ngOnInit(): void {
    
  }

  createChampionship() {
      this.championshipService.create(this.championship).subscribe(() => {
        this.championshipService.showMessage('Campeonato cadastrado');
        this.router.navigate(['/championship']);
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Championship } from '../../models/championship.model';
import { Router } from '@angular/router';
import { ChampionshipService } from '../../services/championship.service'


@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  championships: Championship[];

  constructor(
    private router: Router,
    private championshipService: ChampionshipService
  ) { }

  ngOnInit(): void {
    this.championshipService.getAllChampionship().subscribe(championships => {
      this.championships = championships
    })
  }

  

}

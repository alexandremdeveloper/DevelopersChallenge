import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Championship } from '../models/championship.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChampionshipComponent } from '../views/championship/championship.component';

@Injectable({
  providedIn: 'root'
})

export class ChampionshipService {
  championship: Championship = {
    teamA: '',
    teamB: '',
    teamC: '',
    teamD: ''
  }

  baseUrl = "http://localhost:3001/championship"


  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  getAllChampionship(): Observable<Championship[]> {
    return this.http.get<Championship[]>(this.baseUrl)
  }

  create(championship: Championship): Observable<Championship> {
    return this.http.post<Championship>(this.baseUrl, championship)
  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }
}

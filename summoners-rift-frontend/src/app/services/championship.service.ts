import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Championship } from '../models/championship.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChampionshipService {
  public championship: Championship = {
    teamList: [],
    final: [],
    winner: ''
  }

  

  baseUrl = "http://localhost:3001/championships"


  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  getAllChampionship(): Observable<Championship[]> {
    return this.http.get<Championship[]>(this.baseUrl)
  }

  getAllTeams(): Observable<Championship[]> {
    return this.http.get<Championship[]>(this.baseUrl);
  }

  create(championship: Championship): Observable<Championship> {
    return this.http.post<Championship>(this.baseUrl, championship)
  }


  update(championship: Championship): Observable<Championship> {
    const url = `${this.baseUrl}/${this.championship.id}`
    return this.http.put<Championship>(url, championship)
  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }
}

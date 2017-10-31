import { Injectable } from '@angular/core';
import { Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MyNewDetailleComponent } from './my-new-detaille/my-new-detaille.component'
import { RouterModule, Router } from '@angular/router';



@Injectable()
export class MyNewServiceService {
  title = 'StarWars';
  results: string[];
  categorieName:any;
  info: any;
  infoNom: any;
  descriptionResults:any;
  descriptionTab:any;

  constructor (private http: HttpClient,
    public router: Router) {}

    ngOnInit(): void {
      this.http.get('https://swapi.co/api/').subscribe(data => {
        this.results = Object.keys(data);

      });
    }

    selectCat(item){

      this.http.get('https://swapi.co/api/' + item).subscribe(data => {
        this.info = data["results"];
        this.infoNom = Object.keys(data["results"][0])[0];
        this.categorieName=item;

      });
  }

  detailleCat(description) {

    this.http.get(description).subscribe(data => {
    this.descriptionResults= data;
    this.descriptionTab =Object.keys(data);
    });
    }

}

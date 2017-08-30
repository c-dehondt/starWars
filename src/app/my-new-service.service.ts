import { Injectable } from '@angular/core';
import { Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MyNewDetailleComponent } from './my-new-detaille/my-new-detaille.component'



@Injectable()
export class MyNewServiceService {
  title = 'StarWars';
  results: string[];
  info: any;
  infoNom: any;
  descriptionResults:any;
  descriptionTab:any;

  constructor (private http: HttpClient) {}
    ngOnInit(): void {
      this.http.get('https://swapi.co/api/').subscribe(data => {
        this.results = Object.keys(data);
        console.table(data);
      });
    }

    selectCat(item){
      this.http.get('https://swapi.co/api/' + item).subscribe(data => {
        this.info = data["results"];
        this.infoNom = Object.keys(data["results"][0])[0];
        console.table(data["results"]);
      });
  }

  detailleCat(description) {
    this.http.get(description).subscribe(data => {
    this.descriptionResults= data;
    this.descriptionTab =Object.keys(data);
    console.table(this.descriptionTab);
    });
    }
}

import { Component, OnInit } from '@angular/core';
import {MyNewServiceService} from '../my-new-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title='StarWars';
  constructor(private mynewservice:MyNewServiceService) {
  }
  ngOnInit() {}
}

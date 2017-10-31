import { Component, OnInit } from '@angular/core';
import {MyNewServiceService} from '../my-new-service.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private mynewservice:MyNewServiceService) {
}
  ngOnInit() {}

}

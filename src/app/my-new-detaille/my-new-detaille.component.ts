import { Component, OnInit} from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-my-new-detaille',
  templateUrl: './my-new-detaille.component.html',
  styleUrls: ['./my-new-detaille.component.css']
})

export class MyNewDetailleComponent implements OnInit {
  constructor(private mynewservice:MyNewServiceService) {
}
  ngOnInit() {}
}

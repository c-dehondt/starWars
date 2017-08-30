import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-new-detaille',
  templateUrl: './my-new-detaille.component.html',
  styleUrls: ['./my-new-detaille.component.css']
})

export class MyNewDetailleComponent implements OnInit {
  constructor(private mynewservice2:MyNewDetailleComponent) {
  this.mynewservice2.ngOnInit()
}
  ngOnInit() {
  }
}

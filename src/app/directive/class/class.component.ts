import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  show = true;
  teams = [
    'ca',
    'om',
    'barca',
    'milan',
    'madrid'
  ]
  ca = false;
  barca = true;
  milan = false;
  constructor() { }

  ngOnInit() {
  }
  changeTeam(team){
    this.ca = true;
    this.barca = false;
    this.milan = false
    }
}

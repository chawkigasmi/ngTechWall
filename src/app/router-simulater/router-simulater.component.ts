import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulater',
  templateUrl: './router-simulater.component.html',
  styleUrls: ['./router-simulater.component.css']
})
export class RouterSimulaterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  
  }
 
  goToComponent(route){
    const link = [route];
    this.router.navigate(link)
  }
}

import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
color= 'red';
border='red';
  constructor(
       private premierService:PremierService,
       private router: Router,
       private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.premierService.addData('Haboub2019');
    this.activatedRoute.params.subscribe(
      (params) =>{
        this.color = params.default;
        this.border = params.default;
      }
    )
  }
  processReq(message: any){
alert(message);
  }
/*   changeColor(input){
    console.log(input.value);
    this.color = input.value;
    this.border = input.value;
    input.value = '';
  } */

  loggerMesData(){
    this.premierService.logger('Haboub');
  }
  goToCv(){
    const link = ['cv'];
    this.router.navigate(link);
  }
}

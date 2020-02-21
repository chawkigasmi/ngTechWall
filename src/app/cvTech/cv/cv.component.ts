import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { PremierService } from '../../premier.service';
import { CvService } from '../cv.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[] ;
  selectedPersonne : Personne;
  constructor(private premierService: PremierService,private cvSrvice: CvService) { };

  ngOnInit() {

     this.cvSrvice.getPersonnes().subscribe(
       (personnes) =>{
         this.personnes = personnes;
       },
       (error) =>{
         alert('Probléme daccés à l api les données affichées sont fake');
         console.log(error)
         this.personnes = this.cvSrvice.getFakePersonnes();
       }
     );
/*     this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes); */
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }
}

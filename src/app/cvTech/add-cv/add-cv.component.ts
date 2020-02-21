import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router : Router
    ) { }

  ngOnInit() {
  }
/*   addPersonne(formulaire: NgForm){
    this.cvService.addPersonne(formulaire.value).subscribe(
      (reponse) =>{
        const link = ['cv'];
        this.router.navigate(link)
      },
      (error) =>{
          this.errorMessage = `Probléme de connexion à votre serveur. Priére de consulter l'administrateur`;
          console.log(error)
      }
    )
  

  } */
  addPersonne(formulaire: NgForm){
    this.cvService.addPersonne(formulaire.value).subscribe(
      (reponse) =>{
        const link = ['cv'];
        this.router.navigate(link)
      },
      (error) =>{
        this.errorMessage = `Probléme de connexion à votre serveur. Priére de consulter l'administrateur`;
        console.log(error)
      }
    )

  }
}

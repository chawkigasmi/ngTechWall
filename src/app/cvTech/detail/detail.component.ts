import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>{
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) =>{
              this.personne = personne
          }
        );
      }
    );
  }
  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) =>{
        const link = ['cv'];
        this.router.navigate(link);
    },
    (error) =>{
      console.log(error)
  }
    )
  }
  updatePersonne(){
    const link = ['cv/updateCv',this.personne.id ];
    this.router.navigate(link);
  }

}

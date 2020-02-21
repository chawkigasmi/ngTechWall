import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { EmbaucheService } from '../embauche.service';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
 @Input() personne: Personne;

 constructor(
   private embaucheService: EmbaucheService,
   private router: Router
   ) { }

  ngOnInit() {
  }

embaucher(){
    this.embaucheService.embaucher(this.personne)
}
debaucher(){
  this.embaucheService.debaucher(this.personne)
}
moreInfo(){
  const link = ['cv',this.personne.id]
  this.router.navigate(link);
}
}

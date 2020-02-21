import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable: Observable<string>;
  mesImages = [
    'chawki.jpg',
    'cv.png',
    '404.png',
    'zizou.jpeg'
  ];
  currentImage : string;
  constructor() { }

  ngOnInit() {
     this.monObservable = new Observable(
       (observer) =>{
         let i = this.mesImages.length - 1;
         setInterval(
           ()=>{
            observer.next(this.mesImages[i])
            if(i > 0){
              i--;
            }
            else{
              i = this.mesImages.length - 1
            }
           
           }
         ,2000);
       }
     );
     this.monObservable.subscribe(
      (result) =>{
         this.currentImage = result;
      }
     );
  }

}

import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('Fils Component : voici le contenu de la variable color de mon pére ',this.filsProperty)
  }
  sendEvent(){
    this.sendRequestToData.emit(
/*         alert('Please can i have some money')
 */    );
  }
}

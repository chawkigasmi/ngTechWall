import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Med Habib"
  bgColor = "red"
  show = false
  cahngeStatus(){
    this.show = !this.show;
  }
}

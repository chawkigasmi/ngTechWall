import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }
  visibility = false;
  ngOnInit() {
  }
  logout(){
   this.authentificationService.logout();
   this.router.navigate(['login'])
  }

  show(){
    this.visibility = !this.visibility;
  }
  
}

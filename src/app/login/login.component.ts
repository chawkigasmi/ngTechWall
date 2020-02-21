import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }
login(crendentials){
  this.authentificationService.login(crendentials).subscribe(
    (reponse) =>{
     console.log(reponse) 
      const token =  reponse['id']; 
      const link = ['cv'];
      localStorage.setItem('token', token);
      this.router.navigate(link)
    },
    (error) =>{
        console.log(error)
    }
  );
}
}

import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  link = 'http://localhost:3000/api/n';

  constructor(private http: HttpClient) {

    this.personnes =[
      new Personne (1, 'Gasmi', 'Chawki', 31, 'chawki.jpg', 12335, ' Developer '),
      new Personne (2, 'Zidan', 'Zizou', 45, 'zizou.jpeg', 22222, ' Fottbaler Player  '),
      new Personne (3, 'Gasmi', 'Haboub', 1, '', 11111, 'Medecin')
  ];
   }
   getPersonnes(): Observable <Personne []> {
      return this.http.get<Personne []>(this.link)
   }
   getFakePersonnes(){
     return this.personnes;
   }
   getPersonneById(id: number): Observable<Personne>{
/*     const personne = this.personnes.find(personne => {
      return personne.id == id;
    })
    return personne */
    return this.http.get<Personne>(this.link + `/${id}`);
   }

/*    addPersonne(personne : Personne): Observable<any>{
    const token = localStorage.getItem('token');
    if(token){
      const params = new HttpParams().set('acces_token', token);
      return this.http.post(this.link, personne, {params});
    } 
    
      return this.http.post(this.link, personne);
   
   } */

   addPersonne(personne : Personne): Observable<any>{
    return this.http.post(this.link, personne);
   }

   deletePersonne(id :number){
     return this.http.delete(this.link + `/${id}` );
   }
   updatePersonne(personne: Personne){
     return this.http.put(`${this.link}/${personne.id}`, personne);
   }
   findByName(name): Observable<Personne []>{
     const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
     const params = new HttpParams().set('filter',filter)
    return this.http.get<Personne []>(this.link, {params});
   }
}

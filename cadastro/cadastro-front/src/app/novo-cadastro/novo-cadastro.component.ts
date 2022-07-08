import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.css']
})
export class NovoCadastroComponent implements OnInit {
  cadastro = {Nome:'', CPF:'', Matricula:'', Curso:'', RG:'', Email:''};
  constructor(
    private api:ApiService,
    private appComponent: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNovoCadastro(this.cadastro).subscribe(
      data => {
        this.appComponent.cadastros.push(data);
        this.router.navigate([''])
      },
      error => {
        console.log("Aconteceu um erro");
      }
    );
  }

  home(){
    this.router.navigate([''])
  }
  



}
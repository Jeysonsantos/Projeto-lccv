import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-front';
  cadastros=[{id:1,Nome:'',Matricula:'',CPF:'',Curso:'',RG:'',Email:''},];

  constructor(private api:ApiService, private router:Router){
    this.getCadastros();
  }
  getCadastros  = () => {
    this.api.getAllCadastros().subscribe(
      data => {
        this.cadastros = data
      },
      error => {}

    );
  }
  cadastroClicked  = (cadastro:any) => {
    this.router.navigate(['detalhes-cadastro', cadastro.id]);
  }
  novoCadastro(){
    this.router.navigate(['novo-cadastro'])
  }
}

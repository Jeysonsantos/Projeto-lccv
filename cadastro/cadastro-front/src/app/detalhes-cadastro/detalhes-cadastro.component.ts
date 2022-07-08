import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detalhes-cadastro',
  templateUrl: './detalhes-cadastro.component.html',
  styleUrls: ['./detalhes-cadastro.component.css']
})
export class DetalhesCadastroComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api:ApiService,
    private appComponente: AppComponent,
    private router: Router,) { }
  selected_cadastro={id:'',Nome:'',Matricula:'',CPF:'',Curso:'',RG:'',Email:''};
  selected_id=0;

  ngOnInit(){
    this.route.paramMap.subscribe((param: ParamMap)=> {
      let id = parseInt(param.get('id')!);
      this.selected_id=id
      this.loadCadastro(id);
    });
  }

  loadCadastro(id:any){
    this.api.getCadastro(id).subscribe(
      data => {
        this.selected_cadastro = data;
      },
      error => {}

    );

  }
  update(){
    this.api.updateCadastro(this.selected_cadastro).subscribe(
      data => {
        this.selected_cadastro = data;
        location.reload()
      },
      error => {
        console.log("Aconteceu um erro");
      }
    );
    this.router.navigate([''])
  };

  delete(){
    this.api.deleteCadastro(this.selected_id).subscribe(
      data => {
        let index=0;
        this.appComponente.cadastros.forEach((e, i) => {
          if(e.id == this.selected_id)
            index = i;
        });
        this.appComponente.cadastros.splice(index,1);
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


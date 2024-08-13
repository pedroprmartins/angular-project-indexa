import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contatos/contato';
import { ContatoService } from "../../services/contato.service";

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink,
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit{
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  excluirContato(){
    if(this.contato.id){
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

}

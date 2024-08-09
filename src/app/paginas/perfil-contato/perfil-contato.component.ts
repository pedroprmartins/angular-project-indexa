import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

import {ContainerComponent} from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contatos/contato';

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
export class PerfilContatoComponent {
  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '555599995599',
    email: 'dev@dev.com',
    aniversario: '12/02/1990',
    redes: 'dev.com'
  }
}

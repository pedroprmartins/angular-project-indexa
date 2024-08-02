import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

import {CabecalhoComponent} from "../../componentes/cabecalho/cabecalho.component";
import {ContainerComponent} from "../../componentes/container/container.component";
import {ContatosComponent} from "../../componentes/contatos/contatos.component";
import {SeparadorComponent} from "../../componentes/separador/separador.component";
import {FormularioContatoComponent} from "../formulario-contato/formulario-contato.component";

import agenda from '../agenda.json';

interface Contatos {
  id: number,
  nome: string,
  telefone: string
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatosComponent,
    FormsModule,
    FormularioContatoComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contatos[] = agenda;
  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contatos[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtraContantoPorLetraInicial(letra: string): Contatos[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}

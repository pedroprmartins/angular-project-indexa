import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

import {CabecalhoComponent} from "../../componentes/cabecalho/cabecalho.component";
import {ContainerComponent} from "../../componentes/container/container.component";
import {ContatosComponent} from "../../componentes/contatos/contatos.component";
import {SeparadorComponent} from "../../componentes/separador/separador.component";
import {FormularioContatoComponent} from "../formulario-contato/formulario-contato.component";
import {ContatoService} from "../../services/contato.service";
import { Contato } from '../../componentes/contatos/contato';

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
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = []; //Aqui era onde recebia a agenda.json
  filtroPorTexto: string = '';

  //O construtor fica responsavél apenas pela injeção
  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatoService.obterContatos().subscribe(contato=>{
      this.contatos = contato;
    });
  }

  filtrarContatosPorTexto(): Contato[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtraContantoPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';

interface Contatos {
  id: number,
  nome: string,
  telefone: string
}

import agenda from './agenda.json';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatosComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contatos[] = agenda;
  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contatos[] {
    if(!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().replace(/[ôóõ]/,"o").includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtraContantoPorLetraInicial(letra: string): Contatos[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}

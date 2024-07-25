import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import {FormsModule} from "@angular/forms";
import {FormularioContatoComponent} from "./paginas/formulario-contato/formulario-contato.component";

import agenda from './agenda.json';

interface Contatos {
  id: number,
  nome: string,
  telefone: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatosComponent,
    FormsModule,
    FormularioContatoComponent
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
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtraContantoPorLetraInicial(letra: string): Contatos[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}

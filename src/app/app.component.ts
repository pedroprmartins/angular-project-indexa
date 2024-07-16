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

// import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contatos[] = [];
  filtroPorTexto: string = '';

  filtraContantoPorLetraInicial(letra: string): Contatos[] {
    return this.contatos.filter(batata => {
      return batata.nome.toLowerCase().startsWith(letra);
    });
  }
}

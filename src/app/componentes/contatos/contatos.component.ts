import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

  @Input() nome: string = '';
  @Input() telefone: string = '';
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';
}

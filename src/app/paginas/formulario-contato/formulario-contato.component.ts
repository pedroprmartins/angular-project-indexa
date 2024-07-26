import { Component } from '@angular/core';
import {ContainerComponent} from "../../componentes/container/container.component";
import {CommonModule} from "@angular/common";
import {SeparadorComponent} from "../../componentes/separador/separador.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  contatoForm: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Nacy'),
      telefone: new FormControl('99 9999-9999'),
      email: new FormControl('teste@teste.com'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Teste campo observações')
    });
  }

  salvarContato(){
    console.log(this.contatoForm.value);
  }

  cancelarContato() {
    console.log("Cancelado contato");
  }
}

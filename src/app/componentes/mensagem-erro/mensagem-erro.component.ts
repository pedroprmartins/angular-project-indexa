import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-mensagem-erro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensagem-erro.component.html',
  styleUrl: './mensagem-erro.component.css'
})
export class MensagemErroComponent {
  @Input() control!: FormControl;
}

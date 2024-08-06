import { Injectable } from '@angular/core';

import { Contato } from "../componentes/contatos/contato";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  protected contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@email.com"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235", "email": "email@email.com"}
  ];

  constructor() {
    //tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if(contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }

    //Salvar os contatos no LocalStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(){
    return this.contatos;
  }

  salvarContato(contato: Contato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}

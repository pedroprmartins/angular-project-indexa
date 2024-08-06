import { Injectable } from '@angular/core';

interface Contatos {
  id: number,
  nome: string,
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contatos[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849"},
    {"id": 6, "nome": "Cláudia", "telefone": "31 176437098"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441"}
  ];

  constructor() {
    //tentar obter os dados do localStorage
    //localStorage é uma propriedade do arquivo 'lib.dom.d.ts'
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || null;

    //Salver os contatos no LocalStorage
    localStorage.setItem('contatos', JSON.stringify(contatosLocalStorage));
  }

  obterContatos(){
    return this.contatos;
  }
}

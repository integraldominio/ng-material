import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends ResourceService<Produto> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'produtos',
      messageService);
  }
}

export class Produto {
  id: number;
  nome: string;
  preco: number;
}

// usando json-server
// npm install -g json-server
// json-server --watch db.json

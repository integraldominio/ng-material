import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';
import { Produto } from '../produto/produto.service';
import { Cliente } from '../cliente/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class FaturaService extends ResourceService<Fatura> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'faturas',
      messageService);
  }
}

export class Fatura {
  id: number;
  cliente: Cliente;
  data: Date;
  itens: Array<Produto>;
}

// usando json-server
// npm install -g json-server
// json-server --watch db.json

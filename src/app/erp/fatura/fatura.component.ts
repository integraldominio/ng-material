import { ClienteService, Cliente } from '../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  clientes: Array<Cliente>;

  constructor( private clienteService: ClienteService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl
      .valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
     this.listarClientes3();
  }

  listarClientes() {
    this.clienteService
    .listAll()
    .subscribe(
       ( data ) => { this.clientes = data; }
    );
  }

  listarClientes2(): Observable<any> {
    return this.clienteService
    .listAll();
  }


  listarClientes3() {
    this.clienteService
    .listAll()
    .subscribe(
      data => {
        this.clientes  = data as Array<Cliente>;
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}

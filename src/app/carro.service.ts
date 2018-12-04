import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { CARROS } from './mock-carros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private messageService: MessageService) { }

  getCarros():  Observable<Carro[]> {
    this.messageService.add('CarroService: Obteniendo carros');
    return of(CARROS);
  }
}

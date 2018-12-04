import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CARROS } from '../mock-carros';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  constructor(private carroService: CarroService) { } 

  title = "Carros";
  carros : Carro[]; 
  selectedCarro: Carro;

  ngOnInit() {
    this.getCarros();
  }

  getCarros(): void {
    this.carroService.getCarros().subscribe(carros => this.carros = carros);
  }
}

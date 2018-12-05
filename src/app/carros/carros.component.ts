import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.carroService.addCarro({ name } as Carro)
                     .subscribe(carro => {
                        this.carros.push(carro);
                     });
  }

  delete(carro: Carro): void {
    this.carros = this.carros.filter(h => h !== carro);
    this.carroService.deleteCarro(carro).subscribe();
  }

}

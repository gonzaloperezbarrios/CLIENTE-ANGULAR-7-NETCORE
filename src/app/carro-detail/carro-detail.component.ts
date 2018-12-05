import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarroService }  from '../carro.service';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carroService: CarroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCarro();
  }
  
  getCarro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carroService.getCarro(id).subscribe(carro => this.carro = carro);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() carro: Carro;

  save(): void {
    this.carroService.updateCarro(this.carro).subscribe(() => this.goBack());
  }

}

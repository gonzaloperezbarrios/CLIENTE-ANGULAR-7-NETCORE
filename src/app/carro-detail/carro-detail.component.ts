import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() carro: Carro;

}

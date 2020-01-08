import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  titulo = 'Bienvenida otra vez!!';
  users = ['agus', 'gabi', 'tati'];
  activated= true;

  constructor() { }

  ngOnInit() {
  }

}

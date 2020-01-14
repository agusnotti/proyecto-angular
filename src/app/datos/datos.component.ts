import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  nombre: string = 'Agustina';
  edad: number;
  direccion:{
    calle: string,
    numero: number
  };
  hobbies: string[];

  constructor(){
    this.edad = 28;
    this.direccion = {
      calle:'yrigoyen',
      numero: 111,
    };
    this.hobbies = ['pintar', 'leer']
  }
  

  ngOnInit() {
  }

}

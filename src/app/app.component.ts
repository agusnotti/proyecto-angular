import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'proyecto-angular';

  nombre: string = 'agustina';
  edad: number = 28;
  
  usuarios: string [] = ['Agustin', 'Gabriela', 'Francisco', 'Federico'];

  posts = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;      
    });
  }

  decirHola(){
    alert('Hola!');
  }

  agregarUsuario(nuevoUsuario){
    this.usuarios.push(nuevoUsuario.value);
    nuevoUsuario.value = '';
    return false;
  }

  borrarUsuario(usuario:string){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(usuario == this.usuarios[i]){
        this.usuarios.splice(i,1);
      }      
    }
  }
  
}


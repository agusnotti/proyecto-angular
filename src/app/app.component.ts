import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'proyecto-angular';

  nombre: string = 'agustina';
  edad: number = 28;
  
  usuarios: string [] = ['Agustin', 'Gabriela', 'Francisco', 'Federico']

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

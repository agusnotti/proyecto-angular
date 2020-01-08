import { Component } from '@angular/core';

@Component({
    selector: 'saludo', //nombre de la etiqueta
    templateUrl: './primer.component.html',
    
    
    /* `
        <div class=hola-mundo>
            <h1>Hola mundo</h1>
            <h1>Hola agus</h1>
        </div>
    `, */
    
    //'<h1>Hola agus</h1>',

    styleUrls: ['./primer.component.css']
    
    
    /* [`.hola-mundo {
        background: #000; 
        color: #fff
        }`
    ] */

})
    
export class Saludo {
    titulo = "Bienvenida a angular";
}
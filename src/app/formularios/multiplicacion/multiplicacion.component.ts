import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './multiplicacion1';

@Component({
  selector: 'app-multiplicacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {
  CalculoDistancia = new Distancia();
  resultado: string = '';


  distanciaForm = new FormGroup({
    x1: new FormControl(''),
    y1: new FormControl(''),
    x2: new FormControl(''),
    y2: new FormControl('')
  });


//multiNumeros():void{
 // let n1=this.formulario.value.numero1;
  //let n2=this.formulario.value.numero2;
  //this.resultado=n1*n2;
//}

  calcular() {
    let { x1, y1, x2, y2 } = this.distanciaForm.value;

    this.CalculoDistancia.x1 = Number(x1);
    this.CalculoDistancia.y1 = Number(y1);
    this.CalculoDistancia.x2 = Number(x2);
    this.CalculoDistancia.y2 = Number(y2);

    const distanciaCalculada = this.CalculoDistancia.calcularDistancia();
    this.resultado = distanciaCalculada.toString();
  }
}

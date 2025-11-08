import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './zodiaco1';

@Component({
  selector: 'app-zodiaco',
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {

   formulario!: FormGroup;
  resultado!: string;
  imagen!: string;
  edad!: number;

  usuario = new Zodiaco();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcular(): void {
    this.usuario.nombre = this.formulario.value.nombre;
    this.usuario.apaterno = this.formulario.value.apaterno;
    this.usuario.amaterno = this.formulario.value.amaterno;
    this.usuario.dia = this.formulario.value.dia;
    this.usuario.mes = this.formulario.value.mes;
    this.usuario.anio = this.formulario.value.anio;
    this.usuario.sexo = this.formulario.value.sexo;


    this.usuario.CalculoZodiaco();

    this.resultado = this.usuario.signo;
    this.imagen = this.usuario.imagen;
    this.edad = this.usuario.edad;
  }
}

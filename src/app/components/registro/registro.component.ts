import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  formularioRegistro: FormGroup;

  constructor() {
    let controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('Martinez Sanchez', []),
      direccion: new FormControl('Av. principal 114', [Validators.required]),
      correo: new FormControl('mizraim.martinezgmail.com', [
        Validators.pattern('^[^@]+@[^@]+.[a-zA-Z]{2,}$'),
      ]),
      becado: new FormControl(true, []),
    };
    this.formularioRegistro = new FormGroup(controles);
  }

  login() {
    console.log(this.formularioRegistro);
    console.log(this.formularioRegistro.controls['correo'].errors);
  }
}

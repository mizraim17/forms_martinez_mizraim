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
      nombre: new FormControl('', [Validators.minLength(5)]),
      apellidos: new FormControl('', []),
      direccion: new FormControl('', [Validators.required]),
      correo: new FormControl(false, [Validators.email]),
      estado: new FormControl(false, []),
    };
    this.formularioRegistro = new FormGroup(controles);
  }

  login() {
    console.log(this.formularioRegistro);
  }
}

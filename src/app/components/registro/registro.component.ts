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
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      becado: new FormControl(true, []),
      contrasena: new FormControl('', [Validators.minLength(4)]),
    };
    this.formularioRegistro = new FormGroup(controles);
  }

  login() {
    // console.log(this.formularioRegistro);
    console.log(this.formularioRegistro.controls['nombre']);
  }
}

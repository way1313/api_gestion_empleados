import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { EmpleadoModel } from '../../models/empleado.model';


declare var M: any;

@Component({
  selector: 'app-empleado.component',
  standalone: false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent implements OnInit {
  constructor(public EmpleadoService: EmpleadoService) {}

  ngOnInit(): void {}

   agregarEmpleado(from?: NgForm) { 
    if (!from || from.invalid) {
      return;
    }

    this.EmpleadoService.postEmpleado(from.value).subscribe(() => {
      
      if (typeof M !== 'undefined') {
        M.toast({html: 'Empleado guardado'});
      }

      from?.reset();
    },
    (err) => {
      console.log(err);
    }
  );

  }
}

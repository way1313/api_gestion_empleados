import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { EmpleadoService } from './services/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-empleados');

}

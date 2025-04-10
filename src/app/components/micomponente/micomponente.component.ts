import { Component } from "@angular/core";
import { MiservicioService } from "../../services/miservicio.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-micomponente',
  imports: [CommonModule, FormsModule],
  templateUrl: './micomponente.component.html',
  styleUrl: './micomponente.component.css'
})
export class MicomponenteComponent { 

  datos: any[] = []; 
  mensaje: String = '';
  nuevoMensaje: string = ''; 
 
  constructor(private miServicio : MiservicioService ) {} 
 
  obtenerMensaje() { 
    this.miServicio.obtenerMensaje().subscribe((data) => { 
      this.datos = data.users; 
      console.log('LOREN' + this.mensaje);
    }); 
  } 

  enviarMensaje() { 
    this.miServicio.enviarMensaje(this.nuevoMensaje).subscribe((respuesta) => { 
      console.log(respuesta); 
      this.mensaje = respuesta; 
    }); 
  } 
} 
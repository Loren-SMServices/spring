import { Component } from "@angular/core";
import { MiservicioService } from "../../services/miservicio.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-micomponente',
  imports: [CommonModule],
  templateUrl: './micomponente.component.html',
  styleUrl: './micomponente.component.css'
})
export class MicomponenteComponent { 

  mensaje: any[] = []; 
  nuevoMensaje: string = ''; 
 
  constructor(private miServicio : MiservicioService ) {} 
 
  obtenerMensaje() { 
    this.miServicio.obtenerMensaje().subscribe((data) => { 
      this.mensaje = data.users; 
      console.log('LOREN' + this.mensaje);
    }); 
  } 

 /* enviarMensaje() { 
    this.miServicio.enviarMensaje(this.nuevoMensaje).subscribe((respuesta) => { 
      console.log(respuesta); 
      this.mensaje = respuesta; 
    }); 
  } */
} 
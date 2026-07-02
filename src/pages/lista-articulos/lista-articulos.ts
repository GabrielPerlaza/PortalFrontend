import { Component, OnInit, inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../core/services/articulo.service';
import {FormArticulosComponent} from '../form-articulos/form-articulos';
import { Articulo } from '../../core/models/articulo.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

 



@Component({
  selector: 'app-lista-articulos',
  imports: [FormArticulosComponent],
  standalone: true,
  templateUrl: './lista-articulos.html',
  styleUrls: ['./lista-articulos.css'],
})
export class ListaArticulosComponent implements OnInit {
  private articuloService = inject(ArticuloService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  ngZone = inject(NgZone);



  articulos: Articulo[] = [];
  articuloVer?: Articulo;
  mostrarModal = false;
  mostrarModalVer = false;
  articuloSeleccionado?: Articulo;

  

  ngOnInit(): void {
    console.log('NG ON INIT');
    this.cargarArticulos();
  }

abrirModal(): void {
  this.articuloSeleccionado = undefined;
  this.mostrarModal = true;
}

cerrarModal(): void {
  this.mostrarModal = false;
}

cargarArticulos(): void {

  this.articuloService.lista().subscribe({

    next: (respuesta) => {

  
      console.log(this.articulos);

      console.log(respuesta);

      this.articulos = respuesta.value;
      this.cdr.detectChanges();

    },

    error: (error) => {

      console.error(error);

    }

  });

}

guardarArticulo(articulo: Articulo): void {

  if (articulo.idArticulo) {

    this.articuloService.editar(articulo).subscribe({

      next: () => {

        this.cargarArticulos();
        this.cerrarModal();
            Swal.fire({
            icon: 'success',
            title: '¡Cambios guardados!',
            text: 'El artículo fue actualizado correctamente.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#198754'
          });
        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(error);

      }

    });

  } else {

    this.articuloService.crear(articulo).subscribe({

      next: () => {

        this.cargarArticulos();

        this.cerrarModal();

        this.cdr.detectChanges();

        Swal.fire({
          icon: 'success',
          title: '¡Artículo creado!',
          text: 'El artículo se creó correctamente.',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#198754'
    });
      },
      error: (error) => {

        console.error(error);

        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'No fue posible completar la operación.',
          confirmButtonColor: '#dc3545'
        });

      }   
    });

  }

}

 async eliminarArticulo(id: string): Promise<void> {
 
  const resultado = await Swal.fire({
          title: '¿Eliminar artículo?',
          text: 'Esta acción no se puede deshacer.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#dc3545',
          cancelButtonColor: '#6c757d',
          reverseButtons: true
        });

  this.articuloService.eliminar(id)
    .subscribe({

      next: async () => {

        if(resultado.isConfirmed){

          Swal.fire({
          icon: 'success',
          title: 'Artículo eliminado',
          text: 'El artículo fue eliminado correctamente.',
          confirmButtonColor: '#198754'
        });

          }

          this.cargarArticulos();
      },

      error: (error) => {

        console.error(error);

        alert('Error al eliminar');

        Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'No fue posible completar la operación.',
        confirmButtonColor: '#dc3545'
      });

      }

    });

}

editarArticulo(articulo: Articulo): void {
  
  this.articuloService.obtener(articulo.idArticulo)
    .subscribe({
      next: (respuesta) => {        
        if (respuesta.status) {
          this.mostrarModal = true;
          this.articuloSeleccionado = JSON.parse(JSON.stringify(respuesta.value));      
          this.cdr.detectChanges();      
        }

      },

      error: (error) => {

        console.error(error);

        Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'No fue posible completar la operación.',
        confirmButtonColor: '#dc3545'
      });

      }

    });

}


abrirNuevo(): void {

  this.articuloSeleccionado = undefined;

  this.mostrarModal = true;


}

verArticulo(articulo: Articulo): void {

  this.articuloService.obtener(articulo.idArticulo)
    .subscribe({

      next: (respuesta) => {

        if (respuesta.status) {

          this.articuloVer = respuesta.value;

          this.mostrarModalVer = true;

          this.cdr.detectChanges();

        }

      },

      error: (error) => {

        console.error(error);

            Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un error',
      text: 'No fue posible completar la operación.',
      confirmButtonColor: '#dc3545'
    });

      }

    });

}

cerrarModalVer(): void {

  this.mostrarModalVer = false;

}





}

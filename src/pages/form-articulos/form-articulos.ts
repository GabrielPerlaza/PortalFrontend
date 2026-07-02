import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, ChangeDetectorRef, NgZone } from '@angular/core';
import { Articulo } from '../../core/models/articulo.model';
import { inject } from '@angular/core';
import { ArticuloService } from '../../core/services/articulo.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-articulos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-articulos.html',
  styleUrls: ['./form-articulos.css'],
})
export class FormArticulosComponent implements OnInit {


   @Input() articuloEditar?: Articulo;
   @Output() guardar = new EventEmitter<Articulo>();

   articuloService = inject(ArticuloService);
   private cdr = inject(ChangeDetectorRef);
   private ngZone = inject(NgZone);

   articulo: Articulo = {
    idArticulo: '',
    titulo: '',
    slug: '',
    resumen: '',
    contenido: '',
    imagenPortada: '',
    publicado: false,
    fechaCreacion: new Date()
  };
  imagenSubida: boolean = false;

  ngOnInit(): void {
    if (this.articuloEditar) {

      this.articulo = {
        ...this.articuloEditar
  }
    }
  }

 ngOnChanges(changes: SimpleChanges): void { 
   if (changes['articuloEditar']?.currentValue && !this.imagenSubida) { 
        this.articulo = { ...changes['articuloEditar'].currentValue };
    } 
}

guardarArticulo(): void {

  console.log(this.articulo);
  console.log('Articulo completo:', this.articulo);
  this.guardar.emit(this.articulo);
  

}


async onArchivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    const archivo = input.files?.[0];

    if (archivo) {
       await this.articuloService.subirImagen(archivo).subscribe(resp => {
            this.ngZone.run(() => {
                if (resp.status) {
                    this.imagenSubida = true;
                    this.articulo = { ...this.articulo, imagenPortada: resp.value }
                    this.cdr.markForCheck();
                    this.cdr.detectChanges();
                }
            });
        });
    }
}
}



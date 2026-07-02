export interface Articulo {
  idArticulo: string;
  titulo: string;
  slug: string;
  resumen: string;
  contenido: string;
  imagenPortada?: string;
  publicado: boolean;
  fechaCreacion: Date;
}
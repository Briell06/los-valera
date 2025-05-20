export type Theme = "light" | "dark";
export interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  precio: number;
}

export type Theme = "light" | "dark";

export interface Combo {
  id: number;
  items: Item[];
  nombre: string;
  precio: number;
  imagen: string;
}

export interface Item {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

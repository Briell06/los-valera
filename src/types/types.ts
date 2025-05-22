export type Theme = "light" | "dark";

export interface Combo {
  id: number;
  items: Item[];
  nombre: string;
  precio: string;
}

export interface Item {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  created_at: Date;
  updated_at: Date;
}

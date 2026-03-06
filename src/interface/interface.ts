export interface Movimiento {
  montoIngreso: number;
  montoGasto: number;
  categoria: string;
  descripcion: string;
  fecha: string;
}

export interface MovimientosContextInterface {
  movimientos: Movimiento[];
  agregarMovimiento: (movimiento: Movimiento) => void;
}

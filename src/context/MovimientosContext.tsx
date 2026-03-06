import { createContext, ReactNode, useContext, useEffect, useState, } from "react";
import { Movimiento, MovimientosContextInterface, } from "../interface/interface";

const MovimientosContext = createContext<MovimientosContextInterface | null>(null);

export const MovimientosProvider = ({ children }: { children: ReactNode }) => {
  const [movimientos, setMovimientos] = useState<Movimiento[]>(() => {
    const data = localStorage.getItem("movimientos");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
  }, [movimientos]);

  const agregarMovimiento = (movimiento: Movimiento) => {
    setMovimientos((prev) => [...prev, movimiento]);
  };

  return (
    <MovimientosContext.Provider value={{ movimientos, agregarMovimiento }}>
      {children}
    </MovimientosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovimientos = () => {
  const context = useContext(MovimientosContext);
  if (!context)
    throw new Error("useMovimientos debe usarse dentro del provider");

  return context;
};

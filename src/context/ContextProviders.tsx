import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovimientosProvider } from "./MovimientosContext";

const queryClient = new QueryClient();

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MovimientosProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MovimientosProvider>
  );
};

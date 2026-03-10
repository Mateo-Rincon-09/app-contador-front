import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MovimientosProvider } from "./MovimientosContext";
import UserContextProvider from "./UserContext";

const queryClient = new QueryClient();

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <MovimientosProvider>
          {children}
        </MovimientosProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

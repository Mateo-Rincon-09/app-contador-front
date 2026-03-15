import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContextProvider from "./UserContext";
import MovimientosContextProvider from "./MovimientosContext";

const queryClient = new QueryClient();

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <MovimientosContextProvider>
          {children}
        </MovimientosContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

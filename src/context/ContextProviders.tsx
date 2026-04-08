import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContextProvider from "./UserContext";
import MovimientosContextProvider from "./TransactionContext";
import SavingsContextProvider from "./SavingContext";


const queryClient = new QueryClient();

export const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <MovimientosContextProvider>
          <SavingsContextProvider>
            {children}
          </SavingsContextProvider>
        </MovimientosContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
};

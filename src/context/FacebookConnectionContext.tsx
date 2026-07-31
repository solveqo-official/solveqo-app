import { createContext, ReactNode, useContext, useState } from 'react';

type FacebookConnectionContextValue = {
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
};

const FacebookConnectionContext = createContext<FacebookConnectionContextValue | null>(null);

export function FacebookConnectionProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);

  return (
    <FacebookConnectionContext.Provider
      value={{
        connected,
        connect: () => setConnected(true),
        disconnect: () => setConnected(false),
      }}
    >
      {children}
    </FacebookConnectionContext.Provider>
  );
}

export function useFacebookConnection() {
  const context = useContext(FacebookConnectionContext);
  if (!context) {
    throw new Error('useFacebookConnection must be used within FacebookConnectionProvider');
  }
  return context;
}

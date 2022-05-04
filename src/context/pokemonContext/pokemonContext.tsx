import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";

import apiReducer, { initialState } from "./pokemonReducer";
import { Dispatch, State } from "./pokemonTypes";

interface ApiProviderProps {
  children: ReactNode;
}

const ApiContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function ApiProvider({ children }: ApiProviderProps) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within a ApiProvider");
  }
  return context;
};

export { ApiProvider as PokemonProvider, useApi as usePokemon };

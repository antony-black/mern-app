import { createContext, useEffect, useState } from "react";
import Store from "../store/store";

const store = new Store();

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
}

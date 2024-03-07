"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface MenuContextProps {
  menubar: boolean | undefined;
  setMenubar: Dispatch<SetStateAction<boolean | undefined>>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface ProvideContextProps {
  children: ReactNode;
}

export function ProvideContext({ children }: ProvideContextProps) {
  const [menubar, setMenubar] = useState<boolean | undefined>(false);
  const menus: MenuContextProps = {
    menubar: menubar,
    setMenubar: setMenubar,
  };

  return <MenuContext.Provider value={menus}>{children}</MenuContext.Provider>;
}

export function useProvideContext() {
  const context = useContext(MenuContext);
  return context;
}

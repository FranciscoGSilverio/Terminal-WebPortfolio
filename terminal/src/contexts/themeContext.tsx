import React, { createContext, useState } from "react";

interface ThemeTypes {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeTypes | null>(null);

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dracula");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

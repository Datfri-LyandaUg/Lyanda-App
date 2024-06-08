import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState(systemColorScheme);
    

    useEffect(() => {
      if (theme === 'system') {
        setTheme(systemColorScheme);
      }
    }, [systemColorScheme, theme]);
  
    const toggleTheme = (selectedTheme) => {
      if (selectedTheme === 'system') {
        setTheme(systemColorScheme);
      } else {
        setTheme(selectedTheme);
      }
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
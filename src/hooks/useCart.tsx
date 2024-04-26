import React, { createContext, useContext, useState } from 'react';

// Define the types for your theme



interface Theme {
  background: string;
  color: string;
}

// Define the types for the theme context
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create a theme context with initial values
const ThemeContext = createContext

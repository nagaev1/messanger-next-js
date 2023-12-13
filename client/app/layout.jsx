"use client"
import { Inter } from 'next/font/google'
import './globals.css'

import { useState } from 'react';

import Nav from './components/layouts/nav';

import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
        <CssBaseline />
        <Nav onThemeClick={() => setDarkMode(!darkMode)} />
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}

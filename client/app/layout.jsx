"use client"
import { Inter } from 'next/font/google'
import './globals.css'

import { useState, useEffect } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Nav from './components/layouts/nav';

import { parseCookies, setCookie, destroyCookie } from 'nookies'

import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {
    const cookies = parseCookies()
    const theme = cookies.theme === 'true'
    if (theme !== darkMode) {
      setDarkMode(theme)
    }
  }, []);

  useEffect(() => {
    setCookie(null, 'theme', JSON.stringify(darkMode), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }, [darkMode]);

  


  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Nav onThemeClick={() => setDarkMode(!darkMode)} />
        {children}
        <Analytics />
        <SpeedInsights />
        </ThemeProvider>
        
      </body>
    </html>
  )
}

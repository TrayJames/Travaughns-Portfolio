import { useState } from 'react'
import React from 'react'
import { motion } from "framer-motion";
import './index.css'
import { ThemeProvider } from "../components/theme-provider"

import Hero from '../components/Hero'


function App() {
  return (
     <ThemeProvider defaultTheme="white" storageKey="vite-ui-theme">
        <Hero/>
    </ThemeProvider>
  )
}

export default App

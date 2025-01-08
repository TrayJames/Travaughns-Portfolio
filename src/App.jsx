import { useState } from 'react'
import React from 'react'
import { motion } from "framer-motion";
import './index.css'
import { ThemeProvider } from "../components/theme-provider"

import Hero from '../components/Hero'
import Grid from '../components/Grid';
import RecentProjects from '../components/RecentProjects';
import Footer from '../components/Footer';


function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Hero />
        <main className="relative bg-zinc-50 dark:bg-zinc-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <Grid />
            <RecentProjects />
            <Footer />
          </div>
        </main>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import { motion } from "framer-motion"


const MainLayout = ({children}) => {
  return (
    <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:0.5 }}
        >
          <Header/>
        </motion.div>
        {children}
        <Footer/>
    </div>
  )
}

export default MainLayout
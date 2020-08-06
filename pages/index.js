import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import ReactDOM from "react-dom";
import { AnimatedText } from "./AnimatedText";
import Mission from './Mission';
import Navbar from './Navbar';


export default function Home() {
  

 

  return (
   
    <div>
      <Head>
        <title>J Hunter Advertising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      

      <main className={styles.main}>
      
        
        
        <AnimatedText
        textColor="lightblue"
        overlayColor="grey"
      >
        J Hunter Advertising
      </AnimatedText>
      
      <Mission />
      <br />
      <br />
      <img src="./header-jhunter.jpg" />
        
       </main>
    </div>
  )
}

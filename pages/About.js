import React from 'react'
import NavBar from './Navbar'
import Head from 'next/head'
import styles from '../styles/Mission.module.css'






function About() {
    return (
        <div>
        <Head>
        <title>About | J Hunter Advertising</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
  
            <NavBar />
            <br />
            <br />
            <br />
            <h1 className={styles.container}>About J Hunter Advertising</h1>
            <p className={styles.missionText}>
                
                <br />
                Our company prides itself on it's ability to manage our client's advertising needs with the utmost
                 priority to time and cost savings. <br />A vision of the future that leverages technology while relying on solid strategic 
                 thinking and perception skills. <br />We work with organizations to address their recruitment advertising needs or 
                 assisting with their web and social strategies.</p>
                 <img className={styles.people} src="/people.jpg" alt="people" />

        </div>
    )
}

export default About

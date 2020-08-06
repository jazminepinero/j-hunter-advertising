import React from 'react'
import styles from '../styles/Mission.module.css'
import Navbar from './Navbar'
import Link from 'next/link'


function Mission() {
    return (
        
        <div className={styles.container}>
            <Navbar />
            <br />
            <br />
            <br />
            <h1>We'll save you time & money 💰</h1>
            <p className={styles.missionText}>At J Hunter Advertising, we specialize in writing, placing, and managing all recruitment ads for job boards.
                <br />
                Our primary focus being human resource professionals that run their department soley for a small or medium sized company or organization.
            </p>
            <h2 className={styles.missionText}>Sound like your perfect fit? Have more questions? <br />
            We would love to chat with you. <br />
             <Link href="/ContactUs"><a>Contact us</a></Link> </h2>
        </div>
    )
}

export default Mission

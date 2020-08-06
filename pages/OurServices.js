import React from 'react'
import NavBar from './Navbar'
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/core";
  import styles from '../styles/Mission.module.css'
import Link from 'next/link'
import Head from 'next/head'


function OurServices() {
    return (
        <div>
        <Head>
        <title>Our Services | J Hunter Advertising</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
            <NavBar />
            <br />
            <br />
            <br />
            <h1>Our Services</h1>
            <h4>At J Hunter Advertising you can expect high quality services at an affordable price. Below is a list of the services we provide</h4>
<AccordionItem>
  <AccordionHeader _expanded={{ bg: "lightblue", color: "white" }} allowToggle>
    <Box flex="1" textAlign="center">
      <h4>Personnel Management</h4>
    </Box>
    <AccordionIcon />
  </AccordionHeader>
  <AccordionPanel textAlign="center" className={styles.missionText}>
    <li>Resumes</li>
    <li>Exit Interviews</li>
    <li>Retention Analysis</li>
  </AccordionPanel>
</AccordionItem>
<AccordionItem>
  <AccordionHeader _expanded={{ bg: "lightblue", color: "white" }} allowToggle>
    <Box flex="1" textAlign="center">
     <h4>Web Services</h4>
    </Box>
    <AccordionIcon />
  </AccordionHeader>
  <AccordionPanel textAlign="center" className={styles.missionText}>
  <li>Domain Registration & Setup </li>
  <li>Web Design</li>
  <li>SEO (search engine optimization)</li>
  <li>Pay-per-click programs</li>
  <li>Stand-alone employment pages</li>
  <li>Building Shopify Store</li>
  <li>Career Pages</li>
  </AccordionPanel>
</AccordionItem>
<h4 className={styles.missionText}>Learn more about us <Link href="/Pricing"><a>here</a></Link></h4>
        </div>
    )
}

export default OurServices


///4 or 5 simple pages

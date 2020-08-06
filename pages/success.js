import React from 'react'
import NavBar from './Navbar'
import styles from '../styles/Mission.module.css'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/core";
  import Link from 'next/link'


export default function Success() {
    return(

     <div>
         <NavBar />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <Alert
  status="success"
  variant="subtle"
  flexDirection="column"
  justifyContent="center"
  textAlign="center"
  height="200px"
>
  <AlertIcon size="40px" mr={0} />
  <AlertTitle mt={4} mb={1} fontSize="lg">
    Contact form submitted! 
  </AlertTitle>
  <AlertDescription maxWidth="sm">
  Please expect 1-3 business days for a reply via email from jhunter@jhunteradv.com<br />
  <Link href="/">Back to Home</Link>
  </AlertDescription>
</Alert>

</div>
    )  
  
    }
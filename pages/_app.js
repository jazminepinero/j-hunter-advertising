import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps, router }) {

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };



  return (
  <ThemeProvider>
  <AnimatePresence>
  <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            id="page-transition-container"
          >
  <Component {...pageProps} key={router.pathname} />
  </motion.div>
  </div>
  </AnimatePresence>
  </ThemeProvider>
  )
}

export default MyApp

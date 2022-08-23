import { useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import 'bootstrap/dist/css/bootstrap.css'; // Add this line
// import '../styles/personalBrand.scss'
// import '../styles/therapym4.scss'
import '../styles/mobirise-icons.css'
import '../styles/socicon.css'
import '../styles/style.css'
import '../styles/style1.css'
import '../styles/mbr-additional.css'
import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.js");
},[])

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp

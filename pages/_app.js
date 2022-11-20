import { useEffect,useState } from "react";
import { ParallaxProvider } from 'react-scroll-parallax'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import '../styles/mbr-additional.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/mobirise-icons.css'
import '../styles/socicon.css'
import '../styles/style.css'
import '../styles/style1.css'
import '../styles/globals.scss'
import '../styles/spinner.scss'



function MyApp({ Component, pageProps }) {

  const [firstEnter, setFirstEnter] = useState(true)

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.js");

},[])

  return (
    <ParallaxProvider>
      <Component {...pageProps} firstEnter={firstEnter} setFirstEnter={setFirstEnter} />
    </ParallaxProvider>
  )
}

export default MyApp

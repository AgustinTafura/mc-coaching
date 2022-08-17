import { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
// import '../styles/personalBrand.scss'
// import '../styles/therapym4.scss'
import '../styles/mbr-additional.css'
// import '../styles/mobirise-icons.css'
import '../styles/style.css'
import '../styles/style1.css'
import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.js");
},[])

  return <Component {...pageProps} />
}

export default MyApp

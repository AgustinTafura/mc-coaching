import { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

  return <Component {...pageProps} />
}

export default MyApp

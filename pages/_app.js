import Script from "next/script"
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
import '../styles/spinner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {

  const [firstEnter, setFirstEnter] = useState(true)

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.js");

},[])

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-25SMY81P1F"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-25SMY81P1F', {
      page_path: window.location.pathname,
      });
      `,
      }}
      />
      <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '4978185172206246');
        fbq('track', 'PageView');        
        `,
      }}
      />
      <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"></link>
      <ParallaxProvider>
        <Component {...pageProps} firstEnter={firstEnter} setFirstEnter={setFirstEnter} />
      </ParallaxProvider>
    </>
  )
}

export default MyApp

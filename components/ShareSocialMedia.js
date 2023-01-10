
import { FacebookIcon, FacebookShareButton, TwitterIcon, WhatsappIcon, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';


const ShareSocialMedia = ({...pageProps}) => {
const router = useRouter()
const [url, setUrl] = useState('https://www.marcelacaputo.com.ar')

  useEffect(() => {
    setUrl(window.location.href)
      return () => {    
    }
  }, [])
  
  return (
      <span className='px-2 text-center'>
        <span className='pe-1 text-center text-white'>Compartir en </span>
        <FacebookShareButton url={url} className='pe-1'>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} className='pe-1'>
          <WhatsappIcon size={32} round={true}/>
        </WhatsappShareButton>   
        <TwitterShareButton url={url} className='pe-1'>
          <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>          
      </span>
  )
}

export default ShareSocialMedia

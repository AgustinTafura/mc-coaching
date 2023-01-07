import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleChevronUp} from '@fortawesome/free-solid-svg-icons'
// import {faCircleChevronUp} from '@fortawesome/free-regular-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";

const BubbleScrollTo = ({...pageProps}) => {
  const { itemId} = pageProps
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const displayBubble = () => {
      const ItemTarget = document.querySelector(`#${itemId}`)

      if (window.scrollY >= ItemTarget.offsetTop) {
        setOpacity(0.8)
      } else {
        setOpacity(0)
      }
    }
    window.addEventListener('scroll', displayBubble);
    return () => {
      window.removeEventListener('scroll', displayBubble);
    }
  }, [])
  
    const contactphone = 5492244408516

  return (

          <FontAwesomeIcon icon={faCircleChevronUp} size="3x" color='rgb(166 167 104 / 0.7)' 
          style={{cursor: 'pointer',position: "fixed",bottom: "5rem",float:'right', right: "1.3rem", transition: "opacity 0.8s", opacity, zIndex:'100'}} id="bubbleScrollTo" className=''
        onClick={()=>document.querySelector(`#${itemId}`).scrollIntoView(true)}
        onMouseOver={()=> setOpacity(1) }
        onMouseOut={()=> setOpacity(0.8) }
          />
  )
}

export default BubbleScrollTo

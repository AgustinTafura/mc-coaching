import { useEffect, useState } from "react";
import { InlineWidget  } from "react-calendly";

const Booking = (props) => {
    const url = 'https://calendly.com/marcelacaputo/sesion-gratuita?back=1'
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })
    const styles = {
        minWidth: '360px',
        height: windowSize?.width < 1200 ? '1235px': '750px',
        overflow: 'hidden',
    }


    useEffect(()=> {

        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div  style={{paddingTop: "6.875rem"}}>
            <div  className="container pt-5" style={{textAlign:"center"}}>
                <InlineWidget
                    id="calendly-booking"
                    url={url}   
                    styles={styles}
                    prefill={{}}
                />
            </div> 
        </div>
    )
}

export default Booking
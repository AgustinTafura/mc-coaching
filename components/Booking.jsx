import { InlineWidget  } from "react-calendly";

const Booking = (props) => {
    const url = 'https://calendly.com/marcelacaputo/sesion-gratuita?back=1'
    console.log(url)
    
    const styles = {
        minWidth: '360px',
        height: '1235px',
        overflow: 'hidden',
        '@media (min-width: 1200px)': {
          height: '750px',      
        }
    }

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
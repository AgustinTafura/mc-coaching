import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { testimonials } from "../data";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

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

    const settings = {
    dots: true,
    infinite: true,
    arrows: windowSize?.width < 768 ? false : true,
    // slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
      };

    return (
        <section className="cid-rT0gH1spU6 my-5">
            <div className="container text-center ">
                <Slider {...settings}>
                    {
                        testimonials.map((testimonial, key)=>{
                            return (
                                <div key={key} className="carousel-item d-flex pb-4">
                                    <div className="user col-md-10">
                                        <div className="card-img pb-3 ">
                                        <FontAwesomeIcon icon={faQuoteRight} size="3x" color='var(--bs-secondary)'/>
                                        </div>
                                        <div className="">
                                            <div className="user_text">
                                                <p className="mbr-fonts-style mbr-regular display-55">
                                                    {testimonial[0]}</p>
                                            </div>
                                            <h4 className="user_name mbr-section-subtitle display-44 w-100 align-self-end">
                                                {testimonial[1]}
                                                <br />
                                                <br />  
                                                {testimonial[2]}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials
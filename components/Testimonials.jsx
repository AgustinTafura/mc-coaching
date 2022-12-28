import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {

    const settings = {
    dots: true,
    infinite: true,
    // arrows: true,
    // slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true,
      };

    return (
        <section className="cid-rT0gH1spU6 my-5">
            <div className="container text-center ">
                <Slider {...settings}>
                    <div className="carousel-item d-flex pb-4">
                        <div className="user col-md-10 col-lg-8">
                            <div className="card-img pb-3">
                            <FontAwesomeIcon icon={faQuoteRight} size="3x" color='var(--bs-secondary)'/>
                            </div>
                            <div className="user_text pb-2">
                                <p className="mbr-fonts-style mbr-regular display-55">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus
                                    ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
                            </div>
                            <h4 className="user_name mbr-section-subtitle display-44">PETER
                                RONSON
                            </h4>
                        </div>
                    </div>
                    <div className="carousel-item d-flex pb-4">
                        <div className="user col-md-10 col-lg-8">
                            <div className="card-img pb-3">
                                <span className="mbr-iconfont mobi-mbri-quote-right mobi-mbri"></span>
                            </div>
                            <div className="user_text pb-2">
                                <p className="mbr-fonts-style mbr-regular display-55">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus
                                    ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
                            </div>
                            <h4 className="user_name mbr-section-subtitle mbr-regular mbr-fonts-style display-44">PETER
                                RONSON
                            </h4>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Testimonials
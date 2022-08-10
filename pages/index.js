import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

const index = () => {
  return (
	<>
      <Head>
        <title>Marcela Caputo Coaching</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

		<Layout>
		{/* <!-- start banner Area --> */}
		<section className="banner-area relative" id="home">
			<div className="overlay overlay-bg"></div>
			<div className="container-fluid">
				<div className="row fullscreen d-flex align-items-center justify-content-between">
					<div className="col-lg-6 col-md-6 banner-img">
						<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/banner-img.png" alt=""/>
					</div>
					<div className="banner-content col-lg-6 col-md-6">
						<h1 className="text-uppercase">
							<span>YogaFlex</span> to <br/> Shape your body
						</h1>
						<a href="#" className="primary-btn mt-40">Become a Member</a>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End banner Area --> */}

		{/* <!-- Start About Us Area --> */}
		<section className="about-area section-gap">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-12">
						<div className="section-title-wrap text-center">
							<h1>How Yogaflex can change your life</h1>
							<p>As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
						</div>
					</div>
				</div>

				<div className="row justify-content-between align-items-center">
					<div className="col-lg-6 about-right">
						<div className="row">
							<div className="col-lg-6">
								<div className="single-about">
									<h4>Why Choose Us</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam.
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="single-about">
									<h4>Our Properties</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam.
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="single-about">
									<h4>Legal Notice</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam.
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="single-about">
									<h4>Legal Notice</h4>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
										Ut enim ad minim veniam.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 about-left">
						<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/about-img.png" alt=""/>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End About Us Area --> */}

		{/* <!-- Start Features Area --> */}
		<section className="feature-area section-gap">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-12">
						<div className="section-title-wrap text-center">
							<h1>Our Featured Classes</h1>
							<p>As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center d-flex align-items-center">
					<div className="col-lg-6 col-md-6 single-feature">
						<figure>
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/featured-className/f1.jpg" alt=""/>
							<div className="overlay overlay-bg"></div>
						</figure>
						<div className="text-center">
							<h4 className="mb-10">Get into shape now</h4>
							<p>
								<a href="#">Book an appointment</a>
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 single-feature">
						<figure>
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/featured-className/f2.jpg" alt=""/>
							<div className="overlay overlay-bg"></div>
						</figure>
						<div className="text-center">
							<h4 className="mb-10">Get into shape now</h4>
							<p>
								<a href="#">Book an appointment</a>
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 single-feature">
						<figure>
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/featured-className/f3.jpg" alt=""/>
							<div className="overlay overlay-bg"></div>
						</figure>
						<div className="text-center">
							<h4 className="mb-10">Get into shape now</h4>
							<p>
								<a href="#">Book an appointment</a>
							</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 single-feature">
						<figure>
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/featured-className/f4.jpg" alt=""/>
							<div className="overlay overlay-bg"></div>
						</figure>
						<div className="text-center">
							<h4 className="mb-10">Get into shape now</h4>
							<p>
								<a href="#">Book an appointment</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End Features Area --> */}

		{/* <!-- Start schedule Area --> */}
		<section className="schedule-area section-gap">
			<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="featured-img img-fluid" src="/img/featured-className/feature-img.png" alt=""/>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-12">
						<div className="section-title-wrap text-center">
							<h1>Schedule your Fitness Process</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="table-wrap col-lg-10">
						<table className="schdule-table table table-bordered">
							<thead className="thead-light">
								<tr>
									<th className="head" scope="col">Course name</th>
									<th className="head" scope="col">mon</th>
									<th className="head" scope="col">tue</th>
									<th className="head" scope="col">wed</th>
									<th className="head" scope="col">thu</th>
									<th className="head" scope="col">fri</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th className="name" scope="row">Fitness Aero</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th className="name" scope="row">Senior Fitness</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th className="name" scope="row">Fitness Aero</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th className="name" scope="row">Senior Fitness</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th className="name" scope="row">Senior Fitness</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th className="name" scope="row">Senior Fitness</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End schedule Area --> */}

		{/* <!-- Start testomial Area --> */}
		<section className="testomial-area section-gap">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-12">
						<div className="section-title-wrap text-center">
							<h1>Client’s Feedback</h1>
							<p>As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="active-testimonial-carusel">
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t1.png" alt=""/>
							<p className="desc">
								Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector,
								hardware and more. laptop accessory
							</p>
							<h4>Helena Phillips</h4>
							<p>
								CEO at Facebook
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t2.png" alt=""/>
							<p className="desc">
								It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has
								been achieving great heights so far as its.
							</p>
							<h4>Cordelia Barton</h4>
							<p>
								CEO at Twitter
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t3.png" alt=""/>
							<p className="desc">
								About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. 11% of all
								adult internet users visit dating websites.
							</p>
							<h4>Carrie Reese</h4>
							<p>
								CEO at Google
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t1.png" alt=""/>
							<p className="desc">
								Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector,
								hardware and more. laptop accessory
							</p>
							<h4>Helena Phillips</h4>
							<p>
								CEO at Facebook
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t2.png" alt=""/>
							<p className="desc">
								It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has
								been achieving great heights so far as its.
							</p>
							<h4>Cordelia Barton</h4>
							<p>
								CEO at Twitter
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t3.png" alt=""/>
							<p className="desc">
								About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. 11% of all
								adult internet users visit dating websites.
							</p>
							<h4>Carrie Reese</h4>
							<p>
								CEO at Google
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t1.png" alt=""/>
							<p className="desc">
								Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector,
								hardware and more. laptop accessory
							</p>
							<h4>Helena Phillips</h4>
							<p>
								CEO at Facebook
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t2.png" alt=""/>
							<p className="desc">
								It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has
								been achieving great heights so far as its.
							</p>
							<h4>Cordelia Barton</h4>
							<p>
								CEO at Twitter
							</p>
						</div>
						<div className="single-testimonial item">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="mx-auto rounded-circle" src="/img/t3.png" alt=""/>
							<p className="desc">
								About 64% of all on-line teens say that do things online that they wouldn’t want their parents to know about. 11% of all
								adult internet users visit dating websites.
							</p>
							<h4>Carrie Reese</h4>
							<p>
								CEO at Google
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End testomial Area --> */}

		{/* <!-- Start cta-one Area --> */}
		<section className="cta-one-area relative section-gap">
			<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="cta-img img-fluid" src="/img/cta-img.png" alt=""/>
			<div className="container">
				<div className="row justify-content-center">
					<div className="wrap">
						<h1>Huge Transaction in last Week</h1>
						<p>
							Thinking about overseas adventure travel? Have you put any thought into the best places to go when it comes to overseas adventure
							travel?
						</p>
						<a className="primary-btn" href="#">Become a Member</a>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End cta-one Area --> */}

		{/* <!-- Start blog Area --> */}
		<section className="blog-area section-gap">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-lg-12">
						<div className="section-title-wrap text-center">
							<h1>Our Recent Blogs</h1>
							<p>As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12 single-blog">
						<div className="thumb">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/b1.jpg" alt=""/>
						</div>
						<a href="single-blog.html"><h4>Portable Fashion for women</h4></a>
						<div className="text-wrap">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud.
							</p>
						</div>
						<div className="meta-bottom d-flex">
							<p><span className="lnr lnr-calendar-full"></span> 13th Dec</p>
							<p><span className="lnr lnr-heart"></span> 15</p>
							<p><span className="lnr lnr-bubble"></span> 02</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 single-blog">
						<div className="thumb">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/b2.jpg" alt=""/>
						</div>
						<a href="single-blog.html"><h4>Summer ware are coming</h4></a>
						<div className="text-wrap">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud.
							</p>
						</div>
						<div className="meta-bottom d-flex">
							<p><span className="lnr lnr-calendar-full"></span> 13th Dec</p>
							<p><span className="lnr lnr-heart"></span> 15</p>
							<p><span className="lnr lnr-bubble"></span> 02</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 single-blog">
						<div className="thumb">
							<Image width='100%' height='100%'layout='responsive' objectFit='contain' className="img-fluid" src="/img/b3.jpg" alt=""/>
						</div>
						<a href="single-blog.html"><h4>Summer ware are coming</h4></a>
						<div className="text-wrap">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud.
							</p>
						</div>
						<div className="meta-bottom d-flex">
							<p><span className="lnr lnr-calendar-full"></span> 13th Dec</p>
							<p><span className="lnr lnr-heart"></span> 15</p>
							<p><span className="lnr lnr-bubble"></span> 02</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End blog Area --> */}

		{/* <!-- start footer Area --> */}
		<footer className="footer-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-3  col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h4>About Us</h4>
							<p>
								The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as
								three of the magnificent & awe inspiring.
							</p>
						</div>
					</div>
					<div className="col-lg-4  col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h4>Contact Us</h4>
							<p>
								56/8, rockybeach road, santa monica, Los angeles, California - 59620.
							</p>
							<p className="number">
								012-6532-568-9746 <br/> 012-6532-569-9748
							</p>
						</div>
					</div>
					<div className="col-lg-5  col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h4>Newsletter</h4>
							<p>You can trust us. we only send offers, not a single spam.</p>
							<div className="d-flex flex-row" id="mc_embed_signup">

								{/* <form className="navbar-form" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
				method="get">
									<div className="input-group add-on align-items-center d-flex">
										<input className="form-control" name="email" placeholder="Your Email address" on-focus="this.placeholder = ''" on-blur="this.placeholder = 'Your Email address'"
										required="" type="email"/>
										<div style={{position: 'absolute', left: '-5000px'}}>
											<input name="b_36c4fd991d266f23781ded980_aefe40901a" tab-index="-1" value="" type="text"/>
										</div>
										<div className="input-group-btn">
											<button className="genric-btn"><span className="lnr lnr-arrow-right"></span></button>
										</div>
									</div>
									<div className="info mt-20"></div>
								</form> */}
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom row align-items-center">
					<div className="col-lg-6 col-sm-12 footer-social">
						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-dribbble"></i></a>
						<a href="#"><i className="fa fa-behance"></i></a>
					</div>
				</div>
			</div>
		</footer>
		{/* <!-- End footer Area --> */}
		</Layout>
	</>

  )
}

export default index

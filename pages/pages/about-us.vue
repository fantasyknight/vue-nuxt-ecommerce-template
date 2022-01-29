<template>
	<main class="main about-us">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>About Us</li>
				</ul>
			</div>
		</nav>

		<div
			class="page-header pl-4 pr-4"
			style="background-image: url( ./images/page-header/about-us.jpg ); background-color: #4f7cdd"
		>
			<h3 class="page-subtitle font-weight-bold">Welcome to Riode</h3>
			<h1 class="page-title font-weight-bold lh-1 text-white text-capitalize">Our Services</h1>
			<p class="page-desc text-white mb-0">Lorem quis bibendum auctor, nisi elit consequat ipsum,<br /> nec sagittis sem nibh id elit.</p>
		</div>

		<div class="page-content mt-10 pt-10">
			<section
				class="about-section pb-10 appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-4 mb-10 mb-lg-4">
							<h5 class="section-subtitle lh-2 ls-md font-weight-normal">01. What We Do</h5>
							<h3 class="section-title lh-1 font-weight-bold">Provide perfect and practical services
							</h3>
							<p class="section-desc">Lorem quis bibendum auctar, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
						</div>
						<div class="col-lg-8 ">
							<div class="row">
								<div class="col-md-4 mb-4">
									<div class="counter text-center text-dark">
										<count-up
											:start="0"
											:end="35"
										>35</count-up>

										<h5 class="count-title font-weight-bold text-body ls-md">Business Year</h5>
										<p class="text-grey mb-0">Lorem ipsum dolor sit<br />amet, conctetur adipisci elit. viverra erat orci.</p>
									</div>
								</div>
								<div class="col-md-4 mb-4">
									<div class="counter text-center text-dark">
										<count-up
											:start="0"
											:end="50"
										>50</count-up>

										<h5 class="count-title font-weight-bold text-body ls-md">Design Brands</h5>
										<p class="text-grey mb-0">Lorem ipsum dolor sit<br />amet, conctetur adipisci elit. viverra erat orci.</p>
									</div>
								</div>
								<div class="col-md-4 mb-4">
									<div class="counter text-center text-dark">
										<count-up
											:start="0"
											:end="130"
										>130</count-up>

										<h5 class="count-title font-weight-bold text-body ls-md">Team Members</h5>
										<p class="text-grey mb-0">Lorem ipsum dolor sit<br />amet, conctetur adipisci elit. viverra erat orci.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				class="customer-section pb-10 appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-7 mb-4">
							<figure>
								<img
									v-lazy="`./images/subpages/customer.jpg`"
									alt="Happy Customer"
									width="580"
									height="507"
									class="banner-radius"
									style="background-color: #c5d3dc"
								/>
							</figure>
						</div>
						<div class="col-md-5 mb-4">
							<h5 class="section-subtitle lh-2 ls-md font-weight-normal">02. Happy Customer</h5>
							<h3 class="section-title lh-1 font-weight-bold">Provide fashionable and<br />qualifed products</h3>
							<p class="section-desc text-grey">
								Already millions of people are very satisfied by thi.<br />
								s page builder and the number is growing more and more. Technolog<br />
								developing, requirements are increasing. Riode has brought.
							</p>
							<a
								href="javascript:;"
								class="btn btn-dark btn-link btn-underline ls-m"
							>Visit Our Store<i class="d-icon-arrow-right"></i></a>
						</div>
					</div>
				</div>
			</section>

			<section
				class="store-section pb-10 appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-6 order-md-first mb-4">
							<h5 class="section-subtitle lh-2 ls-md font-weight-normal mb-1">03. Our Store</h5>
							<h3 class="section-title lh-1 font-weight-bold">Expect Restless<br />Amazing Support</h3>
							<p class="section-desc text-grey">
								Already millions of people are very satisfied by thi.<br />
								s page builder and the number is growing more and more. Technolog<br />
								developing, requirements are increasing. Riode has brought.
							</p>
							<a
								href="javascript:;"
								class="btn btn-dark btn-link btn-underline ls-m"
							>Get Our Store<i class="d-icon-arrow-right"></i></a>
						</div>

						<div class="col-md-6 mb-4">
							<figure>
								<img
									v-lazy="`./images/subpages/store.jpg`"
									alt="Our Store"
									width="580"
									height="507"
									class="banner-radius"
									style="background-color: #DEE6E8"
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>

			<section
				class="brand-section grey-section pt-10 pb-10 appear-animate"
				v-animate
			>
				<div class="container mt-8 mb-10">
					<h5 class="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">04. Our Clients</h5>
					<h3 class="section-title lh-1 font-weight-bold text-center mb-5">Popular Brands</h3>

					<swiper-carousel
						class="swiper-theme"
						:options="baseSlider16"
					>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/1.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/2.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/3.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/4.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/5.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
						<figure class="brand-wrap bg-white banner-radius swiper-slide">
							<img
								src="images/brands/6.png"
								alt="Brand"
								:width="180"
								:height="100"
							/>
						</figure>
					</swiper-carousel>
				</div>
			</section>

			<section
				class="team-section pt-8 mt-10 pb-10 mb-6 appear-animate"
				v-animate
			>
				<div class="container">
					<h5 class="section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center">05. Our Leaders</h5>
					<h3 class="section-title lh-1 font-weight-bold text-center mb-5">Meet our team</h3>

					<div class="row cols-sm-2 cols-md-4">
						<div class="member">
							<figure class="banner-radius">
								<img
									src="images/subpages/team1.jpg"
									alt="Oteam member"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>

								<div class="overlay social-links">
									<a
										href="javascript:;"
										class="social-link social-facebook fab fa-facebook-f"
									></a>
									<a
										href="javascript:;"
										class="social-link social-twitter fab fa-twitter"
									></a>
									<a
										href="javascript:;"
										class="social-link social-linkedin fab fa-linkedin-in"
									></a>
								</div>
							</figure>

							<h4 class="member-name">Tomasz Treflerzan</h4>
							<h5 class="member-job">Ceo / Founder</h5>
						</div>

						<div class="member">
							<figure class="banner-radius">
								<img
									src="images/subpages/team2.jpg"
									alt="Oteam member"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>

								<div class="overlay social-links">
									<a
										href="javascript:;"
										class="social-link social-facebook fab fa-facebook-f"
									></a>
									<a
										href="javascript:;"
										class="social-link social-twitter fab fa-twitter"
									></a>
									<a
										href="javascript:;"
										class="social-link social-linkedin fab fa-linkedin-in"
									></a>
								</div>
							</figure>

							<h4 class="member-name">Dylan Chavez</h4>
							<h5 class="member-job">Support manager / founder</h5>
						</div>

						<div class="member">
							<figure class="banner-radius">
								<img
									src="images/subpages/team3.jpg"
									alt="Oteam member"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>

								<div class="overlay social-links">
									<a
										href="javascript:;"
										class="social-link social-facebook fab fa-facebook-f"
									></a>
									<a
										href="javascript:;"
										class="social-link social-twitter fab fa-twitter"
									></a>
									<a
										href="javascript:;"
										class="social-link social-linkedin fab fa-linkedin-in"
									></a>
								</div>
							</figure>

							<h4 class="member-name">Viktoriia Demianenko</h4>
							<h5 class="member-job">Designer</h5>
						</div>

						<div class="member">
							<figure class="banner-radius">
								<img
									src="images/subpages/team4.jpg"
									alt="Oteam member"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>

								<div class="overlay social-links">
									<a
										href="javascript:;"
										class="social-link social-facebook fab fa-facebook-f"
									></a>
									<a
										href="javascript:;"
										class="social-link social-twitter fab fa-twitter"
									></a>
									<a
										href="javascript:;"
										class="social-link social-linkedin fab fa-linkedin-in"
									></a>
								</div>
							</figure>

							<h4 class="member-name">Mikhail Hnatuk</h4>
							<h5 class="member-job">Support</h5>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import CountUp from '~/components/elements/CountUp';

import { baseUrl } from '~/api';
import { baseSlider16 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		CountUp
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			baseSlider16: baseSlider16
		};
	}
};
</script>
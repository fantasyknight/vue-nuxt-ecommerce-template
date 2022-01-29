<template>
	<main class="main contact-us">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</nav>

		<div
			class="page-header"
			style="background-image: url(./images/page-header/contact-us.jpg); background-color: #92918f"
		>
			<h1 class="page-title font-weight-bold text-capitalize ls-l">Contact Us</h1>
		</div>

		<div class="page-content mt-10 pt-7">
			<section
				class="contact-section appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
							<div class="grey-section d-flex align-items-center h-100">
								<div>
									<h4 class="mb-2 text-capitalize">Headquarters</h4>
									<p>1600 Amphitheatre Parkway<br />New York WC1 1BA</p>

									<h4 class="mb-2 text-capitalize">Phone Number</h4>
									<p>
										<a href="javascript:;">1.800.458.56</a><br />
										<a href="javascript:;">1.800.458.56</a>
									</p>

									<h4 class="mb-2 text-capitalize">Support</h4>
									<p class="mb-4">
										<a href="javascript:;">support@your-domain.com</a><br />
										<a href="javascript:;">help@your-domain.com</a><br />
										<a href="javascript:;">Sale</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
							<div class="w-100">
								<form
									class="pl-lg-2"
									action="#"
								>
									<h4 class="ls-m font-weight-bold">Let’s Connect</h4>
									<p>Your email address will not be published. Required fields are marked *</p>
									<div class="row mb-2">
										<div class="col-12 mb-4">
											<textarea
												class="form-control"
												required
												aria-label="contact textarea"
												placeholder="Comment*"
											></textarea>
										</div>
										<div class="col-md-6 mb-4">
											<input
												class="form-control"
												type="text"
												aria-label="contact name"
												placeholder="Name *"
												required
											/>
										</div>
										<div class="col-md-6 mb-4">
											<input
												class="form-control"
												type="email"
												aria-label="contact email"
												placeholder="Email *"
												required
											/>
										</div>
									</div>
									<button class="btn btn-dark btn-rounded">Post Comment<i class="d-icon-arrow-right"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				class="store-section mt-6 pt-10 pb-8 appear-animate"
				v-animate
			>
				<div class="container">
					<h2 class="title title-center mb-7 text-normal">Our store</h2>

					<div class="row cols-sm-2 cols-lg-4">
						<div class="store">
							<figure class="banner-radius">
								<img
									v-lazy="`images/subpages/store-1.jpg`"
									alt="store"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>

								<h4 class="overlay-visible">New York</h4>
								<div class="overlay overlay-transparent">
									<a
										class="mt-8"
										href="javascript:;"
									>mail@newyorkriodestore.com</a>
									<a href="javascript:;">Phone: (123) 456-7890</a>
									<div class="social-links mt-1">
										<a
											href="javascript:;"
											title="social-icon-facebook"
											class="social-link social-facebook fab fa-facebook-f"
										></a>
										<a
											href="javascript:;"
											title="social-icon-twitter"
											class="social-link social-twitter fab fa-twitter"
										></a>
										<a
											href="javascript:;"
											title="social-icon-linkedin"
											class="social-link social-linkedin fab fa-linkedin-in"
										></a>
									</div>
								</div>
							</figure>
						</div>
						<div class="store">
							<figure class="banner-radius">
								<img
									v-lazy="`images/subpages/store-2.jpg`"
									alt="store"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>
								<h4 class="overlay-visible">London</h4>
								<div class="overlay overlay-transparent">
									<a
										class="mt-8"
										href="mail:#"
									>mail@londonriodestore.com</a>
									<a href="tel:#">Phone: (123) 456-7890</a>
									<div class="social-links mt-1">
										<a
											href="javascript:;"
											title="social-icon-facebook"
											class="social-link social-facebook fab fa-facebook-f"
										></a>
										<a
											href="javascript:;"
											title="social-icon-twitter"
											class="social-link social-twitter fab fa-twitter"
										></a>
										<a
											href="javascript:;"
											title="social-icon-linkedin"
											class="social-link social-linkedin fab fa-linkedin-in"
										></a>
									</div>
								</div>
							</figure>
						</div>
						<div class="store">
							<figure class="banner-radius">
								<img
									v-lazy="`images/subpages/store-3.jpg`"
									alt="store"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>
								<h4 class="overlay-visible">Oslo</h4>
								<div class="overlay overlay-transparent">
									<a
										class="mt-8"
										href="mail:#"
									>mail@osloriodestore.com</a>
									<a href="tel:#">Phone: (123) 456-7890</a>
									<div class="social-links mt-1">
										<a
											href="javascript:;"
											title="social-icon-facebook"
											class="social-link social-facebook fab fa-facebook-f"
										></a>
										<a
											href="javascript:;"
											title="social-icon-twitter"
											class="social-link social-twitter fab fa-twitter"
										></a>
										<a
											href="javascript:;"
											title="social-icon-linkedin"
											class="social-link social-linkedin fab fa-linkedin-in"
										></a>
									</div>
								</div>
							</figure>
						</div>
						<div class="store">
							<figure class="banner-radius">
								<img
									v-lazy="`images/subpages/store-4.jpg`"
									alt="store"
									:width="280"
									:height="280"
									style="background-color: #EEE"
								/>
								<h4 class="overlay-visible">Stockholm</h4>
								<div class="overlay overlay-transparent">
									<a
										class="mt-8"
										href="mail:#"
									>mail@stockholmriodestore.com</a>
									<a href="tel:#">Phone: (123) 456-7890</a>
									<div class="social-links mt-1">
										<a
											href="javascript:;"
											title="social-icon-facebook"
											class="social-link social-facebook fab fa-facebook-f"
										></a>
										<a
											href="javascript:;"
											title="social-icon-twitter"
											class="social-link social-twitter fab fa-twitter"
										></a>
										<a
											href="javascript:;"
											title="social-icon-linkedin"
											class="social-link social-linkedin fab fa-linkedin-in"
										></a>
									</div>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>

			<div
				class="grey-section google-map appear-animate"
				id="googlemaps"
				style="height: 386px"
				v-animate
			></div>
		</div>
	</main>
</template>

<script>
export default {
	components: {}
};
</script>
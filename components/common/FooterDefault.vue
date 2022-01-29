<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-top">
				<div class="row align-items-center">
					<div class="col-lg-3">
						<nuxt-link
							to="/"
							class="logo-footer"
						>
							<img
								src="~/static/images/logo-footer.png"
								alt="logo-footer"
								width="154"
								height="43"
							/>
						</nuxt-link>
					</div>
					<div class="col-lg-9">
						<div class="widget widget-newsletter form-wrapper form-wrapper-inline">
							<div class="newsletter-info mx-auto mr-lg-2 ml-lg-4">
								<h4 class="widget-title">Subscribe to our Newsletter</h4>
								<p>Get all the latest information, Sales and Offers.</p>
							</div>
							<form
								action="#"
								class="input-wrapper input-wrapper-inline"
							>
								<input
									type="email"
									class="form-control"
									name="email"
									id="email"
									aria-label="footer-newsletter-input"
									placeholder="Email address here..."
									required
								/>
								<button
									class="btn btn-primary btn-rounded btn-md ml-2"
									type="submit"
								>subscribe<i class="d-icon-arrow-right"></i></button>
							</form>
						</div>

					</div>
				</div>
			</div>

			<div class="footer-middle">
				<div class="row">
					<div class="col-lg-3 col-md-6">
						<div class="widget widget-info">
							<h4 class="widget-title">Contact Info</h4>
							<ul class="widget-body">
								<li>
									<label>Phone:</label>
									<a href="tel:#">Toll Free (123) 456-7890</a>
								</li>
								<li>
									<label>Email:</label>
									<a href="mailto:mail@riode.com">mail@riode.com</a>
								</li>
								<li>
									<label>Address:</label>
									<a href="javascript:;">123 Street Name, City, England</a>
								</li>
								<li>
									<label>WORKING DAYS / HOURS:</label>
								</li>
								<li>
									<a href="javascript:;">Mon - Sun / 9:00 AM - 8:00 PM</a>
								</li>
							</ul>
						</div>

					</div>
					<div class="col-lg-3 col-md-6">
						<div class="widget ml-lg-4">
							<h4 class="widget-title">My Account</h4>
							<ul class="widget-body">
								<li>
									<nuxt-link to="/pages/about-us">About Us</nuxt-link>
								</li>
								<li>
									<a href="javascript:;">Order History</a>
								</li>
								<li>
									<a href="javascript:;">Returns</a>
								</li>
								<li>
									<a href="javascript:;">Custom Service</a>
								</li>
								<li>
									<a href="javascript:;">Terms &amp; Condition</a>
								</li>
							</ul>
						</div>

					</div>
					<div class="col-lg-3 col-md-6">
						<div class="widget ml-lg-4">
							<h4 class="widget-title">Contact Info</h4>
							<ul class="widget-body">
								<li>
									<nuxt-link to="/pages/login">Sign in</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/cart">View Cart</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
								</li>
								<li>
									<a href="javascript:;">Track My Order</a>
								</li>
								<li>
									<a href="javascript:;">Help</a>
								</li>
							</ul>
						</div>

					</div>
					<div class="col-lg-3 col-md-6">
						<div class="widget widget-instagram">
							<h4 class="widget-title">Instagram</h4>
							<figure class="widget-body row">
								<div class="col-3">
									<img
										src="images/instagram/01.jpg"
										alt="instagram 1"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/02.jpg"
										alt="instagram 2"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/03.jpg"
										alt="instagram 3"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/04.jpg"
										alt="instagram 4"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/05.jpg"
										alt="instagram 5"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/06.jpg"
										alt="instagram 6"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/07.jpg"
										alt="instagram 7"
										width="64"
										height="64"
									/>
								</div>
								<div class="col-3">
									<img
										src="images/instagram/08.jpg"
										alt="instagram 8"
										width="64"
										height="64"
									/>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<div class="footer-left">
					<figure class="payment">
						<img
							src="images/payment.png"
							alt="payment"
							width="159"
							height="29"
						/>
					</figure>
				</div>
				<div class="footer-center">
					<p class="copyright">Riode eCommerce &copy; 2021. All Rights Reserved</p>
				</div>
				<div class="footer-right">
					<div class="social-links">
						<a
							title="social-icon-facebook"
							href="javascript:;"
							class="social-link social-facebook fab fa-facebook-f"
						></a>
						<a
							title="social-icon-twitter"
							href="javascript:;"
							class="social-link social-twitter fab fa-twitter"
						></a>
						<a
							title="social-icon-linkedin"
							href="javascript:;"
							class="social-link social-linkedin fab fa-linkedin-in"
						></a>
					</div>
				</div>
			</div>

		</div>
	</footer>
</template>
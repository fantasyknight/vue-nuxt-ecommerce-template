<template>
	<main class="main checkout border-no">
		<div :class="`page-content pt-7 pb-10 ${ cartList.length > 0 ? 'mb-10' : 'mb-2'}`">
			<div class="step-by pr-4 pl-4">
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/cart">1. Shopping Cart</nuxt-link>
				</h3>
				<h3 class="title title-simple title-step active"><a href="javascript:;">2. Checkout</a></h3>
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/order">3. Order Complete</nuxt-link>
				</h3>
			</div>

			<div class="container mt-7">
				<template v-if="cartList.length > 0">
					<element-card
						class="card"
						:is-opened="false"
					>
						<template v-slot:header>
							<div class="alert alert-light alert-primary alert-icon mb-4 card-header">
								<i class='fas fa-exclamation-circle'></i> <span class='text-body'>Returning customer?</span> <a
									href='javascript:;'
									class='text-primary collapse'
								>Click here to login</a>
							</div>
						</template>

						<div class="alert-body">
							<p>If you have shopped with us before, please enter your details below.
								If you are a new customer, please proceed to the Billing section.</p>
							<div class="row cols-md-2">
								<form class="mb-4 mb-md-0">
									<label for="username">Username Or Email *</label>
									<input
										type="text"
										class="input-text form-control mb-0"
										name="username"
										id="username"
										auto-complete="username"
									/>
								</form>
								<form class="mb-4 mb-md-0">
									<label for="password">Password *</label>
									<input
										class="input-text form-control mb-0"
										type="password"
										name="password"
										id="password"
										auto-complete="current-password"
									/>
								</form>
							</div>
							<div class="checkbox d-flex align-items-center justify-content-between">
								<div class="form-checkbox pt-0 mb-0">
									<input
										type="checkbox"
										class="custom-checkbox"
										id="signin-remember"
										name="signin-remember"
									/>
									<label
										class="form-control-label"
										for="signin-remember"
									>Remember Me</label>
								</div>
								<a
									href="javascript:;"
									class="lost-link"
								>Lost your password?</a>
							</div>
							<div class="link-group">
								<a
									href="javascript:;"
									class="btn btn-dark btn-rounded mb-4"
								>Login</a> <span class="d-inline-block text-body font-weight-semi-bold">or Login With</span>
								<div class="social-links mb-4">
									<a
										href="javascript:;"
										class="social-link social-google fab fa-google"
									></a>
									<a
										href="javascript:;"
										class="social-link social-facebook fab fa-facebook-f"
									></a>
									<a
										href="javascript:;"
										class="social-link social-twitter fab fa-twitter"
									></a>
								</div>
							</div>
						</div>
					</element-card>

					<element-card
						class="card"
						:is-opened="false"
					>
						<template v-slot:header>
							<div class="alert alert-light alert-primary alert-icon mb-4 card-header">
								<i class='fas fa-exclamation-circle'></i>
								<span class='text-body'>Have a coupon?</span>
								<a
									href='javascript:;'
									class='text-primary'
								>Click here to enter your code</a>
							</div>
						</template>

						<div class="alert-body mb-4">
							<p>If you have a coupon code, please apply it below.</p>
							<form class="check-coupon-box d-flex">
								<input
									type="text"
									name="coupon_code"
									class="input-text form-control text-grey ls-m mr-4"
									id="coupon_code"
									aria-label="input coupon"
									placeholder="Coupon code"
								/>
								<button
									type="submit"
									class="btn btn-dark btn-rounded btn-outline"
								>Apply Coupon</button>
							</form>
						</div>
					</element-card>

					<form
						action="#"
						class="form"
					>
						<div class="row">
							<div class="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
								<h3 class="title title-simple text-left text-uppercase">Billing Details</h3>

								<div class="row">
									<div class="col-xs-6">
										<label>First Name *</label>
										<input
											type="text"
											class="form-control"
											name="first-name"
											aria-label="first name input"
											required
										/>
									</div>
									<div class="col-xs-6">
										<label>Last Name *</label>
										<input
											type="text"
											class="form-control"
											name="last-name"
											aria-label="last name input"
											required
										/>
									</div>
								</div>

								<label>Company Name (Optional)</label>
								<input
									type="text"
									class="form-control"
									aria-label="company name input"
									name="company-name"
									required
								/>

								<label>Country / Region *</label>

								<div class="select-box">
									<select
										name="country"
										class="form-control"
										aria-label="country select"
										default-value="us"
									>
										<option value="us">United States (US)</option>
										<option value="uk"> United Kingdom</option>
										<option value="fr">France</option>
										<option value="aus">Austria</option>
									</select>
								</div>

								<label>Street Address *</label>
								<input
									type="text"
									class="form-control"
									name="address1"
									aria-label="street input"
									required
									placeholder="House number and street name"
								/>

								<input
									type="text"
									class="form-control"
									name="address2"
									aria-label="address input"
									required
									placeholder="Apartment, suite, unit, etc. (optional)"
								/>

								<div class="row">
									<div class="col-xs-6">
										<label>Town / City *</label>
										<input
											type="text"
											class="form-control"
											name="city"
											aria-label="city input"
											required
										/>
									</div>
									<div class="col-xs-6">
										<label>State *</label>
										<input
											type="text"
											class="form-control"
											name="state"
											aria-label="input state"
											required
										/>
									</div>
								</div>

								<div class="row">
									<div class="col-xs-6">
										<label>ZIP *</label>
										<input
											type="text"
											class="form-control"
											name="zip"
											aria-label="input zip"
											required
										/>
									</div>
									<div class="col-xs-6">
										<label>Phone *</label>
										<input
											type="text"
											class="form-control"
											name="phone"
											aria-label="input phone"
											required
										/>
									</div>
								</div>

								<label>Email Address *</label>
								<input
									type="text"
									class="form-control"
									name="email-address"
									aria-label="input email address"
									required
								/>

								<div class="form-checkbox mb-0 pt-0">
									<element-card
										class="card"
										:is-opened="false"
									>
										<template v-slot:header>
											<input
												type="checkbox"
												class="custom-checkbox"
												id="create-account"
												name="create-account"
											/>
											<label
												class='form-control-label ls-s'
												for='create-account'
											>Create an account?</label>
										</template>

										<template>
											<label
												for="account_username"
												class="pt-4"
											>Account username&nbsp;
												<abbr
													class="required"
													title="required"
												>*</abbr>
											</label>

											<input
												type="text"
												class="form-control"
												name="account_username"
												id="account_username"
												placeholder="Username"
												rows="5"
											/>

											<label for="account_password">Create account password&nbsp;
												<abbr
													class="required"
													title="required"
												>*</abbr>
											</label>

											<input
												type="password"
												class="form-control mb-3"
												name="account_password"
												id="account_password"
												placeholder="Password"
												rows="5"
											/>
										</template>
									</element-card>
								</div>

								<div class="form-checkbox mb-6">
									<element-card
										class="card"
										:is-opened="false"
									>
										<template v-slot:header>
											<input
												type="checkbox"
												class="custom-checkbox"
												id="different-address"
												name="different-address"
											/>
											<label
												class='form-control-label ls-s'
												for='different-address'
											>Ship to a different address?</label>
										</template>

										<template>
											<div class="row pt-4">
												<div class="col-xs-6">
													<label>First Name *</label>
													<input
														type="text"
														class="form-control"
														name="first-name"
														aria-label="first name input"
														required
													/>
												</div>
												<div class="col-xs-6">
													<label>Last Name *</label>
													<input
														type="text"
														class="form-control"
														name="last-name"
														aria-label="last name input"
														required
													/>
												</div>
											</div>
											<label>Company Name (Optional)</label>
											<input
												type="text"
												class="form-control"
												name="company-name"
												aria-label="company name input"
												required
											/>
											<label>Country / Region *</label>
											<div class="select-box">
												<select
													name="country"
													class="form-control"
													aria-label="country select"
													default-value="us"
												>
													<option value="us">United States (US)</option>
													<option value="uk"> United Kingdom</option>
													<option value="fr">France</option>
													<option value="aus">Austria</option>
												</select>
											</div>
											<label>Street Address *</label>
											<input
												type="text"
												class="form-control"
												name="address1"
												aria-label="street input"
												required
												placeholder="House number and street name"
											/>
											<input
												type="text"
												class="form-control"
												name="address2"
												aria-label="address input"
												required
												placeholder="Apartment, suite, unit, etc. (optional)"
											/>
											<div class="row">
												<div class="col-xs-6">
													<label>Town / City *</label>
													<input
														type="text"
														class="form-control"
														name="city"
														aria-label="city input"
														required
													/>
												</div>
												<div class="col-xs-6">
													<label>State *</label>
													<input
														type="text"
														class="form-control"
														name="state"
														aria-label="state input"
														required
													/>
												</div>
											</div>
											<div class="row">
												<div class="col-xs-6">
													<label>ZIP *</label>
													<input
														type="text"
														class="form-control"
														name="zip"
														aria-label="zip input"
														required
													/>
												</div>
												<div class="col-xs-6">
													<label>Phone *</label>
													<input
														type="text"
														class="form-control"
														name="phone"
														aria-label="phone input"
														required
													/>
												</div>
											</div>
										</template>
									</element-card>
								</div>

								<h2 class="title title-simple text-uppercase text-left mt-6">Additional Information</h2>
								<label>Order Notes (Optional)</label>
								<textarea
									class="form-control pb-2 pt-2 mb-0"
									cols="30"
									rows="5"
									aria-label="order note textarea"
									placeholder="Notes about your order, e.g. special notes for delivery"
								></textarea>
							</div>

							<aside
								class="col-lg-5 sticky-sidebar-wrapper"
								sticky-container
							>
								<div
									v-sticky="isSticky"
									sticky-offset="{top: 80, bottom: 50}"
								>
									<div class="summary pt-5">
										<h3 class="title title-simple text-left text-uppercase">Your Order</h3>
										<table class="order-table">
											<thead>
												<tr>
													<th>Product</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr
													:key="'checkout-' + item.name"
													v-for="(item) in cartList"
												>
													<td class="product-name">{{ item.name }} <span class="product-quantity"> ×&nbsp; {{ item.qty }}</span></td>
													<td class="product-total text-body">${{ item.qty * item.price | priceFormat }}</td>
												</tr>

												<tr class="summary-subtotal">
													<td>
														<h4 class="summary-subtitle">Subtotal</h4>
													</td>
													<td class="summary-subtotal-price pb-0 pt-0">
														${{ totalPrice | priceFormat }}
													</td>
												</tr>

												<tr class="sumnary-shipping shipping-row-last">
													<td colSpan="2">
														<h4 class="summary-subtitle">Calculate Shipping</h4>
														<ul>
															<li>
																<div class="custom-radio">
																	<input
																		type="radio"
																		id="flat_rate"
																		name="shipping"
																		class="custom-control-input"
																		checked
																	/>
																	<label
																		class="custom-control-label"
																		for="flat_rate"
																	>Flat rate</label>
																</div>
															</li>

															<li>
																<div class="custom-radio">
																	<input
																		type="radio"
																		id="free-shipping"
																		name="shipping"
																		class="custom-control-input"
																	/>
																	<label
																		class="custom-control-label"
																		for="free-shipping"
																	>Free shipping</label>
																</div>
															</li>

															<li>
																<div class="custom-radio">
																	<input
																		type="radio"
																		id="local_pickup"
																		name="shipping"
																		class="custom-control-input"
																	/>
																	<label
																		class="custom-control-label"
																		for="local_pickup"
																	>Local pickup</label>
																</div>
															</li>
														</ul>
													</td>
												</tr>
												<tr class="summary-total">
													<td class="pb-0">
														<h4 class="summary-subtitle">Total</h4>
													</td>
													<td class=" pt-0 pb-0">
														<p class="summary-total-price ls-s text-primary">${{ totalPrice | priceFormat }}</p>
													</td>
												</tr>
											</tbody>
										</table>

										<element-radio class="payment accordion radio-type">
											<h4 class="summary-subtitle ls-m pb-3">Payment Methods</h4>

											<div class="checkbox-group">
												<element-card
													class="card"
													:is-opened="true"
												>
													<template v-slot:header>
														<a
															href="javascript:;"
															class="text-body text-normal ls-m"
														>Check payments</a>
													</template>

													<div class="card-wrapper">
														<div class="card-body ls-m overflow-hidden">
															Please send a check to Store Name, Store Street,
															Store Town, Store State / County, Store Postcode.
														</div>
													</div>
												</element-card>

												<element-card
													class="card"
													:is-opened="false"
												>
													<template v-slot:header>
														<a
															href="javascript:;"
															class="text-body text-normal ls-m"
														>Cash on delivery</a>
													</template>

													<div class="card-body ls-m overflow-hidden">
														Please send a check to Store Name, Store Street,
														Store Town, Store State / County, Store Postcode.
													</div>
												</element-card>
											</div>
										</element-radio>

										<div class="form-checkbox mt-4 mb-5">
											<input
												type="checkbox"
												class="custom-checkbox"
												id="terms-condition"
												name="terms-condition"
											/>
											<label
												class="form-control-label"
												for="terms-condition"
											>
												I have read and agree to the website <a href="javascript:;">terms and conditions </a>*
											</label>
										</div>
										<button
											type="submit"
											class="btn btn-dark btn-rounded btn-order"
										>Place Order</button>
									</div>
								</div>
							</aside>
						</div>
					</form>
				</template>

				<template v-else>
					<div class="empty-cart text-center">
						<p>Your cart is currently empty.</p>
						<i class="cart-empty d-icon-bag"></i>
						<p class="return-to-shop mb-0">
							<nuxt-link
								class="button wc-backward btn btn-dark btn-md"
								to="/shop"
							>
								Return to shop
							</nuxt-link>
						</p>
					</div>
				</template>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex';
import Sticky from 'vue-sticky-directive';

import ElementAccordion from '~/components/elements/ElementAccordion';
import ElementRadio from '~/components/elements/ElementRadio';
import ElementCard from '~/components/elements/ElementCard';

export default {
	components: {
		ElementAccordion,
		ElementRadio,
		ElementCard
	},
	directives: {
		Sticky
	},
	data: function () {
		return {
			isSticky: false
		};
	},
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalPrice' ] )
	},
	mounted: function () {
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler, {
			passive: true
		} );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>
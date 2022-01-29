<template>
	<div class="main cart border-no">
		<div class="page-content pt-7 pb-10">
			<div class="step-by pr-4 pl-4">
				<h3 class="title title-simple title-step active"><a href="javascript:;">1. Shopping Cart</a></h3>
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/checkout">2. Checkout</nuxt-link>
				</h3>
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/order">3. Order Complete</nuxt-link>
				</h3>
			</div>

			<div class="container mt-7 mb-2">
				<div class="row">
					<template v-if="cartItems.length > 0">
						<div class="col-lg-8 col-md-12 pr-lg-4">
							<table class="shop-table cart-table">
								<thead>
									<tr>
										<th><span>Product</span></th>
										<th></th>
										<th><span>Price</span></th>
										<th><span>quantity</span></th>
										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									<tr
										:key="'cart' + item.name"
										v-for="item in cartItems"
									>
										<td class="product-thumbnail">
											<figure>
												<nuxt-link :to="'/product/default/' + item.slug">
													<img
														:src="`${baseUrl}${item.pictures[0].url}`"
														:width="100"
														:height="100"
														alt="product"
													/>
												</nuxt-link>
											</figure>
										</td>
										<td class="product-name">
											<div class="product-name-section">
												<nuxt-link :to="'/product/default/' + item.slug">{{item.name}}</nuxt-link>
											</div>
										</td>
										<td class="product-subtotal">
											<span class="amount">${{ item.price | priceFormat }}</span>
										</td>

										<td class="product-quantity">
											<input-quantity
												:max="item.stock"
												:qty="item.qty"
												@change-qty="qty=> changeQty(qty, item.name)"
											></input-quantity>
										</td>
										<td class="product-price">
											<span class="amount">${{ item.qty * item.price | priceFormat }}</span>
										</td>
										<td class="product-close">
											<a
												href="javascript:;"
												class="product-remove"
												title="Remove this product"
												@click="removeFromCart(item)"
											>
												<i class="fas fa-times"></i>
											</a>
										</td>
									</tr>
								</tbody>
							</table>

							<div class="cart-actions mb-6 pt-4">
								<nuxt-link
									to="/shop"
									class="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
								><i class="d-icon-arrow-left"></i>Continue Shopping</nuxt-link>
								<button
									type="submit"
									:class="`btn btn-outline btn-dark btn-md btn-rounded ${ !isChanged ? ' btn-disabled' : ''}`"
									@click="update"
								>Update Cart
								</button>
							</div>

							<div class="cart-coupon-box mb-8">
								<h4 class="title coupon-title text-uppercase ls-m">Coupon Discount</h4>
								<input
									type="text"
									name="coupon_code"
									aria-label="input coupon"
									class="input-text form-control text-grey ls-m mb-4"
									id="coupon_code"
									placeholder="Enter coupon code here..."
								/>
								<button
									type="submit"
									class="btn btn-md btn-dark btn-rounded btn-outline"
								>Apply Coupon</button>
							</div>
						</div>

						<aside
							class="col-lg-4 sticky-sidebar-wrapper"
							sticky-container
						>
							<div
								v-sticky="isSticky"
								sticky-offset="{top: 80, bottom: 50}"
							>
								<div class="summary mb-4">
									<h3 class="summary-title text-left">Cart Totals</h3>

									<table class="shipping">
										<tbody>
											<tr class="summary-subtotal">
												<td>
													<h4 class="summary-subtitle">Subtotal</h4>
												</td>
												<td>
													<p class="summary-subtotal-price">${{ totalPrice | priceFormat }}</p>
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
																>Free
																	shipping</label>
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
										</tbody>
									</table>
									<div class="shipping-address">
										<label>Shipping to <strong>CA.</strong></label>
										<div class="select-box">
											<select
												name="country"
												class="form-control"
												aria-label="select country"
												default-value="us"
											>
												<option value="us">United States (US)</option>
												<option value="uk"> United Kingdom</option>
												<option value="fr">France</option>
												<option value="aus">Austria</option>
											</select>
										</div>
										<div class="select-box">
											<select
												name="country"
												class="form-control"
												aria-label="select country"
												default-value="us"
											>
												<option value="us">California</option>
												<option value="uk">Alaska</option>
												<option value="fr">Delaware</option>
												<option value="aus">Hawaii</option>
											</select>
										</div>
										<input
											type="text"
											class="form-control"
											name="code"
											aria-label="input city"
											placeholder="Town / City"
										/>
										<input
											type="text"
											class="form-control"
											name="code"
											aria-label="input zip"
											placeholder="ZIP"
										/>
										<a
											href="javascript:;"
											class="btn btn-md btn-dark btn-rounded btn-outline"
										>Update totals</a>
									</div>
									<table class="total">
										<tbody>
											<tr class="summary-subtotal">
												<td>
													<h4 class="summary-subtitle">Total</h4>
												</td>
												<td>
													<p class="summary-total-price ls-s">${{ totalPrice | priceFormat }}</p>
												</td>
											</tr>
										</tbody>
									</table>
									<nuxt-link
										to="/pages/checkout"
										class="btn btn-dark btn-rounded btn-checkout"
									>Proceed to checkout</nuxt-link>
								</div>
							</div>
						</aside>
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
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Sticky from 'vue-sticky-directive';

import InputQuantity from '~/components/elements/InputQuantity';

import { baseUrl } from '~/api';

export default {
	components: {
		InputQuantity
	},
	directives: {
		Sticky
	},
	data: function () {
		return {
			isSticky: false,
			baseUrl: baseUrl,
			cartItems: [],
			isChanged: false
		};
	},
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalPrice' ] )
	},
	watch: {
		cartList: function () {
			this.cartItems = [ ...this.cartList ];
		}
	},
	mounted: function () {
		this.cartItems = [ ...this.cartList ];
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler, {
			passive: true
		} );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		...mapActions( 'cart', [ 'updateCart', 'removeFromCart' ] ),
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		},
		changeQty: function ( qty, name ) {
			this.cartItems = this.cartItems.map( item => {
				return item.name === name ? { ...item, qty: qty } : item;
			} );
			this.isChanged = this.compareItems();
		},
		compareItems: function () {
			if ( this.cartItems.length !== this.cartList.length ) return true;
			for ( let i = 0; i < this.cartItems.length; i++ ) {
				if ( this.cartItems[ i ].qty !== this.cartList[ i ].qty ) return true;
			}
			return false;
		},
		update: function () {
			this.updateCart( { cartItems: this.cartItems } );
			this.isChanged = this.compareItems();
		}
	}
};
</script>
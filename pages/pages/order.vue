<template>
	<main class="main order">
		<div class="page-content pt-7 pb-10 mb-10">
			<div class="step-by pr-4 pl-4">
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/cart">1. Shopping Cart</nuxt-link>
				</h3>
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/checkout">2. Checkout</nuxt-link>
				</h3>
				<h3 class="title title-simple title-step active"><a href="javascript:;">3. Order Complete</a></h3>
			</div>
			<div class="container mt-8">
				<div class="order-message mr-auto ml-auto">
					<div class="icon-box d-inline-flex align-items-center">
						<div class="icon-box-icon mb-0">
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 50 50"
								enableBackground="new 0 0 50 50"
								xmlSpace="preserve"
							>
								<g>
									<path
										fill="none"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="bevel"
										stroke-miterlimit="10"
										d="
											M33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4
											c0-0.7,0-1.4-0.1-2.1"
									></path>
									<polyline
										fill="none"
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="bevel"
										stroke-miterlimit="10"
										points="
											48,6.9 24.4,29.8 17.2,22.3 	"
									></polyline>
								</g>
							</svg>
						</div>
						<div class="icon-box-content text-left">
							<h5 class="icon-box-title font-weight-bold lh-1 mb-1">Thank You!</h5>
							<p class="lh-1 ls-m">Your order has been received</p>
						</div>
					</div>
				</div>

				<div class="order-results">
					<div class="overview-item">
						<span>Order number:</span>
						<strong>4935</strong>
					</div>
					<div class="overview-item">
						<span>Status:</span>
						<strong>Processing</strong>
					</div>
					<div class="overview-item">
						<span>Date:</span>
						<strong>{{new Date().toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } )}}</strong>
					</div>
					<div class="overview-item">
						<span>Email:</span>
						<strong>12345@gmail.com</strong>
					</div>
					<div class="overview-item">
						<span>Total:</span>
						<strong>${{ totalPrice | priceFormat }}</strong>
					</div>
					<div class="overview-item">
						<span>Payment method:</span>
						<strong>Cash on delivery</strong>
					</div>
				</div>

				<h2 class="title title-simple text-left pt-4 font-weight-bold text-uppercase">Order Details</h2>
				<div class="order-details">
					<table class="order-details-table">
						<thead>
							<tr class="summary-subtotal">
								<td>
									<h3 class="summary-subtitle">Product</h3>
								</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							<tr
								:key="'order-' + item.name"
								v-for="(item) in cartList"
							>
								<td class="product-name">{{ item.name }} <span> <i class="fas fa-times"></i> {{ item.qty }}</span></td>
								<td class="product-price">${{  item.qty * item.price  | priceFormat }}</td>
							</tr>

							<tr class="summary-subtotal">
								<td>
									<h4 class="summary-subtitle">Subtotal:</h4>
								</td>
								<td class="summary-subtotal-price">${{ totalPrice | priceFormat }}</td>
							</tr>
							<tr class="summary-subtotal">
								<td>
									<h4 class="summary-subtitle">Shipping:</h4>
								</td>
								<td class="summary-subtotal-price">Free shipping</td>
							</tr>
							<tr class="summary-subtotal">
								<td>
									<h4 class="summary-subtitle">Payment method:</h4>
								</td>
								<td class="summary-subtotal-price">Cash on delivery</td>
							</tr>
							<tr class="summary-subtotal">
								<td>
									<h4 class="summary-subtitle">Total:</h4>
								</td>
								<td>
									<p class="summary-total-price">${{ totalPrice | priceFormat }}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2 class="title title-simple text-left pt-10 mb-2">Billing Address</h2>
				<div class="address-info pb-8 mb-6">
					<p class="address-detail pb-2">
						John Doe<br />
						Riode Company<br />
						Steven street<br />
						El Carjon, CA 92020<br />
						123456789
					</p>
					<p class="email">mail@riode.com</p>
				</div>

				<nuxt-link
					to="/shop"
					class="btn btn-icon-left btn-dark btn-back btn-rounded btn-md mb-4"
				><i class="d-icon-arrow-left"></i> Back to List</nuxt-link>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalPrice' ] )
	}
};
</script>
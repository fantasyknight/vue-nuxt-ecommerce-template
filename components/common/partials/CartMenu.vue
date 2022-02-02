<template>
	<div
		class="dropdown cart-dropdown type2 cart-offcanvas mr-0 mr-lg-2 off-canvas-type"
		ref="cartMenu"
	>
		<a
			href="javascript:;"
			class="cart-toggle label-block link"
			@click="showCartMenu($event)"
		>
			<div class="cart-label d-lg-show">
				<span class="cart-name">Shopping Cart:</span>
				<span class="cart-price">${{ totalPrice }}</span>
			</div>
			<i class="d-icon-bag"><span class="cart-count">{{totalCount}}</span></i>
		</a>
		<div
			class="cart-overlay"
			@click="hideCartMenu($event)"
		></div>

		<div class="dropdown-box">
			<div class="cart-header">
				<h4 class="cart-title">Shopping Cart</h4>
				<a
					href="javascript:;"
					class="btn btn-dark btn-link btn-icon-right btn-close"
					@click="hideCartMenu($event)"
				>close<i class="d-icon-arrow-right"></i><span class="sr-only">Cart</span></a>
			</div>

			<template v-if="cartList.length > 0">
				<div class="products scrollable mt-4">
					<div
						class="product product-cart"
						v-for="item in cartList"
						:key="`cart-item-${item.name}`"
					>
						<figure class="product-media">
							<nuxt-link :to="'/product/default/' + item.slug">
								<img
									v-lazy="`${baseUrl}${item.pictures[0].url}`"
									alt="product"
									:width="item.pictures[0].width"
									:height="item.pictures[0].height"
								/>
							</nuxt-link>
							<button
								class="btn btn-link btn-close"
								@click="removeFromCart(item)"
							>
								<i class="fas fa-times"></i><span class="sr-only">Close</span>
							</button>
						</figure>
						<div class="product-detail">
							<nuxt-link
								:to="'/product/default/' + item.slug"
								class="product-name"
							>{{ item.name }}</nuxt-link>
							<div class="price-box">
								<span class="product-quantity">{{ item.qty }}</span>
								<span class="product-price">${{ item.price }}</span>
							</div>
						</div>
					</div>
				</div>

				<div class="cart-total">
					<label>Subtotal:</label>
					<span class="price">${{ totalPrice }}</span>
				</div>

				<div class="cart-action">
					<nuxt-link
						to="/pages/cart"
						class="btn btn-dark btn-link"
					>View Cart</nuxt-link>
					<nuxt-link
						to="/pages/checkout"
						class="btn btn-dark"
					><span>Go To Checkout</span></nuxt-link>
				</div>
			</template>

			<template v-else>
				<p class="mt-4 text-center font-weight-semi-bold ls-normal text-body">No products in the cart.</p>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { baseUrl } from '~/repository/index';

export default {
	data: function () {
		return {
			baseUrl: baseUrl
		};
	},
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalCount', 'totalPrice' ] )
	},
	watch: {
		$route: function () {
			this.$refs.cartMenu.classList.remove( 'opened' );
		}
	},
	methods: {
		...mapActions( 'cart', [ 'removeFromCart' ] ),
		showCartMenu: function ( e ) {
			e.currentTarget.closest( '.cart-dropdown' ).classList.add( 'opened' );
		},
		hideCartMenu: function ( e ) {
			e.currentTarget.closest( '.cart-dropdown' ).classList.remove( 'opened' );
		}
	}
};
</script>
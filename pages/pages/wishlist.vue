<template>
	<main class="main">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Wishlist</li>
				</ul>
			</div>
		</nav>

		<div class="page-content pt-10 pb-10 mb-2">
			<div class="container">
				<template v-if="wishList.length > 0">
					<table class="shop-table wishlist-table mt-2 mb-4">
						<thead>
							<tr>
								<th class="product-name"><span>Product</span></th>
								<th></th>
								<th class="product-price"><span>Price</span></th>
								<th class="product-stock-status"><span>Stock status</span></th>
								<th class="product-add-to-cart"></th>
								<th class="product-remove"></th>
							</tr>
						</thead>
						<tbody class="wishlist-items-wrapper">
							<tr
								:key="'wishlist' + item.name"
								v-for="item in wishList"
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

								<td class="product-price">
									<span
										class="amount"
										v-if="item.display_price[0] !== item.display_price[1]"
									>${{ item.display_price[ 0 ] | priceFormat }} – ${{ item.display_price[ 1 ] | priceFormat }}</span>
									<template v-else-if="item.discount > 0 && item.variants.length > 0">
										<span class="amount">${{ item.sale_price | priceFormat }}</span>
										<span class="amount">${{ item.price | priceFormat }}</span>
									</template>
									<span
										class="amount"
										v-else
									>${{ item.display_price[ 0 ] | priceFormat }}</span>
								</td>

								<td class="product-stock-status">
									<span :class="item.stock > 0 ? 'wishlist-in-stock' : 'wishlist-out-stock'">{{ item.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span>
								</td>

								<td class="product-add-to-cart">
									<template v-if="item.stock > 0">
										<nuxt-link
											:to="'/product/default/' + item.slug"
											class="btn-product btn-primary"
											v-if="item.variants.length > 0"
										><span>Select options</span></nuxt-link>
										<a
											href="javascript:;"
											class="btn-product btn-primary"
											v-else
											@click="moveToCartHandler(item)"
										>Add to Cart</a>
									</template>
								</td>

								<td class="product-close">
									<a
										href="javascript:;"
										class="product-remove"
										title="Remove this product"
										@click="toggleWishlist(item)"
									>
										<i class="fas fa-times"></i>
									</a>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="social-links share-on">
						<h5 class="text-uppercase font-weight-bold mb-0 mr-4 ls-s">Share on:</h5>
						<a
							href="javascript:;"
							class="social-link social-icon social-facebook"
							title="Facebook"
						><i class="fab fa-facebook-f"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-twitter"
							title="Twitter"
						><i class="fab fa-twitter"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-pinterest"
							title="Pinterest"
						><i class="fab fa-pinterest-p"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-email"
							title="Email"
						><i class="far fa-envelope"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-whatsapp"
							title="Whatsapp"
						><i class="fab fa-whatsapp"></i></a>
					</div>
				</template>

				<template v-else>
					<div class="empty-cart text-center">
						<i class="wishlist-empty far fa-heart"></i>
						<p>No products added to the wishlist.</p>
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
import { mapGetters, mapActions } from 'vuex';

import { baseUrl } from '~/api';

export default {
	data: function () {
		return {
			baseUrl: baseUrl
		};
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] )
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'toggleWishlist' ] ),
		moveToCartHandler: function ( data ) {
			if ( data.stock > 0 ) {
				let product = {
					...data,
					price: data.display_price[ 0 ]
				};
				this.addToCart( { product: product } );
			}
			this.toggleWishlist( data );
		}
	}
};
</script>
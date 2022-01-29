<template>
	<div
		class="product shadow-media product-with-qty"
		:class="{'product-variable': product.variants.length > 0}"
	>
		<figure class="product-media">
			<nuxt-link :to="`/product/default/${product.slug}`">
				<img
					v-for="(item,index) in product.large_pictures.slice(0,2)"
					:key="`one-large-${index}`"
					v-lazy="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
					:class="{'last-image': index === 1}"
				/>
			</nuxt-link>

			<div class="product-label-group">
				<div
					class="product-label label-new"
					v-if="product.is_new"
				>New</div>
				<div
					class="product-label label-stock"
					v-if="product.stock === '0'"
				>Out</div>
				<div
					class="product-label label-top"
					v-if="product.is_top"
				>Top</div>
				<div
					class="product-label label-sale"
					v-if="product.discount > 0"
				>
					<template v-if="product.variants.length > 0">Sale</template>
					<template v-else>-{{ product.discount }}%</template>
				</div>
			</div>

			<div class="product-action-vertical">
				<a
					href="javascript:;"
					class="btn-wishlist btn-product-icon"
					title="Add to wishlist"
					@click="wishlistHandler($event)"
					v-if="!isWishlisted"
				><i class="d-icon-heart"></i></a>

				<a
					href="javascript:;"
					class="btn-wishlist btn-product-icon"
					title='Remove from wishlist'
					v-if="isWishlisted"
					@click="wishlistHandler($event)"
				>
					<i class="d-icon-heart-full"></i>
				</a>
			</div>

			<div class="product-action">
				<a
					href="javascript:;"
					class="btn-product btn-quickview"
					title="Quick View"
					@click.prevent="openQuickview"
				>Quick View</a>
			</div>
		</figure>

		<div class="product-details">
			<div class="product-cat">
				<span
					v-for="(cat,index) in product.product_categories"
					:key="`product-category-${index}`"
				>
					<nuxt-link :to="{ path: '/shop', query: { category: cat.slug }}">{{ cat.name }}</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</div>

			<h3 class="product-name">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

			<div class="product-price">
				<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
					<span class="price">${{ product.display_price[0] | priceFormat  }}</span>
				</template>

				<template v-else>
					<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
						<ins class="new-price">${{ product.display_price[0] | priceFormat }}</ins>
						<del class="old-price">${{ product.display_price[1] | priceFormat }}</del>
					</template>

					<template v-else>
						<ins class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</ins>
					</template>
				</template>
			</div>

			<div class="product-action">
				<input-quantity
					:max="product.stock"
					defaultClass="product-quantity"
					@change-qty="changeQty"
					v-if="product.variants.length === 0"
				></input-quantity>

				<a
					href="javascript:;"
					class="btn-product btn-cart"
					title="Add to cart"
					v-if="product.variants.length === 0"
					@click="addCart"
				><i class="d-icon-bag"></i><span>Add to Cart</span></a>

				<nuxt-link
					:to="`/product/default/${product.slug}`"
					class="btn-product btn-cart"
					title="Go to detail"
					v-else
				><span>Select Options</span></nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import InputQuantity from '~/components/elements/InputQuantity';
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api';

export default {
	components: {
		InputQuantity
	},
	props: {
		product: Object
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			quantity: 1
		}
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
		isWishlisted: function () {
			if ( this.wishList.find( item => item.name === this.product.name ) ) return true;
			return false;
		}
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'toggleWishlist' ] ),
		wishlistHandler: function ( e ) {
			let currentTarget = e.currentTarget;
			currentTarget.classList.add( 'load-more-overlay', 'loading' );

			setTimeout( () => {
				currentTarget.classList.remove( 'load-more-overlay', 'loading' );
				this.toggleWishlist( this.product );
			}, 1000 );
		},
		addCart: function () {
			if ( this.product.stock > 0 ) {
				let saledProduct = { ...this.product, price: this.product.display_price[ 0 ], qty: this.quantity };
				this.addToCart( { product: saledProduct } );
			}
		},
		openQuickview: function () {
			this.$modal.show(
				() => import( '~/components/elements/modal/QuickView' ),
				{ slug: this.product.slug },
				{
					width: '988',
					height: 'auto',
					adaptive: true,
					class: 'quickview-modal scrollable'
				}
			);
		},
		changeQty: function ( qty ) {
			this.quantity = qty;
		}
	}
}
</script>
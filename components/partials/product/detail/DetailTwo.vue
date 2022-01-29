<template>
	<div
		class="product-details"
		v-sticky="isSticky"
		sticky-offset="{top: 80}"
	>
		<div
			class="product-navigation"
			v-if="showNav"
		>
			<ul class="breadcrumb breadcrumb-lg">
				<li>
					<nuxt-link
						title="link to home"
						to="/"
					><i class="d-icon-home"></i></nuxt-link>
				</li>
				<li><a
						href="javascript:;"
						class="active"
					>Products</a></li>
				<li>Detail</li>
			</ul>

			<product-nav
				:next="next"
				:prev="prev"
			></product-nav>
		</div>

		<h2 class="product-name">{{ product.name }}</h2>

		<div class='product-meta'>
			<template v-if="product.sku">
				SKU: <span class='product-sku'>{{ product.sku }}</span>
			</template>
			CATEGORIES: <span class='product-brand'>
				<span
					v-for="(item, index) in product.product_categories"
					:key="`category-${item.slug}`"
				>
					<nuxt-link :to="{path:'/shop', query:{category: item.slug}}">
						{{ item.name }}
					</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</span>
		</div>

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

		<template v-if="product.discount > 0">
			<count-down
				class="product-countdown-container font-weight-semi-bold"
				until='2021-12-31'
				:type="2"
			></count-down>
		</template>

		<div class="ratings-container">
			<div class="ratings-full">
				<span
					class="ratings"
					:style="{width: product.ratings * 20 + '%'}"
				></span>
				<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
			</div>
			<a
				href="javascript:;"
				class="rating-reviews"
			>( {{ product.reviews }} reviews )</a>
		</div>

		<p class="product-short-desc">{{ product.short_description }}</p>

		<div
			class="product-form product-color"
			v-if="vColors.length > 0"
		>
			<label>Color:</label>

			<div class="product-variations">
				<a
					href="javascript:;"
					:class="`color ${ curColor === color.name ? 'active' : '' } ${ isDisabled( color.name, curSize ) ? 'disabled' : '' }`"
					:key="'color-' + color.name"
					:style="`background-color: ${ color.text }`"
					@click="toggleColorHandler( color )"
					v-for="color in vColors"
				></a>
			</div>
		</div>

		<div
			class="product-form product-size mb-0 pb-2"
			v-if="vSizes.length > 0"
		>
			<label>Size:</label>

			<div class="product-form-group">
				<div class="product-variations">
					<a
						href="javascript:;"
						:class="`size ${ curSize === size.name ? 'active' : '' } ${ isDisabled( curColor, size.name ) ? 'disabled' : '' }`"
						:key="'size-' + size.name"
						@click="toggleSizeHandler( size )"
						v-for="size in vSizes"
					>{{size.text}}</a>
				</div>
				<vue-slide-toggle
					:open="curColor !== null || curSize !== null"
					class="overflow-hidden reset-value-button w-100 mb-0"
				>
					<a
						href="javascript:;"
						@click.prevent="cleanAll"
						class="product-variation-clean"
					>Clean All</a>
				</vue-slide-toggle>
			</div>
		</div>

		<vue-slide-toggle :open="curIndex > -1">
			<div
				class="product-variation-price"
				v-if="curIndex > -1"
			>
				<div
					class="single-product-price"
					v-if="product.variants[curIndex].price"
				>
					<div
						class="product-price"
						v-if="product.variants[curIndex].sale_price"
						key="sale_price"
					>
						<ins class="new-price">${{ product.variants[curIndex].sale_price | priceFormat }}</ins>
						<del class="old-price">${{ product.variants[curIndex].price | priceFormat }}</del>
					</div>

					<div
						class="product-price"
						v-else
					>
						<ins class="new-price">${{ product.variants[curIndex].price | priceFormat }}</ins>
					</div>
				</div>
			</div>
		</vue-slide-toggle>

		<hr class="product-divider mt-0">

		<div class="product-form product-qty">
			<div class="product-form-group">
				<input-quantity
					class="mr-2"
					:max="product.stock"
					@change-qty="changeQty"
				></input-quantity>

				<button
					class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"
					:class="{disabled: !isCartActive}"
					@click="addCart"
				><i class="d-icon-bag"></i>Add to Cart</button>
			</div>
		</div>

		<hr class="product-divider mb-3">

		<div class="product-footer">
			<div class="social-links mr-4">
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
					title="social-icon-pinterest"
					href="javascript:;"
					class="social-link social-pinterest fab fa-pinterest-p"
				></a>
			</div>

			<span class="divider d-lg-show"></span>

			<a
				href="javascript:;"
				class="btn-wishlist"
				title="Add to wishlist"
				@click.prevent="wishlistHandler($event)"
				v-if="!isWishlisted"
			><i class="d-icon-heart"></i>
				Add to Wishlist
			</a>

			<nuxt-link
				to="/pages/wishlist"
				class="btn-wishlist"
				title="Browse wishlist"
				v-else
			><i class="d-icon-heart-full"></i>
				Browse wishlist
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';
import Sticky from 'vue-sticky-directive';

import CountDown from '~/components/elements/CountDown';
import InputQuantity from '~/components/elements/InputQuantity';
import ProductNav from '~/components/partials/product/ProductNav';

export default {
	components: {
		VueSlideToggle,
		InputQuantity,
		ProductNav,
		CountDown
	},
	directives: {
		Sticky
	},
	data: function () {
		return {
			vSizes: [],
			vColors: [],
			curSize: null,
			curColor: null,
			tIndex: -1,
			quantity: 1,
			isSticky: false
		};
	},
	props: {
		product: Object,
		prev: Object,
		next: Object,
		showNav: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
		displayColors: function () {
			return this.vColors.filter(
				item => !this.isDisabled( item.name, this.curSize )
			);
		},
		displaySizes: function () {
			return this.vSizes.filter(
				item => !this.isDisabled( this.curColor, item.name )
			);
		},
		curIndex: function () {
			if ( this.curColor && this.vSizes.length === 0 ) {
				let index = this.product.variants.findIndex(
					item => item.color.name === this.curColor
				);
				this.tIndex = index;
				return index;
			}

			if ( this.curSize && this.vColors.length === 0 ) {
				let index = this.product.variants.findIndex(
					item => item.size.name === this.curSize
				);
				this.tIndex = index;
				return index;
			}

			if ( this.curColor && this.curSize ) {
				let index = this.product.variants.findIndex(
					item =>
						item.color.name === this.curColor &&
						item.size.name === this.curSize
				);
				this.tIndex = index;
				return index;
			} else {
				return -1;
			}
		},
		isCartActive: function () {
			if ( parseInt( this.product.stock ) < parseInt( this.quantity ) ) return false;
			if ( this.product.variants.length === 0 ) return true;
			if ( this.curSize && this.curColor ) return true;
			if ( this.curColor && this.vSizes.length === 0 ) return true;
			if ( this.curSize && this.vColors.length === 0 ) return true;

			return false;
		},
		isWishlisted: function () {
			if ( this.wishList.find( item => item.name === this.product.name ) )
				return true;
			return false;
		}
	},
	mounted: function () {
		this.resizeHandler();

		if ( this.product.variants.length > 0 ) {
			if ( this.product.variants[ 0 ].size )
				this.product.variants.forEach( item => {
					if (
						!this.vSizes.find(
							vsize => vsize.name === item.size.name
						)
					)
						this.vSizes.push( {
							name: item.size.name,
							text: item.size.size,
							image: item.size.thumbnail
						} );
				} );

			if ( this.product.variants[ 0 ].color )
				this.product.variants.forEach( item => {
					if (
						!this.vColors.find(
							vColor => vColor.name === item.color.name
						)
					)
						this.vColors.push( {
							name: item.color.name,
							text: item.color.color,
							image: item.color.thumbnail
						} );
				} );
		}
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'addWishlist' ] ),
		isDisabled: function ( color, size ) {
			if ( !color || !size ) return false;

			if ( this.vSizes.length === 0 )
				return !this.product.variants.find(
					item => item.color.name === color
				);

			if ( this.vColors.length === 0 )
				return !this.product.variants.find(
					item => item.size.name === size
				);

			return !this.product.variants.find(
				item => item.color.name === color && item.size.name === size
			);
		},
		cleanAll: function () {
			this.curSize = null;
			this.curColor = null;
		},
		changeQty: function ( qty ) {
			this.quantity = qty;
		},
		addCart: function () {
			if ( this.isCartActive ) {
				let productName = this.product.name;
				if ( this.curColor ) productName += '-' + this.curColor;
				if ( this.curSize ) productName += '-' + this.curSize;

				let productPrice;
				if (
					this.curIndex > -1 &&
					this.product.variants[ this.curIndex ].price
				) {
					productPrice = this.product.variants[ this.curIndex ]
						.sale_price
						? this.product.variants[ this.curIndex ].sale_price
						: this.product.variants[ this.curIndex ].price;
				} else {
					productPrice = this.product.sale_price
						? this.product.sale_price
						: this.product.price;
				}

				let saledProduct = {
					...this.product,
					price: this.product.display_price[ 0 ]
				};
				this.addToCart( {
					product: {
						...this.product,
						name: productName,
						price: productPrice,
						qty: this.quantity
					}
				} );
			}
		},
		wishlistHandler: function ( e ) {
			let currentTarget = e.currentTarget;
			currentTarget.classList.add( 'load-more-overlay', 'loading' );

			setTimeout( () => {
				this.addWishlist( this.product );
				currentTarget.classList.remove( 'load-more-overlay', 'loading' );
			}, 1000 );
		},

		toggleColorHandler: function ( color ) {
			if ( !this.isDisabled( color.name, this.curSize ) ) {
				if ( this.curColor === color.name ) {
					this.curColor = null;
				} else {
					this.curColor = color.name;
				}
			}
		},

		toggleSizeHandler: function ( size ) {
			if ( !this.isDisabled( this.curColor, size.name ) ) {
				if ( this.curSize === size.name ) {
					this.curSize = null;
				} else {
					this.curSize = size.name;
				}
			}
		},
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>
<template>
	<div class="product-details pb-4">
		<div
			class="product-form product-variations product-color"
			v-if="vColors.length > 0"
		>
			<label>Color:</label>

			<div class="select-box">
				<select
					name="color"
					class="form-control"
					aria-label="color-select-box"
					v-model="curColor"
				>
					<option :value="null">Choose an Option</option>

					<option
						:value="item.name"
						:key="`color-${item.name}`"
						v-for="item in displayColors"
					>{{ item.name }}</option>
				</select>
			</div>
		</div>

		<div
			class="product-form product-variations product-size"
			v-if="vSizes.length > 0"
		>
			<label>Size:</label>

			<div class="product-form-group">
				<div class="select-box">
					<select
						name="size"
						class="form-control"
						aria-label="size-select-box"
						v-model="curSize"
					>
						<option :value="null">Choose an Option</option>

						<option
							:value="item.name"
							:key="`size-${item.name}`"
							v-for="item in displaySizes"
						>{{ item.name }}</option>
					</select>
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

import InputQuantity from '~/components/elements/InputQuantity';

export default {
	components: {
		VueSlideToggle,
		InputQuantity
	},
	data: function () {
		return {
			vSizes: [],
			vColors: [],
			curSize: null,
			curColor: null,
			tIndex: -1,
			quantity: 1
		};
	},
	props: {
		product: Object
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
		}
	}
};
</script>
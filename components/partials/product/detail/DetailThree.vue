<template>
	<div class="product-details">
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
					:title="'color-' + color.name"
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

		<element-accordion
			class="accordion accordion-simple"
			v-if="product"
		>
			<element-card
				class="card card-description border-no"
				:isOpened="true"
			>
				<template v-slot:header>
					<a href="javascript:;">Description</a>
				</template>

				<div class="row card-body">
					<div class="col-12 mb-8">
						<p class="mb-6">
							Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
							ellus massa. siti iMassa ristique sit amet condim vel, facilisis
							quimequistiqutiqu amet condim Dilisis Facilisis quis sapien.
							Praesent id enim sit amet.</p>
						<ul class="mb-6">
							<li>Praesent id enim sit amet.Tdio vulputate</li>
							<li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
							<li>Massa ristique sit amet condim vel</li>
							<li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
						</ul>
						<p class="mb-0">
							Praesent id enim sit amet odio vulputate eleifend in in tortor.
							Sellus massa, tristique sitiismonec tellus massa, tristique sit
							amet condim vel,
							facilisis quimequistiqutiqu amet condim vel, facilisis Facilisis
							quis sapien.
							Praesent id enim sit amet odio vulputate odio vulputate eleifend
							in in tortor.
							Sellus massa, tristique sitiismonec tellus massa, tristique sit
							ametcdimel,facilisis
							quimequistiqutiqu amet condim vel, facilisis Facilisis quis
							sapien. Praesent id enim
							sit amet odio vulputate
						</p>
					</div>
				</div>
			</element-card>

			<element-card
				class="card card-additional"
				:isOpened="false"
			>
				<template v-slot:header>
					<a href="javascript:;">Additional information</a>
				</template>

				<div class="card-body">
					<ul>
						<li v-if="product.product_categories.length > 0"><label>Categories:</label>
							<p
								v-for="(cat, index ) in product.product_categories"
								:key="'cat' + cat.slug + index"
							>
								{{ cat.name }}
								<template v-if="index < product.product_categories.length - 1">,&nbsp;</template>
							</p>
						</li>

						<li v-if="product.brands.length > 0"><label>Brands:</label>
							<p
								v-for="(brand, index ) in product.brands"
								:key="'brand' + brand.slug + index"
							>
								{{ brand.name }}
								<template v-if="index < product.brands.length - 1">,&nbsp;</template>
							</p>
						</li>

						<li v-if="vColors.length > 0"><label>Color:</label>
							<p
								v-for="(color, index ) in vColors"
								:key="'color' + color + index"
							>
								{{ color.name }}
								<template v-if="index < vColors.length - 1">,&nbsp;</template>
							</p>
						</li>

						<li v-if="vSizes.length > 0"><label>Size:</label>
							<p
								v-for="(size, index ) in vSizes"
								:key="'size' + size + index"
							>
								{{ size.name }}
								<template v-if="index < vSizes.length - 1">,&nbsp;</template>
							</p>
						</li>
					</ul>
				</div>
			</element-card>

			<element-card
				class="card card-sizeguide"
				:isOpened="false"
			>
				<template v-slot:header>
					<a href="javascript:;">Size Guide</a>
				</template>

				<div class="card-body">
					<figure class="size-image mt-4 mb-4">
						<img
							src="images/product-size.png"
							alt="Size Guide Image"
							width="217"
							height="398"
						/>
					</figure>
					<figure class="size-table mt-4 mb-4">
						<table>
							<thead>
								<tr>
									<th>SIZE</th>
									<th>CHEST(IN.)</th>
									<th>WEIST(IN.)</th>
									<th>HIPS(IN.)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>XS</th>
									<td>34-36</td>
									<td>27-29</td>
									<td>34.5-36.5</td>
								</tr>
								<tr>
									<th>S</th>
									<td>36-38</td>
									<td>29-31</td>
									<td>36.5-38.5</td>
								</tr>
								<tr>
									<th>M</th>
									<td>38-40</td>
									<td>31-33</td>
									<td>38.5-40.5</td>
								</tr>
								<tr>
									<th>L</th>
									<td>40-42</td>
									<td>33-36</td>
									<td>40.5-43.5</td>
								</tr>
								<tr>
									<th>XL</th>
									<td>42-45</td>
									<td>36-40</td>
									<td>43.5-47.5</td>
								</tr>
								<tr>
									<th>XXL</th>
									<td>45-48</td>
									<td>40-44</td>
									<td>47.5-51.5</td>
								</tr>
							</tbody>
						</table>
					</figure>
				</div>
			</element-card>

			<element-card
				class="card card-reviews"
				:isOpened="false"
			>
				<template v-slot:header>
					<a href="javascript:;">Reviews ({{ product.reviews }})</a>
				</template>

				<div class="card-body">
					<div
						class="comments mb-2 pt-2 pb-2 border-no"
						v-if="product.reviews === 0"
					>
						There are no reviews yet.
					</div>

					<div
						class="comments mb-8 pt-2 pb-2 border-no"
						v-else
					>
						<ul>
							<li>
								<div class="comment">
									<figure class="comment-media">
										<a href="javascript:;">
											<img
												src="images/blog/comments/1.jpg"
												alt="avatar"
												width="60"
												height="60"
											/>
										</a>
									</figure>
									<div class="comment-body">
										<div class="comment-rating ratings-container mb-0">
											<div class="ratings-full">
												<span
													class="ratings"
													:style="`width: ${product.ratings * 20}%`"
												></span>
												<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
											</div>
										</div>
										<div class="comment-user">
											<span class="comment-date text-body">September 22, 2020 at 9:42
												pm</span>
											<h4>
												<a href="javascript:;">John Doe</a>
											</h4>
										</div>

										<div class="comment-content">
											<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
												libero sodales leo,
												eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
												Suspendisse potenti.
												Sed egestas, ante et vulputate volutpat, eros pede semper
												est, vitae luctus metus libero eu augue.</p>
										</div>
									</div>
								</div>
							</li>

							<li v-if="product.reviews > 1">
								<div class="comment">
									<figure class="comment-media">
										<a href="javascript:;">
											<img
												src="images/blog/comments/2.jpg"
												alt="avatar"
												width="60"
												height="60"
											/>
										</a>
									</figure>

									<div class="comment-body">
										<div class="comment-rating ratings-container mb-0">
											<div class="ratings-full">
												<span
													class="ratings"
													:style="`width: ${product.ratings * 20}%`"
												></span>
												<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
											</div>
										</div>
										<div class="comment-user">
											<span class="comment-date text-body">September 22, 2020 at 9:42
												pm</span>
											<h4>
												<a href="javascript:;">John Doe</a>
											</h4>
										</div>

										<div class="comment-content">
											<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
												libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
												mollis.
												Ut justo. Suspendisse potenti. Sed egestas, ante et
												vulputate volutpat,
												eros pede semper est, vitae luctus metus libero eu augue.
												Morbi purus libero,
												faucibus adipiscing, commodo quis, avida id, est. Sed
												lectus. Praesent elementum
												hendrerit tortor. Sed semper lorem at felis. Vestibulum
												volutpat.</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="reply">
						<div class="title-wrapper text-left">
							<h3 class="title title-simple text-left text-normal">Add a Review</h3>
							<p>Your email address will not be published. Required fields are marked *</p>
						</div>
						<div class="rating-form">
							<label
								for="rating"
								class="text-dark"
							>Your rating * </label>
							<span class="rating-stars selected">
								<a
									v-for="number in [1,2,3,4,5]"
									:key="'rating' + number"
									href="javascript:;"
									:class="'star-'+number"
									@click="setRating($event)"
								>
									{{ number }}
								</a>
							</span>

							<select
								name="rating"
								id="rating"
								required=""
								style="display: none;"
							>
								<option value="">Rate…</option>
								<option value="5">Perfect</option>
								<option value="4">Good</option>
								<option value="3">Average</option>
								<option value="2">Not that bad</option>
								<option value="1">Very poor</option>
							</select>
						</div>
						<form action="#">
							<textarea
								id="reply-message"
								cols="30"
								rows="6"
								aria-label="reply-message"
								class="form-control mb-4"
								placeholder="Comment *"
								required
							></textarea>
							<div class="row">
								<div class="col-md-6 mb-5">
									<input
										type="text"
										class="form-control"
										id="reply-name"
										aria-label="reply-name"
										name="reply-name"
										placeholder="Name *"
										required
									/>
								</div>
								<div class="col-md-6 mb-5">
									<input
										type="email"
										class="form-control"
										id="reply-email"
										aria-label="reply-email"
										name="reply-email"
										placeholder="Email *"
										required
									/>
								</div>
							</div>
							<div class="form-checkbox mb-4">
								<input
									type="checkbox"
									class="custom-checkbox"
									id="signin-remember"
									name="signin-remember"
								/>
								<label
									class="form-control-label"
									for="signin-remember"
								>
									Save my name, email, and website in this browser for the next time I
									comment.
								</label>
							</div>
							<button
								type="submit"
								class="btn btn-primary btn-rounded"
							>Submit<i class="d-icon-arrow-right"></i></button>
						</form>
					</div>
				</div>
			</element-card>
		</element-accordion>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';

import CountDown from '~/components/elements/CountDown';
import InputQuantity from '~/components/elements/InputQuantity';
import ProductNav from '~/components/partials/product/ProductNav';
import ElementAccordion from '~/components/elements/ElementAccordion';
import ElementCard from '~/components/elements/ElementCard';

export default {
	components: {
		VueSlideToggle,
		InputQuantity,
		ProductNav,
		CountDown,
		ElementAccordion,
		ElementCard
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
		setRating: function ( e ) {
			if ( e.currentTarget.parentNode.querySelector( '.active' ) )
				e.currentTarget.parentNode
					.querySelector( '.active' )
					.classList.remove( 'active' );
			e.currentTarget.classList.add( 'active' );
		}
	}
};
</script>
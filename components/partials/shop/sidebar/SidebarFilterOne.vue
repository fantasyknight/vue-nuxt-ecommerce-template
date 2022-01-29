<template>
	<aside :class="`col-lg-3 sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper ${sidebarClass}`">
		<div
			class="sidebar-overlay"
			@click="hideSidebar"
		></div>
		<a
			class="sidebar-close"
			href="javascript:;"
			@click.prevent="hideSidebar"
		><i class="d-icon-times"></i></a>

		<div
			class="widget-2 mt-5 d-lg-show"
			v-if="!loaded"
			key="sidebar-content-skel"
		>
		</div>

		<div
			class="sidebar-content"
			v-sticky="isSticky"
			v-else
			sticky-offset="{top: 0}"
			ref="stickySidebar"
		>
			<div
				class="filter-actions mb-4"
				v-if="showFilterButton"
			>
				<a
					href="javascript:;"
					@click.prevent="toggleSidebar($event)"
					class="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-icon-right btn-rounded"
				>Filter<i :class="sidebarClass === 'right-sidebar'? 'd-icon-arrow-right': 'd-icon-arrow-left'"></i></a>
				<nuxt-link
					:to="{path: $route.path, query: $route.query.type ? {type: $route.query.type } : null}"
					class="filter-clean"
				>Clean All</nuxt-link>
			</div>

			<div :class="`widget widget-collapsible ${ !isSticky && !showFilterButton ? 'border-no' : ''}`">
				<h3
					class="widget-title"
					@click="toggleState(0)"
					:class="{'collapsed': !openState[0]}"
				>
					All Categories<span class="toggle-btn"></span>
				</h3>

				<vue-slide-toggle :open="openState[0]">
					<ul class="widget-body filter-items search-ul">
						<li
							v-for="(item, index) in categories"
							:key="`sidebar-${item.slug}`"
							:class="{'with-ul': item.children, 'show': !openState[index + 20] && item.children}"
						>
							<nuxt-link
								:to="{query: {category: item.slug, type: $route.query.type}}"
								:class="{active: item.slug === $route.query.category}"
							>
								{{ item.name }} ({{ item. count }})
								<i
									class="fas fa-chevron-down"
									v-if="item.children"
									@click.prevent="toggleState(index + 20)"
								></i>
							</nuxt-link>

							<vue-slide-toggle
								:open="!openState[index + 20]"
								v-if="item.children"
							>
								<ul>
									<li
										v-for="subItem in item.children[0]"
										:key="`sidebar-sub-${subItem.slug}`"
									>
										<nuxt-link :to="{query: {category: subItem.slug, type: $route.query.type}}">{{ subItem.name }} ({{ subItem. count }})</nuxt-link>
									</li>
								</ul>
							</vue-slide-toggle>
						</li>
					</ul>
				</vue-slide-toggle>
			</div>

			<div class="widget widget-collapsible">
				<h3
					class="widget-title"
					@click="toggleState(1)"
					:class="{'collapsed': !openState[1]}"
				>Filter by Price<span class="toggle-btn"></span></h3>

				<vue-slide-toggle :open="openState[1]">
					<div class="widget-body mt-3">
						<form action="#">
							<div class="filter-price-slider">
								<vue-nouislider
									:config="priceSettings"
									:values="prices"
									v-if="priceReset"
									id="price-slider"
								></vue-nouislider>
							</div>

							<div class="filter-actions price-range-slider">
								<div class="filter-price-text mb-4">Price: ${{ prices[0] }} - ${{ prices[1] }}
									<span class="filter-price-range"></span>
								</div>
								<nuxt-link
									type="submit"
									class="btn btn-dark btn-filter btn-rounded"
									:to="{query: {...$route.query, max_price: prices[1], min_price: prices[0], page: 1}}"
								>Filter</nuxt-link>
							</div>
						</form>
					</div>
				</vue-slide-toggle>
			</div>

			<div class="widget widget-collapsible">
				<h3
					class="widget-title"
					@click="toggleState(2)"
					:class="{'collapsed': !openState[2]}"
				>Size<span class="toggle-btn"></span>
				</h3>

				<vue-slide-toggle :open="openState[2]">
					<ul class="widget-body filter-items">
						<li
							v-for="(item,index) in shopSizes"
							:key="'size-filter' + index"
							:class="{active: isActivedSize(item)}"
						>
							<nuxt-link :to="sizeFilterRoute(item)">{{ item.name }}</nuxt-link>
						</li>
					</ul>
				</vue-slide-toggle>
			</div>

			<div class="widget widget-collapsible">
				<h3
					class="widget-title"
					@click="toggleState(3)"
					:class="{'collapsed': !openState[3]}"
				>Color<span class="toggle-btn"></span>
				</h3>

				<vue-slide-toggle :open="openState[3]">
					<ul class="widget-body filter-items">
						<li
							v-for="(item,index) in shopColors"
							:key="'color-filter' + index"
							:class="{active: isActivedColor(item)}"
						>
							<nuxt-link :to="colorFilterRoute(item)">{{ item.name }}</nuxt-link>
						</li>
					</ul>
				</vue-slide-toggle>
			</div>

			<div class="widget widget-collapsible">
				<h3
					class="widget-title"
					@click="toggleState(4)"
					:class="{'collapsed': !openState[4]}"
				>Brand<span class="toggle-btn"></span>
				</h3>

				<vue-slide-toggle :open="openState[4]">
					<ul class="widget-body filter-items">
						<li
							v-for="(item,index) in shopBrands"
							:key="'brand-filter' + index"
							:class="{active: isActivedBrand(item)}"
						>
							<nuxt-link :to="brandFilterRoute(item)">{{ item.name }}</nuxt-link>
						</li>
					</ul>
				</vue-slide-toggle>
			</div>
		</div>
	</aside>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { VueTreeList, Tree } from 'vue-tree-list';
import Sticky from 'vue-sticky-directive';

import { scrollHandler } from '~/utils';

import Api, { baseUrl, currentDemo } from '~/api';
import { shopColors, shopSizes, shopBrands } from '~/utils/data/shop';

export default {
	components: {
		VueSlideToggle,
		VueTreeList
	},
	directives: {
		Sticky
	},
	props: {
		sidebarClass: {
			type: String,
			default: 'sidebar'
		},
		showFilterButton: {
			type: Boolean,
			default: true
		}
	},
	data: function () {
		return {
			categories: [],
			featured: [],
			openState: new Array( 100 ).fill( true ),
			prices: [ 0, 1000 ],
			priceSettings: {
				connect: true,
				step: 50,
				margin: 100,
				range: {
					min: 0,
					max: 1000
				},
				format: {
					from: Number,
					to: Number
				}
			},
			shopColors: shopColors,
			shopSizes: shopSizes,
			shopBrands: shopBrands,
			priceReset: true,
			loaded: false,
			isSticky: true
		};
	},
	watch: {
		$route: function () {
			console.log("this path is", this.$route);
			scrollHandler();
			this.prices[ 0 ] = this.$route.query.min_price
				? parseInt( this.$route.query.min_price )
				: 0;
			this.prices[ 1 ] = this.$route.query.max_price
				? parseInt( this.$route.query.max_price )
				: 1000;
			this.priceReset = false;

			this.$nextTick( function () {
				this.priceReset = true;
			} );
		}
	},
	created: function () {
			console.log("this path is", this.$route);
		this.prices[ 0 ] = this.$route.query.min_price
			? parseInt( this.$route.query.min_price )
			: 0;
		this.prices[ 1 ] = this.$route.query.max_price ? parseInt( this.$route.query.max_price ) : 1000;
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo-${ currentDemo }/shop/sidebar` )
			.then( response => {
				this.categories = response.data.categories;
				this.featured = response.data.featured;
				this.loaded = true;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	},
	methods: {
		toggleSidebar: function ( e ) {
			if ( window.innerWidth > 991 ) {
				e.currentTarget.closest( '.shop-sidebar' ).classList.toggle( 'closed' );

				if ( e.currentTarget.closest( '.shop-sidebar' ).classList.contains( 'closed' ) && this.$route.query.type !== 'list' )
					e.currentTarget.closest( '.page-content' ).querySelector( '.product-wrapper' ).classList.add( 'cols-md-4' );
				else
					e.currentTarget.closest( '.page-content' ).querySelector( '.product-wrapper' ).classList.remove( 'cols-md-4' );
			} else {
				this.hideSidebar();
			}
		},
		toggleState: function ( index ) {
			let temp = [ ...this.openState ];
			temp[ index ] = !temp[ index ];
			this.openState = temp;
			window.width > 991 &&
				this.$nextTick( () => {
					setTimeout( () => {
						this.$refs.stickySidebar[
							'@@vue-sticky-directive'
						].update();
					}, 140 );
				} );
		},
		sizeFilterRoute: function ( item ) {
			let selectedSizes = this.$route.query.sizes
				? this.$route.query.sizes.split( ',' )
				: [];
			let index = selectedSizes.indexOf( item.slug );
			if ( index > -1 ) {
				selectedSizes.splice( index, 1 );
			} else {
				selectedSizes.push( item.slug );
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					sizes: selectedSizes.toString(),
					page: 1
				}
			};
		},
		colorFilterRoute: function ( item ) {
			let selectedColors = this.$route.query.colors
				? this.$route.query.colors.split( ',' )
				: [];
			let index = selectedColors.indexOf( item.slug );
			if ( index > -1 ) {
				selectedColors.splice( index, 1 );
			} else {
				selectedColors.push( item.slug );
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					colors: selectedColors.toString()
				}
			};
		},
		brandFilterRoute: function ( item ) {
			let selectedBrands = this.$route.query.brands
				? this.$route.query.brands.split( ',' )
				: [];
			let index = selectedBrands.indexOf( item.slug );
			if ( index > -1 ) {
				selectedBrands.splice( index, 1 );
			} else {
				selectedBrands.push( item.slug );
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					brands: selectedBrands.toString()
				}
			};
		},
		isActivedColor: function ( item ) {
			return (
				this.$route.query.colors &&
				this.$route.query.colors.split( ',' ).includes( item.slug )
			);
		},
		isActivedSize: function ( item ) {
			return (
				this.$route.query.sizes &&
				this.$route.query.sizes.split( ',' ).includes( item.slug )
			);
		},
		isActivedBrand: function ( item ) {
			return (
				this.$route.query.brands &&
				this.$route.query.brands.split( ',' ).includes( item.slug )
			);
		},
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
			window.innerWidth > 991 && this.hideSidebar();
		},
		hideSidebar: function () {
			if ( this.sidebarClass === 'right-sidebar' ) {
				document
					.querySelector( 'body' )
					.classList.remove( 'right-sidebar-active' );
			} else {
				document
					.querySelector( 'body' )
					.classList.remove( 'sidebar-active' );
			}
		}
	}
};
</script>
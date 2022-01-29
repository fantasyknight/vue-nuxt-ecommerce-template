<template>
	<sticky-wrapper
		:breakpoint="992"
		type="mobile"
		stickyClass="sticky-toolbox"
		direction="up"
		:offsetTop="450"
	>
		<nav class="toolbox toolbox-horizontal sticky-toolbox sticky-content fix-top">
			<aside class="sidebar sidebar-fixed shop-sidebar">
				<div
					class="sidebar-overlay"
					@click="hideSidebar"
				></div>
				<a
					class="sidebar-close"
					href="javascript:;"
					@click.prevent="hideSidebar"
				><i class="d-icon-times"></i></a>

				<div class="sidebar-content toolbox-left">
					<div class="toolbox-item select-menu">
						<a
							class="select-menu-toggle"
							href="javascript:;"
							@click.prevent="openMenu($event)"
						>Select Size</a>
						<ul class="filter-items">
							<li
								v-for="(item,index) in shopSizes"
								:key="'size-filter' + index"
								:class="{active: isActivedSize(item)}"
								@click="closeMenu($event)"
							>
								<nuxt-link :to="sizeFilterRoute(item)">{{ item.name }}</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="toolbox-item select-menu">
						<a
							class="select-menu-toggle"
							href="javascript:;"
							@click.prevent="openMenu($event)"
						>Select Color</a>
						<ul class="filter-items">
							<li
								v-for="(item,index) in shopColors"
								:key="'color-filter' + index"
								:class="{active: isActivedColor(item)}"
								@click="closeMenu($event)"
							>
								<nuxt-link :to="colorFilterRoute(item)">{{ item.name }}</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="toolbox-item select-menu">
						<a
							class="select-menu-toggle"
							href="javascript:;"
							@click.prevent="openMenu($event)"
						>Select Price</a>
						<ul class="filter-items filter-price">
							<li
								v-for="(item,index) in shopPrices"
								:key="'price-filter-' + index"
								:class="{active: isActivePrice(item)}"
								@click="closeMenu($event)"
							>
								<nuxt-link :to="priceFilterRoute(item)">{{ item.text }}</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</aside>

			<div class="toolbox-left">
				<a
					href="javascript:;"
					@click.prevent="showSidebar"
					class="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right"
					v-if="$route.path.includes('off-canvas')"
					key="offCanvasFilter"
				>Filter<i class="d-icon-arrow-right"></i></a>

				<a
					v-else
					href="javascript:;"
					@click.prevent="showSidebar"
					class="toolbox-item left-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none"
				>Filter<i class="d-icon-arrow-right"></i></a>

				<div class="toolbox-item toolbox-sort select-box text-dark">
					<select
						name="orderby"
						class="form-control"
						v-model="sortBy"
						aria-label="select sort"
						@change="setSortby"
					>
						<option value="default">Default</option>
						<option value="popularity">Most Popular</option>
						<option value="rating">Average rating</option>
						<option value="date">Latest</option>
						<option value="price-low">Sort forward price low</option>
						<option value="price-high">Sort forward price high</option>
						<option value="default">Clear custom sort</option>
					</select>
				</div>
			</div>
			<div class="toolbox-right">
				<div class="toolbox-item toolbox-show select-box text-dark">
					<label>Show :</label>
					<select
						name="count"
						class="form-control"
						v-model="perPage"
						aria-label="select showing count"
						@change="setPerPage"
					>
						<option value="12">12</option>
						<option value="24">24</option>
						<option value="36">36</option>
					</select>
				</div>
				<div class="toolbox-item toolbox-layout">
					<nuxt-link
						:to="{query: {...$route.query, type: 'list'}}"
						class="d-icon-mode-list btn-layout"
						title="select list type"
						:class="{active: $route.query.type === 'list'}"
					></nuxt-link>
					<nuxt-link
						:to="{query: {...$route.query, type: 'grid'}}"
						class="d-icon-mode-grid btn-layout"
						title="select grid type"
						:class="{active: $route.query.type !== 'list'}"
					></nuxt-link>
				</div>
			</div>
		</nav>

		<vue-slide-toggle :open="selectedColors.length > 0 || selectedSizes.length > 0 || selectedPrice !== null">
			<div class="select-items">
				<nuxt-link
					class="select-item"
					v-for="item in selectedSizes"
					:key="`size-value-${item}`"
					:to="removeSizeFilter(item)"
				>{{ item }}<i class="d-icon-times"></i></nuxt-link>

				<nuxt-link
					class="select-item"
					v-for="item in selectedColors"
					:key="`color-value-${item}`"
					:to="removeColorFilter(item)"
				>{{ item }}<i class="d-icon-times"></i></nuxt-link>

				<nuxt-link
					class="select-item"
					v-if="selectedPrice !== null"
					:to="{query: {...$route.query, min_price: null, max_price: null}}"
				>{{ selectedPrice }}<i class="d-icon-times"></i></nuxt-link>

				<nuxt-link
					class="filter-clean text-primary"
					:to="{path: $route.path, query: {type: $route.query.type}}"
				>Clean All</nuxt-link>
			</div>
		</vue-slide-toggle>
	</sticky-wrapper>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import StickyWrapper from '~/components/elements/StickyWrapper';

import { shopColors, shopSizes, shopPrices } from '~/utils/data/shop';

export default {
	components: {
		VueSlideToggle,
		StickyWrapper
	},
	data: function () {
		return {
			sortBy: this.$route.query.sort_by
				? this.$route.query.sort_by
				: 'default',
			perPage: this.$route.query.per_page
				? this.$route.query.per_page
				: 12,
			shopColors: shopColors,
			shopSizes: shopSizes,
			shopPrices: shopPrices,
			selectedColors: [],
			selectedSizes: [],
			selectedPrice: null
		};
	},
	watch: {
		$route: function () {
			this.getItems();

			this.sortBy = this.$route.query.sort_by
				? this.$route.query.sort_by
				: 'default';
			this.perPage = this.$route.query.per_page
				? this.$route.query.per_page
				: 12;
		}
	},
	mounted: function () {
		this.getItems();
		document.addEventListener( 'click', this.removeOpenState );
	},
	methods: {
		getItems: function () {
			let sizes = this.$route.query.sizes
				? this.$route.query.sizes.split( ',' )
				: [];
			this.selectedSizes = [];

			sizes.forEach( item => {
				this.selectedSizes.push( this.getSizeName( item ) );
			} );

			let colors = this.$route.query.colors
				? this.$route.query.colors.split( ',' )
				: [];
			this.selectedColors = [];

			colors.forEach( item => {
				this.selectedColors.push( this.getColorName( item ) );
			} );

			let index = this.shopPrices.findIndex( item => item.value[ 0 ] === parseInt( this.$route.query.min_price ) && item.value[ 1 ] === parseInt( this.$route.query.max_price ) );
			this.selectedPrice = index > -1 ? this.shopPrices[ index ].text : null;
		},
		setSortby: function () {
			this.$router.push( { query: { ...this.$route.query, sort_by: this.sortBy } } );
		},
		setPerPage: function () {
			this.$router.push( { query: { ...this.$route.query, per_page: this.perPage, page: 1 } } );
		},
		showSidebar: function () {
			document.querySelector( 'body' ).classList.add( 'sidebar-active' );
		},
		hideSidebar: function () {
			document.querySelector( 'body' ).classList.remove( 'sidebar-active' );
		},
		openMenu: function ( e ) {
			e.stopPropagation();
			let isOpened = e.currentTarget.closest( '.select-menu' ).classList.contains( 'opened' );
			this.removeOpenState();
			e.currentTarget.closest( '.select-menu' ).classList.toggle( 'opened', !isOpened );
		},
		closeMenu: function ( e ) {
			e.currentTarget.closest( '.select-menu' ).classList.remove( 'opened' );
		},
		sizeFilterRoute: function ( item ) {
			let sizeSlugs = this.$route.query.sizes
				? this.$route.query.sizes.split( ',' )
				: [];
			let index = sizeSlugs.indexOf( item.slug );
			if ( index > -1 ) {
				sizeSlugs.splice( index, 1 );
			} else {
				sizeSlugs.push( item.slug );
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					sizes: sizeSlugs.toString(),
					page: 1
				}
			};
		},
		colorFilterRoute: function ( item ) {
			let colorSlugs = this.$route.query.colors
				? this.$route.query.colors.split( ',' )
				: [];
			let index = colorSlugs.indexOf( item.slug );
			if ( index > -1 ) {
				colorSlugs.splice( index, 1 );
			} else {
				colorSlugs.push( item.slug );
			}

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					colors: colorSlugs.toString()
				}
			};
		},
		priceFilterRoute: function ( item ) {
			if ( item.value[ 0 ] === parseInt( this.$route.query.min_price ) && item.value[ 1 ] === parseInt( this.$route.query.max_price ) )
				return {
					path: this.$route.path,
					query: {
						...this.$route.query,
						page: 1,
						min_price: null,
						max_price: null
					}
				};

			return {
				path: this.$route.path,
				query: {
					...this.$route.query,
					page: 1,
					min_price: item.value[ 0 ],
					max_price: item.value[ 1 ]
				}
			};

			return '/';
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
		isActivePrice: function ( item ) {
			return item.value[ 0 ] === parseInt( this.$route.query.min_price ) && item.value[ 1 ] === parseInt( this.$route.query.max_price );
		},
		getSizeName: function ( slug ) {
			let index = this.shopSizes.findIndex( item => item.slug === slug );
			return this.shopSizes[ index ].name;
		},
		getColorName: function ( slug ) {
			let index = this.shopColors.findIndex( item => item.slug === slug );
			return this.shopColors[ index ].name;
		},
		getSizeSlug: function ( name ) {
			let index = this.shopSizes.findIndex( item => item.name === name );
			return this.shopSizes[ index ].slug;
		},
		getColorSlug: function ( name ) {
			let index = this.shopColors.findIndex( item => item.name === name );
			return this.shopColors[ index ].slug;
		},
		removeSizeFilter: function ( item ) {
			let sizeSlugs = this.$route.query.sizes
				? this.$route.query.sizes.split( ',' )
				: [];
			let index = sizeSlugs.indexOf( this.getSizeSlug( item ) );
			sizeSlugs.splice( index, 1 );

			return {
				query: {
					...this.$route.query,
					sizes: sizeSlugs.toString(),
					page: 1
				}
			};
		},
		removeColorFilter: function ( item ) {
			let colorSlugs = this.$route.query.colors
				? this.$route.query.colors.split( ',' )
				: [];
			let index = colorSlugs.indexOf( this.getColorSlug( item ) );
			colorSlugs.splice( index, 1 );

			return {
				query: {
					...this.$route.query,
					colors: colorSlugs.toString(),
					page: 1
				}
			};
		},
		removeOpenState: function () {
			document.querySelector( '.select-menu.opened' ) && document.querySelector( '.select-menu.opened' ).classList.remove( 'opened' );
		}
	},
	destroyed: function () {
		document.removeEventListener( 'click', this.removeOpenState );
	}
};
</script>
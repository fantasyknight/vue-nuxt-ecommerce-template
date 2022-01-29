<template>
	<sticky-wrapper
		:breakpoint="992"
		type="mobile"
		stickyClass="sticky-toolbox"
		direction="up"
		:offsetTop="450"
	>
		<div class="toolbox-wrap">
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

				<vue-slide-toggle :open="showFilter">
					<div class="sidebar-content">
						<div class="mb-0 mb-lg-4">
							<div class="filter-actions">
								<a
									href="javascript:;"
									class="sidebar-toggle-btn toggle-remain btn btn-sm btn-outline btn-rounded btn-primary"
									@click.prevent="hideSidebar"
								>Filter<i class="d-icon-arrow-left"></i></a>
								<nuxt-link
									:to="{path: $route.path, query: $route.query.type ? {type: $route.query.type } : null}"
									class="filter-clean"
								>Clean All</nuxt-link>
							</div>

							<div class="row cols-lg-4">
								<div class="widget">
									<h3 class="widget-title">Size</h3>
									<ul class="widget-body filter-items">
										<li
											v-for="(item,index) in shopSizes"
											:key="'size-filter' + index"
											:class="{active: isActivedSize(item)}"
										>
											<nuxt-link :to="sizeFilterRoute(item)">{{ item.name }}</nuxt-link>
										</li>
									</ul>
								</div>
								<div class="widget">
									<h3 class="widget-title">Color</h3>
									<ul class="widget-body filter-items">
										<li
											v-for="(item,index) in shopColors"
											:key="'color-filter' + index"
											:class="{active: isActivedColor(item)}"
										>
											<nuxt-link :to="colorFilterRoute(item)">{{ item.name }}</nuxt-link>
										</li>
									</ul>
								</div>
								<div class="widget price-with-count">
									<h3 class="widget-title">Price</h3>
									<ul class="widget-body filter-items filter-price">
										<li
											v-for="(item,index) in navigationPrices"
											:key="'price-filter-' + index"
											:class="{active: isActivePrice(item)}"
										>
											<nuxt-link :to="priceFilterRoute(item)">{{ item.text }}</nuxt-link>
										</li>
									</ul>
								</div>
								<div class="widget">
									<h3 class="widget-title">Tags</h3>
									<div class="widget-body pt-2">
										<nuxt-link
											:to="tagFilterRoute(item)"
											class="tag"
											v-for="item in shopTags"
											:key="`shop-tag-${item.slug}`"
											:class="{active: $route.query.tag === item.slug}"
										>{{ item.name }}</nuxt-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</vue-slide-toggle>
			</aside>

			<div class="toolbox sticky-toolbox sticky-content fix-top">
				<div class="toolbox-left">
					<a
						href="javascript:;"
						class="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-left font-primary"
						@click.prevent="expandFilter"
					><i class="d-icon-filter-2"></i>Filter</a>
				</div>

				<div
					class="toolbox-right"
					:class="{hide: showFilter}"
				>
					<div class="toolbox-item toolbox-sort select-box text-dark">
						<label>Sort By :</label>
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
			</div>
		</div>
	</sticky-wrapper>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

import StickyWrapper from '~/components/elements/StickyWrapper';

import { shopColors, shopSizes, navigationPrices, shopTags } from '~/utils/data/shop';

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
			shopColors: shopColors,
			shopSizes: shopSizes,
			navigationPrices: navigationPrices,
			showFilter: false,
			shopTags: shopTags
		};
	},
	watch: {
		$route: function () {
			this.sortBy = this.$route.query.sort_by
				? this.$route.query.sort_by
				: 'default';
		}
	},
	methods: {
		setSortby: function () {
			this.$router.push( { query: { ...this.$route.query, sort_by: this.sortBy } } );
		},
		showSidebar: function () {
			document.querySelector( 'body' ).classList.add( 'sidebar-active' );
		},
		hideSidebar: function () {
			document.querySelector( 'body' ).classList.remove( 'sidebar-active' );
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
		priceFilterRoute: function ( item ) {
			if ( item.min === parseInt( this.$route.query.min_price ) && item.max === parseInt( this.$route.query.max_price ) )
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
		},
		tagFilterRoute: function ( item ) {
			if ( this.$route.query.tag === item.slug )
				return {
					query: {
						...this.$route.query,
						page: 1,
						tag: null
					}
				};
			return {
				query: {
					...this.$route.query,
					page: 1,
					tag: item.slug
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
		isActivePrice: function ( item ) {
			if ( item.text === 'All' && !this.$route.query.min_price && !this.$route.query.max_price ) return true;
			return item.value[ 0 ] === parseInt( this.$route.query.min_price ) && item.value[ 1 ] === parseInt( this.$route.query.max_price );
		},
		closeFilter: function ( e ) {
			this.showFilter = !this.showFilter;
		},
		expandFilter: function () {
			if ( window.innerWidth >= 992 )
				this.showFilter = !this.showFilter;
			else
				this.showSidebar();
		}
	}
};
</script>
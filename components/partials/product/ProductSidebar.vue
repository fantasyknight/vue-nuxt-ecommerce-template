<template>
	<aside
		:class="`col-lg-3 sidebar-fixed sticky-sidebar-wrapper ${type === 'left' ? 'sidebar' : 'right-sidebar'} skeleton-body`"
		sticky-container
	>
		<div
			class="sidebar-overlay"
			@click="sidebarToggleHandler"
		>
			<a
				class="sidebar-close"
				href="javascript:;"
			><i class="d-icon-times"></i></a>
		</div>
		<a
			href="javascript:;"
			@click="sidebarToggleHandler"
			class="sidebar-toggle"
			v-if="type === 'right'"
		><i class="fas fa-chevron-left"></i></a>
		<a
			href="javascript:;"
			@click="sidebarToggleHandler"
			class="sidebar-toggle"
			v-else
		><i class="fas fa-chevron-right"></i></a>

		<div
			v-sticky="isSticky"
			sticky-offset="{top: 80}"
		>
			<template>
				<div
					class="widget-2"
					:class="loaded ? 'd-none': ''"
				></div>
			</template>

			<div
				class="sidebar-content"
				:class="loaded ? '': 'd-none'"
				v-images-loaded.on="handleSkeleton"
			>
				<div class="service-list mb-4">
					<div class="icon-box icon-box-side icon-box3">
						<span class="icon-box-icon">
							<i class="d-icon-secure"></i>
						</span>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize">Secured Payment</h4>
							<p>We secure payment!</p>
						</div>
					</div>
					<div class="icon-box icon-box-side icon-box1">
						<span class="icon-box-icon">
							<i class="d-icon-truck"></i>
						</span>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize">Free Shipping</h4>
							<p>For all orders over $99</p>
						</div>
					</div>
					<div class="icon-box icon-box-side icon-box2">
						<span class="icon-box-icon">
							<i class="d-icon-money"></i>
						</span>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize">Money Back</h4>
							<p>Any back within 30 days</p>
						</div>
					</div>
				</div>

				<div class="banner banner-fixed mb-7">
					<figure>
						<img
							v-lazy="'images/product-banner.jpg'"
							alt="banner"
							width="280"
							height="320"
							effect="opacity"
							style="background-color: #ededed"
						/>
					</figure>

					<div class="banner-content text-center">
						<h5 class="banner-subtitle ls-l text-uppercase mb-0">Gucci Shoes</h5>
						<h3 class="banner-title ls-s text-uppercase mb-0">New Trend 2021</h3>
					</div>
				</div>

				<div
					class="widget widget-products widget-collapsible"
					v-if="featured"
				>
					<h4 class="widget-title mb-3 lh-1 text-capitalize ">Related Products</h4>

					<ul class="widget-body mb-0">
						<swiper-carousel
							:options="baseSlider4"
							class="swiper-nav-top"
						>
							<div class="products-col swiper-slide">
								<product-small
									:product="item"
									v-for="item in featured.slice(0,3)"
									:key="`product-small-${item.slug}`"
								>
								</product-small>
							</div>

							<div class="products-col swiper-slide">
								<product-small
									:product="item"
									v-for="item in featured.slice(3,6)"
									:key="`product-small-${item.slug}`"
								>
								</product-small>
							</div>
						</swiper-carousel>
					</ul>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';
import Sticky from 'vue-sticky-directive';
import { VueSlideToggle } from 'vue-slide-toggle';

import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductSmall from '~/components/elements/product/ProductSmall';
import PostSix from '~/components/elements/post/PostSix';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider4 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		VueSlideToggle,
		PostSix,
		ProductSmall
	},
	directives: {
		Sticky,
		imagesLoaded
	},
	props: {
		type: {
			type: String,
			default: 'right'
		}
	},
	data: function () {
		return {
			featured: null,
			baseSlider4: baseSlider4,
			loaded: false,
			search: '',
			isCatExpanded: true,
			isRecentExpanded: true,
			isAboutExanded: true,
			isTagExanded: true,
			isSticky: false
		};
	},
	created: function () {
		this.getBlog();
	},
	mounted: function () {
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler, {
			passive: true
		} );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		getBlog: function () {
			let params = {
				only_data: true
			};

			Api.get( `${ baseUrl }/demo-${ currentDemo }/shop/sidebar`, {
				params: params
			} )
				.then( response => {
					this.featured = response.data.featured;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		sidebarToggleHandler: function () {
			document
				.querySelector( 'body' )
				.classList.toggle(
					`${ this.type === 'right' ? 'right-' : '' }sidebar-active`
				);
		},
		handleSkeleton: function () {
			this.loaded = true;
		},
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>
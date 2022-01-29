<template>
	<main class="main single-product">
		<div
			class="page-content mb-10 pb-6"
			v-if="loaded"
		>
			<div
				class="container"
				v-if="product"
			>
				<div class="product-navigation">
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

				<div class="product product-single product-sticky-both mb-8">
					<div class="row">
						<div class="col-lg-6">
							<media-six :product="product"></media-six>
						</div>

						<div
							class="col-lg-3 col-md-6 order-lg-first"
							sticky-container
						>
							<detail-left
								:product="product"
								v-sticky="isSticky"
								sticky-offset="{top: 85}"
							></detail-left>
						</div>

						<div
							class="col-lg-3 col-md-6"
							sticky-container
						>
							<detail-right
								:product="product"
								v-sticky="isSticky"
								sticky-offset="{top: 85}"
							></detail-right>
						</div>
					</div>
				</div>

				<desc-one :product="product"></desc-one>

				<related-products
					:products="related"
					class="pt-3 mt-10"
				></related-products>
			</div>
		</div>

		<template v-else>
			<div class="skeleton-body sticky-both container mt-10 pt-3 mb-10">
				<div class="row p-relative">
					<div class="product-gallery sticky col-lg-6">
						<div class="skel-pro-gallery"></div>
					</div>

					<div class="product-details sticky">
						<div class="skel-pro-summary mt-4 mt-md-0"></div>
					</div>
				</div>

				<div class="skel-pro-tabs"></div>

				<section class="pt-3 mt-4">
					<h2 class="title justify-content-center">Related Products</h2>

					<swiper-carousel
						class="skel-carousel swiper-theme swiper-nav-full related-products-carousel"
						:options="baseSlider17"
					>
						<div
							v-for="item in [1,2,3,4,5,6]"
							:key="'product-skel-' + item"
							class="swiper-slide product-loading-overlay"
						></div>
					</swiper-carousel>
				</section>
			</div>
		</template>
	</main>
</template>

<script>
import Sticky from 'vue-sticky-directive';

import MediaSix from '~/components/partials/product/media/MediaSix';
import DetailLeft from '~/components/partials/product/detail/DetailLeft';
import DetailRight from '~/components/partials/product/detail/DetailRight';
import DescOne from '~/components/partials/product/desc/DescOne';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductNav from '~/components/partials/product/ProductNav';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		MediaSix,
		DetailLeft,
		DetailRight,
		DescOne,
		RelatedProducts,
		ProductNav
	},
	directives: {
		Sticky
	},
	data: function () {
		return {
			baseSlider17: baseSlider17,
			product: null,
			loaded: false,
			prev: null,
			next: null,
			related: [],
			isSticky: false
		};
	},
	created: function () {
		this.loaded = false;

		Api.get(
			`${ baseUrl }/demo-${ currentDemo }/product/${ this.$route.params.slug }`
		)
			.then( response => {
				this.product = response.data.data;
				this.next = response.data.next;
				this.prev = response.data.prev;
				this.related = response.data.related;
				this.loaded = true;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
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
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>
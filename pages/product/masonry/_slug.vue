<template>
	<main class="main mt-6 single-product product-layout-masonry">
		<div
			class="page-content mb-10 pb-6"
			v-if="loaded"
		>
			<div
				class="container"
				v-if="product"
			>
				<div class="product product-single row mb-2">
					<div class="col-md-6">
						<media-three :product="product"></media-three>
					</div>

					<div
						class="col-md-6"
						sticky-container
					>
						<detail-three
							v-sticky="isSticky"
							sticky-offset="{top: 85}"
							:product="product"
							:prev="prev"
							:next="next"
						></detail-three>
					</div>
				</div>

				<related-products
					:products="related"
					class="pt-3 mt-10"
				></related-products>
			</div>
		</div>

		<template v-else>
			<div class="skeleton-body container mb-10">
				<div class="row mb-2">
					<div class="col-md-6 product-masonry-type">
						<div class="skel-pro-gallery"></div>
					</div>

					<div class="col-md-6">
						<div class="skel-pro-summary mt-4 mt-md-0"></div>
						<div class="skel-pro-tabs"></div>
					</div>
				</div>

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

import MediaThree from '~/components/partials/product/media/MediaThree';
import DetailThree from '~/components/partials/product/detail/DetailThree';
import DescOne from '~/components/partials/product/desc/DescOne';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		MediaThree,
		DetailThree,
		DescOne,
		RelatedProducts
	},
	directives: {
		Sticky
	},
	data: function() {
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
	created: function() {
		this.loaded = false;

		Api.get(
			`${baseUrl}/demo-${currentDemo}/product/${this.$route.params.slug}`
		)
			.then(response => {
				this.product = response.data.data;
				this.next = response.data.next;
				this.prev = response.data.prev;
				this.related = response.data.related;
				this.loaded = true;
			})
			.catch(error => ({ error: JSON.stringify(error) }));
	},
	mounted: function() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>
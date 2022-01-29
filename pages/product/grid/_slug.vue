<template>
	<main class="main mt-6 product-layout-grid">
		<div
			class="page-content mb-10 pb-6"
			v-if="loaded"
		>
			<div
				class="container"
				v-if="product"
			>
				<div class="product product-single row mb-8">
					<div class="col-md-6">
						<media-two :product="product"></media-two>
					</div>

					<div class="col-md-6">
						<detail-two
							:product="product"
							:prev="prev"
							:next="next"
						></detail-two>
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
			<div class="skeleton-body container mb-10">
				<div class="row mb-7">
					<div class="col-md-6 sticky-sidebar-wrapper cols-sm-2">
						<div class="skel-pro-gallery"></div>
					</div>

					<div class="col-md-6">
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
import MediaTwo from '~/components/partials/product/media/MediaTwo';
import DetailTwo from '~/components/partials/product/detail/DetailTwo';
import DescOne from '~/components/partials/product/desc/DescOne';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		MediaTwo,
		DetailTwo,
		DescOne,
		RelatedProducts
	},
	data: function() {
		return {
			baseSlider17: baseSlider17,
			product: null,
			loaded: false,
			prev: null,
			next: null,
			related: []
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
	}
};
</script>
<template>
	<main class="main single-product product-layout-gallery">
		<div
			class="page-content mb-10 pb-6"
			v-if="loaded"
		>
			<div
				class="container"
				v-if="product"
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

				<div class="product product-single mb-4">
					<media-four :product="product"></media-four>

					<detail-four
						:product="product"
						:prev="prev"
						:next="next"
					></detail-four>
				</div>

				<desc-one :product="product"></desc-one>

				<related-products
					:products="related"
					class="pt-3 mt-10"
				></related-products>
			</div>
		</div>

		<template v-else>
			<div class="skeleton-body product product-single container mt-10 pt-3 mb-10">
				<div class="pg-gallery mb-4">
					<div class="skel-pro-gallery mb-6"></div>

					<div class="skel-pro-summary"></div>
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
import MediaFour from '~/components/partials/product/media/MediaFour';
import DetailFour from '~/components/partials/product/detail/DetailFour';
import DescOne from '~/components/partials/product/desc/DescOne';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductNav from '~/components/partials/product/ProductNav';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		MediaFour,
		DetailFour,
		DescOne,
		RelatedProducts,
		ProductNav
	},
	props: {
		showNav: {
			type: Boolean,
			default: true
		}
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
<template>
	<section
		class="product-wrapper container appear-animate mt-6 mt-md-10 pt-4 pb-8"
		data-animation-options="{
                    'delay': '.3s'
                }"
		v-animate
	>
		<h2 class="title title-center mb-5">Best Sellers</h2>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="bestSlider"
			v-if="!products"
		>
			<div
				class="swiper-slide"
				v-for="item in [1,2,3,4,5]"
				:key="`best-skel-${item}`"
			>
				<div class="product-loading-overlay"></div>
			</div>
		</swiper-carousel>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="bestSlider"
			v-else
		>
			<div
				class="swiper-slide"
				v-for="item in products"
				:key="`best-${item.slug}`"
			>
				<product-two
					class="text-center"
					:product="item"
				></product-two>
			</div>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';

import { bestSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		ProductTwo
	},
	props: {
		products: Array
	},
	data: function() {
		return {
			bestSlider: bestSlider
		};
	}
};
</script>
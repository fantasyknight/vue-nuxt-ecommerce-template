<template>
	<section
		class="product-wrapper mt-6 mt-md-10 pt-4 mb-10 pb-2 container appear-animate featured-collection"
		data-animation-options="{
                    'delay': '.6s'
                }"
		v-animate
	>
		<h2 class="title title-center">Our Featured</h2>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="featuredSlider"
			v-if="!products"
		>
			<div
				class="swiper-slide"
				v-for="item in [1,2,3,4,5]"
				:key="`featured-skel-${item}`"
			>
				<div class="product-loading-overlay"></div>
			</div>
		</swiper-carousel>

		<swiper-carousel
			class="swiper-theme swiper-nav-full"
			:options="featuredSlider"
			v-else
		>
			<div
				class="swiper-slide"
				v-for="item in products"
				:key="`featured-${item.slug}`"
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

import { featuredSlider } from '~/utils/data/carousel';

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
			featuredSlider: featuredSlider
		};
	}
};
</script>
<template>
	<section v-if="products.length > 0">
		<h2 class="title justify-content-center">Related Products</h2>

		<swiper-carousel
			class="swiper-theme swiper-nav-full related-products-carousel"
			:options="baseSlider17"
		>
			<product-two
				class="swiper-slide"
				:product="item"
				v-for="item in products.slice(0, 4)"
				:key="`related-produts-${item.slug}`"
			></product-two>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	props: {
		products: Array
	},
	components: {
		SwiperCarousel,
		ProductTwo
	},
	data: function () {
		return {
			baseSlider17: baseSlider17
		};
	}
};
</script>
<template>
	<section
		class="mt-2 pb-6 pt-10 pb-md-10 appear-animate"
		data-animation-options="{
                    'delay': '.3s'
                }"
		v-animate
	>
		<h2 class="title d-none">Our Brand</h2>
		<div class="container">
			<swiper-carousel
				class="swiper-theme brand-carousel"
				:options="brandSlider"
			>
				<div
					class="swiper-slide"
					v-for="item in [1,2,3,4,5,6]"
					:key="`brand-${item}`"
				>
					<figure>
						<img
							v-lazy="`images/brands/${item}.png`"
							alt="brand"
							width="180"
							height="100"
							class="d-block"
						/>
					</figure>
				</div>
			</swiper-carousel>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { brandSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			brandSlider: brandSlider
		}
	}
}
</script>
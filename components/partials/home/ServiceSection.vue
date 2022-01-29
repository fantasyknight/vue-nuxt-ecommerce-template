<template>
	<div
		class="container mt-6 appear-animate"
		v-animate
	>
		<div class="service-list">
			<swiper-carousel
				class="swiper-theme"
				:options="serviceSlider"
			>
				<div class="swiper-slide">
					<div
						class="icon-box icon-box-side icon-box1 appear-animate"
						v-animate
						data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.3s'
                                    }"
					>
						<i class="icon-box-icon d-icon-truck"></i>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize ls-normal lh-1">Free Shipping &amp;
								Return
							</h4>
							<p class="ls-s lh-1">Free shipping on orders over $99</p>
						</div>
					</div>
				</div>

				<div class="swiper-slide">
					<div
						class="icon-box icon-box-side icon-box2 appear-animate"
						v-animate
						data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.4s'
                                    }"
					>
						<i class="icon-box-icon d-icon-service"></i>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize ls-normal lh-1">Customer Support 24/7
							</h4>
							<p class="ls-s lh-1">Instant access to perfect support</p>
						</div>
					</div>
				</div>

				<div class="swiper-slide">
					<div
						class="icon-box icon-box-side icon-box3 appear-animate"
						v-animate
						data-animation-options="{
                                        'name': 'fadeInRightShorter',
                                        'delay': '.5s'
                                    }"
					>
						<i class="icon-box-icon d-icon-secure"></i>
						<div class="icon-box-content">
							<h4 class="icon-box-title text-capitalize ls-normal lh-1">100% Secure Payment
							</h4>
							<p class="ls-s lh-1">We ensure secure payment!</p>
						</div>
					</div>
				</div>
			</swiper-carousel>
		</div>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import { serviceSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			serviceSlider: serviceSlider
		}
	}
}
</script>
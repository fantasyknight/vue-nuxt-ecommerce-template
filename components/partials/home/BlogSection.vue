<template>
	<section
		class="blog-post-wrapper mt-6 mt-md-10 pt-7 appear-animate"
		data-animation-options="{'name': 'fadeIn', 'duration': '1s'}"
		v-animate
	>
		<div class="container">
			<h2 class="title title-center">Featured Articles</h2>

			<swiper-carousel
				class="swiper-theme post-slider"
				:options="blogSlider"
			>
				<div
					class="swiper-slide"
					v-for="item in posts"
					overlay-class="overlay-zoom"
					:key="`post-${item.slug}`"
				>
					<post-one
						class="post-frame mb-4"
						:post="item"
						:showLarge="true"
						btn-class="btn-underline btn-primary"
					></post-one>
				</div>
			</swiper-carousel>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import PostOne from '~/components/elements/post/PostOne';

import { blogSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		PostOne
	},
	props: {
		posts: Array
	},
	data: function () {
		return {
			blogSlider: blogSlider
		}
	}
}
</script>
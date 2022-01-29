<template>
	<div class="related-posts">
		<h3 class="title title-simple text-left text-normal font-weight-bold ls-normal">Related Posts</h3>

		<swiper-carousel
			class="swiper-theme"
			:options="baseSlider10"
		>
			<template>
				<div
					class="skel-post swiper-slide"
					v-for="(item, index) in new Array(5).fill(1)"
					:key="'skel' + index"
					:class="loaded ? 'd-none': ''"
				></div>
			</template>

			<template>
				<post-one
					class="swiper-slide"
					:post="item"
					v-for="(item, index) in related"
					:key="'related' + index"
					btn-class="btn-underline btn-primary"
				>
				</post-one>
			</template>
		</swiper-carousel>

	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import PostOne from '~/components/elements/post/PostOne';

import { baseSlider10 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		PostOne
	},
	props: {
		related: null,
		loaded: false
	},
	data: function() {
		return {
			baseSlider10: baseSlider10
		};
	}
};
</script>
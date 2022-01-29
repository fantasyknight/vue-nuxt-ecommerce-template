<template>
	<div class="product-gallery product-extended mb-6">
		<swiper-carousel
			class="product-gallery-carousel swiper-theme swiper-nav-full w-100"
			:options="{...baseSlider8,
				pagination: false,
				spaceBetween: 20,
				navigation: {
					nextEl: '.swiper-nav .swiper-next',
					prevEl: '.swiper-nav .swiper-prev'
				}
			}"
			ref="mediaRef"
		>
			<div
				class="swiper-slide "
				v-for="(item,index) in product.large_pictures"
				:key="`large-${index}`"
			>
				<img
					:src="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
				/>

				<a
					href="javascript:;"
					class="product-image-full"
					@click="openLightBox(index)"
				>
					<i class="d-icon-zoom"></i>
				</a>
			</div>
		</swiper-carousel>

		<light-box
			ref="lightBox"
			:media="lightBoxMedia"
			:show-light-box="false"
		/>

		<div class="product-label-group">
			<div
				class="product-label label-new"
				v-if="product.is_new"
			>New</div>
			<div
				class="product-label label-stock"
				v-if="product.stock === '0'"
			>Out</div>
			<div
				class="product-label label-top"
				v-if="product.is_top"
			>Top</div>
			<div
				class="product-label label-sale"
				v-if="product.discount > 0"
			>
				<template v-if="product.variants.length > 0">Sale</template>
				<template v-else>-{{ product.discount }}%</template>
			</div>
		</div>
	</div>
</template>

<script>
import LightBox from 'vue-image-lightbox';

import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { baseUrl } from '~/api';
import { baseSlider8 } from '~/utils/data/carousel';

export default {
	components: {
		LightBox,
		SwiperCarousel
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider8: baseSlider8
		};
	},
	props: {
		product: Object
	},
	computed: {
		lightBoxMedia: function () {
			return this.product.large_pictures.reduce( ( acc, cur ) => {
				return [
					...acc,
					{
						src: `${ baseUrl }${ cur.url }`,
						thumb: `${ baseUrl }${ cur.url }`
					}
				];
			}, [] );
		}
	},
	methods: {
		openLightBox: function ( index ) {
			this.$refs.lightBox.showImage( index );
		}
	}
};
</script>
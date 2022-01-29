<template>
	<div class="product-gallery row mb-0">
		<div
			class="product-image col-lg-12 col-sm-6 mb-4"
			v-for="(item,index) in product.large_pictures.slice(0, 4)"
			:key="`product-grid-${index}`"
		>
			<img
				v-lazy="`${baseUrl}${item.url}`"
				alt="product-image"
				:width="item.width"
				:height="item.height"
			>

			<a
				href="javascript:;"
				class="product-image-full"
				@click="openLightBox(index)"
			>
				<i class="d-icon-zoom"></i>
			</a>
		</div>

		<light-box
			ref="lightBox"
			:media="lightBoxMedia"
			:show-light-box="false"
		/>

		<div class="product-label-group d-block">
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

import { baseUrl } from '~/api';

export default {
	components: {
		LightBox
	},
	data: function () {
		return {
			baseUrl: baseUrl
		};
	},
	props: {
		product: Object
	},
	computed: {
		lightBoxMedia: function () {
			return this.product.large_pictures
				.slice( 0, 4 )
				.reduce( ( acc, cur ) => {
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
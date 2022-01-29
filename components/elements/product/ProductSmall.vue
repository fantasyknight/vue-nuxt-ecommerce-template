<template>
	<div class="product product-list-sm">
		<figure class="product-media">
			<nuxt-link :to="`/product/default/${product.slug}`">
				<img
					v-for="(item,index) in product.large_pictures.slice(0,2)"
					:key="`one-large-${index}`"
					v-lazy="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
					:class="{'last-image': index === 1}"
				/>
			</nuxt-link>
		</figure>

		<div class="product-details">
			<h3 class="product-name">
				<nuxt-link :to="'/product/default/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

			<div class="product-price">
				<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
					<span class="price">${{ product.display_price[0] | priceFormat  }}</span>
				</template>

				<template v-else>
					<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
						<ins class="new-price">${{ product.display_price[0] | priceFormat }}</ins>
						<del class="old-price">${{ product.display_price[1] | priceFormat }}</del>
					</template>

					<template v-else>
						<ins class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</ins>
					</template>
				</template>
			</div>

			<div class="ratings-container">
				<div class="ratings-full">
					<span
						class="ratings"
						:style="{width: product.ratings * 20 + '%'}"
					></span>
					<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
				</div>
				<a
					href="javascript:;"
					class="rating-reviews"
				>( {{ product.reviews }} reviews )</a>
			</div>
		</div>
	</div>
</template>

<script>
import { baseUrl } from '~/api';

export default {
	props: {
		product: Object
	},
	data: function () {
		return {
			baseUrl: baseUrl
		}
	}
}
</script>
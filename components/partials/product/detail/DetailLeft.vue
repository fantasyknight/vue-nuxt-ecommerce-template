<template>
	<div class="product-details pb-4">
		<h2 class="product-name">{{ product.name }}</h2>

		<div class='product-meta'>
			<template v-if="product.sku">
				SKU: <span class='product-sku'>{{ product.sku }}</span>
			</template>
			CATEGORIES: <span class='product-brand'>
				<span
					v-for="(item, index) in product.product_categories"
					:key="`category-${item.slug}`"
				>
					<nuxt-link :to="{path:'/shop', query:{category: item.slug}}">
						{{ item.name }}
					</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</span>
		</div>

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

		<template v-if="product.discount > 0">
			<count-down
				class="product-countdown-container font-weight-semi-bold"
				until='2021-12-31'
				:type="2"
			></count-down>
		</template>

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

		<p class="product-short-desc">{{ product.short_description }}</p>
	</div>
</template>

<script>
import CountDown from '~/components/elements/CountDown';

export default {
	components: {
		CountDown
	},
	props: {
		product: Object
	}
};
</script>
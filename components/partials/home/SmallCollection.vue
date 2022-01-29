<template>
	<section
		class="product-widget-wrapper pb-2 pb-md-10 appear-animate"
		v-animate
	>
		<div class="container skeleton-body">
			<div class="row">
				<div class="col-lg-3 col-sm-6 mb-4">
					<div
						class="widget widget-products appear-animate"
						data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.5s'
                                }"
						v-animate
					>
						<h4 class="widget-title border-no lh-1 font-weight-bold">Sale Products</h4>

						<div
							class="products-col"
							v-if="!onSale"
							key="sale-skel"
						>
							<div
								class="skel-pro-list mb-4"
								v-for="item in [1,2,3]"
								:key="`small-sale-skel-${item}`"
							></div>
						</div>

						<div
							class="products-col"
							v-else
						>
							<product-small
								:product="item"
								v-for="item in onSale.slice(0,3)"
								:key="`small-sale-${item.slug}`"
							></product-small>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6 mb-4">
					<div
						class="widget widget-products appear-animate"
						data-animation-options="{
                                    'name': 'fadeInLeftShorter',
                                    'delay': '.3s'
                                }"
						v-animate
					>
						<h4 class="widget-title border-no lh-1 font-weight-bold">Latest Products</h4>

						<div
							class="products-col"
							v-if="!latest"
							key="latest-skel"
						>
							<div
								class="skel-pro-list mb-4"
								v-for="item in [1,2,3]"
								:key="`small-latest-skel-${item}`"
							></div>
						</div>

						<div
							class="products-col"
							v-else
						>
							<product-small
								:product="item"
								v-for="item in latest.slice(0,3)"
								:key="`small-latest-${item.slug}`"
							></product-small>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6 mb-4">
					<div
						class="widget widget-products appear-animate"
						data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.3s'
                                }"
						v-animate
					>
						<h4 class="widget-title border-no lh-1 font-weight-bold">Best of the Week</h4>

						<div
							class="products-col"
							v-if="!bestSelling"
							key="best-skel"
						>
							<div
								class="skel-pro-list mb-4"
								v-for="item in [1,2,3]"
								:key="`small-best-skel-${item}`"
							></div>
						</div>

						<div
							class="products-col"
							v-else
						>
							<product-small
								:product="item"
								v-for="item in bestSelling.slice(0,3)"
								:key="`small-best-${item.slug}`"
							></product-small>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-sm-6 mb-4">
					<div
						class="widget widget-products appear-animate"
						data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.5s'
                                }"
						v-animate
					>
						<h4 class="widget-title border-no lh-1 font-weight-bold">Popular</h4>

						<div
							class="products-col"
							v-if="!topRated"
							key="top-skel"
						>
							<div
								class="skel-pro-list mb-4"
								v-for="item in [1,2,3]"
								:key="`small-top-skel-${item}`"
							></div>
						</div>

						<div
							class="products-col"
							v-else
						>
							<product-small
								:product="item"
								v-for="item in topRated.slice(0,3)"
								:key="`small-top-${item.slug}`"
							></product-small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductSmall from '~/components/elements/product/ProductSmall';

export default {
	components: {
		ProductSmall
	},
	props: {
		bestSelling: Array,
		topRated: Array,
		latest: Array,
		onSale: Array
	}
}
</script>
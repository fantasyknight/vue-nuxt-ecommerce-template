<template>
	<div class="p-relative">
		<toolbox-one></toolbox-one>

		<div
			:class="`${$route.query.type === 'list' ? 'product-lists': 'row cols-2 cols-sm-3'} product-wrapper p-relative`"
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="noMore"
			infinite-scroll-distance="-300"
			infinite-scroll-throttle-delay="1500"
		>
			<template v-if="loaded">
				<template v-if="products.length > 0">
					<div
						class="product-wrap"
						v-for="item in products"
						:key="`shop-${item.slug}`"
					>
						<product-two
							:product="item"
							v-if="$route.query.type !== 'list'"
						></product-two>

						<product-eight
							:product="item"
							v-else
						></product-eight>
					</div>
				</template>
			</template>

			<template v-else>
				<div
					class="product-wrap"
					v-for="(item,index) in new Array(12).fill(1)"
					:key="`shop-skel-${index}`"
				>
					<div
						class="product-loading-overlay"
						v-if="$route.query.type !== 'list'"
					></div>

					<div
						class="skel-pro skel-pro-list mb-4"
						v-else
					></div>
				</div>
			</template>
		</div>

		<p v-if="loaded && products.length === 0">No products were found matching your selection.</p>

		<div
			class="loading product-loading"
			ref="infiniteSpinner"
		></div>
	</div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';

import ProductTwo from '~/components/elements/product/ProductTwo';
import ProductEight from '~/components/elements/product/ProductEight';
import ToolboxOne from '~/components/partials/shop/toolbox/ToolboxOne';

import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		ToolboxOne,
		ProductTwo,
		ProductEight
	},
	directives: {
		infiniteScroll
	},
	data: function () {
		return {
			products: null,
			total: 0,
			loadedCount: this.$route.query.per_page
				? parseInt( this.$route.query.per_page )
				: 12,
			loaded: false
		};
	},
	computed: {
		noMore: function () {
			return this.loadedCount >= this.total;
		}
	},
	watch: {
		$route: function () {
			this.$refs.infiniteSpinner.style.display = 'none';
			this.getProducts();
		}
	},
	mounted: function () {
		this.loadedCount = this.$route.query.per_page
			? parseInt( this.$route.query.per_page )
			: 12;
		Api.get( `${ baseUrl }/demo-${ currentDemo }/shop`, {
			params: {
				...this.$route.query,
				is_product: true,
				is_post: false,
				from: 0,
				to: this.loadedCount
			}
		} )
			.then( response => {
				this.products = response.data.data;
				this.total = response.data.total;
				this.loaded = true;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	},
	methods: {
		loadMore: function ( e ) {
			this.$refs.infiniteSpinner.style.display = 'block';
			Api.get( `${ baseUrl }/demo-${ currentDemo }/shop`, {
				params: {
					...this.$route.query,
					is_product: true,
					is_post: false,
					from: this.loadedCount,
					to: this.loadedCount + 3
				}
			} )
				.then( response => {
					setTimeout( () => {
						this.products = [
							...this.products,
							...response.data.data
						];
						this.total = response.data.total;

						this.loadedCount += 3;
						this.$refs.infiniteSpinner.style.display = 'none';
					}, 500 );
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		getProducts: function () {
			this.loadedCount = this.$route.query.per_page
				? parseInt( this.$route.query.per_page )
				: 12;
			this.products = null;
			this.loaded = false;

			Api.get( `${ baseUrl }/demo-${ currentDemo }/shop`, {
				params: {
					...this.$route.query,
					is_product: true,
					is_post: false,
					from: 0,
					to: this.loadedCount
				}
			} )
				.then( response => {
					this.products = response.data.data;
					this.total = response.data.total;
					this.loaded = true;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>
<template>
	<main class="main single-product">
		<div
			class="page-content mb-10"
			v-if="loaded"
		>
			<div
				class="container-fluid"
				v-if="product"
			>
				<div class="product-navigation">
					<ul class="breadcrumb breadcrumb-lg">
						<li>
							<nuxt-link
								title="link to home"
								to="/"
							><i class="d-icon-home"></i></nuxt-link>
						</li>
						<li><a
								href="javascript:;"
								class="active"
							>Products</a></li>
						<li>Detail</li>
					</ul>

					<product-nav
						:next="next"
						:prev="prev"
					></product-nav>
				</div>

				<div class="row gutter-lg">
					<product-sidebar
						class="col-xxl-2"
						type="right"
					></product-sidebar>

					<div class="col-lg-9 col-xxl-10">
						<div class="product product-single row">
							<div class="col-md-6">
								<media-five
									:product="product"
									class="pb-6"
								></media-five>
							</div>

							<div class="col-md-6">
								<detail-three
									:product="product"
									:prev="prev"
									:next="next"
									:show-nav="false"
								></detail-three>
							</div>
						</div>

						<related-products
							:products="related"
							class="pt-3"
						></related-products>
					</div>
				</div>
			</div>
		</div>

		<template v-else>
			<div class="skeleton-body container-fluid mt-10 pt-3 mb-10">
				<div class="row gutter-lg">
					<div class="col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
						<div class="sidebar-content">
							<div class="widget-2"></div>
						</div>
					</div>

					<div class="col-lg-9 col-xxl-10">
						<div class="row">
							<div class="col-md-6">
								<div class="skel-pro-gallery"></div>
							</div>

							<div class="col-md-6">
								<div class="skel-pro-summary"></div>
								<div class="skel-pro-tabs"></div>
							</div>
						</div>

						<section class="pt-3">
							<h2 class="title justify-content-center">Related Products</h2>

							<swiper-carousel
								class="skel-carousel swiper-theme swiper-nav-full related-products-carousel"
								:options="baseSlider17"
							>
								<div
									v-for="item in [1,2,3,4,5,6]"
									:key="'product-skel-' + item"
									class="swiper-slide product-loading-overlay"
								></div>
							</swiper-carousel>
						</section>
					</div>
				</div>
			</div>
		</template>
	</main>
</template>

<script>
import MediaFive from '~/components/partials/product/media/MediaFive';
import DetailThree from '~/components/partials/product/detail/DetailThree';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductNav from '~/components/partials/product/ProductNav';
import ProductSidebar from '~/components/partials/product/ProductSidebar';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider17 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		MediaFive,
		DetailThree,
		RelatedProducts,
		ProductNav,
		ProductSidebar
	},
	data: function () {
		return {
			baseSlider17: baseSlider17,
			product: null,
			loaded: false,
			prev: null,
			next: null,
			related: []
		};
	},
	created: function () {
		this.loaded = false;

		Api.get(
			`${ baseUrl }/demo-${ currentDemo }/product/${ this.$route.params.slug }`
		)
			.then( response => {
				this.product = response.data.data;
				this.next = response.data.next;
				this.prev = response.data.prev;
				this.related = response.data.related;
				this.loaded = true;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	}
};
</script>
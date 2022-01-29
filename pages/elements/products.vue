<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Products"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<div class="container">
				<section class="mt-10 pt-8">
					<h2 class="title title-center">Default Style</h2>

					<div
						class="row product-wrapper"
						v-if="products.length > 0"
						key="default-non-empty"
					>
						<div
							class="col-md-3 col-6"
							v-for="item in products.slice(0,4)"
							:key="`default-type-${item.slug}`"
						>
							<product-one :product="item"></product-one>
						</div>
					</div>

					<div
						class="row product-wrapper"
						key="default-empty"
						v-else
					>
						<div
							class="col-md-3 col-6"
							v-for="item in [1,2,3,4]"
							:key="`default-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-8">
					<h2 class="title title-center">Centered</h2>

					<div
						class="row product-wrapper"
						v-if="products.length > 0"
						key="centered-non-empty"
					>
						<div
							class="col-md-3 col-6"
							v-for="item in products.slice(0,4)"
							:key="`centered-type-${item.slug}`"
						>
							<product-two
								class="text-center"
								:product="item"
							></product-two>
						</div>
					</div>

					<div
						class="row product-wrapper"
						key="centered-empty"
						v-else
					>
						<div
							class="col-md-3 col-6"
							v-for="item in [1,2,3,4]"
							:key="`centered-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-8">
					<h2 class="title title-center">Classic Button</h2>

					<div
						class="row product-wrapper"
						v-if="products.length > 0"
						key="classical-non-empty"
					>
						<div
							class="col-md-3 col-6"
							v-for="item in products.slice(0,4)"
							:key="`classical-type-${item.slug}`"
						>
							<product-three :product="item"></product-three>
						</div>
					</div>

					<div
						class="row product-wrapper"
						key="classical-empty"
						v-else
					>
						<div
							class="col-md-3 col-6"
							v-for="item in [1,2,3,4]"
							:key="`classical-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-8">
					<h2 class="title title-center">Pop-up</h2>

					<div
						class="row product-wrapper"
						v-if="products.length > 0"
						key="pop-non-empty"
					>
						<div
							class="col-md-3 col-6"
							v-for="item in products.slice(0,4)"
							:key="`pop-type-${item.slug}`"
						>
							<product-four
								class="text-center"
								:product="item"
							></product-four>
						</div>
					</div>

					<div
						class="row product-wrapper"
						key="pop-empty"
						v-else
					>
						<div
							class="col-md-3 col-6"
							v-for="item in [1,2,3,4]"
							:key="`pop-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-8">
					<h2 class="title title-center">Split Line 5 Columns</h2>

					<div
						class="row product-wrapper split-line"
						v-if="products.length > 0"
						key="split-non-empty"
					>
						<div
							class="col-xl-5col col-lg-3 col-sm-4 col-6"
							v-for="item in products.slice(0, 5)"
							:key="`split-type-${item.slug}`"
						>
							<product-five
								:product="item"
								class="text-center product-white"
							></product-five>
						</div>
					</div>

					<div
						class="row product-wrapper split-line"
						key="split-empty"
						v-else
					>
						<div
							class="col-xl-5col col-lg-3 col-sm-4 col-6"
							v-for="item in [1,2,3,4,5]"
							:key="`split-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-10">
					<h2 class="title title-center">Without Space</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="products.length > 0"
						key="no-space-non-empty"
						:options="baseSlider14"
					>
						<product-two
							:product="item"
							class="text-center swiper-slide"
							v-for="item in products.slice(0, 5)"
							:key="`no-space-type-${item.slug}`"
						></product-two>
					</swiper-carousel>

					<swiper-carousel
						class="swiper-theme"
						key="no-space-empty"
						:options="baseSlider14"
						v-else
					>
						<div
							class="swiper-slide"
							v-for="item in [1,2,3,4,5]"
							:key="`no-space-type-skel-${item}`"
							:options="baseSlider14"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-10 pt-2">
					<h2 class="title title-center">Image Gap Style</h2>

					<div
						class="row product-wrapper"
						v-if="products.length > 0"
						key="gap-non-empty"
					>
						<div
							class="col-md-3 col-6"
							v-for="item in products.slice(0,4)"
							:key="`gap-type-${item.slug}`"
						>
							<product-two
								class="product-image-gap"
								:product="item"
							></product-two>
						</div>
					</div>

					<div
						class="row product-wrapper"
						key="gap-empty"
						v-else
					>
						<div
							class="col-md-3 col-6"
							v-for="item in [1,2,3,4]"
							:key="`gap-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</div>
				</section>

				<section class="mt-10">
					<h2 class="title title-center">Modern Style 1</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="products.length > 0"
						key="modern-1-non-empty"
						:options="baseSlider15"
					>
						<product-six
							:product="item"
							class="text-center swiper-slide"
							v-for="item in products.slice(0, 5)"
							:key="`modern-1-type-${item.slug}`"
						></product-six>
					</swiper-carousel>

					<swiper-carousel
						class="swiper-theme"
						:options="baseSlider15"
						v-else
					>
						<div
							class="swiper-slide"
							v-for="item in [1,2,3,4,5]"
							:key="`modern-1-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-10 pb-4">
					<h2 class="title title-center">Modern Style 2</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="products.length > 0"
						key="modern-2-non-empty"
						:options="baseSlider15"
					>
						<product-seven
							:product="item"
							class="text-center swiper-slide"
							v-for="item in products.slice(0, 5)"
							:key="`modern-2-type-${item.slug}`"
						></product-seven>
					</swiper-carousel>

					<swiper-carousel
						class="swiper-theme"
						:options="baseSlider15"
						v-else
					>
						<div
							class="swiper-slide"
							v-for="item in [1,2,3,4,5]"
							:key="`modern-2-type-skel-${item}`"
						>
							<div class="product-loading-overlay"></div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-8">
					<h2 class="title title-center">Products List</h2>

					<div class="row">
						<div class="col-lg-9">
							<template v-if="products.length > 0">
								<product-eight
									:product="item"
									v-for="item in products.slice(0,2)"
									:key="`list-type-${item.slug}`"
								></product-eight>
							</template>

							<template v-else>
								<div
									class="col-md-3 col-6"
									v-for="item in [1,2]"
									:key="`list-type-skel-${item}`"
								>
									<div class="product-loading-overlay"></div>
								</div>
							</template>
						</div>

						<div class="col-lg-3">
							<div class="widget widget-products">
								<h4 class="widget-title">Our Featured</h4>
								<div class="widget-body">
									<template v-if="products.length > 0">
										<swiper-carousel
											:options="baseSlider4"
											class="swiper-nav-top"
										>
											<div class="products-col swiper-slide">
												<product-small
													:product="item"
													v-for="item in products.slice(0,4)"
													:key="`product-small-${item.slug}`"
												>
												</product-small>
											</div>

											<div class="products-col swiper-slide">
												<product-small
													:product="item"
													v-for="item in products.slice(4,8)"
													:key="`product-small-${item.slug}`"
												>
												</product-small>
											</div>
										</swiper-carousel>
									</template>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<element-list class="mt-8"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductOne from '~/components/elements/product/ProductOne';
import ProductTwo from '~/components/elements/product/ProductTwo';
import ProductThree from '~/components/elements/product/ProductThree';
import ProductFour from '~/components/elements/product/ProductFour';
import ProductFive from '~/components/elements/product/ProductFive';
import ProductSix from '~/components/elements/product/ProductSix';
import ProductSeven from '~/components/elements/product/ProductSeven';
import ProductEight from '~/components/elements/product/ProductEight';
import ProductSmall from '~/components/elements/product/ProductSmall';
import ElementList from '~/components/partials/elements/ElementList';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider4, baseSlider14, baseSlider15 } from '~/utils/data/carousel';

export default {
	components: {
		ElementList,
		SwiperCarousel,
		PageHeader,
		ProductOne,
		ProductTwo,
		ProductThree,
		ProductFour,
		ProductFive,
		ProductSix,
		ProductSeven,
		ProductEight,
		ProductSmall
	},
	data: function () {
		return {
			products: [],
			baseSlider4: baseSlider4,
			baseSlider14: baseSlider14,
			baseSlider15: baseSlider15
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo-${ currentDemo }`, {
			params: { is_product: true, is_post: false, limit: 8 }
		} )
			.then( response => {
				this.products = response.data.products;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	}
};
</script>
<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Blog"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-10 pt-4 pb-10">
				<div class="container">
					<h2 class="title title-center">Default</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="posts.length > 0"
						:options="baseSlider10"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,3)"
							:key="`post-one-${item.slug}`"
						>
							<post-one
								class="text-center"
								:post="item"
								overlay-class="overlay-zoom overlay-dark"
							></post-one>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="grey-section pt-10 pb-10">
				<div class="container mt-4">
					<h2 class="title title-center">List</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="posts.length > 0"
						:options="baseSlider12"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,2)"
							:key="`post-two-${item.slug}`"
						>
							<post-two :post="item"></post-two>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="mt-10 pt-4 pb-10">
				<div class="container">
					<h2 class="title title-center">Without description</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="posts.length > 0"
						:options="baseSlider10"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,3)"
							:key="`post-three-${item.slug}`"
						>
							<post-three
								:post="item"
								class="post-sm"
							></post-three>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="grey-section pt-10 pb-10">
				<div class="container mt-4">
					<h2 class="title title-center">4 Columns</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="posts.length > 0"
						:options="baseSlider9"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,4)"
							:key="`post-4cols-${item.slug}`"
						>
							<post-one
								class="post-sm"
								:post="item"
								:showCalendar="false"
							></post-one>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="mt-10 pt-4 pb-4 mb-10">
				<div class="container">
					<h2 class="title title-center">On Image</h2>

					<swiper-carousel
						class="swiper-theme"
						v-if="posts.length > 0"
						:options="baseSlider10"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,3)"
							:key="`post-image-${item.slug}`"
						>
							<post-four :post="item"></post-four>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="pt-10 pb-10 grey-section">
				<div class="container mt-4">
					<h2 class="title title-center">Framed</h2>

					<swiper-carousel
						class="swiper-theme post-slider"
						v-if="posts.length > 0"
						:options="baseSlider10"
					>
						<div
							class="swiper-slide"
							v-for="item in posts.slice(0,3)"
							:key="`post-frame-${item.slug}`"
						>
							<div class="blog-post">
								<post-one
									class="post-frame"
									:post="item"
									overlay-class=""
									btn-class="btn-primary btn-underline"
								></post-one>
							</div>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<element-list class="bg-white"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import PostOne from '~/components/elements/post/PostOne';
import PostTwo from '~/components/elements/post/PostTwo';
import PostThree from '~/components/elements/post/PostThree';
import PostFour from '~/components/elements/post/PostFour';
import ElementList from '~/components/partials/elements/ElementList';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider9, baseSlider10, baseSlider12 } from '~/utils/data/carousel';

export default {
	components: {
		ElementList,
		SwiperCarousel,
		PostOne,
		PostTwo,
		PostThree,
		PostFour,
		PageHeader
	},
	data: function () {
		return {
			posts: [],
			baseSlider9: baseSlider9,
			baseSlider10: baseSlider10,
			baseSlider12: baseSlider12
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/element`, {
			params: { is_product: false, is_post: true }
		} )
			.then( response => {
				this.posts = response.data.posts;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	}
};
</script>
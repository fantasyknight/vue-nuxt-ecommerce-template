<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Instagram"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-10 pt-8 mb-10 pb-4">
				<div class="container">
					<h2 class="title title-center">Default</h2>
					<swiper-carousel
						class="swiper-theme"
						:options="baseSlider6"
					>
						<div class="swiper-slide">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/1.jpg'"
										alt="Instagram"
										width="220"
										height="220"
									/>
								</a>
							</figure>
						</div>

						<div class="swiper-slide">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/2.jpg'"
										alt="Instagram"
										width="220"
										height="220"
									/>
								</a>
							</figure>
						</div>

						<div class="swiper-slide">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/3.jpg'"
										alt="Instagram"
										width="220"
										height="220"
									/>
								</a>
							</figure>
						</div>

						<div class="swiper-slide">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/4.jpg'"
										alt="Instagram"
										width="220"
										height="220"
									/>
								</a>

							</figure>
						</div>

						<div class="swiper-slide">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/5.jpg'"
										alt="Instagram"
										width="220"
										height="220"
									/>
								</a>
							</figure>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="grey-section pt-10 pb-10">
				<div class="container mt-4">
					<h2 class="title title-center">Full Width</h2>
				</div>
				<swiper-carousel
					class="swiper-theme mb-4"
					:options="baseSlider7"
				>
					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/6.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>

					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/7.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>

					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/8.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>

					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/9.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>

					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/10.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>

					<div class="swiper-slide">
						<figure class="instagram instagram-info">
							<a href="javascript:;">
								<img
									v-lazy="'./images/instagram/11.jpg'"
									alt="Instagram"
									width="220"
									height="220"
								/>
							</a>
						</figure>
					</div>
				</swiper-carousel>
			</section>

			<section class="mt-10 pt-4 mb-10 pb-4">
				<div class="container">
					<h2 class="title title-center">Masonry</h2>

					<div class="grid instagram-masonry">
						<div class="grid-item height-x2">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/12.jpg'"
										alt="Instagram"
										width="580"
										height="346"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x15">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/13.jpg'"
										alt="Instagram"
										width="280"
										height="249"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x1">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/14.jpg'"
										alt="Instagram"
										width="280"
										height="188"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x2">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/15.jpg'"
										alt="Instagram"
										width="280"
										height="322"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x25">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/16.jpg'"
										alt="Instagram"
										width="280"
										height="465"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x2">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/17.jpg'"
										alt="Instagram"
										width="280"
										height="367"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x1">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/18.jpg'"
										alt="Instagram"
										width="280"
										height="176"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x1">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/19.jpg'"
										alt="Instagram"
										width="280"
										height="176"
									/>
								</a>
							</figure>
						</div>
						<div class="grid-item height-x1">
							<figure class="instagram">
								<a href="javascript:;">
									<img
										v-lazy="'./images/instagram/20.jpg'"
										alt="Instagram"
										width="280"
										height="188"
									/>
								</a>
							</figure>
						</div>
					</div>
				</div>
			</section>

			<element-list class="mt-5"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ElementList from '~/components/partials/elements/ElementList';

import { baseSlider6, baseSlider7 } from '~/utils/data/carousel';

export default {
	components: {
		ElementList,
		SwiperCarousel,
		PageHeader
	},
	data: function () {
		return {
			baseSlider6: baseSlider6,
			baseSlider7: baseSlider7
		}
	}
}
</script>
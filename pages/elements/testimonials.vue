<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Testimonials"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-10 pt-8">
				<div class="container">
					<h2 class="title title-center mb-5">Default</h2>
					<swiper-carousel :options="baseSlider3">
						<div class="swiper-slide">
							<div class="testimonial">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/1.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/2.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/3.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="mt-10 pt-6">
				<div class="container">
					<h2 class="title title-center">Inversed</h2>
					<swiper-carousel :options="baseSlider3">
						<div class="swiper-slide">
							<div class="testimonial testimonial-inversed">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/1.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-inversed">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/2.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-inversed">
								<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget
									nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.</blockquote>
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/3.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="mt-10 pt-6">
				<div class="container">
					<h2 class="title title-center">Centered</h2>
					<swiper-carousel :options="baseSlider3">
						<div class="swiper-slide">
							<div class="testimonial testimonial-centered">
								<div class="testimonial-info">
									<h3 class="testimonial-title">What they say about us</h3>
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/4.jpg"
											alt="user"
											width="40"
											height="40"
										/>
									</figure>
									<blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
										hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
									<cite>
										Herman Beck
										<span>Customer</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-centered testimonial-border">
								<div class="testimonial-info">
									<h3 class="testimonial-title">What they say about us</h3>
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/4.jpg"
											alt="user"
											width="40"
											height="40"
										/>
									</figure>
									<blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
										hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
									<cite>
										Mary Adams
										<span>Customer</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-centered">
								<div class="testimonial-info">
									<h3 class="testimonial-title">What they say about us</h3>
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/5.jpg"
											alt="user"
											width="40"
											height="40"
										/>
									</figure>
									<blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
										hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
									<cite>
										Owen Hunt
										<span>Customer</span>
									</cite>
								</div>
							</div>
						</div>
					</swiper-carousel>
				</div>
			</section>

			<section class="mt-10 pt-6 mb-8 pb-2">
				<div class="container">
					<h2 class="title title-center">Slider</h2>
					<div class="row">
						<div class="col-md-6 mb-6">
							<swiper-carousel
								class="swiper-nav-bottom"
								:options="baseSlider4"
							>
								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/1.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>
									</div>
								</div>

								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/2.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>

									</div>
								</div>

								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/3.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>
									</div>
								</div>
							</swiper-carousel>
						</div>
						<div class="col-md-6 mb-6">
							<swiper-carousel
								class="swiper-nav-bottom"
								:options="baseSlider4"
							>
								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/1.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/2.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="testimonial">
										<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante
											eget nisl convallis tempus Phsellus anctus, tincidunt tincidunt dui.met,
											consectetur adipiscing elit. Sed eu ante eget nisldolor sit amet.
										</blockquote>
										<div class="testimonial-info">
											<figure class="testimonial-author-thumbnail">
												<img
													src="images/agents/3.jpg"
													alt="user"
													width="50"
													height="50"
												/>
											</figure>
											<cite>
												Herman Beck
												<span>Investor</span>
											</cite>
										</div>
									</div>
								</div>
							</swiper-carousel>
						</div>
					</div>
				</div>
			</section>

			<section
				class="pt-10 pb-10 parallax"
				style="background-image: url(images/banner.jpg)"
				v-parallax
				options="{'speed': 1, 'startPos': 30}"
			>
				<div class="container mt-4 mb-4">
					<h2 class="title title-center title-white mb-0">Centered on background</h2>
					<swiper-carousel
						class="swiper-theme swiper-dot-white"
						:options="baseSlider5"
					>
						<div class="swiper-slide">
							<div class="testimonial testimonial-centered testimonial-bg">
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/4.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
										mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
										placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
									<cite>
										Charly Simth
										<span>Customer</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-centered testimonial-bg">
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/5.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
										mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
										placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="testimonial testimonial-centered testimonial-bg">
								<div class="testimonial-info">
									<figure class="testimonial-author-thumbnail">
										<img
											src="images/agents/2.jpg"
											alt="user"
											width="50"
											height="50"
										/>
									</figure>
									<blockquote>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
										mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui
										placerat ornare. Pellentesque odio nisi, euismod in, pharetra ”</blockquote>
									<cite>
										Herman Beck
										<span>Investor</span>
									</cite>
								</div>
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
import ElementList from '~/components/partials/elements/ElementList';

import { baseSlider3, baseSlider4, baseSlider5 } from '~/utils/data/carousel';

export default {
	components: {
		ElementList,
		SwiperCarousel,
		PageHeader
	},
	data: function () {
		return {
			baseSlider3: baseSlider3,
			baseSlider4: baseSlider4,
			baseSlider5: baseSlider5
		}
	}
}
</script>
<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Categories"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<div class="container">
				<section class="default-section">
					<h2 class="title title-center">Default</h2>
					<div class="row">
						<div class="col-sm-6 col-lg-3 mb-4">
							<div class="category category-default category-absolute overlay-zoom">
								<nuxt-link :to="{path:'/shop', query:{category: 'for-men-s'}}">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category1.jpg'"
											alt="category"
											width="280"
											height="280"
										/>
									</figure>
								</nuxt-link>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link :to="{path:'/shop', query:{category: 'for-men-s'}}">For Men's</nuxt-link>
									</h4>
									<nuxt-link
										:to="{path:'/shop', query:{category: 'for-men-s'}}"
										class="btn btn-primary"
									>Shop Now</nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-3 mb-4">
							<div class="category category-default category-absolute overlay-zoom">
								<nuxt-link :to="{path:'/shop', query:{category: 'accessories'}}">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category2.jpg'"
											alt="category"
											width="280"
											height="280"
										/>
									</figure>
								</nuxt-link>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link :to="{path:'/shop', query:{category: 'accessories'}}">Accessories</nuxt-link>
									</h4>
									<nuxt-link
										:to="{path:'/shop', query:{category: 'accessories'}}"
										class="btn btn-primary"
									>Shop Now</nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-3 mb-4">
							<div class="category category-default category-absolute overlay-zoom">
								<nuxt-link :to="{path:'/shop', query:{category: 'for-women-s'}}">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category3.jpg'"
											alt="category"
											width="280"
											height="280"
										/>
									</figure>
								</nuxt-link>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link :to="{path:'/shop', query:{category: 'for-women-s'}}">Fashionable Women's</nuxt-link>
									</h4>
									<nuxt-link
										:to="{path:'/shop', query:{category: 'for-women-s'}}"
										class="btn btn-primary"
									>Shop Now</nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-sm-6 col-lg-3 mb-4">
							<div class="category category-default category-absolute overlay-zoom">
								<nuxt-link :to="{path:'/shop', query:{category: 'cosmetic'}}">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category4.jpg'"
											alt="category"
											width="280"
											height="280"
										/>
									</figure>
								</nuxt-link>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link :to="{path:'/shop', query:{category: 'cosmetic'}}">Cosmetic</nuxt-link>
									</h4>
									<nuxt-link
										:to="{path:'/shop', query:{category: 'cosmetic'}}"
										class="btn btn-primary"
									>Shop Now</nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 class="title title-center mt-10">Carousel</h2>
					<swiper-carousel
						class="swiper-nav-full"
						:options="baseSlider1"
					>
						<div class="category category-light category-absolute overlay-zoom swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category1.jpg'"
										alt="category"
										width="280"
										height="245"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name"><a href="javascript:;">For Men's</a></h4>
							</div>
						</div>
						<div class="category category-light category-absolute overlay-zoom swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category2.jpg'"
										alt="category"
										width="280"
										height="245"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name"><a href="javascript:;">Accessories</a></h4>
							</div>
						</div>
						<div class="category category-light category-absolute overlay-zoom swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category3.jpg'"
										alt="category"
										width="280"
										height="245"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name"><a href="javascript:;">Fashionable Women’s</a></h4>
							</div>
						</div>
						<div class="category category-light category-absolute overlay-zoom swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category4.jpg'"
										alt="category"
										width="280"
										height="245"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name"><a href="javascript:;">Cosmetic</a></h4>
							</div>
						</div>
					</swiper-carousel>

				</section>

				<section class="category-icon-section mt-10 pt-4">
					<h2 class="title title-center">Icon categories</h2>
					<div class="row">
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-t-shirt2"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Fashion</h4>
									</div>
								</a>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-camera2"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Electronics</h4>
									</div>
								</a>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-desktop"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Computer</h4>
									</div>
								</a>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-backpack"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Bag &amp; Backpacks</h4>
									</div>
								</a>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-basketball1"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Sports</h4>
									</div>
								</a>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-sm-4 col-6 mb-4">
							<div class="category category-icon">
								<a href="javascript:;">
									<figure class="category-media">
										<i class="d-icon-babycare"></i>
									</figure>
									<div class="category-content">
										<h4 class="category-name">Toys &amp; Babycare</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section class="ellipse-section mt-10">
					<h2 class="title title-center">Ellipse Style</h2>
					<swiper-carousel :options="baseSlider2">
						<div class="category category-ellipse swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category1.png'"
										alt="category"
										width="196"
										height="196"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name">
									<nuxt-link to="/shop">Newborn Essentials</nuxt-link>
								</h4>
								<span class="category-count">
									<span>0</span> Products
								</span>
							</div>
						</div>
						<div class="category category-ellipse swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category2.png'"
										alt="category"
										width="196"
										height="196"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name">
									<nuxt-link to="/shop">Toy</nuxt-link>
								</h4>
								<span class="category-count">
									<span>0</span> Products
								</span>
							</div>
						</div>
						<div class="category category-ellipse swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category3.png'"
										alt="category"
										width="196"
										height="196"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name">
									<nuxt-link to="/shop">Summer Sale is On</nuxt-link>
								</h4>
								<span class="category-count">
									<span>0</span> Products
								</span>
							</div>
						</div>
						<div class="category category-ellipse swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category4.png'"
										alt="category"
										width="196"
										height="196"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name">
									<nuxt-link to="/shop">Clothes</nuxt-link>
								</h4>
								<span class="category-count">
									<span>0</span> Products
								</span>
							</div>
						</div>
						<div class="category category-ellipse swiper-slide">
							<a href="javascript:;">
								<figure class="category-media">
									<img
										v-lazy="'./images/categories/category5.png'"
										alt="category"
										width="196"
										height="196"
									/>
								</figure>
							</a>
							<div class="category-content">
								<h4 class="category-name">
									<nuxt-link to="/shop">Footwear &amp; Accessories</nuxt-link>
								</h4>
								<span class="category-count">
									<span>0</span> Products
								</span>
							</div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-10 pt-4">
					<h2 class="title title-center">Classic</h2>
					<swiper-carousel :options="baseSlider1">
						<div class="category category-absolute category-classic swiper-slide">
							<figure class="category-media">
								<img
									v-lazy="'./images/categories/category5.jpg'"
									alt="Cateogry"
									width="280"
									height="280"
								/>
							</figure>
							<div class="category-content">
								<h4 class="category-name">Women's Collection</h4>
								<span class="category-count">1 Products</span>
							</div>
						</div>
						<div class="category category-absolute category-classic swiper-slide">
							<figure class="category-media">
								<img
									v-lazy="'./images/categories/category6.jpg'"
									alt="Cateogry"
									width="280"
									height="280"
								/>
							</figure>
							<div class="category-content">
								<h4 class="category-name">Electronics</h4>
								<span class="category-count">0 Products</span>
							</div>
						</div>
						<div class="category category-absolute category-classic swiper-slide">
							<figure class="category-media">
								<img
									v-lazy="'./images/categories/category7.jpg'"
									alt="Cateogry"
									width="280"
									height="280"
								/>
							</figure>
							<div class="category-content">
								<h4 class="category-name">For Men's</h4>
								<span class="category-count">0 Products</span>
							</div>
						</div>
						<div class="category category-absolute category-classic swiper-slide">
							<figure class="category-media">
								<img
									v-lazy="'./images/categories/category8.jpg'"
									alt="Cateogry"
									width="280"
									height="280"
								/>
							</figure>
							<div class="category-content">
								<h4 class="category-name">Sporting Goods</h4>
								<span class="category-count">7 Products</span>
							</div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-10 pt-4">
					<h2 class="title title-center">Category Group 1</h2>
					<swiper-carousel :options="baseSlider3">
						<div class="swiper-slide">
							<div class="category category-group-image">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category13.jpg'"
											alt="category"
											width="190"
											height="169"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link to="/shop">Electronics</nuxt-link>
									</h4>
									<ul class="category-list">
										<li><a href="javascript:;">Air conditioners</a></li>
										<li><a href="javascript:;">Machines</a></li>
										<li><a href="javascript:;">Musical instrument</a></li>
										<li><a href="javascript:;">Office Electronics</a></li>
										<li><a href="javascript:;">TV</a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="category category-group-image">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category14.jpg'"
											alt="category"
											width="190"
											height="169"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link to="/shop">Fashion &amp; Clothings</nuxt-link>
									</h4>
									<ul class="category-list">
										<li><a href="javascript:;">Accessories</a></li>
										<li><a href="javascript:;">Bags &amp; Backpacks</a></li>
										<li><a href="javascript:;">Men's</a></li>
										<li><a href="javascript:;">Shoes &amp; Boots</a></li>
										<li><a href="javascript:;">Women’s</a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="swiper-slide">
							<div class="category category-group-image">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category15.jpg'"
											alt="category"
											width="190"
											height="169"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">
										<nuxt-link to="/shop">Computers</nuxt-link>
									</h4>
									<ul class="category-list">
										<li><a href="javascript:;">Desktop PC</a></li>
										<li><a href="javascript:;">Laptop</a></li>
										<li><a href="javascript:;">PC Components</a></li>
										<li><a href="javascript:;">PC Gaming</a></li>
										<li><a href="javascript:;">Storage &amp; Memory</a></li>
									</ul>
								</div>
							</div>
						</div>
					</swiper-carousel>
				</section>

				<section class="mt-10 pt-4">
					<h2 class="title title-center">Category Group 2</h2>
					<swiper-carousel :options="baseSlider3">
						<div
							class="category category-group-icon swiper-slide"
							style="background-color: #4b5577"
						>
							<a href="javascript:;">
								<figure class="category-media">
									<i class="d-icon-t-shirt1"></i>
								</figure>
								<h4 class="category-name">Clothing</h4>
							</a>
							<div class="category-content">
								<ul class="category-list">
									<li><a href="javascript:;">Accessories</a></li>
									<li><a href="javascript:;">Bracelets</a></li>
									<li><a href="javascript:;">Men's Necklace</a></li>
									<li><a href="javascript:;">Pendant</a></li>
									<li><a href="javascript:;">Sale</a></li>
									<li><a href="javascript:;">Watch</a></li>
								</ul>
							</div>
						</div>
						<div
							class="category category-group-icon swiper-slide"
							style="background-color: #6d52af"
						>
							<a href="javascript:;">
								<figure class="category-media">
									<i class="d-icon-basketball2"></i>
								</figure>
								<h4 class="category-name">Sporting Goods</h4>
							</a>
							<div class="category-content">
								<ul class="category-list">
									<li><a href="javascript:;">Accessories</a></li>
									<li><a href="javascript:;">Gloves</a></li>
									<li><a href="javascript:;">Men's</a></li>
									<li><a href="javascript:;">Shoes</a></li>
									<li><a href="javascript:;">Training Shirt</a></li>
									<li><a href="javascript:;">Women's</a></li>
								</ul>
							</div>
						</div>
						<div
							class="category category-group-icon swiper-slide"
							style="background-color: #2b579a"
						>
							<a href="javascript:;">
								<figure class="category-media">
									<i class="d-icon-backpack"></i>
								</figure>
								<h4 class="category-name">Bag &amp; Backpack</h4>
							</a>
							<div class="category-content">
								<ul class="category-list">
									<li><a href="javascript:;">Fashion Bags</a></li>
									<li><a href="javascript:;">Hand Bags</a></li>
									<li><a href="javascript:;">Kid's Bags</a></li>
									<li><a href="javascript:;">Men's Bags</a></li>
									<li><a href="javascript:;">Trip Bags</a></li>
									<li><a href="javascript:;">Women's</a></li>
								</ul>
							</div>
						</div>
					</swiper-carousel>
				</section>

				<section class="category-section masonry-section mt-10 pt-4">
					<h2 class="title title-center">Banner Style</h2>
					<div class="grid">
						<div class="grid-item height-x2">
							<div class="category category-banner category-absolute overlay-light">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category9.jpg'"
											alt="category"
											width="585"
											height="397"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Comfort Dresses</h4>
									<span class="category-count">
										<span>9</span> Products
									</span>
									<a
										href="javascript:;"
										class="btn btn-underline btn-link"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="grid-item height-x1">
							<div class="category category-banner category-absolute text-white  overlay-dark">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category10.jpg'"
											alt="category"
											width="585"
											height="205"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">For Men's Fashion</h4>
									<span class="category-count">
										<span>25</span> Products
									</span>
									<a
										href="javascript:;"
										class="btn btn-underline btn-link"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="grid-item height-x2">
							<div class="category category-banner category-absolute overlay-light">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category11.jpg'"
											alt="category"
											width="585"
											height="397"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Denim Essentials</h4>
									<span class="category-count">
										<span>8</span> Products
									</span>
									<a
										href="javascript:;"
										class="btn btn-underline btn-link"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="grid-item height-x1">
							<div class="category category-banner category-absolute text-white overlay-dark">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category12.jpg'"
											alt="category"
											width="585"
											height="205"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Accessories</h4>
									<span class="category-count">
										<span>17</span> Products
									</span>
									<a
										href="javascript:;"
										class="btn btn-underline btn-link"
									>Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="category-section badge-section mt-10 pt-4 pb-10 mb-10">
					<h2 class="title title-center">Badge Categories</h2>
					<div class="row grid gutter-sm">
						<div class="grid-item height-x2">
							<div class="category category-badge category-absolute overlay-dark">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category16.jpg'"
											alt="category"
											width="585"
											height="397"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Footwear</h4>
									<a
										class="btn btn-primary btn-block"
										href="javascript:;"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="grid-item height-x1">
							<div class="category category-badge category-absolute overlay-dark">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category17.jpg'"
											alt="category"
											width="585"
											height="205"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Sporting Goods</h4>
									<a
										class="btn btn-primary btn-block"
										href="javascript:;"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="grid-item height-x1">
							<div class="category category-badge category-absolute overlay-dark">
								<a href="javascript:;">
									<figure class="category-media">
										<img
											v-lazy="'./images/categories/category18.jpg'"
											alt="category"
											width="585"
											height="397"
										/>
									</figure>
								</a>
								<div class="category-content">
									<h4 class="category-name">Cosmetics</h4>
									<a
										class="btn btn-primary btn-block"
										href="javascript:;"
									>Shop Now</a>
								</div>
							</div>
						</div>
						<div class="col-1 grid-space"></div>
					</div>
				</section>
			</div>

			<element-list></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ElementList from '~/components/partials/elements/ElementList';

import { baseSlider1, baseSlider2, baseSlider3 } from '~/utils/data/carousel';

export default {
	components: {
		ElementList,
		SwiperCarousel,
		PageHeader
	},
	data: function() {
		return {
			baseSlider1: baseSlider1,
			baseSlider2: baseSlider2,
			baseSlider3: baseSlider3
		};
	}
};
</script>
<template>
	<section
		class="pt-10 mt-7 appear-animate"
		v-animate
		data-animation-options="{
                    'delay': '.3s'
                }"
	>
		<div class="container">
			<h2 class="title title-center mb-5">Our Categories</h2>
			<div class="row">
				<div class="col-xs-6 col-lg-3 mb-4">
					<div class="category category-default1 category-absolute banner-radius overlay-zoom">
						<nuxt-link :to="{path: '/shop', query: {category: 'for-men-s'}}">
							<figure
								class="category-media"
								style="background-color: #8c8c8d"
							>
								<img
									v-lazy="'images/categories/category1.jpg'"
									alt="category"
									width="280"
									height="280"
								/>
							</figure>
						</nuxt-link>
						<div class="category-content">
							<h4 class="category-name font-weight-bold ls-l">
								<nuxt-link :to="{path: '/shop', query: {category: 'for-men-s'}}">For
									Men's</nuxt-link>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-lg-3 mb-4">
					<div class="category category-default1 category-absolute banner-radius overlay-zoom">
						<nuxt-link :to="{path: '/shop', query: {category: 'accessories'}}">
							<figure class="category-media">
								<img
									v-lazy="'images/categories/category2.jpg'"
									alt="category"
									width="280"
									height="280"
									style="background-color: #bcbdb7;"
								/>
							</figure>
						</nuxt-link>
						<div class="category-content">
							<h4 class="category-name font-weight-bold ls-l">
								<nuxt-link :to="{path: '/shop', query: {category: 'accessories'}}">Accessories</nuxt-link>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-lg-3 mb-4">
					<div class="category category-default1 category-absolute banner-radius overlay-zoom">
						<nuxt-link :to="{path: '/shop', query: {category: 'fashionable-women-s'}}">
							<figure
								class="category-media"
								style="background-color: #ececef"
							>
								<img
									v-lazy="'images/categories/category3.jpg'"
									alt="category"
									width="280"
									height="280"
								/>
							</figure>
						</nuxt-link>
						<div class="category-content">
							<h4 class="category-name font-weight-bold ls-l">
								<nuxt-link :to="{path: '/shop', query: {category: 'fashionable-women-s'}}">Fashionable
									Women's</nuxt-link>
							</h4>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-lg-3 mb-4">
					<div class="category category-default1 category-absolute banner-radius overlay-zoom">
						<nuxt-link :to="{path: '/shop', query: {category: 'cosmetic'}}">
							<figure class="category-media">
								<img
									v-lazy="'images/categories/category4.jpg'"
									alt="category"
									width="280"
									height="280"
									style="background-color: #e8eded;"
								/>
							</figure>
						</nuxt-link>
						<div class="category-content font-weight-bold">
							<h4 class="category-name font-weight-bold ls-l">
								<nuxt-link :to="{path: '/shop', query: {category: 'cosmetic'}}">Cosmetic</nuxt-link>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
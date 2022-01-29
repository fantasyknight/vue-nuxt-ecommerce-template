<template>
	<section
		class="banner banner-background parallax text-center"
		options="{'speed': 2}"
		v-lazy:background-image="'./images/home/parallax.jpg'"
		style="background-color: #2d2f33;"
		v-parallax
	>
		<div class="container">
			<div
				class="banner-content appear-animate"
				data-animation-options="{'name': 'blurIn', 'duration': '1s', 'delay': '.2s'}"
				v-animate
			>
				<h4 class="banner-subtitle text-white font-weight-bold ls-l">
					Extra<span class="d-inline-block label-star bg-dark text-primary ml-4 mr-2">30%
						Off</span>Online
				</h4>
				<h3 class="banner-title font-weight-bold text-white">Summer Season Sale</h3>
				<p class="text-white ls-s">Free shipping on orders over $99</p>
				<nuxt-link
					to="/shop"
					class="btn btn-primary btn-rounded btn-icon-right"
				>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
			</div>
		</div>
	</section>
</template>
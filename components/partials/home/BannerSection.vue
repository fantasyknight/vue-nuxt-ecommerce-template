<template>
	<section class="banner-group mt-4">
		<div class="container">
			<h2 class="title d-none">Banner Group</h2>

			<div class="row justify-content-center">
				<div class="col-lg-4 col-sm-6 mb-4">
					<div
						class="banner banner-3 banner-fixed banner-radius content-middle appear-animate overlay-zoom"
						v-animate
						data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1s', 'delay': '.2s'}"
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner1.jpg'"
								alt="banner"
								width="380"
								height="220"
								style="background-color: #836648;"
							/>
						</figure>
						<div class="banner-content">
							<h3 class="banner-title text-white mb-1">For Men's</h3>
							<h4 class="banner-subtitle text-uppercase font-weight-normal text-white">
								Starting at $29
							</h4>
							<hr class="banner-divider">
							<nuxt-link
								:to="{path: '/shop', query: {category: 'for-men-s'}}"
								class="btn btn-white btn-link btn-underline"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
					<div
						class="banner banner-4 banner-fixed banner-radius content-middle content-center appear-animate overlay-effect-two"
						v-animate
						data-animation-options="{'name': 'fadeIn', 'duration': '1s', 'delay': '.2s'}"
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner2.jpg'"
								alt="banner"
								width="350"
								height="177"
								style="background-color: #1e1e1e;"
							/>
						</figure>
						<div class="banner-content d-flex align-items-center w-100 text-left">
							<div class="mr-auto mb-4 mb-md-0">
								<h4 class="banner-subtitle text-white">
									Up to 20% Off<br><span class="ls-l">Black Friday</span>
								</h4>
								<h3 class="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
							</div>
							<nuxt-link
								to="/shop"
								class="btn btn-primary btn-outline btn-rounded font-weight-bold text-white"
							>Shop
								Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4">
					<div
						class="banner banner-5 banner-fixed banner-radius content-middle appear-animate overlay-zoom"
						v-animate
						data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.2s'}"
					>
						<figure>
							<img
								v-lazy="'./images/home/banners/banner3.jpg'"
								alt="banner"
								width="380"
								height="220"
								style="background-color: #97928b;"
							/>
						</figure>
						<div class="banner-content">
							<h3 class="banner-title text-white mb-1">Fashions</h3>
							<h4 class="banner-subtitle text-uppercase font-weight-normal text-white">30% Off
							</h4>
							<hr class="banner-divider">
							<nuxt-link
								:to="{path: '/shop', query: {category: 'fashion'}}"
								class="btn btn-white btn-link btn-underline"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
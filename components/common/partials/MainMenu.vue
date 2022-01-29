<template>
	<nav class="main-nav">
		<ul class="menu">
			<li>
				<nuxt-link
					to='/'
					:class="{active: $route.path === '/'}"
				>Home</nuxt-link>
			</li>

			<li class="submenu">
				<nuxt-link
					to="/shop"
					:class="{active: $route.path.includes('/shop')}"
				>Categories</nuxt-link>

				<div class="megamenu">
					<div class="row">
						<div class="col-6 col-sm-4 col-md-3 col-lg-4">
							<h4 class="menu-title">Variations 1</h4>
							<ul>
								<li
									:key="item.url"
									v-for="item in mainMenu.shop.variation1"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-6 col-sm-4 col-md-3 col-lg-4">
							<h4 class="menu-title">Variations 2</h4>
							<ul>
								<li
									:key="item.url"
									v-for="item in mainMenu.shop.variation2"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.new"
										>New</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner1 banner banner-fixed">
							<figure>
								<img
									v-lazy="'./images/menu/banner-1.jpg'"
									alt="Menu banner"
									width="199"
									height="295"
								/>
							</figure>
							<div class="banner-content y-50">
								<h4 class="banner-subtitle font-weight-bold text-primary ls-m">Sale.
								</h4>
								<h3 class="banner-title font-weight-bold"><span class="text-uppercase">Up to</span>70% Off</h3>
								<nuxt-link
									to="/shop"
									class="btn btn-link btn-underline"
								>shop now<i class="d-icon-arrow-right"></i></nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li class="submenu">
				<nuxt-link
					to="/product/default/fashionable-leather-satchel"
					:class="{active: $route.path.includes('/product') && !$route.path.includes('/elements')}"
				>Products</nuxt-link>

				<div class="megamenu">
					<div class="row">
						<div class="col-6 col-sm-4 col-md-3 col-lg-4">
							<h4 class="menu-title">Product Pages</h4>
							<ul>
								<li
									:key="item.url + index"
									v-for="(item, index) in mainMenu.product.pages"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-6 col-sm-4 col-md-3 col-lg-4">
							<h4 class="menu-title">Product Layouts</h4>
							<ul>
								<li
									:key="item.url + index"
									v-for="(item, index) in mainMenu.product.layout"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.new"
										>New</span>
									</nuxt-link>
								</li>

								<li>
									<a href="javascript:;">Build your own</a>
								</li>
							</ul>
						</div>

						<div class="col-6 col-sm-4 col-md-3 col-lg-4 menu-banner menu-banner2 banner banner-fixed">
							<figure>
								<img
									v-lazy="'./images/menu/banner-2.jpg'"
									alt="Menu banner"
									width="199"
									height="330"
								/>
							</figure>
							<div class="banner-content x-50 text-center">
								<h3 class="banner-title text-white text-uppercase">Sunglasses</h3>
								<h4 class="banner-subtitle font-weight-bold text-white mb-0">$23.00 - $120.00</h4>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li class="submenu">
				<a
					href="javascript:;"
					:class="{active: $route.path.includes('/pages')}"
				>Pages</a>

				<ul>
					<li
						v-for="item in mainMenu.other"
						:key="item.url"
					>
						<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>

						<ul v-if="item.subPages">
							<li
								v-for="subItem in item.subPages"
								:key="subItem.title"
							>
								<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li class="submenu">
				<nuxt-link
					to="/elements"
					:class="{active: $route.path.includes('/elements')}"
				>Elements</nuxt-link>

				<ul>
					<li
						v-for="item in mainMenu.element"
						:key="item.url"
					>
						<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>

						<ul v-if="item.subPages">
							<li
								v-for="subItem in item.subPages"
								:key="subItem.title"
							>
								<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li class="submenu">
				<nuxt-link
					to="/blog/classic"
					:class="{active: $route.path.includes('/blog') && !$route.path.includes('/elements')}"
				>Blog</nuxt-link>

				<ul>
					<li
						:key="item.url"
						:class="{submenu: item.subPages}"
						v-for="item in mainMenu.blog"
					>
						<nuxt-link :to="item.url">
							{{ item.title }}
						</nuxt-link>

						<ul v-if="item.subPages">
							<li
								:key="item.url"
								v-for="item in item.subPages"
							>
								<nuxt-link :to="item.url">
									{{ item.title }}
								</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>

			<li>
				<nuxt-link
					to="/pages/about-us"
					class="text-dark"
				>About Us</nuxt-link>
			</li>
		</ul>
	</nav>

</template>

<script>
import { mainMenu } from '~/utils/data/menu';

export default {
	data: function () {
		return {
			mainMenu: mainMenu
		};
	}
};
</script>
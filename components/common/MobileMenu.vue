<template>
	<div class="mobile-menu-wrapper">
		<div
			class="mobile-menu-overlay"
			@click="hideMobileMenu"
		>
		</div>

		<a
			class="mobile-menu-close"
			href="javascript:;"
			@click="hideMobileMenu"
		><i class="d-icon-times"></i></a>

		<div class="mobile-menu-container scrollable">
			<form
				action="#"
				class="input-wrapper"
				@submit.prevent="searchProducts"
			>
				<input
					type="text"
					class="form-control"
					name="search"
					autocomplete="off"
					placeholder="Search your keyword..."
					v-model="searchTerm"
					required
				/>
				<button
					class="btn btn-search"
					type="submit"
				>
					<i class="d-icon-search"></i>
				</button>
			</form>

			<ul class="mobile-menu mmenu-anim">
				<li>
					<nuxt-link to="/">Home</nuxt-link>
				</li>

				<li :class="{show: openState[0]}">
					<nuxt-link to="/shop">Categories
						<span
							class="toggle-btn"
							@click.prevent="toggleState(0)"
						></span></nuxt-link>

					<vue-slide-toggle :open="openState[0]">
						<ul>
							<li :class="{show: openState[1]}">
								<a href="javascript:;">Variations 1
									<span
										class="toggle-btn"
										@click.prevent="toggleState(1)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[1]">
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
								</vue-slide-toggle>
							</li>

							<li :class="{show: openState[2]}">
								<a href="javascript:;">Variations 2
									<span
										class="toggle-btn"
										@click.prevent="toggleState(2)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[2]">
									<ul>
										<li
											:key="item.url"
											v-for="item in mainMenu.shop.variation2"
										>
											<nuxt-link :to="item.url">
												{{ item.title }}
												<span
													class="tip tip-new"
													v-if="item.new"
												>New</span>
											</nuxt-link>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>
						</ul>
					</vue-slide-toggle>
				</li>

				<li :class="{show: openState[3]}">
					<nuxt-link to="/product/default/fashionable-leather-satchel">Products
						<span
							class="toggle-btn"
							@click.prevent="toggleState(3)"
						></span>
					</nuxt-link>

					<vue-slide-toggle :open="openState[3]">
						<ul>
							<li :class="{show: openState[4]}">
								<a href="javascript:;">Product Pages
									<span
										class="toggle-btn"
										@click.prevent="toggleState(4)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[4]">
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
								</vue-slide-toggle>
							</li>
						</ul>
					</vue-slide-toggle>

					<vue-slide-toggle :open="openState[3]">
						<ul>
							<li :class="{show: openState[5]}">
								<a href="javascript:;">Product Layouts
									<span
										class="toggle-btn"
										@click.prevent="toggleState(5)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[5]">
									<ul>
										<li
											:key="item.url + index"
											v-for="(item, index) in mainMenu.product.layout"
										>
											<nuxt-link :to="item.url">
												{{ item.title }}
												<span
													class="tip tip-new"
													v-if="item.new"
												>New</span>
											</nuxt-link>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>
						</ul>
					</vue-slide-toggle>
				</li>

				<li :class="{show: openState[6]}">
					<a href="javascript:;">Pages
						<span
							class="toggle-btn"
							@click.prevent="toggleState(6)"
						></span>
					</a>

					<vue-slide-toggle :open="openState[6]">
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
					</vue-slide-toggle>
				</li>

				<li :class="{show: openState[7]}">
					<nuxt-link to="/blog/classic">Blog
						<span
							class="toggle-btn"
							@click.prevent="toggleState(7)"
						></span>
					</nuxt-link>

					<vue-slide-toggle :open="openState[7]">
				<li>
					<nuxt-link to="/blog/classic">Classic</nuxt-link>
				</li>

				<li>
					<nuxt-link to="/blog/listing">Listing</nuxt-link>
				</li>

				<li :class="{show: openState[8]}">
					<a href="javascript:;">Grid
						<span
							class="toggle-btn"
							@click.prevent="toggleState(8)"
						></span>
					</a>

					<vue-slide-toggle :open="openState[8]">
						<ul>
							<li>
								<nuxt-link to="/blog/grid/2cols">Grid 2 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/grid/3cols">Grid 3 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/grid/4cols">Grid 4 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/grid/sidebar">Grid sidebar</nuxt-link>
							</li>
						</ul>
					</vue-slide-toggle>
				</li>

				<li :class="{show: openState[9]}">
					<a href="javascript:;">Masonry
						<span
							class="toggle-btn"
							@click.prevent="toggleState(9)"
						></span>
					</a>

					<vue-slide-toggle :open="openState[9]">
						<ul>
							<li>
								<nuxt-link to="/blog/masonry/2cols">Masonry 2 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/masonry/3cols">Masonry 3 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/masonry/4cols">Masonry 4 columns</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/masonry/sidebar">Masonry sidebar</nuxt-link>
							</li>
						</ul>
					</vue-slide-toggle>
				</li>

				<li :class="{show: openState[10]}">
					<a href="javascript:;">Mask
						<span
							class="toggle-btn"
							@click.prevent="toggleState(10)"
						></span>
					</a>

					<vue-slide-toggle :open="openState[10]">
						<ul>
							<li>
								<nuxt-link to="/blog/mask/grid">Blog mask grid</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/mask/masonry">Blog mask masonry</nuxt-link>
							</li>
						</ul>
					</vue-slide-toggle>
				</li>

				<li>
					<nuxt-link to="/blog/single/explore-fashion-trending-for-women-in-autumn-2021">Single Post</nuxt-link>
				</li>
				</vue-slide-toggle>
				</li>

				<li :class="{show: openState[11]}">
					<a href="javascript:;">Elements
						<span
							class="toggle-btn"
							@click.prevent="toggleState(11)"
						></span>
					</a>

					<vue-slide-toggle :open="openState[11]">
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
					</vue-slide-toggle>
				</li>

				<li><a
						rel="noopener"
						href="https://d-themes.com/buynow/riodevue"
						target="_blank"
					>Buy Riode!</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

import { mainMenu } from '~/utils/data/menu';

export default {
	components: {
		VueSlideToggle
	},
	data: function () {
		return {
			mainMenu: mainMenu,
			openState: new Array( 100 ).fill( false ),
			searchTerm: ''
		};
	},
	methods: {
		hideMobileMenu: function () {
			document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
		},
		toggleState: function ( index ) {
			let temp = [ ...this.openState ];
			temp[ index ] = !temp[ index ];
			this.openState = temp;
		},
		searchProducts: function () {
			if ( this.searchTerm.length > 2 ) {
				this.$router.push( {
					path: '/shop',
					query: {
						search: this.searchTerm
					}
				} )

				this.searchTerm = '';
			}
		}
	}
};
</script>
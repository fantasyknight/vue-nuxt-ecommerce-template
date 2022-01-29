<template>
	<div
		class="col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper"
		sticky-container
	>
		<div
			class="sidebar-overlay"
			@click="sidebarToggleHandler"
		>
			<a
				class="sidebar-close"
				href="javascript:;"
			><i class="d-icon-times"></i></a>
		</div>
		<a
			href="javascript:;"
			@click="sidebarToggleHandler"
			class="sidebar-toggle"
		><i class="fas fa-chevron-left"></i></a>

		<div
			v-sticky="isSticky"
			sticky-offset="{top: 80}"
		>
			<template>
				<div
					class="widget-2"
					:class="loaded ? 'd-none': ''"
				></div>
			</template>

			<div
				class="sidebar-content"
				:class="loaded ? '': 'd-none'"
				v-images-loaded.on="handleSkeleton"
			>
				<div class="widget widget-search border-no mb-2">
					<form
						action="#"
						class="input-wrapper input-wrapper-inline btn-absolute"
						@submit.prevent="searchBlog"
					>
						<input
							type="text"
							class="form-control"
							name="search"
							autoComplete="off"
							v-model="search"
							aria-label="blog search box"
							placeholder="Search in Blog"
							required
						/>
						<button
							class="btn btn-search btn-link"
							type="submit"
						>
							<span class="sr-only">Blog Search button</span>
							<i class="d-icon-search"></i>
						</button>
					</form>
				</div>

				<div class="widget widget-collapsible border-no">
					<div
						class="parse-content"
						:class="{expanded: isCatExpanded, collapsed: !isCatExpanded}"
					>
						<h3
							class='widget-title border-no'
							@click="isCatExpanded = !isCatExpanded"
						>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>

						<vue-slide-toggle :open="isCatExpanded">
							<ul class="widget-body filter-items search-ul">
								<li :class=" $route.category === 'fashion' ? 'active' : '' ">
									<nuxt-link :to="{ path: '/blog/classic', query: { ...$route.query, category: 'fashion' } } ">Fashion</nuxt-link>
								</li>
								<li :class=" $route.category === 'lifestyle' ? 'active' : '' ">
									<nuxt-link :to="{ path: '/blog/classic', query: { ...$route.query, category: 'lifestyle' } } ">Lifestyle</nuxt-link>
								</li>
								<li :class=" $route.category === 'shopping' ? 'active' : '' ">
									<nuxt-link :to="{ path: '/blog/classic', query: { ...$route.query, category: 'shopping' } } ">Shopping</nuxt-link>
								</li>
								<li :class=" $route.category === 'sport' ? 'active' : '' ">
									<nuxt-link :to="{ path: '/blog/classic', query: { ...$route.query, category: 'sport' } } ">Sport</nuxt-link>
								</li>
								<li :class=" $route.category === 'travel' ? 'active' : '' ">
									<nuxt-link :to="{ path: '/blog/classic', query: { ...$route.query, category: 'travel' } } ">Travel</nuxt-link>
								</li>
							</ul>
						</vue-slide-toggle>
					</div>
				</div>

				<div class="widget widget-collapsible">
					<div
						class="parse-content"
						:class="{expanded: isRecentExpanded, collapsed: !isRecentExpanded}"
					>
						<h3
							class='widget-title border-no'
							@click="isRecentExpanded = !isRecentExpanded"
						>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>

						<vue-slide-toggle :open="isRecentExpanded">
							<div class="widget-body">
								<div
									class="post-col"
									v-for="(post,index) in recent"
									:key="'recent-post' + index"
								>
									<post-six :post="post"></post-six>
								</div>
							</div>
						</vue-slide-toggle>
					</div>
				</div>

				<div class="widget widget-collapsible">
					<div
						class="parse-content"
						:class="{expanded: isAboutExanded, collapsed: !isAboutExanded}"
					>
						<h3
							class='widget-title'
							@click="isAboutExanded = !isAboutExanded"
						>About us<span class='toggle-btn p-0 parse-content'></span></h3>

						<vue-slide-toggle :open="isAboutExanded">
							<div class="widget-body">
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
							</div>
						</vue-slide-toggle>
					</div>
				</div>

				<div class="widget widget-collapsible widget-posts">
					<div
						class="parse-content"
						:class="{expanded: isTagExanded, collapsed: !isTagExanded}"
					>
						<h3
							class='widget-title'
							@click="isTagExanded = !isTagExanded"
						>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>

						<vue-slide-toggle :open="isTagExanded">
							<div class="widget-body">
								<a
									href="javascript:;"
									class="tag"
								>Bag</a>
								<a
									href="javascript:;"
									class="tag"
								>Classic</a>
								<a
									href="javascript:;"
									class="tag"
								>Converse</a>
								<a
									href="javascript:;"
									class="tag"
								>Leather</a>
								<a
									href="javascript:;"
									class="tag"
								>Fit</a>
								<a
									href="javascript:;"
									class="tag"
								>Green</a>
								<a
									href="javascript:;"
									class="tag"
								>Man</a>
								<a
									href="javascript:;"
									class="tag"
								>Jeans</a>
								<a
									href="javascript:;"
									class="tag"
								>Women</a>
							</div>
						</vue-slide-toggle>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';
import Sticky from 'vue-sticky-directive';
import { VueSlideToggle } from 'vue-slide-toggle';

import PostSix from '~/components/elements/post/PostSix';

import Api, { baseUrl, currentDemo } from '~/api';

export default {
	components: {
		VueSlideToggle,
		PostSix
	},
	directives: {
		Sticky,
		imagesLoaded
	},
	data: function () {
		return {
			recent: null,
			loaded: false,
			search: '',
			isCatExpanded: true,
			isRecentExpanded: true,
			isAboutExanded: true,
			isTagExanded: true,
			isSticky: false
		};
	},
	created: function () {
		this.getBlog();
	},
	mounted: function () {
		this.resizeHandler();
		window.addEventListener( 'resize', this.resizeHandler, {
			passive: true
		} );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		getBlog: function () {
			Api.get( `${ baseUrl }/demo-${ currentDemo }/blog/sidebar` )
				.then( response => {
					this.recent = response.data.recent;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		sidebarToggleHandler: function () {
			document
				.querySelector( 'body' )
				.classList.toggle( 'right-sidebar-active' );
		},
		handleSkeleton: function () {
			this.loaded = true;
		},
		searchBlog: function ( e ) {
			document
				.querySelector( 'body' )
				.classList.remove( 'right-sidebar-active' );
			this.$router.push( {
				path: '/blog/classic',
				query: {
					search: this.removeXSSAttacks( this.search ).__html,
					page: 1
				}
			} );
		},
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
			window.innerWidth > 991 &&
				document
					.querySelector( 'body' )
					.classList.contains( 'right-sidebar-active' ) &&
				document
					.querySelector( 'body' )
					.classList.remove( 'right-sidebar-active' );
		},
		removeXSSAttacks: function ( html ) {
			const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

			// Removing the <script> tags
			while ( SCRIPT_REGEX.test( html ) ) {
				html = html.replace( SCRIPT_REGEX, '' );
			}

			// Removing all events from tags...
			html = html.replace( / on\w+="[^"]*"/g, '' );

			return {
				__html: html
			};
		}
	}
};
</script>
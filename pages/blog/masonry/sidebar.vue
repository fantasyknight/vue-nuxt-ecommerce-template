<template>
	<main class="main skeleton-body">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>
						<nuxt-link
							to="/blog/classic"
							class="active"
						>Blog</nuxt-link>
					</li>
					<li>Masonry With Sidebar</li>
				</ul>
			</div>
		</nav>

		<div class="page-content with-sidebar">
			<div class="container">
				<div class="row gutter-lg">
					<div class="col-lg-9">
						<template v-if="!loaded">
							<div class="row">
								<div
									class="skel-post grid-item col-sm-6"
									v-for="(item, index) in new Array(itemsPerPage).fill(1)"
									:key="'skel' + index"
								></div>
							</div>
						</template>

						<isotope
							ref="ref"
							class="posts grid row masonry masonry-2cols"
							:options="isotopeOptions"
							:list="posts"
							v-if="loaded && posts"
						>
							<template>
								<div
									class="info-box with-icon"
									v-if="posts && posts.length === 0"
								>
									<p class="mt-4">No blogs were found matching your selection.</p>
								</div>

								<div
									class="grid-item col-sm-6"
									v-for="(post,index) in posts"
									:key="'post' + index"
								>
									<post-eight
										:is-original="true"
										:post="post"
									></post-eight>
								</div>

								<div
									class="grid-sizer col-1"
									key="sizer"
								></div>
							</template>
						</isotope>

						<pagination
							:total-page="totalPage"
							v-if="totalPage"
						></pagination>
					</div>

					<blog-sidebar></blog-sidebar>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import isotope from 'vueisotope';

import PostEight from '~/components/elements/post/PostEight';
import Pagination from '~/components/elements/Pagination';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';

import Api, { baseUrl, currentDemo } from '~/api';
import { scrollHandler } from '~/utils';
import { filterList } from '~/utils/data/menu';

export default {
	components: {
		isotope,
		PostEight,
		Pagination,
		BlogSidebar
	},
	data: function () {
		return {
			posts: null,
			category: 'all',
			total: 0,
			page: 1,
			itemsPerPage: 8,
			loaded: false,
			totalPage: null,
			filterList: filterList,
			counts: {},
			isotopeOptions: {
				itemSelector: '.grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			}
		};
	},
	watch: {
		$route: function () {
			this.getBlog();
		}
	},
	created: function () {
		this.getBlog( false );
	},
	methods: {
		getBlog: function ( isScroll = true ) {
			this.loaded = false;
			this.posts = null;
			this.column = this.$route.params.column;
			this.category = this.$route.query.category;
			this.total = 0;
			this.totalPage = 0;

			if ( isScroll ) scrollHandler();

			let params = {
				page: this.$route.query.page
					? this.$route.query.page
					: this.page,
				from: this.$route.query.page
					? ( this.$route.query.page - 1 ) * this.itemsPerPage
					: 0,
				to: this.$route.query.page
					? this.$route.query.page * this.itemsPerPage
					: this.itemsPerPage,
				search: this.$route.query.search ? this.$route.query.search : ''
			};

			Api.get( `${ baseUrl }/demo-${ currentDemo }/blog`, {
				params: { ...params, category: this.category }
			} )
				.then( response => {
					this.posts = response.data.data;
					this.total = response.data.total;
					this.counts = response.data.counts;
					this.loaded = true;
					this.totalPage =
						parseInt( this.total / this.itemsPerPage ) +
						( this.total % this.itemsPerPage ? 1 : 0 );
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>
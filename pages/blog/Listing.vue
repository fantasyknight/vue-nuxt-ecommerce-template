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
							to=""
							class="active"
						>Blog</nuxt-link>
					</li>
					<li>Classic</li>
				</ul>
			</div>

			<div class="page-content with-sidebar">
				<div class="container">
					<div class="row gutter-lg">
						<div class="col-lg-9">
							<div class="posts">
								<template>
									<div
										class="skel-post-list mb-4"
										v-for="(item, index) in new Array(itemsPerPage).fill(1)"
										:key="'skel' + index"
										:class="loaded ? 'd-none': ''"
									></div>
								</template>

								<template>
									<div class="info-box with-icon">
										<p
											class="mt-4"
											:class="loaded ? '': 'd-none'"
											v-if="posts && posts.length === 0"
										>No blogs were found matching your selection.</p>
									</div>

									<div
										v-for="(post,index) in posts"
										:key="'post' + index"
										:class="loaded ? '': 'd-none'"
									>
										<post-seven :post="post"></post-seven>
									</div>
								</template>
							</div>

							<pagination
								:total-page="totalPage"
								v-if="totalPage"
							></pagination>
						</div>

						<blog-sidebar></blog-sidebar>
					</div>
				</div>
			</div>
		</nav>
	</main>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';

import PostSeven from '~/components/elements/post/PostSeven';
import Pagination from '~/components/elements/Pagination';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';

import Api, { baseUrl, currentDemo } from '~/api';
import { scrollHandler } from '~/utils';

export default {
	components: {
		PostSeven,
		Pagination,
		BlogSidebar
	},
	directives: {
		imagesLoaded
	},
	data: function () {
		return {
			posts: null,
			total: 0,
			page: 1,
			itemsPerPage: 6,
			loaded: false,
			totalPage: null
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
				params: { ...params, category: this.$route.query.category }
			} )
				.then( response => {
					this.posts = response.data.data;
					this.total = response.data.total;

					this.totalPage =
						parseInt( this.total / this.itemsPerPage ) +
						( this.total % this.itemsPerPage ? 1 : 0 );
					this.loaded = true;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>
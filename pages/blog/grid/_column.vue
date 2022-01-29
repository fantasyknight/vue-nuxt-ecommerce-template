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
					<li>Grid {{ column[0] }} Columns</li>
				</ul>
			</div>
		</nav>

		<div class="page-content pb-10 mb-10">
			<div class="container">
				<ul
					class="nav-filters filter-underline blog-filters justify-content-center"
					v-if="counts"
				>
					<li
						v-for="(item, index) in filterList"
						:key="'post' + index"
					>
						<nuxt-link
							:to="{path: `/blog/grid/${ column }`, query: { category: item.slug } }"
							:class="`nav-filter ${ category === item.slug || (category === undefined && item.slug === 'all' ) ? 'active' : '' }`"
						>{{ item.name }}
						</nuxt-link><span>{{counts[item.slug]}}</span>
					</li>
				</ul>

				<div :class="`posts grid row grid grid-${ column }`">
					<template v-if="!loaded">
						<div
							class="skel-post"
							v-for="(item, index) in new Array(itemsPerPage).fill(1)"
							:key="'skel' + index"
						></div>
					</template>

					<template v-else>
						<div
							class="info-box with-icon"
							v-if="posts && posts.length === 0"
						>
							<p class="mt-4">No blogs were found matching your selection.</p>
						</div>

						<div
							class="grid-item"
							v-for="(post,index) in posts"
							:key="'post' + index"
						>
							<post-eight :post="post"></post-eight>
						</div>
					</template>
				</div>

				<pagination
					:total-page="totalPage"
					v-if="totalPage"
				></pagination>
			</div>
		</div>
	</main>
</template>

<script>
import PostEight from '~/components/elements/post/PostEight';
import Pagination from '~/components/elements/Pagination';

import Api, { baseUrl, currentDemo } from '~/api';
import { scrollHandler } from '~/utils';
import { filterList } from '~/utils/data/menu';

export default {
	components: {
		PostEight,
		Pagination
	},
	data: function () {
		return {
			posts: null,
			column: '2cols',
			category: 'all',
			total: 0,
			page: 1,
			itemsPerPage: 8,
			loaded: false,
			totalPage: null,
			filterList: filterList,
			counts: {}
		};
	},
	computed: {
		catList: function () {
			let text = '';
			filterList.forEach( item => {
				text = text.concat( item.slug, ',' );
			} );
			return text;
		}
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
			this.column = this.$route.params.column;
			this.category = this.$route.query.category;

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
				filter_list: this.catList
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
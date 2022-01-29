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
					<li>Masonry {{ column[0] }} Columns</li>
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
							:to="{path: `/blog/masonry/${ column }`, query: { category: item.slug } }"
							:class="`nav-filter ${ category === item.slug || (category === undefined && item.slug === 'all' ) ? 'active' : '' }`"
						>{{ item.name }}
						</nuxt-link><span>{{counts[item.slug]}}</span>
					</li>
				</ul>

				<template v-if="!loaded">
					<div class="row">
						<div
							:class="`skel-post grid-item ${gridCols[column]}`"
							v-for="(item, index) in new Array(itemsPerPage).fill(1)"
							:key="'skel' + index"
						></div>
					</div>
				</template>

				<isotope
					ref="isotopeRef"
					:class="`posts grid row masonry masonry-${ column }`"
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
							:class="`grid-item ${gridCols[column]}`"
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
		</div>
	</main>
</template>

<script>
import isotope from 'vueisotope';

import PostEight from '~/components/elements/post/PostEight';
import Pagination from '~/components/elements/Pagination';

import Api, { baseUrl, currentDemo } from '~/api';
import { scrollHandler } from '~/utils';
import { filterList } from '~/utils/data/menu';

export default {
	components: {
		isotope,
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
			counts: {},
			isotopeOptions: {
				itemSelector: '.grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			},
			gridCols: {
				'2cols': 'col-sm-6',
				'3cols': 'col-sm-6 col-lg-4',
				'4cols': 'col-sm-6 col-lg-4 col-xl-3'
			}
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
		this.getBlog();
	},
	methods: {
		getBlog: function () {
			this.loaded = false;
			this.posts = null;
			this.column = this.$route.params.column;
			this.category = this.$route.query.category;

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

					setTimeout( () => {
						this.$refs.isotopeRef.iso.layout();
					}, 1 );

					this.totalPage =
						parseInt( this.total / this.itemsPerPage ) +
						( this.total % this.itemsPerPage ? 1 : 0 );
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
};
</script>
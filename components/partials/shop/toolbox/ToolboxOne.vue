<template>
	<sticky-wrapper
		:breakpoint="992"
		type="mobile"
		stickyClass="sticky-toolbox"
		direction="up"
		:offsetTop="450"
	>
		<nav class="toolbox sticky-toolbox sticky-content fix-top">
			<div class="toolbox-left">
				<a
					href="javascript:;"
					@click.prevent="showSidebar('sidebar-active')"
					class="toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right"
					v-if="$route.path.includes('off-canvas') || ($route.path.includes('grid') && $route.params.cols !== '4cols' && $route.params.cols !== '3cols')"
					key="offCanvasFilter"
				>Filter<i class="d-icon-arrow-right"></i></a>

				<a
					v-else-if="!$route.path.includes('right-sidebar')"
					href="javascript:;"
					@click.prevent="showSidebar('sidebar-active')"
					class="toolbox-item left-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none"
				>Filter<i class="d-icon-arrow-right"></i></a>

				<div class="toolbox-item toolbox-sort select-box text-dark">
					<label>Sort By :</label>
					<select
						name="orderby"
						class="form-control"
						v-model="sortBy"
						aria-label="select sort"
						@change="setSortby"
					>
						<option value="default">Default</option>
						<option value="popularity">Most Popular</option>
						<option value="rating">Average rating</option>
						<option value="date">Latest</option>
						<option value="price-low">Sort forward price low</option>
						<option value="price-high">Sort forward price high</option>
						<option value="default">Clear custom sort</option>
					</select>
				</div>

			</div>
			<div class="toolbox-right">
				<div class="toolbox-item toolbox-show select-box text-dark">
					<label>Show :</label>
					<select
						name="count"
						class="form-control"
						v-model="perPage"
						aria-label="select showing count"
						@change="setPerPage"
					>
						<option value="12">12</option>
						<option value="24">24</option>
						<option value="36">36</option>
					</select>
				</div>
				<div
					class="toolbox-item toolbox-layout"
					:class="{ 'mr-lg-0': $route.path.includes('right-sidebar')}"
				>
					<nuxt-link
						:to="{query: {...$route.query, type: 'list'}}"
						class="d-icon-mode-list btn-layout"
						title="select list type"
						:class="{active: $route.query.type === 'list'}"
					></nuxt-link>
					<nuxt-link
						:to="{query: {...$route.query, type: 'grid'}}"
						class="d-icon-mode-grid btn-layout"
						title="select grid type"
						:class="{active: $route.query.type !== 'list'}"
					></nuxt-link>
				</div>

				<a
					href="javascript:;"
					v-if="$route.path.includes('right-sidebar')"
					class="toolbox-item right-sidebar-toggle btn btn-outline btn-primary btn-rounded btn-icon-right d-lg-none"
					@click.prevent="showSidebar('right-sidebar-active')"
				>Filter<i class="d-icon-arrow-left"></i></a>
			</div>
		</nav>
	</sticky-wrapper>
</template>

<script>
import StickyWrapper from '~/components/elements/StickyWrapper';

export default {
	components: {
		StickyWrapper
	},
	data: function () {
		return {
			sortBy: this.$route.query.sort_by
				? this.$route.query.sort_by
				: 'default',
			perPage: this.$route.query.per_page
				? this.$route.query.per_page
				: 12
		};
	},
	watch: {
		$route: function () {
			this.sortBy = this.$route.query.sort_by
				? this.$route.query.sort_by
				: 'default';
			this.perPage = this.$route.query.per_page
				? this.$route.query.per_page
				: 12;
		}
	},
	methods: {
		setSortby: function () {
			this.$router.push( {
				query: { ...this.$route.query, sort_by: this.sortBy }
			} );
		},
		setPerPage: function () {
			this.$router.push( {
				query: { ...this.$route.query, per_page: this.perPage, page: 1 }
			} );
		},
		showSidebar: function ( string = 'sidebar-active' ) {
			document.querySelector( 'body' ).classList.add( string );
		}
	}
};
</script>
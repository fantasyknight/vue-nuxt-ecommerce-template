<template>
	<ul
		class="pagination"
		v-if="indexList && totalPage > 1"
	>
		<li
			class="page-item"
			:class="page < 2 ? 'disabled' : ''"
		>
			<nuxt-link
				class="page-link page-link-prev"
				:to="{ query: { ...$route.query, page: parseInt(page) - 1 } }"
				v-if="page > 1"
			>
				<i class="d-icon-arrow-left"></i>Prev
			</nuxt-link>
			<a
				class="page-link page-link-prev"
				href="javascript:;"
				v-else
			><i class="d-icon-arrow-left"></i>Prev
			</a>
		</li>

		<template v-for="(item, index) in indexList">
			<template v-if="index === 1 && item > 2">
				<span
					class="page-item dots"
					:key="'pagination-dot-' + index"
				>...</span>
				<li
					class="page-item"
					:class="page === item ? 'active' : ''"
					:key="'pagination' + index"
				>
					<a
						class="page-link"
						href="javascript:;"
						v-if="page === item"
					>{{ item }}</a>
					<nuxt-link
						class="page-link"
						:to="{ query: { ...$route.query, page: item } }"
						v-else
					>
						{{ item }}
					</nuxt-link>
				</li>
			</template>

			<template v-else-if="index === indexList.length - 2 && item + 1 < totalPage">
				<li
					class="page-item"
					:class="page === item ? 'active' : ''"
					:key="'pagination' + index"
				>
					<a
						class="page-link"
						href="javascript:;"
						v-if="page === item"
					>{{ item }}</a>
					<nuxt-link
						class="page-link"
						:to="{ query: { ...$route.query, page: item } }"
						v-else
					>
						{{ item }}
					</nuxt-link>
				</li>
				<span
					class="page-item dots"
					:key="'pagination-dot-' + index"
				>...</span>
			</template>

			<template v-else>
				<li
					class="page-item"
					:class="page === item ? 'active' : ''"
					:key="'pagination' + index"
				>
					<a
						class="page-link"
						href="javascript:;"
						v-if="page === item"
					>{{ item }}</a>
					<nuxt-link
						class="page-link"
						:to="{ query: { ...$route.query, page: item } }"
						v-else
					>
						{{ item }}
					</nuxt-link>
				</li>
			</template>
		</template>

		<li
			class="page-item"
			:class="page > totalPage - 1 ? 'disabled' : ''"
		>
			<nuxt-link
				class="page-link page-link-next"
				:to="{ query: { ...$route.query, page: parseInt(page) + 1 } }"
				v-if="page < totalPage"
			>
				Next<i class="d-icon-arrow-right"></i>
			</nuxt-link>
			<a
				href="javascript:;"
				class="page-link page-link-next"
				v-else
			>Next<i class="d-icon-arrow-right"></i>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		totalPage: Number
	},
	watch: {
		$route: function () {
			this.getIndexList();
		},
		totalPage: function () {
			this.getIndexList();
		}
	},
	data: function () {
		return {
			maxShowCount: 7,
			distance: 2,
			min: 0,
			max: 0,
			page: 1,
			indexList: []
		};
	},
	created: function () {
		this.getIndexList();
	},
	methods: {
		getIndexList: function () {
			this.indexList = [];
			this.page = this.$route.query.page ? this.$route.query.page : 1;
			this.min = Math.max( this.page - this.distance, 2 );
			this.max = Math.min( this.page + this.distance, this.totalPage - 1 );
			for ( let i = this.min; i <= this.max; i++ ) {
				this.indexList[ i - this.min + 1 ] = i;
			}
			this.indexList[ 0 ] = 1;
			this.indexList[ this.max - this.min + 2 ] = this.totalPage;
		}
	}
};
</script>
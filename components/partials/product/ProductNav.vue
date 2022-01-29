<template>
	<ul class="product-nav">
		<li
			:class="`product-nav-${ next ? 'prev' : 'next no-next' }`"
			v-if="prev"
		>
			<nuxt-link :to="`/product/${type}/${prev.slug}`">
				<i class="d-icon-arrow-left"></i> Prev
				<span class="product-nav-popup">
					<img
						:src="`${baseUrl}${prev.pictures[0].url}`"
						alt="prev"
						width="110"
						height="123"
					/>
					<span class="product-name">{{ prev.name }}</span>
				</span>
			</nuxt-link>
		</li>

		<li
			class="product-nav-next"
			v-if="next"
		>
			<nuxt-link
				:to="`/product/${type}/${next.slug}`"
				v-if="next"
			>
				Next <i class="d-icon-arrow-right"></i>
				<span class="product-nav-popup">
					<img
						:src="`${baseUrl}${next.pictures[0].url}`"
						alt="product thumbnail"
						width="110"
						height="123"
					/>
					<span class="product-name">{{ next.name }}</span>
				</span>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
import { baseUrl } from '~/api';

export default {
	props: {
		next: Object,
		prev: Object
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			type: 'default'
		};
	},
	mounted: function() {
		this.type = window.location.pathname.split('/')[
			window.location.pathname.split('/').length - 2
		];
	}
};
</script>
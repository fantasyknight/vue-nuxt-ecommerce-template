<template>
	<div :class="`post post-list-sm ${overlayClass}`">
		<figure class="post-media">
			<nuxt-link :to="`/blog/single/${post.slug}`">
				<img
					v-lazy="`${baseUrl}${post.small_pictures[0].url}`"
					:width="post.small_pictures[0].width"
					:height="post.small_pictures[0].height"
					alt="post"
				/>
			</nuxt-link>
		</figure>

		<div class="post-details">
			<div class="post-meta">
				<a
					href="javascript:;"
					class="post-date"
				>{{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }}</a>
			</div>

			<h4 class="post-title">
				<nuxt-link :to="`/blog/single/${post.slug}`">{{ post.title }}</nuxt-link>
			</h4>
		</div>
	</div>
</template>

<script>
import { baseUrl } from '~/api';

export default {
	props: {
		post: Object,
		overlayClass: {
			type: String,
			default: ''
		}
	},
	data: function () {
		return {
			baseUrl: baseUrl
		};
	},
	computed: {
		date: function () {
			return new Date( this.post.date );
		}
	}
};
</script>
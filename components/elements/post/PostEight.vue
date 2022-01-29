<template>
	<div :class="`post post-grid ${overlayClass} ${post.type === 'video' ? 'post-video' : ''}`">
		<figure class="post-media">
			<nuxt-link
				:to="`/blog/single/${post.slug}`"
				v-if="post.type !== 'gallery' && !isOriginal"
			>
				<img
					v-lazy="`${baseUrl}${post.pictures[0].url}`"
					:width="post.pictures[0].width"
					:height="post.pictures[0].height"
					alt="post"
				/>
			</nuxt-link>

			<nuxt-link
				:to="`/blog/single/${post.slug}`"
				v-if="post.type !== 'gallery' && isOriginal"
			>
				<img
					v-lazy="`${baseUrl}${post.large_pictures[0].url}`"
					:width="post.large_pictures[0].width"
					:height="post.large_pictures[0].height"
					alt="post"
				/>
			</nuxt-link>

			<swiper-carousel
				class="swiper-theme swiper-dot-inner swiper-dot-white"
				:options="baseSlider11"
				v-if="post.type === 'gallery' && !isOriginal"
			>
				<div
					class="swiper-slide"
					v-for="item in post.pictures"
					:key="`post-one-` + item.url"
				>
					<img
						v-lazy="`${baseUrl}${item.url}`"
						:width="item.width"
						:height="item.height"
						alt="post"
					/>
				</div>
			</swiper-carousel>

			<swiper-carousel
				class="swiper-theme swiper-dot-inner swiper-dot-white"
				:options="baseSlider11"
				v-if="post.type === 'gallery' && isOriginal"
			>
				<div
					class="swiper-slide"
					v-for="item in post.large_pictures"
					:key="`post-one-` + item.url"
				>
					<img
						v-lazy="`${baseUrl}${item.url}`"
						:width="item.width"
						:height="item.height"
						alt="post"
					/>
				</div>
			</swiper-carousel>

			<template v-if="post.type === 'video'">
				<span
					class="video-play"
					@click="playVideoHandler($event)"
				></span>
				<video width="380">
					<source :src="`${baseUrl}${post.video.url}`" />
				</video>
			</template>
		</figure>
		<div class="post-details">
			<div class="post-meta">
				on <a
					href="javascript:;"
					class="post-date"
				>{{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }}</a> | <a
					href="javascript:;"
					class="post-comment"
				><span>{{ post.comments }}</span> Comments</a>
			</div>

			<h4 class="post-title">
				<nuxt-link :to="`/blog/single/${post.slug}`">{{ post.title }}</nuxt-link>
			</h4>
			<p class="post-content">
				{{ post.content }}
			</p>
			<nuxt-link
				:to="`/blog/single/${post.slug}`"
				class="btn btn-link btn-primary"
				:class="btnClass"
			>Read More<i class="d-icon-arrow-right"></i></nuxt-link>
		</div>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { baseUrl } from '~/api';
import { playVideo } from '~/utils';
import { baseSlider11 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	props: {
		post: Object,
		overlayClass: {
			type: String,
			default: 'overlay-dark'
		},
		btnClass: {
			type: String,
			default: 'btn-underline'
		},
		isOriginal: {
			type: Boolean,
			default: false
		},
		showCalendar: {
			type: Boolean,
			default: true
		}
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider11: baseSlider11
		};
	},
	computed: {
		date: function () {
			return new Date( this.post.date );
		}
	},
	methods: {
		playVideoHandler: function ( e ) {
			playVideo( e );
		}
	}
};
</script>
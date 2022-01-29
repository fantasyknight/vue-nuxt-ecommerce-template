<template>
	<div class="product-gallery product-gallery-vertical product-gallery-sticky">
		<swiper-carousel
			class="product-single-carousel swiper-theme swiper-nav-inner"
			:options="{...baseSlider4, spaceBetween: 0, nav: false}"
			ref="mediaRef"
		>
			<div
				class="swiper-slide"
				v-for="(item,index) in product.large_pictures"
				:key="`large-${index}`"
			>
				<figure class="product-image large-image">
					<img
						:src="`${baseUrl}${item.url}`"
						alt="large-picture"
						class="w-100"
						:width="item.width"
						:height="item.height"
					/>
				</figure>
			</div>
		</swiper-carousel>

		<a
			href="javascript:;"
			class="product-image-full"
			@click="openLightBox"
		>
			<i class="d-icon-zoom"></i>
		</a>

		<light-box
			ref="lightBox"
			:media="lightBoxMedia"
			:show-light-box="false"
		/>

		<div class="product-thumbs-wrap product-thumbs-two">
			<swiper-carousel
				class="swiper-theme product-thumbs product-thumb-carousel swiper-nav-full"
				:options="baseSlider18"
				ref="thumbRef"
				@resize="updatedThumb"
			>
				<div
					class="product-thumb swiper-slide"
					v-for="(item,index) in product.pictures"
					:key="`thumb-one-${index}`"
					:class="{active: index === 0}"
					@click="activeThumb(index)"
				>
					<img
						v-lazy="`${baseUrl}${item.url}`"
						alt="product thumbnail"
						:width="item.width"
						:height="item.height"
					>
				</div>
			</swiper-carousel>
		</div>

		<div class="product-label-group">
			<div
				class="product-label label-new"
				v-if="product.is_new"
			>New</div>
			<div
				class="product-label label-stock"
				v-if="product.stock === '0'"
			>Out</div>
			<div
				class="product-label label-top"
				v-if="product.is_top"
			>Top</div>
			<div
				class="product-label label-sale"
				v-if="product.discount > 0"
			>
				<template v-if="product.variants.length > 0">Sale</template>
				<template v-else>-{{ product.discount }}%</template>
			</div>
		</div>
	</div>
</template>

<script>
import LightBox from 'vue-image-lightbox';

import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { baseUrl } from '~/api';
import { baseSlider4, baseSlider18 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		LightBox
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider4: baseSlider4,
			baseSlider18: baseSlider18
		};
	},
	props: {
		product: Object
	},
	computed: {
		lightBoxMedia: function () {
			return this.product.large_pictures.reduce( ( acc, cur ) => {
				return [
					...acc,
					{
						src: `${ baseUrl }${ cur.url }`,
						thumb: `${ baseUrl }${ cur.url }`
					}
				];
			}, [] );
		}
	},
	mounted: function () {
		let self = this;
		this.$refs.mediaRef.mySwiper.on( 'transitionStart', function () {
			let activeIndex = self.$refs.mediaRef.mySwiper.activeIndex;
			self.$refs.thumbRef.mySwiper.slideTo( activeIndex );
			self.$refs.thumbRef.mySwiper.$el
				.find( '.swiper-wrapper' )
				.find( '.product-thumb.active' )[ 0 ]
				.classList.remove( 'active' );
			self.$refs.thumbRef.mySwiper.$el
				.find( '.swiper-wrapper' )
				.find( '.product-thumb' )
			[ activeIndex ].classList.add( 'active' );
		} );

		this.$refs.lightBox.$on( 'onOpened', function () {
			document.querySelector( '.sticky-header.fixed' ) && document.querySelector( '.sticky-header.fixed' ).setAttribute( 'style', 'display: none' );
			document.querySelector('.main') && document.querySelector('.main').setAttribute('style', 'z-index: 2000');
			window.addEventListener( 'scroll', self.headerVisibleHandler, { passive: true } );
		} )

		this.$refs.lightBox.$on( 'onClosed', function () {
			document.querySelector( '.sticky-header' ) && document.querySelector( '.sticky-header' ).removeAttribute( 'style' );
			setTimeout(() => {				
				document.querySelector('.main') && document.querySelector('.main').removeAttribute('style');
			}, 140);
			window.removeEventListener( 'scroll', self.headerVisibleHandler, { passive: true } );
		} )
	},
	methods: {
		activeThumb: function ( index ) {
			this.$refs.mediaRef.mySwiper.slideTo( index );
			this.$refs.thumbRef.mySwiper.slideTo( index );
		},
		updatedThumb: function () {
			this.$refs.thumbRef.mySwiper.update();
		},
		openLightBox: function () {
			this.$refs.lightBox.showImage(
				this.$refs.mediaRef.mySwiper.activeIndex
			);
		},
		headerVisibleHandler: function () {
			if ( document.querySelector( '.sticky-header.fixed' ) ) {
				document.querySelector( '.sticky-header.fixed' ) && document.querySelector( '.sticky-header.fixed' ).setAttribute( 'style', 'display: none' );
			} else {
				document.querySelector( '.sticky-header' ) && document.querySelector( '.sticky-header' ).removeAttribute( 'style' );
			}
		}
	}
};
</script>
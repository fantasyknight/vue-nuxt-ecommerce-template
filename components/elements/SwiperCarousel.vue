<template>
	<div class="swiper-carousel">
		<div
			ref="myCarousel"
			v-swiper:mySwiper="sliderOption"
			@resize="updateCarousel"
		>
			<div class="swiper-wrapper">
				<slot></slot>
			</div>

			<div
				class="swiper-nav"
				:class="{disabled: isNavDisabled}"
				v-if="sliderOption.navigation"
			>
				<button
					type="button"
					role="presentation"
					class="swiper-prev"
				>
					<i :class="sliderOption.navIcon.prev"></i>
				</button>

				<button
					type="button"
					role="presentation"
					class="swiper-next"
				>
					<i :class="sliderOption.navIcon.next"></i>
				</button>
			</div>

			<div
				class="swiper-dots swiper-pagination-bullets"
				v-if="sliderOption.pagination"
				:class="{ 'disabled' : isDotDisabled }"
			></div>
		</div>
	</div>
</template>

<script>
const defaultOption = {
	loop: false,
	scrollbar: {
		draggable: false
	},
	spaceBetween: 20,
	slidesPerView: 1,
	watchSlidesVisibility: true,
	clickable: true,
	navIcon: {
		prev: 'd-icon-angle-left',
		next: 'd-icon-angle-right'
	},
	isCustomNav: false
};
export default {
	props: {
		options: Object
	},
	data: function () {
		return {
			sliderOption: Object.assign( {}, defaultOption, this.options ),
			isNavDisabled: false,
			isDotDisabled: false
		};
	},
	mounted: function () {
		this.updateCarousel();
	},
	methods: {
		updateCarousel: function () {
			let dots = this.$refs.myCarousel.querySelector( '.swiper-dots' );
			// this.mySwiper.update();
			if ( dots ) {
				if ( dots.querySelectorAll( '.swiper-pagination-bullet' ).length <= 1 ) {
					this.isDotDisabled = true;
				} else {
					this.isDotDisabled = false;
				}
			}
		}
	}
};
</script>
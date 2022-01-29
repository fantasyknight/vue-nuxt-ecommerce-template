<template>
	<div>
		<div class="page-wrapper">
			<header-default></header-default>
			<nuxt></nuxt>
			<footer-default></footer-default>
			<scroll-top-button></scroll-top-button>

			<cart-popup class="cart-popup"></cart-popup>
		</div>
		<mobile-menu></mobile-menu>
		<footer-sticky></footer-sticky>
	</div>
</template>
 
<script>
import HeaderDefault from '~/components/common/HeaderDefault';
import FooterDefault from '~/components/common/FooterDefault';
import FooterSticky from '~/components/common/FooterSticky';
import MobileMenu from '~/components/common/MobileMenu';
import CartPopup from '~/components/elements/product/CartPopup';
import ScrollTopButton from '~/components/common/ScrollTopButton';

export default {
	components: {
		HeaderDefault,
		FooterDefault,
		FooterSticky,
		ScrollTopButton,
		CartPopup,
		MobileMenu
	},
	computed: {
		path: function () {
			return this.$route.path;
		}
	},
	watch: {
		path: function () {
			this.$modal.hideAll();
			this.resizeHandler();
		}
	},
	mounted: function () {
		window.addEventListener( 'resize', this.resizeHandler );
	},
	destroyed: function () {
		window.removeEventListener( 'resize', this.resizeHandler );
	},
	methods: {
		resizeHandler: function () {
			let bodyClasses = document.querySelector( "body" ).classList.value.split( ' ' );
			bodyClasses.forEach( item => {
				if ( item !== '' && item !== 'overflow-hidden' ) {
					document.querySelector( "body" ).classList.remove( item );
				}
			} )
		}
	}
}
</script>
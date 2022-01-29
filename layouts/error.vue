<template>
	<div>
		<header-default></header-default>

		<div class="main">
			<div class="page-content">
				<section class="error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3">
					<h1 class="mb-2 ls-m">Error 404</h1>
					<figure style="max-height: 131px">
						<img
							v-lazy="'images/subpages/404.png'"
							alt="error 404"
							:width="609"
							:height="131"
						/>
					</figure>
					<h4 class="mt-7 mb-0 ls-m text-uppercase">Ooopps! That page can’t be found.</h4>
					<p class="text-grey font-primary ls-m">It looks like nothing was found at this location.</p>
					<nuxt-link
						to="/"
						class="btn btn-primary btn-rounded mb-4"
					>Go home</nuxt-link>
				</section>
			</div>
		</div>

		<footer-default></footer-default>
		<scroll-top-button></scroll-top-button>

		<mobile-menu></mobile-menu>
		<footer-sticky></footer-sticky>
	</div>
</template>

<script>
import HeaderDefault from '~/components/common/HeaderDefault';
import FooterDefault from '~/components/common/FooterDefault';
import FooterSticky from '~/components/common/FooterSticky';
import MobileMenu from '~/components/common/MobileMenu';
import ScrollTopButton from '~/components/common/ScrollTopButton';

export default {
	layout: 'layout-blank',
	components: {
		HeaderDefault,
		FooterDefault,
		FooterSticky,
		ScrollTopButton,
		MobileMenu
	},
	mounted: function () {
		document.querySelector( 'header' ).classList.remove( 'header-border' );
	}
}
</script>
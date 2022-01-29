<template>
	<sticky-wrapper
		type="mobile"
		:breakpoint="768"
		direction="down"
		stickyClass="sticky-footer"
	>
		<div class="sticky-footer sticky-content fix-bottom">
			<nuxt-link
				to="/"
				class="sticky-link"
			>
				<i class="d-icon-home"></i>
				<span>Home</span>
			</nuxt-link>

			<nuxt-link
				to="/shop"
				class="sticky-link"
			>
				<i class="d-icon-volume"></i>
				<span>Categories</span>
			</nuxt-link>

			<nuxt-link
				to="/pages/wishlist"
				class="sticky-link"
			>
				<i class="d-icon-heart"></i>
				<span>Wishlist</span>
			</nuxt-link>

			<nuxt-link
				to="/pages/account"
				class="sticky-link"
			>
				<i class="d-icon-user"></i>
				<span>Account</span>
			</nuxt-link>

			<footer-search-box></footer-search-box>
		</div>
	</sticky-wrapper>
</template>

<script>
import StickyWrapper from '~/components/elements/StickyWrapper';
import FooterSearchBox from '~/components/common/partials/FooterSearchBox';

export default {
	components: {
		StickyWrapper,
		FooterSearchBox
	}
};
</script>
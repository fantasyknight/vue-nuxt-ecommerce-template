<template>
	<header
		class="header"
		:class="{'header-border': !headerBorderRemoveList.includes($route.name)}"
	>
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<p class="welcome-msg">Welcome to Riode store message or remove it!</p>
				</div>
				<div class="header-right">
					<div class="dropdown">
						<a href="javascript:;">USD</a>
						<ul class="dropdown-box">
							<li>
								<a href="javascript:;">USD</a>
							</li>
							<li>
								<a href="javascript:;">EUR</a>
							</li>
						</ul>
					</div>

					<div class="dropdown ml-5">
						<a href="javascript:;">ENG</a>
						<ul class="dropdown-box">
							<li>
								<a href="javascript:;">ENG</a>
							</li>
							<li>
								<a href="javascript:;">FRH</a>
							</li>
						</ul>
					</div>

					<span class="divider d-none d-lg-block"></span>
					<nuxt-link
						to="/pages/contact-us"
						class="contact d-lg-show"
					><i class="d-icon-map"></i>Contact</nuxt-link>
					<a
						href="javascript:;"
						class="help d-lg-show"
					><i class="d-icon-info"></i> Need Help</a>

					<header-login></header-login>
				</div>
			</div>
		</div>

		<sticky-wrapper>
			<div class="header-middle sticky-header fix-top sticky-content">
				<div class="container">
					<div class="header-left">
						<a
							href="javascript:;"
							class="mobile-menu-toggle"
							@click="showMobileMenu"
						>
							<i class="d-icon-bars2"></i>
						</a>
						<nuxt-link
							to="/"
							class="logo"
						>
							<img
								src="~/static/images/logo.png"
								alt="logo"
								width="153"
								height="44"
							/>
						</nuxt-link>

						<search-box></search-box>
					</div>

					<div class="header-right">
						<a
							href="tel:#"
							class="icon-box icon-box-side"
						>
							<div class="icon-box-icon mr-0 mr-lg-2">
								<i class="d-icon-phone"></i>
							</div>
							<div class="icon-box-content d-lg-show">
								<h4 class="icon-box-title">Call Us Now:</h4>
								<p>0(800) 123-456</p>
							</div>
						</a>

						<span class="divider"></span>
						<nuxt-link
							to="/pages/wishlist"
							title="header-wishlist"
							class="wishlist"
						>
							<i class="d-icon-heart"></i>
						</nuxt-link>
						<span class="divider"></span>

						<cart-menu></cart-menu>
					</div>
				</div>
			</div>
		</sticky-wrapper>

		<div class="header-bottom d-lg-show">
			<div class="container">
				<div class="header-left">
					<main-menu></main-menu>
				</div>

				<div class="header-right">
					<a href="javascript:;"><i class="d-icon-card"></i>Special Offers</a>
					<a
						href="https://d-themes.com/buynow/riodevue"
						target="_blank"
						rel="noopener"
						class="ml-6"
					>Buy Riode!</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SearchBox from '~/components/common/partials/SearchBox';
import CartMenu from '~/components/common/partials/CartMenu';
import MainMenu from '~/components/common/partials/MainMenu';
import HeaderLogin from '~/components/common/partials/HeaderLogin';
import StickyWrapper from '~/components/elements/StickyWrapper';

import { headerBorderRemoveList } from '~/utils/data/menu';

export default {
	components: {
		SearchBox,
		CartMenu,
		MainMenu,
		HeaderLogin,
		StickyWrapper
	},
	data: function () {
		return {
			headerBorderRemoveList: headerBorderRemoveList
		};
	},
	methods: {
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		}
	}
};
</script>
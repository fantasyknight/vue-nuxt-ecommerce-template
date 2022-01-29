<template>
	<main class="main home">
		<div class="page-content">
			<div class="intro-section">
				<intro-section></intro-section>

				<service-section></service-section>
			</div>

			<category-section></category-section>

			<best-collection :products="bestSelling"></best-collection>

			<banner-section></banner-section>

			<featured-collection :products="featured"></featured-collection>

			<promo-section></promo-section>

			<blog-section :posts="posts"></blog-section>

			<brand-section></brand-section>

			<small-collection
				:best-selling="bestSelling"
				:latest="latest"
				:on-sale="onSale"
				:top-rated="topRated"
			></small-collection>
		</div>
	</main>
</template>

<script>
import IntroSection from '~/components/partials/home/IntroSection';
import ServiceSection from '~/components/partials/home/ServiceSection';
import CategorySection from '~/components/partials/home/CategorySection';
import BestCollection from '~/components/partials/home/BestCollection';
import BannerSection from '~/components/partials/home/BannerSection';
import FeaturedCollection from '~/components/partials/home/FeaturedCollection';
import PromoSection from '~/components/partials/home/PromoSection';
import BlogSection from '~/components/partials/home/BlogSection';
import BrandSection from '~/components/partials/home/BrandSection';
import SmallCollection from '~/components/partials/home/SmallCollection';

import Api, { baseUrl, currentDemo } from '~/api';
import { getCookie } from '~/utils';

export default {
	components: {
		IntroSection,
		ServiceSection,
		CategorySection,
		BestCollection,
		BannerSection,
		FeaturedCollection,
		PromoSection,
		BlogSection,
		BrandSection,
		SmallCollection
	},
	data: function () {
		return {
			bestSelling: null,
			featured: null,
			latest: null,
			topRated: null,
			posts: null,
			onSale: null,
			timer: null
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo-${ currentDemo }`, {
			params: {
				best_selling: true,
				limit: 5,
				featured: true,
				is_post: true,
				top_rated: true,
				on_sale: true,
				latest: true
			}
		} )
			.then( response => {
				this.bestSelling = response.data.bestSelling;
				this.featured = response.data.featured;
				this.latest = response.data.latest;
				this.topRated = response.data.topRated;
				this.onSale = response.data.onSale;
				this.posts = response.data.posts;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );


		this.timer = setTimeout( () => {
			if ( this.$route.path === '/' && getCookie( 'newsletter' ) !== 'false' ) {
				this.$modal.show(
					() => import( '~/components/elements/modal/NewsletterModal' ),
					null,
					{
						width: '720',
						height: 'auto',
						adaptive: true,
						class: 'newsletter-modal'
					}
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		if ( this.timer ) clearTimeout( this.timer );
	}
};
</script>
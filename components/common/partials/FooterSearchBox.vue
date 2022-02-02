<template>
	<div
		class="header-search hs-toggle dir-up"
		ref="footerResults"
	>
		<a
			href="javascript:;"
			class="search-toggle sticky-link"
			role="button"
			@click.stop="showResults($event)"
		>
			<i class="d-icon-search"></i>
			<span>Search</span>
		</a>

		<form
			action="#"
			class="input-wrapper"
			@submit.prevent="submitHandler"
		>
			<input
				type="text"
				class="form-control"
				name="search"
				aria-label="search-box"
				autocomplete="off"
				placeholder="Search..."
				required
				v-model="search_term"
				@input="searchProducts"
				@click.stop="showResults"
			/>
			<button
				class="btn btn-search"
				type="submit"
				name="search"
			>
				<span class="sr-only">header search button</span>
				<i class="d-icon-search"></i>
			</button>
			<div
				class="live-search-list bg-white"
				v-if="suggestions.length > 0"
			>
				<nuxt-link
					:to="'/product/default/' + product.slug"
					class="autocomplete-suggestion"
					v-for="product in suggestions.slice(0, 5)"
					:key="product.id"
				>
					<img
						:src="`${baseUrl}${product.pictures[0].url}`"
						alt="Product"
						width="40"
						height="40"
						class="product-image"
					/>

					<div
						class="search-name"
						v-html="emphasizeMatchWord( product.name )"
					></div>

					<div class="search-price">
						<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
							<span class="new-price">${{ product.display_price[0] | priceFormat  }}</span>
						</template>

						<template v-else>
							<template v-if="product.variants.length === 0">
								<span class="new-price mr-1">${{ product.display_price[0] | priceFormat }}</span>
								<span class="old-price">${{ product.display_price[1] | priceFormat }}</span>
							</template>

							<template v-else>
								<span class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</span>
							</template>
						</template>
					</div>
				</nuxt-link>
			</div>
		</form>
	</div>
</template>

<script>
import Api, { baseUrl, currentDemo } from '~/repository';

export default {
	data: function () {
		return {
			search_term: '',
			suggestions: [],
			currentDemo: currentDemo,
			baseUrl: baseUrl,
			timeouts: []
		};
	},
	created: function () {
//		document.querySelector( 'body' ).addEventListener( 'click', this.onBodyClick );
	},
	watch: {
		$route: function () {
			let self = this;

			self.$refs.footerResults.classList.remove( 'show-results' );
		}
	},
	destroyed: function () {
		document.querySelector( 'body' ).removeEventListener( 'click', this.onBodyClick );
	},
	methods: {
		searchProducts: function () {
			if ( this.search_term.length > 2 ) {
				var search_term = this.removeXSSAttacks( this.search_term ).__html;
				this.timeouts.map( timeout => {
					window.clearTimeout( timeout );
				} );
				this.timeouts.push(
					setTimeout( () => {
						Api.get( `${ baseUrl }/demo-${ this.currentDemo }/shop`, {
							params: { search: search_term }
						} )
							.then( response => {
								this.suggestions = response.data.data;
							} )
							.catch( error => { } );
					}, 500 )
				);
			} else {
				this.timeouts.map( timeout => {
					window.clearTimeout( timeout );
				} );
				this.suggestions = [];
			}
		},
		emphasizeMatchWord: function ( name ) {
			var regExp = new RegExp( this.search_term, 'i' );
			return name.replace(
				regExp,
				match => '<strong>' + match + '</strong>'
			);
		},
		removeXSSAttacks: function ( html ) {
			const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

			// Removing the <script> tags
			while ( SCRIPT_REGEX.test( html ) ) {
				html = html.replace( SCRIPT_REGEX, '' );
			}

			// Removing all events from tags...
			html = html.replace( / on\w+="[^"]*"/g, '' );

			return {
				__html: html
			};
		},
		submitHandler: function () {
			this.$router.push( {
				path: '/shop',
				query: { search: this.search_term, page: 1 }
			} );
		},
		onBodyClick: function ( e ) {
			this.$refs.footerResults.classList.remove( 'show' );
			this.$refs.footerResults.classList.remove( 'show-results' );
		},
		onSearchClick: function ( e ) {
			e.preventDefault();
			e.stopPropagation();
			e.currentTarget.parentNode.classList.toggle( 'show' );
		},
		showResults: function () {
			this.$refs.footerResults.classList.add( 'show-results', 'show' );
		}
	}
};
</script>
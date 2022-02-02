<template>
	<div
		class="header-search hs-expanded"
		ref="results"
	>
		<form
			action="#"
			class="input-wrapper"
			@submit.prevent="submitHandler"
		>
			<div class="select-box">
				<select
					name="cat"
					class="cat"
					v-model="currentCategory"
					@click.stop="showResults"
					@change.stop="searchProducts"
				>
					<option
						value=""
						selected
					>All Categories</option>
					<option value="travel">Travel</option>
					<option value="shopping">Shopping</option>
					<option value="fashion">Fashion</option>
					<option value="lifestyle">Lifestyle</option>
				</select>
			</div>

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
				class="live-search-list bg-white scrollable"
				v-if="suggestions.length > 0"
			>
				<nuxt-link
					:to="'/product/default/' + product.slug"
					class="autocomplete-suggestion"
					v-for="product in suggestions"
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
							<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
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
			timeouts: [],
			currentCategory: ''
		};
	},
	created: function () {
//		document.querySelector( 'body' ).addEventListener( 'click', this.onBodyClick );
	},
	watch: {
		$route: function () {
			let self = this;

			setTimeout( () => {
				self.$refs.results.classList.remove( 'show-results' );
			}, 100 );
		}
	},
	destroyed: function () {
		document.querySelector( 'body' ).removeEventListener( 'click', this.onBodyClick );
	},
	methods: {
		searchProducts: function () {
			if ( this.search_term.length > 2 ) {
				var search_term = this.removeXSSAttacks( this.search_term )
					.__html;
				this.timeouts.map( timeout => {
					window.clearTimeout( timeout );
				} );
				this.timeouts.push(
					setTimeout( () => {
						Api.get( `${ baseUrl }/demo-${ this.currentDemo }/shop`, {
							params: {
								search: search_term,
								category: this.currentCategory
							}
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
				query: { search: this.search_term, page: 1, category: this.currentCategory }
			} );
		},
		onBodyClick: function ( e ) {
			this.$refs.results.classList.remove( 'show' );
			this.$refs.results.classList.remove( 'show-results' );
		},
		showResults: function () {
			this.$refs.results.classList.add( 'show-results' );
		}
	}
};
</script>
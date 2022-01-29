<template>
	<div
		class="newsletter-popup"
		id="newsletter-popup"
		v-lazy:background-image="'./images/newsletter-popup.jpg'"
	>
		<div class="newsletter-content">
			<h4 class="text-uppercase text-dark">Up to <span class="text-primary">20% Off</span></h4>
			<h2 class="font-weight-semi-bold">Sign up to <span>RIODE</span></h2>
			<p class="text-grey">Subscribe to the Riode eCommerce newsletter to receive timely updates from your favorite products.</p>
			<form
				action="#"
				method="get"
				class="input-wrapper input-wrapper-inline input-wrapper-round"
			>
				<input
					type="email"
					class="form-control email"
					name="email"
					id="email2"
					placeholder="Email address here..."
					required
				/>
				<button
					class="btn btn-dark"
					type="submit"
				>SUBMIT</button>
			</form>
			<div class="form-checkbox justify-content-center">
				<input
					type="checkbox"
					class="custom-checkbox"
					id="hide-newsletter-popup"
					name="hide-newsletter-popup"
					v-model="isChecked"
					required
				/>
				<label for="hide-newsletter-popup">Don't show this popup again</label>
			</div>
		</div>
		<button
			title="Close (Esc)"
			type="button"
			class="modal-close"
			@click="closeModal"
		><span>×</span></button>
	</div>
</template>

<script>
import { setCookie } from '~/utils/index';

import { currentDemo } from '~/api';

export default {
	data: function () {
		return {
			isChecked: false
		}
	},
	watch: {
		isChecked: function () {
			setCookie( `newsletter-${ currentDemo }`, !this.isChecked );
		}
	},
	methods: {
		closeModal: function () {
			this.$emit( 'close' );
		}
	}
}
</script>
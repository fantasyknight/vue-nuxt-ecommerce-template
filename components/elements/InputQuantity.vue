<template>
	<div :class="defaultClass">
		<button
			class="quantity-minus d-icon-minus"
			@click="minusQty"
		><span class="sr-only">quantity plus button</span></button>
		<input
			class="quantity form-control"
			type="number"
			aria-label="quantity-input-form"
			min="1"
			v-model="currentQty"
			:max="parseInt(max)"
		>
		<button
			class="quantity-plus d-icon-plus"
			@click="plusQty"
		><span class="sr-only">quantity minus button</span></button>
	</div>
</template>

<script>
export default {
	props: {
		qty: {
			type: Number,
			default: 1
		},
		max: {
			type: String,
			default: 1000
		},
		defaultClass: {
			type: String,
			default: 'input-group'
		}
	},
	data: function () {
		return {
			currentQty: this.qty
		};
	},
	watch: {
		currentQty: function () {
			if ( this.currentQty > parseInt( this.max ) )
				this.currentQty = this.max;
			if ( this.currentQty === '' ) this.currentQty = 1;
			this.$emit( 'change-qty', parseInt( this.currentQty ) );
		}
	},
	methods: {
		plusQty: function () {
			if ( this.currentQty < this.max ) this.currentQty++;
		},
		minusQty: function () {
			if ( this.currentQty > 1 ) this.currentQty--;
		}
	}
};
</script>
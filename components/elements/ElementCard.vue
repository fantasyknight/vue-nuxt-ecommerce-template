<template>
	<div>
		<div
			class="card-header"
			:class="{expand: !isExpanded, collapse: isExpanded}"
			@click="changeOpenState($event)"
		>
			<slot name="header"></slot>
		</div>

		<vue-slide-toggle :open="isExpanded">
			<slot></slot>
		</vue-slide-toggle>
	</div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

export default {
	components: {
		VueSlideToggle
	},
	props: {
		isOpened: {
			type: Boolean,
			default: false
		}
	},
	data: function () {
		return {
			isExpanded: this.isOpened
		};
	},
	methods: {
		changeOpenState: function ( e ) {
			if ( e.target.classList.contains( 'form-control-label' ) ) {
				this.isExpanded = !this.isExpanded;
			}
			this.isExpanded = !this.isExpanded;

			this.$emit( 'fire' );
		}
	}
};
</script>
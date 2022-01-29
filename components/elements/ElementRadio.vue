<template>
	<div>
		<slot></slot>
	</div>
</template>
<script>
export default {
	data: function () {
		return {
			activeIndex: 0
		}
	},
	mounted: function () {
		let self = this;
		this.$children.forEach( ( child, index ) => {
			child.$on( 'fire', function () {
				if ( self.activeIndex !== index ) self.$children[ self.activeIndex ].isExpanded = false;
				else self.$children[ self.activeIndex ].isExpanded = true;

				self.activeIndex = index;
			} )
		} )
	}
}
</script>
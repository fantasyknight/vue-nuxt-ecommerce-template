<template>
	<div>
		<slot></slot>
	</div>
</template>
<script>
export default {
	mounted: function () {
		let self = this;
		this.$children.forEach( ( child, index ) => {
			child.$on( 'fire', function () {
				let tmp = child.isExpanded;
				self.$children.forEach( item => item.isExpanded = false );
				self.$children[ index ].isExpanded = tmp;
			} )
		} )
	}
}
</script>
<template>
	<transition name="fade">
		<div v-if="isExpanded">
			<slot></slot>

			<div @click="closeAlert">
				<slot name="header">
				</slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	data: function () {
		return {
			isExpanded: true
		}
	},
	methods: {
		closeAlert: function ( e ) {
			this.isExpanded = false;
		}
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
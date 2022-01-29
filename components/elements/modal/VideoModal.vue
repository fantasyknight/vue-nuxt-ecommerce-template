<template>
	<div
		class="row video-modal m-0"
		id="video-modal"
	>
		<video
			:src="baseUrl + slug"
			:autoPlay="true"
			:loop="true"
			:controls="true"
			class="p-0"
		></video>

		<button
			title="Close (Esc)"
			type="button"
			class="modal-close"
			@click="closeModal($event)"
		><span>×</span></button>
	</div>
</template>

<script>
import { baseUrl } from '~/api';

export default {
	props: {
		slug: ''
	},
	data: function () {
		return {
			baseUrl: baseUrl
		};
	},
	methods: {
		closeModal: function ( e ) {
			e.preventDefault();
			e.target
				.closest( '.vm--container' )
				.querySelector( '.vm--overlay' )
				.click();
		}
	}
};
</script>
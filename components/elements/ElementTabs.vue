<template>
	<div @click="tabClicked($event)">
		<slot></slot>
	</div>
</template>

<script>
export default {
	methods: {
		tabClicked: function(e) {
			if (
				e.target.classList.contains('nav-link') ||
				e.target.classList.contains('link-to-tab')
			) {
				e.preventDefault();

				let target = e.target;

				target
					.closest('.tab')
					.querySelector('.nav-link.active')
					.classList.remove('active');

				if (target.classList.contains('nav-link')) {
					// active nav-link
					target.classList.add('active');
				} else {
					let targets = target
						.closest('.tab')
						.querySelectorAll('.nav-link');
					for (let i = 0; i < targets.length; i++) {
						if (
							targets[i].getAttribute('href') ===
							target.getAttribute('href')
						) {
							targets[i].classList.add('active');
						}
					}
				}

				// active tab-pane
				let tabPane = e.target
					.closest('.tab')
					.querySelector(target.getAttribute('href'));

				tabPane.parentNode
					.querySelector('.tab-pane.active')
					.classList.remove('active');
				tabPane.classList.add('active');

				setTimeout(() => {
					tabPane.parentNode
						.querySelector('.tab-pane.active')
						.classList.remove('active');
					tabPane.classList.add('active');
				}, 150);
			}
		}
	}
};
</script>
<template>
	<span class="count-to">
		<template v-if="!finished">{{ Math.ceil(current) }}</template>
		<slot v-if="finished"></slot>
	</span>
</template>
<script>
import { scrollHandler } from '~/utils';
export default {
	props: {
		start: {
			type: Number,
			default: 0
		},
		end: {
			type: Number,
			default: 0
		},
		speed: {
			type: Number,
			default: 2000
		},
		interval: {
			type: Number,
			default: 50
		}
	},
	data() {
		return {
			started: false,
			current: 0,
			intervalID: 0,
			finished: false
		};
	},
	computed: {
		step: function() {
			return ((this.end - this.start) * this.interval) / this.speed;
		}
	},
	mounted: function() {
		this.current = this.start;
		this.scrollHandler();
		window.addEventListener('scroll', this.scrollHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('scroll', this.scrollHandler);
	},
	methods: {
		scrollHandler: function() {
			const offset = 100;
			let offsetTop = this.$el.getBoundingClientRect().top;
			if (
				offsetTop > 0 &&
				window.innerHeight - this.$el.offsetHeight > offsetTop &&
				!this.started
			) {
				this.started = true;
				this.intervalID = window.setInterval(
					this.startCount,
					this.interval
				);
			}
		},
		startCount: function() {
			if (this.current + this.step <= this.end) {
				this.current += this.step;
			} else {
				window.clearInterval(this.intervalID);
				this.finished = true;
			}
		}
	}
};
</script>
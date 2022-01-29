<template>
	<div>
		<span
			class="countdown-row countdown-show4"
			v-if="type === 1"
		>
			<span class="countdown-section">
				<span class="countdown-amount">{{ 10 > days ? '0' + days : days }}</span>
				<span class="countdown-period">Days</span>
			</span>
			<span class="countdown-section">
				<span class="countdown-amount">{{ 10 > hours ? '0' + hours : hours }}</span>
				<span class="countdown-period">Hours</span>
			</span>
			<span class="countdown-section">
				<span class="countdown-amount">{{ 10 > minutes ? '0' + minutes : minutes }}</span>
				<span class="countdown-period">Minutes</span>
			</span>
			<span class="countdown-section">
				<span class="countdown-amount">{{ 10 > seconds ? '0' + seconds : seconds }}</span>
				<span class="countdown-period">Seconds</span>
			</span>
		</span>
		<template v-if="type===2">
			<span class="product-countdown-title">Offer Ends In:&nbsp;</span>
			<div class="product-countdown countdown-compact">
				<span class="countdown-section days">
					<span class="countdown-amount">{{ 10 > days ? '0' + days : days }}</span>
					<span class="countdown-period">days,&nbsp;</span>
				</span>

				<span class="countdown-section hours">
					<span class="countdown-amount">{{ 10 > hours ? '0' + hours : hours }}<span class="mr-1 ml-1">:</span></span>
				</span>

				<span class="countdown-section minutes">
					<span class="countdown-amount">{{ 10 > minutes ? '0' + minutes : minutes }}<span class="mr-1 ml-1">:</span></span>
				</span>

				<span class="countdown-section seconds">
					<span class="countdown-amount">{{ 10 > seconds ? '0' + seconds : seconds }}</span>
				</span>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: Number,
			default: 1
		},
		until: String
	},
	data: function() {
		return {
			days: null,
			hours: null,
			minutes: null,
			seconds: null,
			time: null
		};
	},
	mounted: function() {
		this.time = this.until.substring(1, this.until.length - 1);
		switch (this.until[this.until.length - 1]) {
			case 'h':
				this.time = this.time * 3600;
				break;
			case 'm':
				this.time = this.time * 60;
				break;
			case 'd':
				this.time = this.time * 3600 * 24;
				break;
			default:
				break;
		}

		this.core();

		setInterval(() => {
			this.core();
		}, 1000);
	},
	methods: {
		core: function() {
			let until = new Date(this.until);
			let current = new Date();
			let time = (until - current) / 1000;

			if (this.until.substring(0, 1) === '+') time = this.time;
			this.time--;

			time = Math.max(time, 0);

			this.days = Math.floor(time / (3600 * 24));
			this.hours = Math.floor((time % (3600 * 24)) / 3600);
			this.minutes = Math.floor((time % 3600) / 60);
			this.seconds = Math.floor(time % 60);
		}
	}
};
</script>
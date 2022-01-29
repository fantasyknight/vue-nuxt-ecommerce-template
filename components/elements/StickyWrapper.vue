<template>
	<div
		class="sticky-wrapper"
		ref="stickyRef"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		direction: {
			type: String,
			default: 'normal'
		},
		type: {
			type: String,
			default: 'desktop'
		},
		breakpoint: {
			type: Number,
			default: 992
		},
		stickyClass: {
			type: String,
			default: 'sticky-header'
		},
		offsetTop: {
			type: Number,
			default: 300
		},
		top: {
			type: Number,
			defualt: 0
		}
	},
	data: function () {
		return {
			isSticky: false,
			stickyContent: null,
			stickyHeight: 0,
			prevPos: 0,
			scrollDir: 'down',
			terminal: this.offsetTop
		};
	},
	mounted: function () {
		this.stickyWrapperHandler();

		if ( this.stickyClass === 'sticky-header' && this.terminal === 300 && document.querySelector( 'main' ) ) {
			this.terminal = document.querySelector( 'main' ).offsetTop;
		}
		window.addEventListener( 'scroll', this.stickyWrapperHandler, true );
		window.addEventListener( 'resize', this.stickyWrapperHandler, true );
	},
	destroyed: function () {
		window.removeEventListener( 'scroll', this.stickyWrapperHandler, true );
		window.removeEventListener( 'resize', this.stickyWrapperHandler, true );
	},
	methods: {
		toggleStickyContent: function ( state = true ) {
			if ( state ) {
				this.isSticky = true;
				this.stickyContent.classList.add( 'fixed' );
				this.$refs.stickyRef.setAttribute( 'style', 'height: ' + this.stickyHeight + 'px' );
				this.$refs.stickyRef.querySelector( '.' + this.stickyClass ).style.top = this.top + 'px';
			} else {
				this.isSticky = false;
				this.stickyContent.classList.remove( 'fixed' );
				this.$refs.stickyRef.removeAttribute( 'style' );
			}
		},
		stickyWrapperHandler: function () {
			this.stickyContent = this.$refs.stickyRef.querySelector( '.' + this.stickyClass );
			this.stickyHeight = this.stickyContent && this.$refs.stickyRef.querySelector( '.' + this.stickyClass ).offsetHeight;
			this.scrollDir = window.pageYOffset - this.prevPos > 0 ? 'down' : 'up';

			if ( this.type === 'desktop' ) {
				if ( window.pageYOffset > this.terminal && window.innerWidth >= this.breakpoint ) {
					if ( !this.isSticky ) this.toggleStickyContent( true );

					if ( this.direction === 'normal' || this.scrollDir === this.direction )
						this.stickyContent.classList.add( 'fixed' );
					else this.stickyContent.classList.remove( 'fixed' );
				} else {
					this.toggleStickyContent( false );
				}
			}

			if ( this.type === 'mobile' ) {
				if ( window.pageYOffset > this.terminal && window.innerWidth < this.breakpoint ) {
					if ( !this.isSticky ) this.toggleStickyContent( true );
					if ( this.direction === 'normal' || this.scrollDir === this.direction )
						this.stickyContent.classList.add( 'fixed' );
					else this.stickyContent.classList.remove( 'fixed' );
				} else {
					this.toggleStickyContent( false );
				}
			}

			this.prevPos = window.pageYOffset;
		}
	}
};
</script>
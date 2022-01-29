<template>
	<main class="main">
		<div class="page-content">
			<section class="coming-section container text-center text-grey font-primary">
				<div class="row align-items-center pt-10 pb-10">
					<div class="col-md-6">
						<img
							v-lazy="`images/subpages/coming-soon.jpg`"
							alt="coming soon"
							width="519"
							height="568"
							style="background-color: #fff"
						/>
					</div>
					<div class="col-md-6 order-md-first">
						<h1 class="mb-9 ls-m lh-1 font-italic text-uppercase">Coming Soon</h1>

						<count-down
							class="countdown-coming mb-7"
							until='2021-12-31'
						></count-down>

						<hr class="mb-6 ml-8 mr-8" />
						<p>We are currently working on an awesome new site. Stay tuned for more information.
							Subscribe to our newsletter to stay updated on our progress.</p>
						<form
							action="#"
							class="ml-lg-8 mr-lg-8 mb-8"
						>
							<input
								type="email"
								class="form-control font-primary text-grey"
								name="email"
								id="email"
								placeholder="Enter Your Email Address"
								required
							/>
							<button
								class="btn btn-primary btn-link btn-icon-right"
								type="submit"
							>subscribe</button>
						</form>
						<div class="social-links">
							<a
								href="javascript:;"
								class="social-link social-facebook fab fa-facebook-f"
							></a>
							<a
								href="javascript:;"
								class="social-link social-twitter fab fa-twitter"
							></a>
							<a
								href="javascript:;"
								class="social-link social-instagram fab fa-instagram"
							></a>
							<a
								href="javascript:;"
								class="social-link social-pinterest fab fa-pinterest-p"
							></a>
							<a
								href="javascript:;"
								class="social-link social-email far fa-envelope"
							></a>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import CountDown from '~/components/elements/CountDown';

export default {
	layout: 'layout-blank',
	components: {
		CountDown
	},
	created: function () {
		document.querySelector( 'body' ).classList.contains( 'mmenu-active' ) &&
			document.querySelector( 'body' ).classList.remove( 'mmenu-active' )

	}
};
</script>
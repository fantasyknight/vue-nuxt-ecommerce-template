<template>
	<div class="login-popup">
		<div class="form-box">
			<div class="tab tab-nav-simple tab-nav-boxed form-tab">
				<element-tabs>
					<ul
						class="nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5"
						role="tablist"
					>
						<li class="nav-item">
							<a
								class="nav-link border-no lh-1 ls-normal"
								:class="{active: activeIndex === 1}"
								href="#signin"
							>Login</a>
						</li>
						<li class="delimiter">or</li>
						<li class="nav-item">
							<a
								class="nav-link border-no lh-1 ls-normal"
								href="#register"
								:class="{active: activeIndex === 2}"
							>Register</a>
						</li>
					</ul>
				</element-tabs>

				<div class="tab-content">
					<div
						class="tab-pane"
						id="signin"
						:class="{active: activeIndex === 1}"
					>
						<form action="#">
							<div class="form-group mb-3">
								<input
									type="text"
									class="form-control"
									id="singin-email"
									name="singin-email"
									placeholder="Username or Email Address *"
									required
								/>
							</div>
							<div class="form-group">
								<input
									type="password"
									class="form-control"
									id="singin-password"
									name="singin-password"
									placeholder="Password *"
									required
								/>
							</div>
							<div class="form-footer">
								<div class="form-checkbox">
									<input
										type="checkbox"
										class="custom-checkbox"
										id="signin-remember-1"
										name="signin-remember"
									/>
									<label
										class="form-control-label"
										for="signin-remember-1"
									>Remember
										me</label>
								</div>
								<a
									href="javascript:;"
									class="lost-link"
								>Lost your password?</a>
							</div>
							<button
								class="btn btn-dark btn-block btn-rounded"
								type="submit"
							>Login</button>
						</form>
						<div class="form-choice text-center">
							<label class="ls-m">or Login With</label>
							<div class="social-links">
								<a
									href="javascript:;"
									class="social-link social-google fab fa-google border-no"
								></a>
								<a
									href="javascript:;"
									class="social-link social-facebook fab fa-facebook-f border-no"
								></a>
								<a
									href="javascript:;"
									class="social-link social-twitter fab fa-twitter border-no"
								></a>
							</div>
						</div>
					</div>
					<div
						class="tab-pane"
						id="register"
						:class="{active: activeIndex === 2}"
					>
						<form action="#">
							<div class="form-group mb-3">
								<input
									type="email"
									class="form-control"
									id="register-email"
									name="register-email"
									placeholder="Your Email Address *"
									required
								/>
							</div>
							<div class="form-group">
								<input
									type="password"
									class="form-control"
									id="register-password"
									name="register-password"
									placeholder="Password *"
									required
								/>
							</div>
							<div class="form-footer">
								<div class="form-checkbox">
									<input
										type="checkbox"
										class="custom-checkbox"
										id="register-agree"
										name="register-agree"
										required
									/>
									<label
										class="form-control-label"
										for="register-agree"
									>I agree to the
										privacy policy</label>
								</div>
							</div>
							<button
								class="btn btn-dark btn-block btn-rounded"
								type="submit"
							>Register</button>
						</form>
						<div class="form-choice text-center">
							<label class="ls-m">or Register With</label>
							<div class="social-links">
								<a
									href="javascript:;"
									class="social-link social-google fab fa-google border-no"
								></a>
								<a
									href="javascript:;"
									class="social-link social-facebook fab fa-facebook-f border-no"
								></a>
								<a
									href="javascript:;"
									class="social-link social-twitter fab fa-twitter border-no"
								></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<button
			title="Close (Esc)"
			type="button"
			class="modal-close"
			@click="closeModal($event)"
		><span>×</span></button>
	</div>
</template>

<script>
import ElementTabs from '~/components/elements/ElementTabs';

export default {
	components: {
		ElementTabs
	},
	props: {
		activeIndex: {
			type: Number,
			default: 1
		}
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
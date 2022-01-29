<template>
	<div class="d-lg-flex d-none">
		<a
			class="login-link"
			href="javascript:;"
			@click="openLoginModal(1)"
		><i class="d-icon-user"></i>Sign in</a>
		<span class="delimiter">/</span>
		<a
			class="register-link ml-0"
			href="javascript:;"
			@click="openLoginModal(2)"
		>Register</a>
	</div>
</template>

<script>
export default {
	methods: {
		openLoginModal: function(index = 1) {
			this.$modal.show(
				() => import('~/components/elements/modal/LoginModal'),
				{ activeIndex: index },
				{ width: '490', height: 'auto', adaptive: true }
			);
		}
	}
};
</script>
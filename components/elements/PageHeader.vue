<template>
	<div
		class="page-header"
		:style="{ 'background-image': 'url(./images/page-header-back.jpg)', 'background-color': '#3C63A4'}"
	>
		<h3 class="page-subtitle">{{ subTitle }}</h3>
		<h1 class="page-title">{{ title }}</h1>
		<ul class="breadcrumb">
			<li>
				<nuxt-link
					to="/"
					title="link to home"
				><i class="d-icon-home"></i></nuxt-link>
			</li>
			<li class="delimiter">/</li>
			<li v-if="parentUrl">
				<nuxt-link :to="parentUrl">{{ subTitle }} </nuxt-link>
			</li>
			<li class="delimiter">/</li>
			<li>{{ title }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		subTitle: String,
		parentUrl: String
	}
};
</script>